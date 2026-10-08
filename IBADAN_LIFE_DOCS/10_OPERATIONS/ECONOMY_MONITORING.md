# ECONOMY MONITORING – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Live Operations Lead (Economy)  
**Tier:** 4  
**Depends On:** ECONOMY_MASTER_SPEC.md, CURRENCY_AND_BANKING.md, ANALYTICS_AND_METRICS.md, INCIDENT_AND_HOTFIX_PROCESS.md  

> **North Star:** a healthy, circulating economy — we watch the faucets and sinks so the city's money flows and no one is left behind.

---

## 1. Why We Watch the Economy

A player-driven economy is **alive** — it can boom, stagnate, inflate, or break. Live Ops watches it so we **tune with evidence**, not guesses, and catch problems before players feel them.

---

## 2. What We Monitor

| Signal | What it tells us |
|--------|------------------|
| **Velocity** | How often Naira changes hands (a living economy circulates) |
| **Faucet/sink balance** | Is money entering faster than leaving (inflation) or draining (deflation)? |
| **P2P transaction volume** | Are players trading with each other? |
| **Business revenue from players** | Are player businesses genuinely earning? |
| **Wealth distribution** | Is wealth pooling at the top or spreading? |
| **Marketplace prices** | Are floors/ceilings holding? Any exploitative extremes? |
| **Lapo progression** | Can a new player hustle forward? |

---

## 3. Health Targets

- **Circulation:** healthy velocity; money moves between players.
- **Balance:** faucets ≈ sinks over time; no runaway inflation or deflation.
- **Breadth:** wealth spreads; not extremely top-heavy early.
- **Accessibility:** a new Lapo player can reach stable housing + income.
- **Integrity:** no anomalous spikes (fraud/exploit) — anomalies trigger review.

---

## 4. Tuning Levers

When health drifts, we tune with evidence:

- **Faucets:** wages, relief stipends, job payouts.
- **Sinks:** rent, utilities, taxes (2.5% transfer tax), marketplace fees, fuel/maintenance.
- **Prices:** market floors/ceilings; housing pricing by district.
- **Events:** city events that create spending and earning moments.

---

## 5. Anomalies & Incidents

- **Impossible spikes** (currency, items) → fraud/exploit review (SECURITY_ARCHITECTURE.md).
- **Economy breaks** → SEV incident (INCIDENT_AND_HOTFIX_PROCESS.md); **reconcile from the ledger**.
- All tuning changes are **logged and reversible**.

---

## 6. Cadence

- **Daily:** automated health checks and anomaly alerts.
- **Weekly:** economy review with metrics; tuning decisions recorded.

---

## 7. Rule

**The economy serves the players.** We tune for a **fair, living city** — never for extraction.
