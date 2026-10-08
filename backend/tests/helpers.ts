import { createDatabase, migrate } from "../src/db/database";
import { LedgerService } from "../src/services/ledger.service";
import { PlayerService } from "../src/services/player.service";
import { AuthService } from "../src/services/auth.service";
import { createApp } from "../src/api/app";
import type { Background, Player } from "../src/types";

export interface Services {
  db: ReturnType<typeof createDatabase>;
  ledger: LedgerService;
  players: PlayerService;
  auth: AuthService;
}

/** A fresh in-memory database + all services. Isolated per call. */
export function makeServices(): Services {
  const db = createDatabase(":memory:");
  migrate(db);
  const ledger = new LedgerService(db);
  const players = new PlayerService(db);
  const auth = new AuthService(db, players, ledger);
  return { db, ledger, players, auth };
}

/** An Express app wired to a fresh in-memory database (for HTTP tests). */
export function makeApp() {
  const db = createDatabase(":memory:");
  migrate(db);
  const { app, services } = createApp(db);
  return { app, db, ...services };
}

/** Create a player directly (bypassing auth) with a starting-balance faucet. */
export function seedPlayer(
  s: Services,
  name: string,
  background: Background = "lapo",
  startNaira = 1000,
): Player {
  const acc = s.db.prepare(`INSERT INTO accounts DEFAULT VALUES`).run();
  const accountId = Number(acc.lastInsertRowid);
  s.db
    .prepare(`INSERT INTO credentials (account_id, email, password_hash) VALUES (?, ?, ?)`)
    .run(accountId, `${name}@test.io`, "hash");
  const p = s.players.create(accountId, name, background);
  if (startNaira > 0) {
    s.ledger.faucet(p.id, Math.round(startNaira * 100), "test_start");
  }
  return s.players.getById(p.id)!;
}

/** Total cash held by all players (to prove the tax sink drains money). */
export function totalPlayerCash(s: Services): number {
  const row = s.db.prepare(`SELECT COALESCE(SUM(cash), 0) AS t FROM players`).get() as { t: number };
  return Number(row.t);
}

/** Count ledger entries. */
export function ledgerCount(s: Services): number {
  const row = s.db.prepare(`SELECT COUNT(*) AS c FROM ledger_entries`).get() as { c: number };
  return Number(row.c);
}
