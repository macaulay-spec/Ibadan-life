# REPOSITORY STRUCTURE – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead / Project Lead  
**Tier:** 0 (support)  
**Depends On:** MASTER_PROJECT_INDEX.md, SOURCE_OF_TRUTH.md, ADR-0004  

> **North Star:** one clear map of where everything lives — so a human or AI agent finds any file in seconds and knows where new work belongs.

---

## The Big Picture

This repository has two halves:

1. **DESIGN TRUTH** — `IBADAN_LIFE_DOCS/` — what we are building and why (the authority).
2. **EXECUTABLE CODE** — `backend/`, `client/`, `infra/` — how we build it.

**Rule:** code implements the docs. When they conflict, the higher-tier document wins (SOURCE_OF_TRUTH.md).

---

## Full Layout

```
Ibadan-life/
├── IBADAN_LIFE_DOCS/        Design truth (start: IBADAN_LIFE_DOCS/README.md)
│   ├── 00_MASTER/           Source of truth, brand, onboarding, takeover plan, glossary, standards
│   ├── 01_PRODUCT/          Vision, pillars, goals, non-goals, metrics, audience (Tier 0)
│   ├── 02_DESIGN/           GDD, core loop, player journey, progression, MVP, vertical slice
│   ├── 03_WORLD/            World bible, districts, city layout, time, streaming
│   ├── 04_SYSTEMS/          Player, life sim, economy, business, property, jobs, vehicles, social, crime, inventory
│   ├── 05_TECHNICAL/        System, Unreal, backend, network, database, save, auth, performance, security
│   ├── 06_MULTIPLAYER/      Multiplayer master, server authority, instancing
│   ├── 07_ART_AUDIO/        Art bible, visual direction, character & environment, culture
│   ├── 08_PRODUCTION/       Roadmap, milestones, vertical slice, MVP, dependencies, DoR/DoD
│   ├── 09_AI_AGENTS/        Agent rules, roles, context, coding rules, change control
│   ├── 10_OPERATIONS/       Live ops, moderation, analytics, economy monitoring, incidents
│   ├── 11_LEGAL_BUSINESS/   Monetisation, community policy, privacy, age rating
│   ├── ADR/                 Architecture Decision Records (ADR-0001…)
│   ├── AGENT_DECISIONS/     Consequential decisions made by AI agents
│   └── DIAGRAMS/            Mermaid source diagrams
│
├── backend/                 SERVER-AUTHORITATIVE backend (Node 22 + TypeScript + Express)
│   ├── src/
│   │   ├── config.ts        env config
│   │   ├── index.ts         server entry
│   │   ├── db/              database.ts (driver), migrate.ts, schema.sql
│   │   ├── lib/             logger, errors, money (kobo), password (bcrypt), jwt
│   │   ├── services/        ledger (append-only), auth, player
│   │   └── api/             middleware, routes, serializers, app
│   ├── tests/               vitest: ledger, auth, economy HTTP API
│   ├── Dockerfile
│   └── README.md
│
├── client/                  UNREAL ENGINE 5 client + dedicated server (C++)
│   ├── IbadanLife.uproject
│   ├── Config/              DefaultEngine.ini (mobile + networking), DefaultGame.ini
│   └── Source/IbadanLife/   GameMode, PlayerState, Character, GAS attribute set, Economy component
│
├── infra/                   Deployment
│   ├── docker/              docker-compose.yml (backend + Postgres, local dev)
│   └── kubernetes/          backend deployment + service
│
├── tools/                   Build scripts, codegen, automation (as needed)
├── .github/workflows/       CI: backend-ci.yml (typecheck+test), docs-ci.yml (integrity)
├── Ibadan Life Research Brief.pdf   Research foundation (22 pages)
└── README.md                Repository landing page
```

---

## Where Does New Work Go?

| You are adding… | It goes in |
|-----------------|------------|
| A design rule, pillar, or system spec | `IBADAN_LIFE_DOCS/` (matching folder) |
| A major decision | `IBADAN_LIFE_DOCS/ADR/` (new ADR) |
| An agent's consequential decision | `IBADAN_LIFE_DOCS/AGENT_DECISIONS/` |
| Backend service / API / ledger logic | `backend/src/` |
| A backend test | `backend/tests/` |
| UE5 gameplay code | `client/Source/IbadanLife/` |
| Config (engine, game, input) | `client/Config/` |
| Deployment / infra | `infra/` |
| A build/automation script | `tools/` |

---

## Non-Negotiable Rules

1. **Never commit secrets or player data** (`.env`, `*.db`, `node_modules/`, build output are gitignored).
2. **The backend ledger is the money truth.** Client and game server defer to it.
3. **Docs before code.** If you change behaviour, update the doc first (or with it).
4. **AI agents** declare role + loaded docs before editing (AGENTS.md) and log decisions in `AGENT_DECISIONS/`.
5. **CI must stay green** — backend typecheck + tests, docs integrity.
