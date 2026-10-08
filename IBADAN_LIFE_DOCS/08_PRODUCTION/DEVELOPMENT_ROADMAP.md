# DEVELOPMENT ROADMAP – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Project Lead / Production  
**Tier:** 4  
**Depends On:** PROJECT_TAKEOVER_PLAN.md, VERTICAL_SLICE_PLAN.md, MVP_PLAN.md, FEATURE_DEPENDENCY_MAP.md  

> **North Star:** a strict, dependency-ordered path from foundation to a living city — so backend always supports the features above it.

---

## 1. The Four Phases

Development follows a **strict dependency order**. Each phase must be green before the next begins.

### Phase 1 — Core Engine & Network Infrastructure
- Dedicated server setup (UE5 + Linux/Kubernetes)
- Iris replication pipeline
- User authentication & database persistence layer

### Phase 2 — Avatar & Movement Systems
- Modular humanoid rig + FSkeletalMeshMerge
- Character customisation interface
- Enhanced touch input & camera mechanics

### Phase 3 — Environment & World Streaming
- World Partition tile setup
- UI Student Hub district architecture
- Pre-baked GPU Lightmass lighting

### Phase 4 — Gameplay, Economy & Social
- GAS needs attributes
- Item crafting, storage & inventory
- Chaos vehicles (micra, keke)
- Property leasing & business storefront logic
- Multi-tier supply chain contracting
- Proximity voice chat (Vivox / EOS)

---

## 2. The Feature Roadmap (MVP → Full Vision)

| Domain | MVP 1 (Proof of Concept) | MVP 2 (Expansion) | Post-MVP | Full Vision |
|--------|--------------------------|-------------------|----------|-------------|
| **Map area** | UI Student Hub & Samonda Corridor | + Dugbe CBD & Iwo Road | + Bodija Estate & Agodi Park | Full Ibadan Metro (Bower's, Airport) |
| **Server density** | 32 players/instance | 64 players/instance | 128 players/instance | Dynamic spatial sharding |
| **Avatar** | Modular base rig + 20 outfits | Expanded apparel + native wear | Custom morphs + hair physics | Full accessories & tattoos |
| **Careers** | Okada driver, buka staff, vendor, mechanic, bank teller, traffic police | + Logistics operator, real estate agent | + Corporate executive, event promoter | Full career lattice |
| **Vehicles** | Keke, micra | + Danfo, cargo vans | + Luxury sedans, sports cars | + Heavy trucks, helicopters |
| **Core systems** | Basic needs, local chat, housing rent | + Full supply chain, player shops | + District governance | + Elections, billboard ad network |

---

## 3. Guiding Rules

1. **Backend before features.** Systems that must persist or validate exist before the features that use them.
2. **Vertical Slice first.** Prove the fantasy in one district before scaling.
3. **No scope creep.** New features enter via the roadmap and FEATURE_DEPENDENCY_MAP.md, with an owner and a pillar.
4. **Quality gates.** Each phase has exit criteria (see MILESTONE_PLAN.md, DEFINITION_OF_DONE.md).

---

## 4. AI-Assisted Workflow

- **Code generation:** Copilot / Claude draft UE5 C++ subsystems, GAS attributes, Blender Python automation.
- **Automated QA:** CI/CD deploys headless bot clients that stress-test replication, memory, and zone transitions under peak load.
- All AI work follows `09_AI_AGENTS/` rules and is logged.
