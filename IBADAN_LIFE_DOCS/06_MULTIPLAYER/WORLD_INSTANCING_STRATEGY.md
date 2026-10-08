# WORLD INSTANCING STRATEGY – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead (Multiplayer)  
**Tier:** 3  
**Depends On:** NETWORK_ARCHITECTURE.md, MULTIPLAYER_MASTER_SPEC.md, DISTRICT_BIBLE.md, WORLD_STREAMING_STRATEGY.md  

> **North Star:** the right players, in the right district, at the right density — so the city always feels alive where you stand.

---

## 1. Why Instancing

A persistent city is shared, but no single server holds **everyone everywhere**. **Instancing** runs copies of a district so many players can coexist in the same place without one server collapsing. The city feels full; the infrastructure stays healthy.

---

## 2. The Unit: District Instances

- Each **district** runs as one or more **instances**.
- Players in the same district and area share an instance and **see each other**.
- Instance **density targets** per district:

| District | Target density |
|----------|----------------|
| UI Student Hub | 96 players |
| Dugbe CBD | 48 players |
| Bodija Central | 64 players |
| Iwo Transit Hub | 64 players |
| Bower's Historic | 32 players |
| Agodi Green Zone | 32 players |

---

## 3. Matchmaking & Routing

- Players are routed to an instance by **location and density**.
- The goal: **maximise human player density** in the instance you join (the Real-Player-First Axiom).
- Friends/crew are routed **together** where possible (play with people you know).

---

## 4. Scaling

- **Scale up:** when an instance nears capacity, new players route to a fresh instance of the same district (seamless to the player; the street still feels busy).
- **Scale the map:** MVP 1 = one district; MVP 2 = more districts; Full Vision = dynamic **spatial sharding** across the whole metro.
- Density targets rise as the stack matures (32 → 64 → 128 → dynamic).

---

## 5. Consistency

- All instances of a district share the **same persistent world state** (shops, owners, reputation) via the backend.
- What you do in one instance is **true everywhere** — the city remembers.

---

## 6. Rules

1. **Human density first.** Route to where the players are.
2. **The city is one world.** Instances are a technical detail, not a separate world.
3. **Friends stay together** where possible.
4. **Density targets are budgets** — exceed them only with evidence the stack can hold.
