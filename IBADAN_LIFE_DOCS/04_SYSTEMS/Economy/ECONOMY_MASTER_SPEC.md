# ECONOMY MASTER SPEC – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Systems Design Lead (Economy)  
**Tier:** 2  
**Depends On:** DESIGN_PILLARS.md, MASTER_GAME_DESIGN_DOCUMENT.md, CURRENCY_AND_BANKING.md, PLAYER_MARKETPLACE.md, BUSINESS_MASTER_SPEC.md  

> **North Star:** a living, player-driven economy — a web of interdependence where players create value for each other, and money flows in a healthy loop.

---

## 1. Philosophy

The economy is **not** a set of PvE money faucets. It is a **web of player interdependence**: one player's spending is another player's income. We design for **circulation**, not extraction.

---

## 2. The Five-Tier Supply Chain

The backbone of real interdependence. Every meal, every product, every service traces back through players:

| Tier | Role | Example |
|------|------|---------|
| **1. Raw Production** | Harvest/gather raw goods | Farming yams & cassava on the outskirts |
| **2. Logistics & Haulage** | Move goods to market | Truck drivers haul crops to Bodija Market |
| **3. Enterprise Processing** | Turn raw into product | A restaurant cooks yams into amala |
| **4. Retail & Service** | Sell and serve | Waitstaff serve players in the restaurant |
| **5. End Consumption** | Buy and use | Customers eat, recover Hunger, gain buffs |

**One plate of amala connects five players.** That is the fantasy.

---

## 3. Currency: Faucets and Sinks

A healthy economy needs **faucets** (money in) and **sinks** (money out) in balance.

### Faucets (sources)
- **Wages** for entry-level work (delivery, transport, service).
- **Municipal relief stipends** for new "Lapo" players (a small, dignified start).
- **Enterprise earnings** from player businesses.

### Sinks (drains)
- **Housing lease** payments.
- **Utility bills** — electricity and generator diesel (the reality of Nigerian power).
- **Food and hygiene** items.
- **Vehicle maintenance and fuel.**
- **2.5% municipal tax** on peer-to-peer wallet transfers.

---

## 4. Core Properties

1. **Player-driven.** Most value is created and exchanged between real players.
2. **Balanced.** Faucets and sinks are tuned so wealth circulates, not pools or vanishes.
3. **Transparent.** Prices are set by players (market) within sensible floors/ceilings.
4. **Server-authoritative.** Every transaction is validated server-side; the ledger is truth.
5. **Fair.** No pay-to-win. Monetisation never sells power (see BUSINESS_MODEL_AND_MONETIZATION.md).

---

## 5. Key Economic Systems

| System | Role | Detail doc |
|--------|------|------------|
| **Currency & Banking** | Naira, wallet, bank, transfers, tax | CURRENCY_AND_BANKING.md |
| **Player Marketplace** | Player-to-player buying and selling | PLAYER_MARKETPLACE.md |
| **Businesses** | Player-owned enterprises, jobs, supply | BUSINESS_MASTER_SPEC.md |
| **Jobs & Careers** | Work, wages, skill-gated progression | JOB_AND_CAREER_SYSTEM.md |
| **Property** | Housing, rent, ownership | PROPERTY_SYSTEM.md |
| **Economy Monitoring** | Live health, faucets/sinks, inflation | ECONOMY_MONITORING.md |

---

## 6. Economic Health Metrics

- Velocity: how often Naira changes hands.
- Player-to-player transaction volume.
- Businesses earning from other players.
- Wealth distribution (must not be extremely top-heavy).
- Faucet/sink balance (inflation/deflation watch).

---

## 7. Rules

- The **server ledger** is the only truth for money.
- Every transaction is **logged** (anti-fraud, economy tuning, moderation).
- The economy must remain **fun for a Lapo** — a new player can always hustle forward.
