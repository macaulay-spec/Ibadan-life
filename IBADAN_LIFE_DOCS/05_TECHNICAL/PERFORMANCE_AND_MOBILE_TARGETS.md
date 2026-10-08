# PERFORMANCE AND MOBILE TARGETS – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead  
**Tier:** 3  
**Depends On:** UNREAL_ENGINE_ARCHITECTURE.md, WORLD_STREAMING_STRATEGY.md, DESIGN_PILLARS.md  

> **North Star:** a beautiful, living city that runs smoothly on the mid-range Android phones our players actually own — because Mobile-First Reality is a pillar, not a wish.

---

## 1. Target Device

We design for a **mid-range Android phone** (the device our audience owns), not a flagship. If it runs well there, it runs well everywhere.

---

## 2. Hard Targets

| Metric | Target |
|--------|--------|
| **Frame rate** | **60 FPS** target; **30 FPS** hard floor in district centres |
| **Crash-free sessions** | ≥ 99.5% |
| **Cold load into world** | Under ~15 seconds on target device |
| **Streaming hitches** | None visible during normal walking/driving |
| **Memory** | Within a mobile-safe budget (no thermal throttling spirals) |
| **Battery / thermal** | No sustained throttling during normal play |
| **Download size** | Small, efficient build; respect data costs |

---

## 3. How We Hit It

| Technique | Purpose |
|-----------|---------|
| **World Partition streaming** | Load only what is near |
| **Aggressive LODs** | Less detail as distance grows |
| **GPU Lightmass (baked lighting)** | Quality without runtime cost |
| **Modular avatars + mesh merge** | 1 draw call per character |
| **Impostors / simplified rigs** | Cheap crowds at distance |
| **Small textures, compressed assets** | Lower memory and download |
| **Niagara tuned for mobile** | Effects within budget |
| **Graceful degradation** | Lower quality on weak devices; never freeze |

---

## 4. Avatar Performance Budget

| LOD | Context | Triangle budget |
|-----|---------|-----------------|
| LOD0 | Inventory inspection | ~15,000 |
| LOD1 | < 10 m | ~6,000 |
| LOD2 | 10–30 m | ~2,500 |
| LOD3 | > 30 m / crowds | ~800 (impostor) |

---

## 5. Measuring & Enforcing

- **Automated:** CI/CD builds run **headless bot clients** that stress-test replication, memory, and zone transitions under load.
- **Per-device testing** on a range of mid-range Android hardware.
- **Telemetry:** FPS, memory, crashes, load times, and hitches are tracked in production (see ANALYTICS_AND_METRICS.md).
- **Performance is a Definition-of-Done gate** — a feature that breaks the budget does not ship.

---

## 6. Rules

1. **Mobile-first, always.** We do not "port down" from PC.
2. **Measure on real devices**, not just editor.
3. **Budget is a contract.** Exceeding it requires an ADR-level trade-off.
4. **The player's data and battery matter** as much as FPS.
