# SERVER AUTHORITY AND REPLICATION – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead (Network)  
**Tier:** 3  
**Depends On:** NETWORK_ARCHITECTURE.md, SECURITY_ARCHITECTURE.md, MULTIPLAYER_MASTER_SPEC.md  

> **North Star:** one authoritative server truth, replicated efficiently to every client — so the city is fair, consistent, and the same for everyone.

---

## 1. Authority Model

| State | Authority | Notes |
|-------|-----------|-------|
| **Money / economy** | Server | Ledger is append-only truth |
| **Inventory / items** | Server | No client-side duplication |
| **Ownership (property, vehicles, businesses)** | Server | Title records are server-owned |
| **Position (reconciliation)** | Server | Server reconciles; client predicts locally |
| **Wanted level / legal** | Server | Consequences are server-applied |
| **Business / job state** | Server | Operations validated server-side |

The client **predicts locally** for responsiveness, but the **server reconciles** and corrects. When they disagree, **the server wins.**

---

## 2. Replication (Iris)

- **Server → client** state replication via UE5's **Iris** pipeline.
- **Interest management:** clients receive **nearby, relevant** state (proximity), not the whole city.
- **Priority:** nearby players and objects replicate first.

---

## 3. Client Prediction & Reconciliation

- The client **predicts** movement and local effects for responsiveness.
- The server **authoritatively simulates** and sends corrections.
- On conflict, the client **snaps to server truth** (smoothed to avoid jarring).

---

## 4. Cheat Resistance

- **No client-authoritative state.** A modified client cannot mint money, items, or ownership.
- **Validate every action** server-side before it counts.
- **Flag anomalies** (impossible speed, teleporting, impossible trades).
- **Log** economic and state transitions for audit.

---

## 5. Bandwidth Discipline

- Replicate **only what changes** and **only to whom it matters**.
- **Compress** state; prioritise proximity.
- Design for **Nigerian mobile networks**: variable latency, jitter, data cost.

---

## 6. Reconnection

- A dropped client **reconnects** to its session.
- On reconnect, the client **resyncs** to current server state — no lost progress.

---

## 7. Rules

1. **The server is the single source of truth.**
2. **Predict locally, reconcile authoritatively.**
3. **Replicate by proximity and relevance.**
4. **Validate and log everything that matters.**
5. **Never trust the client with power.**
