# TRANSPORT AND VEHICLE SYSTEM – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Systems Design Lead  
**Tier:** 2  
**Depends On:** ECONOMY_MASTER_SPEC.md, CITY_LAYOUT.md, WORLD_BIBLE.md, JOB_AND_CAREER_SYSTEM.md  

> **North Star:** the city moves — on foot, by danfo, okada, keke, micra, or your own whip — and getting around is part of the game.

---

## 1. Philosophy

Transport is **physical, not a menu**. You walk, you flag a danfo, you hop an okada, you drive your own car. Getting from UI Student Hub to Bodija Market is a journey with time, cost, and encounters — never a loading screen.

---

## 2. Transport Modes

| Mode | Type | Speed | Cost | Notes |
|------|------|-------|------|-------|
| **Walking** | On foot | Slow | Free | The default; the city on your feet |
| **Keke / Bajaj** | Tricycle | Slow–medium | ₦ cheap | Short hops, tight streets |
| **Okada** | Motorcycle taxi | Fast | ₦ mid | Everywhere; risky; iconic |
| **Micra** | Light taxi (shared) | Medium | ₦ cheap–mid | Fixed routes |
| **Danfo** | Public bus | Medium | ₦ cheapest | The backbone; fixed routes, crowded |
| **Private vehicle** | Player-owned | Variable | Fuel + maintenance | Cars, vans, bikes — your own |

---

## 3. Public Transport (NPC / route-driven)

- **Danfo and micra** run fixed **routes** along arterial roads (Ring Road, Iwo Road, etc.).
- Players **board, pay the fare, and ride** — a real, shared, social experience.
- **Okada and keke** can be **hailed** for point-to-point trips.
- Fares are small Naira sinks; operators (players or services) earn them.

---

## 4. Player Vehicles

- Players can **own vehicles**: bikes, keke, okada, cars, vans (more later).
- Ownership lives in PROPERTY/ECONOMY records (server-authoritative).
- **Fuel and maintenance** are recurring costs (sinks).
- **Transport jobs** (driver, logistics, haulage) use these vehicles to earn.

---

## 5. Vehicle Systems

| System | Detail |
|--------|--------|
| **Physics** | UE5 Chaos vehicles — drivable, satisfying, mobile-tuned |
| **Fuel** | Consumed by distance; refuel at stations (cost sink) |
| **Maintenance** | Wear degrades performance; repair at the mechanic village |
| **Damage** | Crashes and wear cause damage; repairs cost Naira |
| **Customisation** | Paint, wraps, plates — cosmetic only (no pay-to-win) |

---

## 6. Getting Around Is the Game

- **Distance is real:** the city has scale; travel takes time.
- **Traffic is real:** congestion creates encounters and stories.
- **Routes matter:** a danfo corridor is a social space; an okada is a gamble.
- **Your vehicle is status:** what you drive says who you are.

---

## 7. Rules

- Vehicles are **server-authoritative** (position, ownership, fuel).
- Transport must remain **viable and fun on mobile** (simple, responsive controls).
- No abstract fast-travel as the primary mode — **movement is presence**.
