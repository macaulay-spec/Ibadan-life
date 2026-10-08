import type { DatabaseSync } from "node:sqlite";
import type { Balance, LedgerEntry, LedgerKind, Player, Wallet } from "../types.js";
import { ApiError } from "../lib/errors.js";
import { transferTaxKobo } from "../lib/money.js";

/**
 * THE ECONOMY LEDGER — the single source of truth for all money in IBADAN LIFE.
 *
 * Design rules (these make the economy exploit-proof):
 *  1. APPEND-ONLY. Entries are inserted, never updated or deleted.
 *  2. DOUBLE-ENTRY. Each row moves `amount` (kobo) from (from_player, from_wallet)
 *     to (to_player, to_wallet). NULL player = the system (faucet in / sink out).
 *  3. ATOMIC. Every mutation updates the ledger AND the cached player balances
 *     inside ONE SQLite transaction. Money cannot vanish or duplicate.
 *  4. DERIVED TRUTH. A player's cash/bank can always be recomputed from the
 *     ledger. `verifyIntegrity()` proves the cached balances match the ledger.
 *  5. NO NEGATIVES. Balances are CHECK-constrained >= 0 at the DB level too.
 *
 * Money is integer KOBO everywhere (1 Naira = 100 kobo). Never floats.
 */

type Row = Record<string, unknown>;

function num(v: unknown): number {
  return Number(v);
}
function mapPlayer(row: Row): Player {
  return {
    id: num(row.id),
    accountId: num(row.account_id),
    name: String(row.name),
    background: row.background as Player["background"],
    cash: num(row.cash),
    bank: num(row.bank),
    createdAt: String(row.created_at),
  };
}
function mapEntry(row: Row): LedgerEntry {
  return {
    id: num(row.id),
    kind: row.kind as LedgerKind,
    amount: num(row.amount),
    fromPlayerId: row.from_player_id === null ? null : num(row.from_player_id),
    fromWallet: (row.from_wallet as Wallet | null) ?? null,
    toPlayerId: row.to_player_id === null ? null : num(row.to_player_id),
    toWallet: (row.to_wallet as Wallet | null) ?? null,
    reason: String(row.reason),
    metadata: row.metadata === null ? null : String(row.metadata),
    createdAt: String(row.created_at),
  };
}

export class LedgerService {
  constructor(private readonly db: DatabaseSync) {}

  // -- internal helpers -----------------------------------------------------

  private withTransaction<T>(fn: () => T): T {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const result = fn();
      this.db.exec("COMMIT");
      return result;
    } catch (err) {
      this.db.exec("ROLLBACK");
      throw err;
    }
  }

  private insertEntry(
    kind: LedgerKind,
    amount: number,
    fromPlayerId: number | null,
    fromWallet: Wallet | null,
    toPlayerId: number | null,
    toWallet: Wallet | null,
    reason: string,
    metadata?: Record<string, unknown>,
  ): number {
    const stmt = this.db.prepare(
      `INSERT INTO ledger_entries
         (kind, amount, from_player_id, from_wallet, to_player_id, to_wallet, reason, metadata)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    );
    const res = stmt.run(
      kind,
      amount,
      fromPlayerId,
      fromWallet,
      toPlayerId,
      toWallet,
      reason,
      metadata ? JSON.stringify(metadata) : null,
    );
    return Number(res.lastInsertRowid);
  }

  getPlayerById(id: number): Player | null {
    const row = this.db.prepare(`SELECT * FROM players WHERE id = ?`).get(id) as Row | undefined;
    return row ? mapPlayer(row) : null;
  }

  private adjustCash(playerId: number, deltaKobo: number): void {
    this.db.prepare(`UPDATE players SET cash = cash + ? WHERE id = ?`).run(deltaKobo, playerId);
  }
  private adjustBank(playerId: number, deltaKobo: number): void {
    this.db.prepare(`UPDATE players SET bank = bank + ? WHERE id = ?`).run(deltaKobo, playerId);
  }

  // -- reads ----------------------------------------------------------------

  getBalance(playerId: number): Balance {
    const p = this.getPlayerById(playerId);
    if (!p) throw new ApiError(404, "Player not found");
    return { cash: p.cash, bank: p.bank, total: p.cash + p.bank };
  }

  getLedger(playerId: number, limit = 50): LedgerEntry[] {
    const rows = this.db
      .prepare(
        `SELECT * FROM ledger_entries
         WHERE to_player_id = ? OR from_player_id = ?
         ORDER BY id DESC LIMIT ?`,
      )
      .all(playerId, playerId, limit) as Row[];
    return rows.map(mapEntry);
  }

  /**
   * Recompute every player's cash/bank from the ledger and compare to the
   * cached columns. Any mismatch means tampering or a bug — this must never
   * return mismatches in production.
   */
  verifyIntegrity(): { ok: boolean; mismatches: Array<{ playerId: number; cash: number; cashCalc: number; bank: number; bankCalc: number }> } {
    const rows = this.db
      .prepare(
        `SELECT p.id, p.cash, p.bank,
            (SELECT COALESCE(SUM(amount),0) FROM ledger_entries WHERE to_player_id = p.id AND to_wallet = 'cash')
          - (SELECT COALESCE(SUM(amount),0) FROM ledger_entries WHERE from_player_id = p.id AND from_wallet = 'cash') AS cash_calc,
            (SELECT COALESCE(SUM(amount),0) FROM ledger_entries WHERE to_player_id = p.id AND to_wallet = 'bank')
          - (SELECT COALESCE(SUM(amount),0) FROM ledger_entries WHERE from_player_id = p.id AND from_wallet = 'bank') AS bank_calc
         FROM players p`,
      )
      .all() as Row[];

    const mismatches: Array<{ playerId: number; cash: number; cashCalc: number; bank: number; bankCalc: number }> = [];
    for (const r of rows) {
      const cash = num(r.cash);
      const bank = num(r.bank);
      const cashCalc = num(r.cash_calc);
      const bankCalc = num(r.bank_calc);
      if (cash !== cashCalc || bank !== bankCalc) {
        mismatches.push({ playerId: num(r.id), cash, cashCalc, bank, bankCalc });
      }
    }
    return { ok: mismatches.length === 0, mismatches };
  }

  // -- mutations (all atomic, all append to the ledger) ---------------------

  /** System -> player.cash. Used for wages, relief stipends, starting balances. */
  faucet(toPlayerId: number, amountKobo: number, reason: string, metadata?: Record<string, unknown>): LedgerEntry {
    return this.withTransaction(() => this.faucetRaw(toPlayerId, amountKobo, reason, metadata));
  }

  /**
   * Faucet WITHOUT opening a transaction. Use only when already inside an
   * external transaction (e.g. account registration). Otherwise use `faucet`.
   */
  faucetRaw(toPlayerId: number, amountKobo: number, reason: string, metadata?: Record<string, unknown>): LedgerEntry {
    if (amountKobo <= 0) throw new ApiError(400, "Amount must be positive");
    const p = this.getPlayerById(toPlayerId);
    if (!p) throw new ApiError(404, "Player not found");
    const id = this.insertEntry("faucet", amountKobo, null, null, toPlayerId, "cash", reason, metadata);
    this.adjustCash(toPlayerId, amountKobo);
    return this.getEntry(id);
  }

  /** player.cash -> system. Used for rent, utilities, fines, fuel, marketplace fees. */
  sink(fromPlayerId: number, amountKobo: number, reason: string, wallet: Wallet = "cash", metadata?: Record<string, unknown>): LedgerEntry {
    if (amountKobo <= 0) throw new ApiError(400, "Amount must be positive");
    return this.withTransaction(() => {
      const p = this.getPlayerById(fromPlayerId);
      if (!p) throw new ApiError(404, "Player not found");
      if (wallet === "cash" && p.cash < amountKobo) throw new ApiError(400, "Insufficient cash");
      if (wallet === "bank" && p.bank < amountKobo) throw new ApiError(400, "Insufficient bank balance");
      const id = this.insertEntry("sink", amountKobo, fromPlayerId, wallet, null, null, reason, metadata);
      if (wallet === "cash") this.adjustCash(fromPlayerId, -amountKobo);
      else this.adjustBank(fromPlayerId, -amountKobo);
      return this.getEntry(id);
    });
  }

  /**
   * Player -> player cash transfer, with the 2.5% municipal tax (a sink).
   * Sender pays amount + tax; recipient receives amount; system receives tax.
   * Atomic: principal + tax + balance updates commit together or not at all.
   */
  transfer(fromPlayerId: number, toPlayerId: number, amountKobo: number, metadata?: Record<string, unknown>): { entry: LedgerEntry; taxEntry: LedgerEntry; tax: number; total: number } {
    if (fromPlayerId === toPlayerId) throw new ApiError(400, "Cannot transfer to yourself");
    if (amountKobo <= 0) throw new ApiError(400, "Amount must be positive");
    const tax = transferTaxKobo(amountKobo);
    const total = amountKobo + tax;
    return this.withTransaction(() => {
      const from = this.getPlayerById(fromPlayerId);
      if (!from) throw new ApiError(404, "Sender not found");
      const to = this.getPlayerById(toPlayerId);
      if (!to) throw new ApiError(404, "Recipient not found");
      if (from.cash < total) throw new ApiError(400, "Insufficient cash for amount + tax");

      const entryId = this.insertEntry("transfer", amountKobo, fromPlayerId, "cash", toPlayerId, "cash", "p2p_transfer", metadata);
      this.adjustCash(fromPlayerId, -amountKobo);
      this.adjustCash(toPlayerId, amountKobo);

      const taxId = this.insertEntry("tax", tax, fromPlayerId, "cash", null, null, "municipal_transfer_tax", { transferEntryId: entryId });
      this.adjustCash(fromPlayerId, -tax);

      return { entry: this.getEntry(entryId), taxEntry: this.getEntry(taxId), tax, total };
    });
  }

  /** Move cash -> bank (internal, untaxed). */
  deposit(playerId: number, amountKobo: number, reason = "deposit"): LedgerEntry {
    if (amountKobo <= 0) throw new ApiError(400, "Amount must be positive");
    return this.withTransaction(() => {
      const p = this.getPlayerById(playerId);
      if (!p) throw new ApiError(404, "Player not found");
      if (p.cash < amountKobo) throw new ApiError(400, "Insufficient cash to deposit");
      const id = this.insertEntry("wallet_move", amountKobo, playerId, "cash", playerId, "bank", reason);
      this.adjustCash(playerId, -amountKobo);
      this.adjustBank(playerId, amountKobo);
      return this.getEntry(id);
    });
  }

  /** Move bank -> cash (internal, untaxed). */
  withdraw(playerId: number, amountKobo: number, reason = "withdraw"): LedgerEntry {
    if (amountKobo <= 0) throw new ApiError(400, "Amount must be positive");
    return this.withTransaction(() => {
      const p = this.getPlayerById(playerId);
      if (!p) throw new ApiError(404, "Player not found");
      if (p.bank < amountKobo) throw new ApiError(400, "Insufficient bank balance to withdraw");
      const id = this.insertEntry("wallet_move", amountKobo, playerId, "bank", playerId, "cash", reason);
      this.adjustBank(playerId, -amountKobo);
      this.adjustCash(playerId, amountKobo);
      return this.getEntry(id);
    });
  }

  private getEntry(id: number): LedgerEntry {
    const row = this.db.prepare(`SELECT * FROM ledger_entries WHERE id = ?`).get(id) as Row | undefined;
    if (!row) throw new ApiError(500, "Ledger entry not found after insert");
    return mapEntry(row);
  }
}
