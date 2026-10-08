# FEATURE DEPENDENCY MAP – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Production / Systems Design Lead  
**Tier:** 4  
**Depends On:** DEVELOPMENT_ROADMAP.md, MILESTONE_PLAN.md, VERTICAL_SLICE_PLAN.md  

> **North Star:** build in the right order — so nothing is blocked and nothing is built on sand.

---

## 1. How to Read This Map

**A → B** means *A must exist before B can be built.* Build foundations first; features follow.

---

## 2. Foundation Layer (Build First)

| Feature | Depends on | Enables |
|---------|-----------|---------|
| **Auth & accounts** | — | Everything (identity) |
| **Database & persistence** | Auth | All durable state |
| **Dedicated server + replication (Iris)** | — | All multiplayer |
| **Session & reconnection** | Server | Seamless presence |
| **Economy ledger** | Database | All money movement |
| **Modular avatar + movement** | Server | Player presence |
| **World Partition + streaming** | — | The city space |

---

## 3. Feature Layer (Build On Foundations)

| Feature | Depends on | Enables |
|---------|-----------|---------|
| **Needs (GAS)** | Avatar, server | Survival loop |
| **Inventory & items** | Persistence, ledger | Storage, trade |
| **Housing / property** | Persistence, ledger | Home, safe logout |
| **Jobs & careers** | Businesses, skills | Earning paths |
| **Businesses / shops** | Property, inventory, ledger | Player enterprises |
| **Marketplace & P2P trade** | Ledger, inventory | Player economy |
| **Vehicles (Chaos)** | Movement, ledger | Transport, driving jobs |
| **Public transport (danfo/okada/keke/micra)** | Vehicles, world | City movement |
| **Social & relationships** | Server, replication | Crew, friends |
| **Proximity chat / voice** | Social, network | Presence & community |
| **Crime & law** | Social, ledger, reputation | Risk & consequence |
| **Reputation** | Social, economy | Standing & access |
| **District instancing** | Server, matchmaking | Density & scale |

---

## 4. Content Layer (Build Last)

| Feature | Depends on |
|---------|-----------|
| **Districts 2–6** | Slice district + streaming |
| **Advanced fashion / cosmetics** | Avatar + economy |
| **Events & live ops** | Economy monitoring + analytics |
| **Monetisation (cosmetics/ads)** | Economy + policy + store |
| **Elections / district governance** | Reputation + social + instancing |

---

## 5. Golden Rule

**Never build a feature whose dependencies are not green.** If blocked, build the foundation — that is the roadmap working as intended.
