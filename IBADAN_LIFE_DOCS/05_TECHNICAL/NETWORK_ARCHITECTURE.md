# NETWORK ARCHITECTURE – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead (Network)  
**Tier:** 3  
**Depends On:** SYSTEM_ARCHITECTURE.md, SERVER_AUTHORITY_AND_REPLICATION.md, WORLD_INSTANCING_STRATEGY.md, SECURITY_ARCHITECTURE.md  

> **North Star:** a dedicated, authoritative server architecture that keeps a persistent city fair, consistent, and scalable — never peer-to-peer.

---

## 1. Core Decision: Dedicated Authoritative Servers

**We reject peer-to-peer networking.** GTA Online's P2P model enabled toxicity and client-authority exploits. IBADAN LIFE uses **dedicated, authoritative game servers**. The server owns the truth.

---

## 2. Topology

| Layer | Responsibility |
|-------|----------------|
| **Client (UE5, mobile)** | Presentation, input, local prediction, rendering |
| **Game Server (dedicated)** | Authoritative simulation, replication, world state |
| **Backend Services** | Account, matchmaking, economy ledger, moderation, analytics, live ops |
| **Database Layer** | Persistent player, world, economy, and social data |

---

## 3. Servers & Hosting

- **Dedicated UE5 servers**, Linux, containerised (**Kubernetes**) for scale and recovery.
- **Iris replication pipeline** for efficient state sync.
- Servers start small (single district) and **scale out** via instancing and sharding as population grows.

---

## 4. Replication & Interest Management

- **Server → client** replication of relevant state only.
- **Interest management:** a client receives what is **near and relevant** (proximity), not the whole city.
- **Proximity-first design** reduces bandwidth and matches the social fantasy.

---

## 5. Instancing & Sharding

- The city is divided into **district instances** (see WORLD_INSTANCING_STRATEGY.md).
- Players are routed to instances by **district and population density**.
- High-demand areas **scale** by density; the design prioritises **human player density** above all.

---

## 6. Sessions & Reconnection

- **Session management** handles join, leave, and reconnect.
- A dropped player **reconnects to their life** — same place, same state.
- Persistence guarantees no progress is lost to a dropped connection.

---

## 7. Network Reality (Nigeria)

We design for **real mobile networks**: variable latency, jitter, and data cost.

- Minimise bandwidth; prioritise state correctness over visual completeness on poor networks.
- **Graceful degradation** under packet loss; no hard disconnects for brief drops.
- Small, efficient builds to respect **data costs**.

---

## 8. Rules

1. **The server is authoritative.** No client-authoritative state.
2. **Dedicated servers only.** No P2P.
3. **Proximity-based** replication and interaction.
4. **Reconnection and persistence** are first-class.
5. **Secure by design** (see SECURITY_ARCHITECTURE.md).
