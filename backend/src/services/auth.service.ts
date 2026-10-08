import type { DatabaseSync } from "node:sqlite";
import type { Background, Player } from "../types.js";
import { ApiError } from "../lib/errors.js";
import { hashPassword, comparePassword } from "../lib/password.js";
import { signToken } from "../lib/jwt.js";
import type { JWTPayload } from "../types.js";
import type { PlayerService } from "./player.service.js";
import type { LedgerService } from "./ledger.service.js";
import { nairaToKobo } from "../lib/money.js";

type Row = Record<string, unknown>;
function num(v: unknown): number {
  return Number(v);
}

/** Starting balances by background (in Naira, converted to kobo). */
const STARTING_BALANCE_NAIRA: Record<Background, number> = {
  nepo: 50_000, // privileged start: starting capital
  lapo: 500, // hustle from near-zero (a small relief stipend)
};

/**
 * Authentication & account creation.
 *
 * register() creates account + credentials + player + a starting-balance
 * faucet entry, ALL in one transaction. The starting balance is recorded as a
 * ledger entry, so the ledger remains the single source of truth for money.
 */
export class AuthService {
  constructor(
    private readonly db: DatabaseSync,
    private readonly players: PlayerService,
    private readonly ledger: LedgerService,
  ) {}

  async register(input: { email: string; password: string; name: string; background: Background }): Promise<{ token: string; player: Player }> {
    const email = input.email.trim().toLowerCase();
    const name = input.name.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new ApiError(400, "Invalid email");
    if (input.password.length < 8) throw new ApiError(400, "Password must be at least 8 characters");
    if (name.length < 2 || name.length > 32) throw new ApiError(400, "Name must be 2–32 characters");
    if (input.background !== "nepo" && input.background !== "lapo") {
      throw new ApiError(400, "Background must be 'nepo' or 'lapo'");
    }

    // Hash outside the transaction (it is deliberately slow).
    const passwordHash = await hashPassword(input.password);

    this.db.exec("BEGIN IMMEDIATE");
    try {
      const acc = this.db.prepare(`INSERT INTO accounts DEFAULT VALUES`).run();
      const accountId = Number(acc.lastInsertRowid);

      try {
        this.db
          .prepare(`INSERT INTO credentials (account_id, email, password_hash) VALUES (?, ?, ?)`)
          .run(accountId, email, passwordHash);
      } catch (err) {
        if (err instanceof Error && /UNIQUE/.test(err.message)) {
          throw new ApiError(409, "An account with that email already exists");
        }
        throw err;
      }

      const player = this.players.create(accountId, name, input.background);
      const startKobo = nairaToKobo(STARTING_BALANCE_NAIRA[input.background]);
      // faucetRaw: we are already inside this transaction (no nested BEGIN).
      this.ledger.faucetRaw(player.id, startKobo, `starting_balance_${input.background}`, { background: input.background });

      const fresh = this.players.getById(player.id)!;
      this.db.exec("COMMIT");
      const token = signToken({ sub: accountId, playerId: fresh.id, email });
      return { token, player: fresh };
    } catch (err) {
      this.db.exec("ROLLBACK");
      throw err;
    }
  }

  async login(input: { email: string; password: string }): Promise<{ token: string; player: Player }> {
    const email = input.email.trim().toLowerCase();
    const row = this.db
      .prepare(
        `SELECT c.password_hash, c.account_id, p.*
         FROM credentials c JOIN players p ON p.account_id = c.account_id
         WHERE c.email = ?`,
      )
      .get(email) as Row | undefined;
    if (!row) throw new ApiError(401, "Invalid email or password");
    const ok = await comparePassword(input.password, String(row.password_hash));
    if (!ok) throw new ApiError(401, "Invalid email or password");
    const player: Player = {
      id: num(row.id),
      accountId: num(row.account_id),
      name: String(row.name),
      background: row.background as Background,
      cash: num(row.cash),
      bank: num(row.bank),
      createdAt: String(row.created_at),
    };
    const token = signToken({ sub: player.accountId, playerId: player.id, email });
    return { token, player };
  }

  /** Resolve the player for a verified JWT payload. */
  getPlayerForPayload(payload: JWTPayload): Player {
    const p = this.players.getById(payload.playerId);
    if (!p) throw new ApiError(401, "Player no longer exists");
    return p;
  }
}
