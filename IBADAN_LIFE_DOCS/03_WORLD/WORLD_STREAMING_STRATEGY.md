# WORLD STREAMING STRATEGY – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead / World Design Lead  
**Tier:** 1 (design)  
**Depends On:** IBADAN_WORLD_SPEC.md, CITY_LAYOUT.md, PERFORMANCE_AND_MOBILE_TARGETS.md  

> **North Star:** a big-feeling city that streams seamlessly on a mid-range Android phone — no hitches, no pop-in that breaks presence.

---

## 1. The Problem

A persistent 3D city is huge. A mid-range phone cannot hold it all. **Streaming** — loading nearby world and unloading far world — is how we deliver a big city on a small device, without the player ever feeling the seams.

---

## 2. Core Approach: World Partition

- The city is built as **World Partition tiles** (UE5).
- Tiles load/unload based on **player proximity**.
- **Baked lighting** (GPU Lightmass) keeps quality high at low runtime cost.
- Interiors are separate, lightweight cells that stream in on entry.

---

## 3. Streaming Rules

| Rule | Why |
|------|-----|
| **Proximity-based loading** | Only what is near matters. |
| **Prioritise the player's path** | Load ahead of movement, not behind it. |
| **No visible pop-in in the player's view** | Use fade, fog, and LOD to hide seams. |
| **Audio streams with the world** | A street sounds busy because it *is* busy nearby. |
| **Interiors are cheap cells** | Entering a buka or home is fast and light. |
| **Persistence survives streaming** | Unloading never loses player changes. |

---

## 4. Detail Budgeting

Detail concentrates where players are:

- **District centres, markets, hubs** → highest detail.
- **Arterial roads** → medium detail, good LODs.
- **Edges and alleys** → lighter, but never empty.

---

## 5. Multiplayer & Streaming

- Each district runs as an **instance** (see WORLD_INSTANCING_STRATEGY.md).
- Streaming is **per-player**: two players in the same district see the same world state.
- The server owns what is "really there"; clients stream a faithful, performant view of it.

---

## 6. Targets

- **No streaming hitch** visible during normal walking/driving.
- Smooth **60 FPS target** (30 FPS floor) on mid-range devices in district centres.
- **Fast cold load** into the world (see PERFORMANCE_AND_MOBILE_TARGETS.md).

---

## 7. Failure Handling

- If streaming falls behind, **degrade gracefully**: lower LOD, simpler effects — never freeze.
- On poor networks, prioritise **state correctness** over visual completeness.
