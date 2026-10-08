import { createRequire } from "node:module";
import { readFileSync, mkdirSync } from "node:fs";
import path from "node:path";

/**
 * `node:sqlite` is an experimental builtin that bundlers/test-runners do not
 * recognise, so we load it through `createRequire` with a NON-STATIC specifier.
 * That way Vite/Vitest never tries to resolve it as a file — Node loads it
 * natively at runtime. (Type-only imports of `node:sqlite` elsewhere are
 * erased at transform time and are safe.)
 */
const require = createRequire(import.meta.url);
const sqliteModuleName = "node:" + "sqlite";
const { DatabaseSync: SQLiteDatabase } = require(sqliteModuleName) as typeof import("node:sqlite");

export type DatabaseSync = InstanceType<typeof SQLiteDatabase>;

/**
 * Database connection.
 *
 * Dev/test: SQLite via Node's built-in `node:sqlite` (no server, real SQL, ACID).
 * Production: swap the driver to PostgreSQL (see config.dbDriver). The schema
 * is standard SQL and the ledger is append-only, so the data layer is portable.
 */
export function createDatabase(dbPath: string): DatabaseSync {
  if (dbPath !== ":memory:") {
    mkdirSync(path.dirname(path.resolve(dbPath)), { recursive: true });
  }
  const db = new SQLiteDatabase(dbPath);
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec("PRAGMA busy_timeout = 5000;");
  return db;
}

/** Apply the schema (idempotent). Call once at startup and in tests. */
export function migrate(db: DatabaseSync): void {
  const schemaUrl = new URL("./schema.sql", import.meta.url);
  const sql = readFileSync(schemaUrl, "utf8");
  db.exec(sql);
}
