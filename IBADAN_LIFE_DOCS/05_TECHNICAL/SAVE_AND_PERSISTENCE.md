# SAVE AND PERSISTENCE – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead  
**Tier:** 3  
**Depends On:** DATABASE_AND_DATA_MODEL.md, BACKEND_ARCHITECTURE.md, MULTIPLAYER_MASTER_SPEC.md  

> **North Star:** your life is safe — log off, crash, lose signal; come back to exactly the life you left.

---

## 1. The Persistence Promise

**Everything that defines a player and the world persists.** No progress is lost to a logout, a crash, a dropped connection, or a server restart. This is a core promise of a persistent world.

---

## 2. What Persists

| Layer | What persists |
|-------|---------------|
| **Player** | Identity, background, attributes, skills, needs, reputation, wanted level |
| **Economy** | Wallet, bank, full ledger history |
| **Items** | Carried, stored, and shop inventory |
| **Property & vehicles** | Ownership, rent, condition, fuel, customisation |
| **Business** | Storefront, stock, staff, revenue, reputation |
| **Social** | Relationships, crew, history |
| **World** | Open shops, district state, player-created changes |

---

## 3. How It Works

- The **server** is the authority; it writes state through to the **database**.
- **Autosave** at meaningful moments (transactions, logouts, milestones) — never lose a moment that mattered.
- **Session state** (position, current activity) persists so you resume where you left off.

---

## 4. Reconnection

- A dropped client **reconnects** to its session.
- On reconnect, the client **resyncs** to current server state.
- Brief network drops do not kick you out of your life.

---

## 5. Integrity & Recovery

- **Transactions are atomic** — money and items move together or not at all.
- **Backups** are routine; **restore drills** are practised.
- On a server restart, the world and its players **come back** — the city does not forget.

---

## 6. Rules

1. **No progress is lost** to logout, crash, or disconnect.
2. **The server writes; the database remembers.**
3. **Atomic transactions** for anything involving money or items.
4. **Backups and restore drills** are part of Definition of Done for persistence work.
