# ADR-0004: Repository Structure

**Date:** 2026-10-08  
**Status:** Accepted  
**Deciders:** Project Lead / Technical Lead  
**Tier Impacted:** 3 (Implementation & Process)  

---

## Context

The project began as documentation only. Now that we are building, the repository
needs a clear, stable structure that separates **design truth** (docs) from
**executable code** (client + backend + infra), and that both humans and AI
agents can navigate safely.

## Decision

The repository root is organised as follows:

```
Ibadan-life/
├── IBADAN_LIFE_DOCS/        # Design truth: the full documentation set (start: README.md)
│   ├── 00_MASTER/           #   Source of truth, brand, onboarding, takeover plan
│   ├── 01_PRODUCT/          #   Vision, pillars, goals, metrics (Tier 0)
│   ├── 02_DESIGN/           #   GDD, loops, journey (Tier 1)
│   ├── 03_WORLD/            #   World bible, districts, time
│   ├── 04_SYSTEMS/          #   All gameplay system specs
│   ├── 05_TECHNICAL/        #   Engine, backend, network, DB, security
│   ├── 06_MULTIPLAYER/      #   Server authority, instancing
│   ├── 07_ART_AUDIO/        #   Art + cultural authenticity
│   ├── 08_PRODUCTION/       #   Roadmap, milestones, DoR/DoD
│   ├── 09_AI_AGENTS/        #   How AI agents build this game
│   ├── 10_OPERATIONS/       #   Live ops, moderation, analytics
│   ├── 11_LEGAL_BUSINESS/   #   Monetisation, policy, privacy, legal
│   ├── ADR/                 #   Architecture Decision Records
│   ├── AGENT_DECISIONS/     #   Consequential agent decisions
│   └── DIAGRAMS/            #   Mermaid source diagrams
│
├── backend/                 # Server-authoritative backend (Node 22 + TS + Express)
│   ├── src/                 #   config, db, lib, services, api
│   ├── tests/               #   vitest: ledger, auth, HTTP API
│   ├── Dockerfile
│   └── README.md
│
├── client/                  # Unreal Engine 5 client + dedicated server source
│   ├── IbadanLife.uproject
│   ├── Config/              #   DefaultEngine.ini, DefaultGame.ini (mobile + net)
│   ├── Source/IbadanLife/   #   GameMode, PlayerState, Character, GAS, Economy
│   └── README.md
│
├── infra/                   # Docker + Kubernetes deployment
│   ├── docker/              #   docker-compose (backend + Postgres, local)
│   └── kubernetes/          #   backend deployment + service
│
├── tools/                   # Build scripts, codegen, automation
├── .github/workflows/       # CI: backend-ci, docs-ci
├── Ibadan Life Research Brief.pdf   # Research foundation (22 pages)
├── README.md                # Repository landing/orientation
└── .gitignore
```

### Rules

1. **Docs are truth; code implements them.** Code must follow the docs; conflicts
   resolve in favour of the higher-tier document (SOURCE_OF_TRUTH.md).
2. **Never commit secrets or player data.** `backend/.env`, `*.db`, `node_modules/`,
   and build output are gitignored.
3. **The backend is the money truth.** Client and game server both defer to the
   backend ledger for currency and ownership.
4. **AI agents** must declare role + loaded docs before editing (AGENTS.md), and log
   consequential decisions in `AGENT_DECISIONS/`.

## Consequences

- A new human or agent can find anything in seconds (see ONBOARDING_GUIDE.md and
  REPOSITORY_STRUCTURE.md).
- CI can target `backend/` and `IBADAN_LIFE_DOCS/` independently.
- The UE5 client lives in `client/` and is built with the engine (not in CI here).

## Alternatives Considered

- **Monorepo with everything under one src/** — rejected: mixing design docs,
  UE5 C++, and Node backend under one tree hurts clarity and CI targeting.
- **Separate repositories per layer** — rejected for now: one repo keeps the
  vision and the code in lockstep during pre-production; can split later if needed.

## Related Documents

- SOURCE_OF_TRUTH.md, DOCUMENTATION_STANDARDS.md, AGENTS.md, AI_DEVELOPMENT_PROTOCOL.md
- REPOSITORY_STRUCTURE.md, ONBOARDING_GUIDE.md
