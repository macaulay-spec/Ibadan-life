# BACKEND ARCHITECTURE – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead (Backend)  
**Tier:** 3  
**Depends On:** SYSTEM_ARCHITECTURE.md, NETWORK_ARCHITECTURE.md, DATABASE_AND_DATA_MODEL.md, AUTHENTICATION_AND_ACCOUNT.md  

> **North Star:** reliable, scalable backend services — account, economy ledger, matchmaking, moderation, analytics — that the game and live ops depend on.

---

## 1. Role of the Backend

The backend is the **service layer** behind the game: it owns accounts, the economy ledger, matchmaking/session, moderation, analytics, and live-ops tooling. The **game server** runs the live simulation; the **backend** holds the durable truth and services.

---

## 2. Core Services

| Service | Responsibility |
|---------|----------------|
| **Account / Auth** | Identity, login, tokens, account protection (AUTHENTICATION_AND_ACCOUNT.md) |
| **Economy Ledger** | Append-only record of all Naira movement (faucets, sinks, transfers, taxes) |
| **Matchmaking / Session** | Route players to district instances; manage sessions |
| **Persistence** | Save/restore player and world state (SAVE_AND_PERSISTENCE.md) |
| **Moderation** | Reports, enforcement, safety tooling (MODERATION_AND_SAFETY.md) |
| **Analytics** | Events, metrics, dashboards (ANALYTICS_AND_METRICS.md) |
| **Live Ops** | Config, events, economy tuning, content (LIVE_OPERATIONS.md) |
| **Ad Network** | Native billboard/plot ad portal (BUSINESS_MODEL_AND_MONETIZATION.md) |

---

## 3. Technology Direction

- **Services:** proven cloud infrastructure; containerised (Kubernetes) alongside game servers.
- **Communication:** secure APIs (HTTPS/REST) and realtime channels to game servers.
- **Philosophy:** start simple and proven; scale with population. Final choices recorded as ADRs.

---

## 4. Principles

1. **The ledger is append-only.** Money truth is never rewritten; corrections are new entries.
2. **Services are stateless where possible** — scale horizontally.
3. **Secure by default** — TLS, token auth, least privilege.
4. **Observable** — logs, metrics, and traces for every service.
5. **Recoverable** — backups, restore drills, and incident process (INCIDENT_AND_HOTFIX_PROCESS.md).

---

## 5. Backend ↔ Game Server

- The **game server** simulates live play and talks to backend services for durable truth.
- The **economy ledger** is the single authority on money; the game server requests, the ledger confirms.
- **Persistence** writes through to the database layer so no state is lost.
