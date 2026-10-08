# VERTICAL SLICE PLAN – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Production / Design Authority  
**Tier:** 4  
**Depends On:** VERTICAL_SLICE_DEFINITION.md, DEVELOPMENT_ROADMAP.md, MILESTONE_PLAN.md, FEATURE_DEPENDENCY_MAP.md  

> **North Star:** a concrete, buildable plan to deliver the Vertical Slice — one district that proves the whole fantasy.

---

## 1. Slice Location

**UI Student Hub + Samonda Corridor** — academic, dense, affordable, and rich with first-hour stories (hostels, tech kiosks, bukas, campus gates, nearby commerce).

---

## 2. What the Slice Must Prove

1. Third-person movement and presence **feel good on mobile**.
2. A small piece of the city **feels authentic and alive**.
3. **Real players** can be the primary population in a shared space.
4. A basic **economic and survival loop** works.
5. The **technical stack** (Unreal mobile + backend + persistence + replication) supports the vision at small scale.

---

## 3. Slice Build Order (Dependency-Driven)

| # | Workstream | Depends on | Output |
|---|------------|-----------|--------|
| 1 | Dedicated server + auth + DB | — | A server that boots; accounts persist |
| 2 | Replication (Iris) + session/reconnect | 1 | Clients connect; state syncs; reconnect works |
| 3 | Modular avatar + movement + touch controls | 2 | A customisable character that feels good to move |
| 4 | World Partition + UI Student Hub district + baked lighting | 2 | The slice space, streaming, performant |
| 5 | GAS needs + inventory + housing | 3, 4 | Survival loop: needs, items, a home |
| 6 | Basic economy (jobs, shops, P2P trade) | 5 | Ways to earn and spend with other players |
| 7 | Proximity chat + social foundation | 2 | Players meet and talk in the world |
| 8 | Polish, audio, art pass to quality bar | 3–7 | The slice feels intentional and alive |

---

## 4. Slice Feature Set

- Character creation → drop in
- Polished third-person controller + camera (touch)
- Day/night cycle
- Basic needs
- One+ functional housing option
- 2–3 ways to earn (involving other players)
- Basic shops/vendors
- Other real players visible and interactable
- Text communication
- Persistent character save
- Acceptable performance on target devices

---

## 5. Exit Criteria

- Testers play **30–60 minutes** and describe the fantasy correctly.
- **FPS, memory, network, crash rate** within early acceptable ranges.
- Design and engineering agree foundations are **solid enough to expand**.

---

## 6. Quality Bar

Art and audio feel **intentional and culturally grounded** (not greybox). Movement feels good enough to **want to walk around**. The space is a place people **want to return to**.
