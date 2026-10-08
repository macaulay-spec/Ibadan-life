# INVENTORY AND ITEM SYSTEM – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Systems Design Lead  
**Tier:** 2  
**Depends On:** ECONOMY_MASTER_SPEC.md, PLAYER_BIBLE.md, PROPERTY_SYSTEM.md, PLAYER_MARKETPLACE.md  

> **North Star:** the things you carry, store, trade, and use — physical objects in a physical city, owned and persisted by the server.

---

## 1. Philosophy

Items are **physical and persistent**. What you carry, what you store at home, what you buy, sell, gift, or lose — all of it is real, all of it persists, and all of it is **server-authoritative**.

---

## 2. Item Categories

| Category | Examples |
|----------|----------|
| **Consumables** | Food, drinks, hygiene items, medicine |
| **Materials** | Cloth, parts, building supplies, ingredients |
| **Goods** | Electronics, provisions, market stock |
| **Clothing & Cosmetics** | Outfits, shoes, Gele, fila, agbada, Ankara |
| **Tools & Equipment** | Phone, torch, repair kit, work tools |
| **Vehicles & Keys** | Owned vehicles, property keys |
| **Valuables** | Jewellery, documents, collectibles |

---

## 3. Inventory Model

- **Carried inventory:** a limited, weight/slot-based carry (what's on you).
- **Storage:** your **home** and other owned property hold your things.
- **Vehicles:** a vehicle has its own (small) storage.
- **Business stock:** a storefront holds trade inventory.

---

## 4. Item Lifecycle

1. **Acquire** — buy (marketplace/shop), earn (loot/wage), craft, or receive (gift).
2. **Carry / store** — on you, at home, in a vehicle, in a shop.
3. **Use** — consume, equip, wear, gift.
4. **Trade / sell** — player-to-player (marketplace, direct transfer).
5. **Lose / drop** — items can be dropped, stolen (fiction), or lost; recovery is possible but not guaranteed.

---

## 5. Physicality

- Items exist **in the world**: you carry them, you store them, you hand them over.
- **Handing over cash or items** is a physical, spatial interaction (meet, give, receive) — social and tangible.
- Inventory is **visible** where it matters (clothes on your body; goods in your shop).

---

## 6. Crafting & Use

- Simple **crafting/processing** turns materials into goods (cooking, tailoring, repair).
- Using items has **real effects**: food restores Hunger; medicine heals; tools enable work.

---

## 7. Rules

- The **server** owns all item state (no client-side item duplication).
- Every item movement is **logged** (anti-fraud, economy tuning, moderation).
- Items never grant **power** that money can buy unfairly — cosmetics and convenience only.
