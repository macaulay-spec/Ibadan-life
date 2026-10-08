# IBADAN WORLD SPEC

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** World Design Lead  
**Tier:** 1  
**Depends On:** WORLD_BIBLE.md, PRODUCT_VISION.md, DESIGN_PILLARS.md  

> **North Star:** the concrete specification of the city — what it is, how it is laid out, and how it lives.

---

## 1. What the City Is

A **compressed, stylised representation of Ibadan, Nigeria** — a 3D, physically explorable, persistent multiplayer world. "Compressed" means we keep the *feeling* and the *landmarks* of Ibadan, not a 1:1 map. "Stylised" means a coherent, performant art direction that runs on mid-range Android.

---

## 2. Core World Facts

| Property | Value |
|----------|-------|
| **Setting** | City inspired by Ibadan, Oyo State, Nigeria |
| **Structure** | Six named districts (see DISTRICT_BIBLE.md) |
| **Exploration** | Continuous 3D, third-person, on foot or in vehicles |
| **Population** | Real players primary; NPCs for infrastructure only |
| **Persistence** | World and player state survive logout and restart |
| **Time** | Real-time day/night cycle + calendar (TIME_AND_DAY_NIGHT.md) |
| **Scale** | District-level at MVP; full metro at Full Vision |

---

## 3. Visual Identity (The Ibadan Look)

- **Rust-tinted corrugated roofs** — the city's signature.
- **Red-laterite earth** and unpaved edges.
- **A university on a hill** (UI Student Hub).
- **Dense commercial corridors** (Dugbe), **sprawling markets** (Bodija), **heritage monuments** (Bower's Tower), **green administrative space** (Agodi).
- Bright signage, hand-painted shopfronts, busy streets.

---

## 4. How the City Lives

- **Day rhythm:** markets open, buses fill, offices and campuses busy, suya at dusk, nightlife in Bodija.
- **Ambient life:** NPC traffic, street vendors, police patrols, service vehicles — **infrastructure, not population**.
- **Player impact:** player shops open and close; player homes hold their things; player reputations travel; the economy breathes with its players.
- **Persistence:** log off at home; return to the same street, the same neighbours, the same ongoing life.

---

## 5. Enterability

Key buildings are **enterable**: homes, workplaces, shops, bukas, banks, social spaces. Interiors are functional and consistent with the outside world — no jarring transitions.

---

## 6. Performance Contract

The world must stream and run on **mid-range Android**. World Partition tiles, LOD'd assets, baked lighting, and aggressive streaming are the tools (see WORLD_STREAMING_STRATEGY.md and PERFORMANCE_AND_MOBILE_TARGETS.md).

---

## 7. Authenticity Check

Every district, street, shop, and sound must pass the **CULTURAL_AUTHENTICITY_GUIDE.md**. If a player from Ibadan says *"this is my city,"* we have succeeded.
