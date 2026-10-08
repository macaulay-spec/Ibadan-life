# PLAYER MARKETPLACE – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Systems Design Lead (Economy)  
**Tier:** 2  
**Depends On:** ECONOMY_MASTER_SPEC.md, CURRENCY_AND_BANKING.md, INVENTORY_AND_ITEM_SYSTEM.md, BUSINESS_MASTER_SPEC.md  

> **North Star:** players buy and sell to each other — a living market where every trade is one player earning from another.

---

## 1. Philosophy

The marketplace is where the **player-driven economy breathes**. Players list goods, set prices, and trade directly — one player's sale is another player's purchase. It is interdependence made visible.

---

## 2. Two Ways to Trade

| Mode | How it works | Best for |
|------|--------------|----------|
| **Marketplace (listings)** | List an item for sale; buyers purchase at your price | Goods, materials, vehicles, property |
| **Direct trade** | Meet a player and trade item-for-item or item-for-Naira | Quick deals, haggling, social trades |

---

## 3. Listings

- Players **list items** with a **price in Naira**.
- Listings are **visible in a market district** (e.g., Bodija Market) and searchable.
- **Floors and ceilings** (per item) keep prices sane and prevent exploitative extremes.
- A listing can be **edited, cancelled, or sold**.
- Sales are **server-validated**; payment and item transfer are atomic (both happen or neither does).

---

## 4. Direct Trade

- Meet a player; open a **trade window**.
- Offer items and/or Naira; both players **confirm**.
- The trade is **server-validated and logged**.
- Direct trade enables **haggling, generosity, debt, and social friction** — real player stories.

---

## 5. Marketplaces as Places

- The **physical market** (Bodija Market) is a social and economic hub — stalls, crowds, haggling.
- Player **shops** (businesses) are the premium, persistent storefronts.
- Both connect: a marketplace listing can point to a shop; a shop can feed the market.

---

## 6. Fees & Sinks

- A small **marketplace fee** on sales is a currency sink (economy health).
- The **2.5% transfer tax** applies to P2P Naira transfers (see CURRENCY_AND_BANKING.md).

---

## 7. Rules

1. The **server** validates every trade; nothing is client-trusted.
2. **No real-money trading** of game assets at launch (see NON_GOALS.md).
3. Prices sit within **floors/ceilings**; extremes are flagged.
4. Every sale is **logged** for economy monitoring and fraud detection.
