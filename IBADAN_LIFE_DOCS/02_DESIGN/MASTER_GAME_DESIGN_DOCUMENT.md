# MASTER GAME DESIGN DOCUMENT – IBADAN LIFE

**Version:** 2.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Design Authority  
**Tier:** 1  
**Depends On:** PRODUCT_VISION.md, DESIGN_PILLARS.md, PROJECT_CHARTER.md, BRAND_AND_TONE_OF_VOICE.md  

> **North Star:** the central design reference — what the game is, how it plays, and how every system serves the fantasy.

---

## 1. Game Overview

**IBADAN LIFE** is a persistent multiplayer 3D open-world life simulation. Players create a character and enter a continuous city inspired by **Ibadan**. They move freely in third person, live daily life, participate in a **player-driven economy**, form relationships, own property and businesses, and create personal stories inside a **shared persistent world**.

The game is built on **six design pillars** (DESIGN_PILLARS.md). All systems must serve them.

---

## 2. Core Fantasy

> *"I live in this city. I have a place, a way to make money, people I know, and the freedom to move through a real place that feels like Ibadan."*

---

## 3. Pillars Recap

1. Physical Presence · 2. Player-First Population · 3. Interconnected Player Economy · 4. Authentic Ibadan Texture · 5. Believable Life Progression · 6. Mobile-First Reality

---

## 4. Core Game Loop (Summary)

See CORE_GAME_LOOP.md for full detail.

| Loop | Span | Essence |
|------|------|---------|
| **Micro** | 30 seconds | Move, notice, react — feel the city. |
| **Session** | 5–30 minutes | One need, one errand, one interaction. |
| **Daily** | Days | Work, spend, maintain, connect. |
| **Life** | Weeks–months | Assets, reputation, legacy. |

---

## 5. Player Lifecycle

1. **Character Creation** — choose a background (Nepo or Lapo) and shape your avatar.
2. **Arrival** — drop into the city with a first-hour path.
3. **First shelter & first income** — a place to sleep, a way to earn.
4. **Stabilisation** — a routine forms.
5. **Growth** — skills, relationships, assets.
6. **Establishment** — business, reputation, deeper systems.
7. **Legacy** — a lasting mark on the city.

---

## 6. Major System Groups

- World & City Simulation
- Player Character & Progression
- Needs & Life Simulation
- Economy & Currency
- Jobs & Careers
- Businesses (player-owned)
- Property & Housing
- Vehicles & Transport
- Inventory & Items
- Social & Relationships
- Crime & Law
- Events & Activities
- Multiplayer & Presence

Each has a detailed specification under `/04_SYSTEMS/` and related folders.

---

## 7. Multiplayer Philosophy

- The world is **shared and persistent**.
- **Real players are the primary population.**
- The **server is authoritative**.
- Design for **meaningful co-existence and interdependence**, not pure competition or pure cooperation.
- **Proximity and relationship-based** interaction come before global chat.

---

## 8. Failure States & Consequences

Players can fail: lose housing, fall into debt, gain a wanted level, damage relationships, lose a business. **Failure should open interesting new goals**, not punish players into quitting. Permanent character deletion is not a design goal; **recovery paths always exist**.

---

## 9. Content Philosophy

- **Systems first, authored content second.**
- The best stories come from **players interacting with systems and each other**.
- Cultural events, world events, and seasonal content **support** the living city but never replace player agency.

---

## 10. Open Design Questions (Tracked)

Resolved via ADR as design matures:

- Exact balance between NPC service fallback and pure player economy in early population stages
- Degree of hardcore vs. accessible needs pressure
- Exact wanted-level and police response model
- Housing scarcity and pricing model at different population levels

---

*This Master GDD is the central design reference. All system documents must remain consistent with it.*
