# ADR-0003: Technology Stack

**Date:** 2026-10-08  
**Status:** Accepted  
**Deciders:** Technical Lead / Project Lead  
**Tier Impacted:** 3 (Technical Architecture)  

---

## Context

The documentation left the concrete technology choices open ("to be decided via ADR").
To start building Phase 1, we must fix the stack. The constraints:

- **Mobile-first** client on **mid-range Android**.
- **Server-authoritative** multiplayer — the client is never trusted with money/state.
- A **player-driven economy** that must be exploit-proof (no duplication, append-only truth).
- A team of **humans + AI agents** building together for years — clarity and testability matter.
- The backend must be **fully testable in CI** (no heavyweight engine needed).

## Decision

| Layer | Choice | Why |
|-------|--------|-----|
| **Game client** | **Unreal Engine 5.4** (C++, GAS, Iris, World Partition, Chaos) | The vision requires a persistent 3D multiplayer city on mobile; UE5 is the right tool. |
| **Backend** | **Node.js 22 + TypeScript + Express** (REST) | Fast to build, easy for agents + humans, fully testable in CI, huge ecosystem. |
| **Database (dev/test)** | **SQLite** via Node's built-in `node:sqlite` | No server needed; real SQL + ACID; perfect for tests and local dev. |
| **Database (production)** | **PostgreSQL** | Durable, transactional, scales; the schema is standard SQL and portable. |
| **Auth** | **JWT** (`jsonwebtoken`) + **bcrypt** (`bcryptjs`) | Secure tokens; hashed passwords; pure-JS (reliable builds). |
| **Money** | **Integer kobo** (1 Naira = 100 kobo), append-only ledger | No floats for money; duplication impossible by construction. |
| **Tests** | **Vitest** | Fast, native TS/ESM, great DX. |
| **CI/CD** | **GitHub Actions** | Backend + docs CI on hosted runners; UE5 build CI on a self-hosted runner (needs the engine). |
| **Containers / orchestration** | **Docker** + **Kubernetes** | Backend is containerised; game servers run as Linux containers on K8s. |
| **Voice (later)** | **EOS / Vivox** proximity voice | Proximity voice chat (Phase 4). |

## Consequences

**Positive:**
- The backend (the exploit-prone core: money, auth, persistence) is **fully built and tested in CI** today.
- One language family (TypeScript) across backend + tooling lowers the barrier for agents and humans.
- The schema is standard SQL — swapping SQLite → PostgreSQL is a config change, not a rewrite.

**Negative / trade-offs:**
- UE5 client compilation/cooking requires a human machine with the engine (not CI here).
- Node single-threaded — we scale horizontally (K8s replicas), which fits the stateless API + ledger design.

**Neutral:**
- The game server (authoritative simulation) is UE5 dedicated server; the backend is the durable truth + services.

## Alternatives Considered

- **Python backend** — viable, but Node/TS gives one language across tooling and stronger async I/O for a realtime game; rejected for consistency.
- **C++ / Go backend** — faster, but slower to iterate and harder for a mixed human+agent team; the ledger's correctness comes from design + tests, not raw speed. Rejected for velocity.
- **Peer-to-peer networking** — rejected (client-authority exploits; see NETWORK_ARCHITECTURE.md). Dedicated authoritative servers only.

## Related Documents

- SYSTEM_ARCHITECTURE.md, NETWORK_ARCHITECTURE.md, BACKEND_ARCHITECTURE.md
- DATABASE_AND_DATA_MODEL.md, ECONOMY_MASTER_SPEC.md, SECURITY_ARCHITECTURE.md
- backend/README.md, client/README.md, infra/README.md
