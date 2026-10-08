# UNREAL ENGINE ARCHITECTURE – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead (Unreal)  
**Tier:** 3  
**Depends On:** SYSTEM_ARCHITECTURE.md, PERFORMANCE_AND_MOBILE_TARGETS.md, NETWORK_ARCHITECTURE.md  

> **North Star:** how we build the game in Unreal Engine 5 — the client architecture that delivers a persistent 3D city on a mid-range Android phone.

---

## 1. Client Role

The UE5 client is **mobile-optimised** and responsible for **presentation, input, local prediction (where allowed), and rendering**. It is **never** the authority for game state (money, inventory, ownership, position reconciliation).

---

## 2. Core UE5 Systems We Use

| System | Purpose |
|--------|---------|
| **Gameplay Ability System (GAS)** | Needs, attributes, abilities, effects — the backbone of life-sim and combat-free interactions |
| **World Partition** | Large-world streaming and management (see WORLD_STREAMING_STRATEGY.md) |
| **Iris Replication** | Modern, scalable multiplayer replication |
| **Chaos Physics** | Vehicles and physical interactions |
| **FSkeletalMeshMerge** | Modular avatar assembly (one draw call per character) |
| **GPU Lightmass** | Pre-baked lighting for quality at low runtime cost |
| **Niagara / lightweight VFX** | Effects tuned for mobile |
| **Mass / crowd tech (as needed)** | Ambient life at scale, within budget |

---

## 3. Modular Avatar Architecture

Rendering thousands of distinct players on mobile GPUs demands a **modular** approach:

- **One shared humanoid skeletal master rig** (~62 bones; no per-finger bones on lower LODs).
- **Runtime mesh merging** (FSkeletalMeshMerge): selected slot meshes (head, torso, legs, shoes) merge into **one skeletal mesh** → **1 draw call per character** (down from 8–10).
- **LOD budgets:**
  - LOD0 (inventory inspection): ~15,000 tris
  - LOD1 (proximity <10m): ~6,000 tris
  - LOD2 (10–30m): ~2,500 tris
  - LOD3 (>30m / crowds): ~800 tris (simplified/impostor)
- **Morph targets:** 16 facial scalar parameters (jaw, nose, melanin, lips, cheekbones).

---

## 4. Mobile-First Client Rules

1. **Budget everything:** FPS, memory, thermal, battery, download size.
2. **Stream, don't hold:** World Partition + aggressive LOD.
3. **Bake, don't compute:** lighting and heavy work pre-baked where possible.
4. **Touch-first input:** controls designed for thumbs, not mouse.
5. **Graceful degradation:** on weak devices, lower quality — never freeze.

---

## 5. Module Boundaries

- **Core systems** (player, economy, inventory) are isolated, testable modules.
- **No authoritative game logic on the client.** Ever.
- Clear separation: **presentation (client)** vs **simulation (server)** vs **services (backend)**.

---

## 6. Build & Performance Targets

See PERFORMANCE_AND_MOBILE_TARGETS.md for exact FPS, memory, and thermal targets and how we measure them.

---

## 7. Tooling

- **Version control:** Git; **CI/CD** builds and headless bot-client stress tests.
- **AI-assisted workflow:** Copilot/Claude draft UE5 C++, GAS attributes, and Blender Python automation (see AI_DEVELOPMENT_PROTOCOL.md).
