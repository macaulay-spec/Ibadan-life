# SYSTEM ARCHITECTURE – IBADAN LIFE

**Version:** 1.1  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead  
**Tier:** 3  
**Depends On:** PRODUCT_VISION.md, DESIGN_PILLARS.md, MASTER_GAME_DESIGN_DOCUMENT.md, BRAND_AND_TONE_OF_VOICE.md  

> **North Star:** one clear, secure, scalable architecture — a mobile-first client, an authoritative game server, and durable backend services, built to grow for years.

---

## 1. High-Level Architecture

IBADAN LIFE is a **client-server multiplayer game**.

- **Client:** Unreal Engine 5 (mobile-optimised) — presentation, local prediction where allowed, input, and rendering.
- **Game Server:** authoritative simulation of the world, player state, economy, and replication.
- **Backend Services:** account, persistence, matchmaking/session, economy ledger, moderation, analytics, and live-ops tools.
- **Database Layer:** persistent storage of player data, durable world state, economy records, and the social graph.

---

## 2. Core Principles

1. **Server Authority** — critical state (money, inventory, ownership, position reconciliation, wanted level, business state) is owned by the server.
2. **Mobile-First Client** — the Unreal client is built under strict performance, memory, and thermal budgets.
3. **Persistence** — player and relevant world state survive logouts and server restarts.
4. **Scalability Path** — start small (vertical slice / single district) and grow to many concurrent players and a larger world via streaming and instancing.
5. **Security by Design** — assume clients can be compromised; never trust the client with authoritative decisions.

---

## 3. Major Subsystems

- Authentication & Account
- Character & Persistence
- World Simulation & Streaming
- Replication & Interest Management
- Economy Ledger
- Inventory
- Social Graph & Presence
- Job & Business Simulation
- Property Ownership
- Vehicle Simulation
- Crime & Law Enforcement
- Chat & Communication
- Analytics & Live Ops

Each has (or will have) a detailed architecture document.

---

## 4. Technology Direction (Initial)

- **Client:** Unreal Engine 5 (mobile)
- **Networking:** Unreal replication + dedicated server model (exact solution confirmed via ADR)
- **Backend:** proven cloud services (custom services + managed infrastructure)
- **Database:** relational + document/specialised stores by data type
- **Auth:** secure token-based system with strong account protection

Final technology choices are recorded as **ADRs**.
