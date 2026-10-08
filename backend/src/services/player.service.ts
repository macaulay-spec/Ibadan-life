import type { DatabaseSync } from "node:sqlite";
import type { Background, Player } from "../types.js";
import { ApiError } from "../lib/errors.js";

type Row = Record<string, unknown>;
function num(v: unknown): number {
  return Number(v);
}
function mapPlayer(row: Row): Player {
  return {
    id: num(row.id),
    accountId: num(row.account_id),
    name: String(row.name),
    background: row.background as Background,
    cash: num(row.cash),
    bank: num(row.bank),
    createdAt: String(row.created_at),
  };
}

/** Player profile persistence. Money lives in the LedgerService, not here. */
export class PlayerService {
  constructor(private readonly db: DatabaseSync) {}

  create(accountId: number, name: string, background: Background): Player {
    try {
      const res = this.db
        .prepare(`INSERT INTO players (account_id, name, background) VALUES (?, ?, ?)`)
        .run(accountId, name, background);
      return this.getById(Number(res.lastInsertRowid))!;
    } catch (err) {
      if (err instanceof Error && /UNIQUE/.test(err.message)) {
        throw new ApiError(409, "A player with that name already exists");
      }
      throw err;
    }
  }

  getById(id: number): Player | null {
    const row = this.db.prepare(`SELECT * FROM players WHERE id = ?`).get(id) as Row | undefined;
    return row ? mapPlayer(row) : null;
  }

  getByAccountId(accountId: number): Player | null {
    const row = this.db.prepare(`SELECT * FROM players WHERE account_id = ?`).get(accountId) as Row | undefined;
    return row ? mapPlayer(row) : null;
  }

  /** Public, safe-to-show profile (no account internals). */
  getPublicProfile(id: number): { id: number; name: string; background: Background; createdAt: string } | null {
    const p = this.getById(id);
    if (!p) return null;
    return { id: p.id, name: p.name, background: p.background, createdAt: p.createdAt };
  }
}
