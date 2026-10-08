# ANALYTICS AND METRICS – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Live Operations Lead / Data  
**Tier:** 4  
**Depends On:** SUCCESS_METRICS.md, LIVE_OPERATIONS.md, PERFORMANCE_AND_MOBILE_TARGETS.md, PRIVACY_AND_DATA_PROTECTION.md  

> **North Star:** measure what matters — so we learn fast, fix what's broken, and grow what works, without spying on players.

---

## 1. Philosophy

Analytics exist to **serve the player and the city** — to understand retention, economy health, performance, and safety. We measure **systems and outcomes**, not to surveil individuals. Privacy is built in (PRIVACY_AND_DATA_PROTECTION.md).

---

## 2. Metric Families

| Family | Examples | Source doc |
|--------|----------|------------|
| **Retention** | D1/D7/D30 retention; week-4 returners with home/income | SUCCESS_METRICS.md |
| **Social & economy** | P2P interactions; business revenue from players; P2P transactions; jobs filled by players | SUCCESS_METRICS.md |
| **Presence & engagement** | Session length/frequency; % free movement vs menus; districts visited | SUCCESS_METRICS.md |
| **Progression** | Time to stable housing+income; vehicle/business ownership by day 30; wealth distribution | SUCCESS_METRICS.md |
| **Technical** | Crash-free rate; FPS on target devices; load times; streaming hitches | PERFORMANCE_AND_MOBILE_TARGETS.md |
| **Economy** | Velocity; faucet/sink balance; inflation; marketplace volume | ECONOMY_MONITORING.md |
| **Safety** | Reports, moderation actions, incident rate | MODERATION_AND_SAFETY.md |

---

## 3. The North Star Metric

> **Weekly Active Players who performed at least one meaningful economic or social action with another real player.**

This is the number that says the city is alive.

---

## 4. Events & Telemetry

- **Client events:** sessions, movement, interactions, purchases, crashes, FPS.
- **Server events:** transactions, logins, trades, moderation actions.
- **Economy events:** every ledger entry is observable for health and fraud.
- Events are **batched, privacy-respecting, and documented**.

---

## 5. Dashboards & Review

- **Real-time health** dashboard (crashes, economy, moderation queue).
- **Weekly review** of retention, economy, and safety metrics.
- Insights feed **MILESTONE_PLAN.md** and the roadmap.

---

## 6. Rules

1. **Privacy first.** No surveillance; measure systems, not people.
2. **Every feature wires its analytics** (Definition of Done).
3. **Metrics drive decisions**, not vanity.
4. **Anti-metrics are tracked too** — what we refuse to optimise for.
