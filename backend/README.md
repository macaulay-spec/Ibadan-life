# IBADAN LIFE — Backend

The **server-authoritative backend** for IBADAN LIFE. This is the single source of
truth for **accounts, money, and persistence**. The game client (Unreal) and the
dedicated game servers both talk to this. The client is never trusted with money.

> **Your city. Your hustle. Your story.**

## Stack

- **Node.js 22 + TypeScript + Express** (REST API)
- **SQLite** via Node's built-in `node:sqlite` (dev/test) → **PostgreSQL** in production
- **JWT** auth + **bcrypt** password hashing
- **Vitest** tests + **GitHub Actions** CI

## The economy ledger (the anti-cheat core)

`src/services/ledger.service.ts` is an **append-only, double-entry** ledger:

- Entries are **inserted, never updated or deleted**.
- Each entry moves `amount` (integer **kobo**; 1 Naira = 100 kobo) from
  `(from_player, from_wallet)` to `(to_player, to_wallet)`. `NULL` player = the system.
- Every mutation updates the ledger **and** the cached balances in **one transaction**.
- `verifyIntegrity()` recomputes every balance from the ledger and proves it matches.
- The **2.5% municipal tax** on P2P transfers is a real currency **sink**.

This makes money duplication impossible by construction. See
`../IBADAN_LIFE_DOCS/04_SYSTEMS/Economy/` for the design.

## Run it

```bash
cd backend
npm install
npm run migrate      # create the database (SQLite file by default)
npm run dev          # start with hot reload (http://localhost:3000)
```

Production:

```bash
npm run build
npm start
```

Config via environment variables — see `.env.example`.

## Test it

```bash
npm test             # vitest — 32 tests: ledger, auth, HTTP API
npm run typecheck    # tsc --noEmit
```

## API (Naira at the boundary; kobo internally)

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| GET | `/api/health` | — | health |
| POST | `/api/auth/register` | — | create account + player (Nepo/Lapo) |
| POST | `/api/auth/login` | — | login → JWT |
| GET | `/api/auth/me` | JWT | current player |
| GET | `/api/players/:id` | — | public profile |
| GET | `/api/economy/balance` | JWT | cash / bank / total |
| GET | `/api/economy/ledger` | JWT | ledger history |
| POST | `/api/economy/transfer` | JWT | P2P transfer (+2.5% tax) |
| POST | `/api/economy/deposit` | JWT | cash → bank |
| POST | `/api/economy/withdraw` | JWT | bank → cash |
| POST | `/api/economy/faucet` | admin | system → player (wages, relief) |
| POST | `/api/economy/sink` | admin | player → system (rent, utilities) |
| GET | `/api/economy/verify` | admin | ledger integrity check |

## Project layout

```
backend/
  src/
    config.ts            env config
    index.ts             server entry
    db/                  database.ts (driver), migrate.ts, schema.sql
    lib/                 logger, errors, money (kobo), password (bcrypt), jwt
    services/            ledger (append-only), auth, player
    api/                 middleware, routes, serializers, app
  tests/                 ledger, auth, economy HTTP API (vitest)
```
