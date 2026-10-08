-- ============================================================================
-- IBADAN LIFE — database schema
-- Standard SQL. Runs on SQLite (dev/test, via node:sqlite) and PostgreSQL
-- (production). The economy ledger is APPEND-ONLY: rows are INSERTed, never
-- UPDATEd or DELETEd. The ledger is the single source of truth for all money.
-- ============================================================================

PRAGMA foreign_keys = ON;

-- ---------------------------------------------------------------------------
-- Identity
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS accounts (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at  TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS credentials (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  account_id    INTEGER NOT NULL UNIQUE REFERENCES accounts(id) ON DELETE CASCADE,
  email         TEXT    NOT NULL UNIQUE,
  password_hash TEXT    NOT NULL,
  created_at    TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

-- ---------------------------------------------------------------------------
-- Players (money in integer KOBO; 1 Naira = 100 kobo)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS players (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  account_id  INTEGER NOT NULL UNIQUE REFERENCES accounts(id) ON DELETE CASCADE,
  name        TEXT    NOT NULL UNIQUE,
  background  TEXT    NOT NULL CHECK (background IN ('nepo','lapo')),
  cash        INTEGER NOT NULL DEFAULT 0 CHECK (cash >= 0),
  bank        INTEGER NOT NULL DEFAULT 0 CHECK (bank >= 0),
  created_at  TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

-- ---------------------------------------------------------------------------
-- Economy ledger (APPEND-ONLY — never UPDATE or DELETE)
--
-- Double-entry semantics: each row moves `amount` (kobo) from
-- (from_player_id, from_wallet) to (to_player_id, to_wallet).
--   NULL player = the system (faucet = money enters; sink = money leaves).
--
-- kinds:
--   faucet      system -> player.cash   (wages, relief stipends, starting balance)
--   sink        player.cash -> system   (rent, utilities, fines, fuel)
--   transfer    player.cash -> player.cash (P2P; paired with a `tax` entry)
--   tax         player.cash -> system   (2.5% municipal tax on P2P transfers)
--   wallet_move player.cash <-> player.bank (deposit / withdraw; internal, untaxed)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS ledger_entries (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  kind           TEXT    NOT NULL CHECK (kind IN ('faucet','sink','transfer','tax','wallet_move')),
  amount         INTEGER NOT NULL CHECK (amount > 0),
  from_player_id INTEGER REFERENCES players(id),
  from_wallet    TEXT    CHECK (from_wallet IN ('cash','bank')),
  to_player_id   INTEGER REFERENCES players(id),
  to_wallet      TEXT    CHECK (to_wallet IN ('cash','bank')),
  reason         TEXT    NOT NULL,
  metadata       TEXT,
  created_at     TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE INDEX IF NOT EXISTS idx_ledger_to_player    ON ledger_entries(to_player_id, to_wallet);
CREATE INDEX IF NOT EXISTS idx_ledger_from_player  ON ledger_entries(from_player_id, from_wallet);
CREATE INDEX IF NOT EXISTS idx_ledger_created      ON ledger_entries(created_at);
CREATE INDEX IF NOT EXISTS idx_players_account     ON players(account_id);
