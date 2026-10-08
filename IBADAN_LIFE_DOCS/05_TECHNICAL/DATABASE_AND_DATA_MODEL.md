# DATABASE AND DATA MODEL – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead (Backend)  
**Tier:** 3  
**Depends On:** BACKEND_ARCHITECTURE.md, ECONOMY_MASTER_SPEC.md, SAVE_AND_PERSISTENCE.md  

> **North Star:** a clear, durable data model — every player, coin, item, and relationship stored so the city and its people never forget.

---

## 1. Storage Strategy

- **Relational database** (e.g., PostgreSQL) for structured, transactional truth: accounts, players, economy ledger, ownership, relationships.
- **Document / specialised stores** where a flexible shape fits better (e.g., inventory contents, configuration).
- The **economy ledger** is relational and **append-only**.

---

## 2. Core Entities

| Entity | Holds |
|--------|-------|
| **Account** | Credentials, auth tokens, device fingerprints, protection status |
| **Player** | Identity, background, attributes, skills, needs, reputation, wanted level |
| **Wallet / Bank** | Naira balances (cash + bank) |
| **LedgerEntry** | Every Naira movement (append-only): amount, from, to, reason, tax, timestamp |
| **Item / Inventory** | Items owned, carried, stored; item state |
| **Property** | Ownership, rent, utilities, condition |
| **Business** | Storefront, stock, staff, revenue, reputation |
| **Vehicle** | Ownership, fuel, condition, customisation |
| **Relationship** | Social graph: friends, crew, rivals, history |
| **WorldState** | Persistent world changes (open shops, district state) |

---

## 3. The Economy Ledger (Append-Only)

The ledger is the **heart of economic truth**:

- Every entry records: **amount, from, to, reason (faucet/sink/transfer/tax), timestamp**.
- Entries are **never edited or deleted**; corrections are new, linked entries.
- This enables **audit, fraud detection, economy tuning, and reconciliation** after any incident.

---

## 4. Data Principles

1. **Durability first.** Player progress is sacred; backups and restore drills are routine.
2. **Least privilege.** Services access only the data they need.
3. **Privacy by design.** Personal data minimised, protected, and handled per PRIVACY_AND_DATA_PROTECTION.md.
4. **Observable.** Slow queries and errors are monitored.
5. **Scalable path.** Start simple; shard/partition as population grows.

---

## 5. Migrations

- Schema changes are **versioned, reviewed, and reversible** where possible.
- Migrations run in CI and are tested against production-like data.
