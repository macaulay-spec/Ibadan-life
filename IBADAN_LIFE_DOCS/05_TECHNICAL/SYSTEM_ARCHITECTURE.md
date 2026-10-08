# SYSTEM ARCHITECTURE – IBADAN LIFE

**Version:** 1.0  
**Status:** Active (Tier 3)  
**Depends On:** PRODUCT_VISION.md, DESIGN_PILLARS.md, MASTER_GAME_DESIGN_DOCUMENT.md  

---

## 1. High-Level Architecture

IBADAN LIFE is a client-server multiplayer game.

- **Client:** Unreal Engine 5 (mobile-optimised), responsible for presentation, local prediction where allowed, input, and rendering.
- **Game Server:** Authoritative simulation of the world, player state, economy, physics authority where required, and replication.
- **Backend Services:** Account, persistence, matchmaking/session, economy ledger, moderation, analytics, and live operations tools.
- **Database Layer:** Persistent storage of player data, world state that must survive, economy records, social graph, etc.

---

## 2. Core Principles

1. **Server Authority** – Critical state (money, inventory, ownership, position reconciliation, wanted level, business state) is owned by the server.
2. **Mobile-First Client** – The Unreal client is built under strict performance, memory, and thermal budgets.
3. **Persistence** – Player and relevant world state survive logouts and server restarts.
4. **Scalability Path** – Architecture must support starting small (vertical slice / single district) and growing to many concurrent players and larger world areas via streaming and instancing strategies.
5. **Security by Design** – Assume clients can be compromised; never trust the client with authoritative decisions.

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

Each has or will have detailed architecture documents.

---

## 4. Technology Direction (Initial)

- Client: Unreal Engine 5 (mobile)
- Networking: Unreal replication + dedicated server model (exact solution to be confirmed via ADR)
- Backend: To be decided (candidate directions include custom services + proven cloud infrastructure)
- Database: Relational + possibly document or specialised stores for different data types
- Auth: Secure token-based system with strong account protection

Final technology choices must be recorded as ADRs.
