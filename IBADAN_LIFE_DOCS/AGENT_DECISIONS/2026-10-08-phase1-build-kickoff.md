# Agent Decision Log — 2026-10-08 — Phase 1 Build Kickoff (Backend + UE5 scaffold + CI)

**Date:** 2026-10-08  
**Agent / Role:** AI Agent (Technical Architecture + Backend), under Project Lead instruction  
**Status:** Completed & verified  

---

## Context

Phase 0 (documentation takeover) is complete and merged-ready. The Project Lead asked:
*"Can we start the project now? How much can you build? Where do we actually start?"*

Decision: **begin Phase 1 (Core Engine & Network)** by building the layer that is
fully buildable and testable in this environment — the **server-authoritative
backend (the money truth)** — plus the **UE5 client scaffold**, **CI**, and **infra**.

## Honest capability assessment (recorded)

- **Fully built & tested here:** backend services, append-only economy ledger,
  database, REST API, JWT auth, bcrypt, 32 passing tests, CI, infra manifests.
- **Written, not compiled here:** all UE5 client C++ source (no UE5 editor in this
  sandbox — a human compiles/cooks it on a machine with the engine).
- **Needs humans/hardware:** UE5 compile/cook → .apk, Android device testing,
  production art/audio, live server fleet at scale.

## Source of Truth loaded and respected

- PROJECT_CHARTER, PRODUCT_VISION, DESIGN_PILLARS, NON_GOALS, SOURCE_OF_TRUTH
- BRAND_AND_TONE_OF_VOICE, ECONOMY_MASTER_SPEC, CURRENCY_AND_BANKING,
  SECURITY_ARCHITECTURE, DATABASE_AND_DATA_MODEL, NETWORK_ARCHITECTURE,
  SERVER_AUTHORITY_AND_REPLICATION, SYSTEM_ARCHITECTURE
- ADR-0002 (rebrand), ADR-0003 (stack), ADR-0004 (repo structure)

## Decisions made

1. **Stack fixed (ADR-0003):** UE5.4 client; Node 22 + TypeScript + Express backend;
   SQLite (dev/test, via `node:sqlite`) → PostgreSQL (production); JWT + bcrypt;
   Vitest; GitHub Actions; Docker + Kubernetes.
2. **Backend is the money truth.** Append-only, double-entry ledger in integer
   **kobo** (1 Naira = 100 kobo). No floats for money. Every mutation is atomic
   (ledger + cached balances in one transaction). `verifyIntegrity()` proves
   cached balances equal the ledger sum.
3. **2.5% municipal tax on P2P transfers** is a real currency sink (sender pays
   amount + tax; recipient gets amount; system gets tax).
4. **Auth:** register creates account + credentials (bcrypt) + player (Nepo ₦50,000
   / Lapo ₦500 starting stipend) + a starting-balance **faucet** ledger entry, all
   in one transaction. JWT for sessions.
5. **UE5 client scaffold** written (GameMode, PlayerState, Character w/ modular
   avatar + GAS, six-need AttributeSet, Economy HTTP component) — genuine source,
   ready for a human to compile in the editor.
6. **CI:** `backend-ci.yml` (typecheck + 32 tests + build) and `docs-ci.yml`
   (no stubs, North Star lines, core docs present). UE5 build CI documented as
   needing a self-hosted runner (not added as a hosted job).
7. **Infra:** backend `Dockerfile`, local `docker-compose.yml` (backend + Postgres),
   Kubernetes deployment + service manifest.
8. **Docs:** added `REPOSITORY_STRUCTURE.md`, root `README.md`, `backend/README.md`,
   `client/README.md`, `infra/README.md`; registered structure doc in the master index.

## Verification (all green)

- `tsc --noEmit` — **PASS**
- `vitest run` — **32/32 tests PASS** (ledger anti-cheat, auth, HTTP API)
- Live server smoke test — health, register (Lapo ₦500), balance, integrity `ok`

## Key anti-cheat properties proven by tests

- No money duplication: balance always equals the ledger sum (`verifyIntegrity().ok`).
- Transfers are **atomic** (a failed transfer writes zero entries).
- The 2.5% tax is a real sink (total player cash drops by exactly the tax).
- Insufficient funds rejected (amount + tax), self-transfers rejected.
- Passwords stored hashed (bcrypt), never plaintext.

## Open questions / hand-off

- PostgreSQL driver swap for production (schema is portable; driver is a config change).
- UE5 client compile/cook on a human machine with the engine; then device testing.
- Dedicated game-server fleet deployment (Linux containers on K8s) — Phase 1 continues.

---

*Logged per AI_CHANGE_CONTROL.md.*
