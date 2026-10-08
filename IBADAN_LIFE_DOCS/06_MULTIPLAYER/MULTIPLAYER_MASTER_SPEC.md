# MULTIPLAYER MASTER SPEC – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead (Multiplayer)  
**Tier:** 3  
**Depends On:** SYSTEM_ARCHITECTURE.md, NETWORK_ARCHITECTURE.md, SERVER_AUTHORITY_AND_REPLICATION.md, WORLD_INSTANCING_STRATEGY.md  

> **North Star:** a shared, persistent city where real players are the population — coexistence and interdependence, never just competition.

---

## 1. Multiplayer Philosophy

- The world is **shared and persistent**.
- **Real players are the primary population.**
- The **server is authoritative.**
- We design for **meaningful co-existence and interdependence**, not pure PvP or pure co-op.
- **Proximity and relationship-based** interaction come before global chat.

---

## 2. The Real-Player-First Axiom

Traditional open-world games use hundreds of NPCs to fake life. **We invert that.** The server infrastructure, zone sharding, and interaction design **prioritise human player density above all else**. NPCs do not simulate civilian life; they provide **infrastructure** (municipal services, law enforcement, emergency, ambient traffic).

If a player eats at an amala joint, the **owner, cook, yam delivery driver, and patrons are real players**. NPCs only do what humans cannot reliably be online to do.

---

## 3. Presence

- Other players are **visible, named, and nearby** — real bodies in the world.
- **Proximity** governs what you see and hear.
- Presence is the foundation of **social and economic interdependence**.

---

## 4. Sessions & Instancing

- Players join **district instances** (see WORLD_INSTANCING_STRATEGY.md).
- Instance density targets per district (e.g., UI Student Hub 96, Dugbe 48, Bodija 64, Iwo 64, Bower's 32, Agodi 32).
- **Matchmaking** routes players to instances by location and density.

---

## 5. Communication

- **Proximity chat** (text now; voice later) is the default social layer.
- **Direct messages** and **crew chat** for friends and groups.
- Global channels are **secondary**.

---

## 6. Persistence Across Sessions

- Log off, come back — **the city and your life persist.**
- Reconnection restores your place and state.
- The world changes while you are away (within reason).

---

## 7. Anti-Grief & Safety

- **Reporting, blocking, moderation** from day one (see MODERATION_AND_SAFETY.md).
- **Safe spaces** (your home) are protected.
- The design **rewards** positive interaction; it does not force it.

---

## 8. Rules

1. **Real players are the population.** NPCs are infrastructure.
2. **Server authority, always.**
3. **Proximity-first** interaction and replication.
4. **Persistence** across sessions is sacred.
5. **Safety** is a feature, not an afterthought.
