# PROJECT TAKEOVER PLAN – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Project Lead / Design Authority  
**Tier:** 0 (Programme Plan)  
**Depends On:** PROJECT_CHARTER.md, PRODUCT_VISION.md, MASTER_PROJECT_INDEX.md, BRAND_AND_TONE_OF_VOICE.md  

---

## North Star

Take over this project properly: understand it deeply, rebrand it to world-class taste, rewrite every document to that standard, fill the gaps, and lay out a full plan to build one of the best games in the world.

---

## 1. Mission and Ambition

> **We are building one of the best games in the world.**

Not "a nice life sim." Not "a Nigerian GTA." **One of the best games in the world** — a persistent, 3D, multiplayer, player-driven city, inspired by Ibadan, that runs on the phones our players actually own, and that millions will one day call home.

That ambition is not marketing. It is a quality bar. It means:

- Every document is specific, complete, and implementable — no stubs, no filler.
- Every system creates real interdependence between real players.
- The city feels unmistakably like Ibadan — its roofs, its buses, its food, its humour, its hustle.
- It runs beautifully on a mid-range Android phone, because that is where our players are.
- It is built to last and grow for years as a live service.

---

## 2. Current-State Assessment (Where We Actually Are)

An honest audit of the documentation set as it stood at takeover.

### What is strong (keep and elevate)
- A clear, correct **vision and identity**: persistent 3D multiplayer life sim, real-player-first, Ibadan-specific, mobile-first.
- A sound **tiered Source-of-Truth hierarchy** that prevents contradiction.
- Six **design pillars** that are genuinely non-negotiable and well chosen.
- A rich **research foundation** (`Ibadan Life Research Brief.pdf`, 22 pages): six named districts with instance densities, a five-tier supply chain, a career taxonomy, an ethical monetisation framework, UE5 technical direction, and a phased roadmap.
- Sensible **non-goals** that protect identity.

### What is weak (fix decisively)
- **27 of 46 documents are empty stubs** ("to be expanded later") — including every system spec, the entire technical folder (except one file), multiplayer, art/audio, production, ops, and legal/business. The game's heart was undocumented.
- The **MASTER_PROJECT_INDEX references ~30 documents that do not exist** (e.g., CURRENCY_AND_BANKING, CHARACTER_CREATION, BACKEND_ARCHITECTURE, DISTRICT-level catalogues, AI-agent role docs). The map promised more than the library held.
- The written Tier 0/1 docs are **competent but generic** — correct, yet not distinctive. They read like any project's docs. They do not yet *sound* like IBADAN LIFE.
- **Navigation was minimal**: a README pointing at an index, with no role-based onboarding, no status visibility, no quick-start.

### Net position
A good skeleton with the right philosophy, but the body was missing and the voice was flat. The takeover fixes both.

---

## 3. Brand Direction (The Rebrand)

The game keeps its name — **IBADAN LIFE** is the identity anchor and it is strong. The rebrand elevates everything around it.

| Element | Decision |
|---------|----------|
| **Tagline** | *Your city. Your hustle. Your story.* |
| **Voice** | Specific, confident, warm, respectful, zero filler (see BRAND_AND_TONE_OF_VOICE.md) |
| **Navigation** | Role-based onboarding + a status-honest master index (see ONBOARDING_GUIDE.md, MASTER_PROJECT_INDEX.md) |
| **Quality bar** | No stubs. Every doc complete, specific, implementable. |
| **Authenticity** | Ibadan-specific districts, Yorùbá/Pidgin terms used respectfully and defined, real cultural texture |

Full brand rules: `00_MASTER/BRAND_AND_TONE_OF_VOICE.md`.

---

## 4. The Rewrite Programme (Every Existing Document)

Status legend: ✅ Rewritten to brand standard · 🚧 Rewritten, needs expansion · 📋 Planned (Phase 2/3)

### 00_MASTER
| Document | Status | Action |
|----------|--------|--------|
| MASTER_PROJECT_INDEX.md | ✅ | Rewritten v2.0 — full map with honest status for every doc |
| SOURCE_OF_TRUTH.md | ✅ | Polished — references brand constitution |
| PROJECT_GLOSSARY.md | ✅ | Expanded — all brand/culture/technical terms defined |
| DOCUMENTATION_STANDARDS.md | ✅ | Polished — adds brand voice rules |
| BRAND_AND_TONE_OF_VOICE.md | ✅ | **NEW** — the rebrand constitution |
| ONBOARDING_GUIDE.md | ✅ | **NEW** — 15-minute core path + role paths |
| PROJECT_TAKEOVER_PLAN.md | ✅ | **NEW** — this document |

### 01_PRODUCT (Tier 0) — all rewritten to brand voice
| Document | Status |
|----------|--------|
| PROJECT_CHARTER.md | ✅ v2.0 |
| PRODUCT_VISION.md | ✅ v2.0 |
| DESIGN_PILLARS.md | ✅ v2.0 |
| PROJECT_GOALS.md | ✅ v2.0 |
| NON_GOALS.md | ✅ v2.0 |
| SUCCESS_METRICS.md | ✅ v2.0 |
| TARGET_AUDIENCE.md | ✅ v2.0 |
| COMPETITIVE_POSITIONING.md | ✅ v2.0 |

### 02_DESIGN (Tier 1)
| Document | Status |
|----------|--------|
| MASTER_GAME_DESIGN_DOCUMENT.md | ✅ v2.0 |
| CORE_GAME_LOOP.md | ✅ v2.0 — adds 30s / 5-min / 30-min loops |
| MVP_GAMEPLAY_SCOPE.md | ✅ v2.0 |
| VERTICAL_SLICE_DEFINITION.md | ✅ v2.0 |
| WORLD_BIBLE.md | ✅ v2.0 — adds the six districts |
| PLAYER_EXPERIENCE.md | ✅ Filled v1.0 (was stub) |
| PLAYER_JOURNEY.md | ✅ Filled v1.0 (was stub) |
| PROGRESSION_DESIGN.md | ✅ Filled v1.0 (was stub) |

### 03_WORLD
| Document | Status |
|----------|--------|
| IBADAN_WORLD_SPEC.md | ✅ Filled v1.0 (was stub) |
| CITY_LAYOUT.md | ✅ Filled v1.0 (was stub) |
| DISTRICT_BIBLE.md | ✅ Filled v1.0 — six districts, landmarks, densities |
| WORLD_STREAMING_STRATEGY.md | ✅ Filled v1.0 (was stub) |
| TIME_AND_DAY_NIGHT.md | ✅ **NEW** |
| WEATHER_SYSTEM.md | 📋 Planned Phase 2 |
| TRANSPORT_NETWORK.md | 📋 Planned Phase 2 |
| WORLD_SIMULATION.md | 📋 Planned Phase 2 |
| LOCATION_CATALOG.md | 📋 Planned Phase 2 |
| BUILDING_CATALOG.md | 📋 Planned Phase 2 |

### 04_SYSTEMS (all stubs filled)
| Document | Status |
|----------|--------|
| Player/PLAYER_BIBLE.md | ✅ Filled v1.0 |
| Player/CHARACTER_CREATION.md | ✅ **NEW** — Nepo/Lapo backgrounds, avatar creation |
| Player/AVATAR_AND_CUSTOMIZATION.md | 📋 Planned Phase 2 |
| Player/SKILL_AND_ATTRIBUTE_SYSTEM.md | ✅ **NEW** |
| Player/REPUTATION_SYSTEM.md | ✅ **NEW** |
| Life_Simulation/LIFE_SIMULATION_MASTER.md | ✅ Filled v1.0 |
| Life_Simulation/NEEDS_SYSTEM.md | ✅ Filled v1.0 — six needs |
| Economy/ECONOMY_MASTER_SPEC.md | ✅ Filled v1.0 — faucets, sinks, supply chain |
| Economy/CURRENCY_AND_BANKING.md | ✅ **NEW** — Naira, wallet, 2.5% tax |
| Economy/PLAYER_MARKETPLACE.md | ✅ **NEW** |
| Businesses/BUSINESS_MASTER_SPEC.md | ✅ Filled v1.0 |
| Property/PROPERTY_SYSTEM.md | ✅ Filled v1.0 |
| Jobs/JOB_AND_CAREER_SYSTEM.md | ✅ Filled v1.0 — career taxonomy |
| Vehicles/TRANSPORT_AND_VEHICLE_SYSTEM.md | ✅ Filled v1.0 — danfo/okada/keke/micra |
| Social/SOCIAL_AND_RELATIONSHIP_SYSTEM.md | ✅ Filled v1.0 |
| Crime/CRIME_AND_LAW_SYSTEM.md | ✅ Filled v1.0 |
| Inventory/INVENTORY_AND_ITEM_SYSTEM.md | ✅ Filled v1.0 |

### 05_TECHNICAL
| Document | Status |
|----------|--------|
| SYSTEM_ARCHITECTURE.md | ✅ Kept, polished |
| UNREAL_ENGINE_ARCHITECTURE.md | ✅ Filled v1.0 — GAS, World Partition, Iris, avatars |
| BACKEND_ARCHITECTURE.md | ✅ **NEW** |
| NETWORK_ARCHITECTURE.md | ✅ Filled v1.0 — dedicated servers, sharding |
| DATABASE_AND_DATA_MODEL.md | ✅ **NEW** |
| SAVE_AND_PERSISTENCE.md | ✅ **NEW** |
| AUTHENTICATION_AND_ACCOUNT.md | ✅ **NEW** |
| PERFORMANCE_AND_MOBILE_TARGETS.md | ✅ Filled v1.0 — LOD budgets, FPS targets |
| SECURITY_ARCHITECTURE.md | ✅ Filled v1.0 — server authority, anti-cheat |
| WORLD_STREAMING_TECHNICAL.md | 📋 Planned Phase 2 |

### 06_MULTIPLAYER
| Document | Status |
|----------|--------|
| MULTIPLAYER_MASTER_SPEC.md | ✅ Filled v1.0 |
| SERVER_AUTHORITY_AND_REPLICATION.md | ✅ Filled v1.0 |
| PLAYER_SESSION_AND_PRESENCE.md | 📋 Planned Phase 2 |
| WORLD_INSTANCING_STRATEGY.md | ✅ **NEW** — district instancing & density |

### 07_ART_AUDIO
| Document | Status |
|----------|--------|
| ART_BIBLE.md | ✅ Filled v1.0 — rust-tinted roofs, modular avatars |
| VISUAL_DIRECTION.md | ✅ **NEW** |
| CHARACTER_ART_BIBLE.md | ✅ **NEW** — attire, morph targets, LODs |
| ENVIRONMENT_ART_BIBLE.md | ✅ **NEW** |
| AUDIO_BIBLE.md | 📋 Planned Phase 2 |
| CULTURAL_AUTHENTICITY_GUIDE.md | ✅ Filled v1.0 |
| ASSET_PIPELINE_AND_STANDARDS.md | 📋 Planned Phase 2 |

### 08_PRODUCTION
| Document | Status |
|----------|--------|
| DEVELOPMENT_ROADMAP.md | ✅ Filled v1.0 — 4 phases, MVP1/MVP2/Post-MVP/Full |
| MILESTONE_PLAN.md | ✅ **NEW** |
| VERTICAL_SLICE_PLAN.md | ✅ Filled v1.0 |
| MVP_PLAN.md | ✅ Filled v1.0 |
| FEATURE_DEPENDENCY_MAP.md | ✅ **NEW** |
| DEFINITION_OF_READY.md | ✅ **NEW** |
| DEFINITION_OF_DONE.md | ✅ Filled v1.0 |

### 09_AI_AGENTS
| Document | Status |
|----------|--------|
| AGENTS.md | ✅ Kept, polished |
| AI_DEVELOPMENT_PROTOCOL.md | ✅ Kept, polished |
| AI_AGENT_ROLES_AND_HIERARCHY.md | ✅ **NEW** |
| AGENT_CONTEXT_AND_PERMISSIONS.md | ✅ **NEW** |
| AGENT_HANDOFF_AND_VALIDATION.md | 📋 Planned Phase 2 |
| AI_CODING_AND_UNREAL_RULES.md | ✅ **NEW** |
| AI_CHANGE_CONTROL.md | ✅ **NEW** |

### 10_OPERATIONS
| Document | Status |
|----------|--------|
| LIVE_OPERATIONS.md | ✅ Filled v1.0 |
| MODERATION_AND_SAFETY.md | ✅ Filled v1.0 |
| ANALYTICS_AND_METRICS.md | ✅ **NEW** |
| INCIDENT_AND_HOTFIX_PROCESS.md | ✅ **NEW** |
| ECONOMY_MONITORING.md | ✅ **NEW** |

### 11_LEGAL_BUSINESS
| Document | Status |
|----------|--------|
| BUSINESS_MODEL_AND_MONETIZATION.md | ✅ Filled v1.0 — ethical, non-P2W framework |
| CONTENT_AND_COMMUNITY_POLICY.md | ✅ Filled v1.0 |
| PRIVACY_AND_DATA_PROTECTION.md | ✅ **NEW** |
| AGE_RATING_AND_LEGAL.md | ✅ **NEW** |

### ADR / AGENT_DECISIONS / DIAGRAMS
| Item | Status |
|------|--------|
| ADR-0001-Template.md | ✅ Kept |
| ADR-0002 (Documentation Rebrand & Elevation) | ✅ **NEW** |
| AGENT_DECISIONS/2026-10-08-takeover.md | ✅ **NEW** — this takeover logged |
| DIAGRAMS/ | 📋 Planned Phase 2 — Mermaid sources for architecture & loops |

---

## 5. New-Document Backlog (Planned, with Owners)

These are referenced by the index but not yet written. They are scheduled, not forgotten.

| Phase | Documents | Owner (role) |
|-------|-----------|--------------|
| **Phase 2 (Vertical Slice build)** | WEATHER_SYSTEM, TRANSPORT_NETWORK, WORLD_SIMULATION, LOCATION_CATALOG, BUILDING_CATALOG, AVATAR_AND_CUSTOMIZATION, WORLD_STREAMING_TECHNICAL, PLAYER_SESSION_AND_PRESENCE, AUDIO_BIBLE, ASSET_PIPELINE_AND_STANDARDS, AGENT_HANDOFF_AND_VALIDATION, DIAGRAMS/* | World / Systems / Tech / Art agents |
| **Phase 3 (MVP & scale)** | Remaining expansions, seasonal content bibles, district governance detail, advanced crime/law depth | Relevant leads |

---

## 6. The Quality Bar (What "Excellent" Means Here)

A document is excellent when:

1. **It is complete.** No stubs, no "to be expanded." If scope is large, it is broken into linked sub-documents — all present.
2. **It is specific.** Real names, real numbers, real examples. "Bodija Market," "₦500," "danfo," "2.5% tax."
3. **It is implementable.** An engineer or designer could start work from it without guessing.
4. **It serves a pillar.** It strengthens at least one design pillar and undermines none.
5. **It sounds like us.** Specific, confident, warm, respectful, no filler (BRAND_AND_TONE_OF_VOICE.md).
6. **It respects the tiers.** It never contradicts a higher-tier document.

---

## 7. Execution Roadmap (Order of Operations)

### Phase 0 — Takeover & Brand Foundation (THIS PHASE) ✅
- Understand the project (read all docs + research brief).
- Establish brand voice and navigation.
- Rewrite Tier 0/1 and navigation to brand standard.
- Fill every existing stub with a complete v1.0 spec.
- Add load-bearing new docs (economy, character, skills, reputation, marketplace, backend, database, save, auth, milestones).
- Log the takeover (ADR-0002 + AGENT_DECISIONS).
- **Exit:** the documentation set is coherent, complete for Phase 1, and unmistakably IBADAN LIFE.

### Phase 1 — Core Engine & Network (build foundation)
Dedicated server (UE5 + Linux/Kubernetes), Iris replication, auth & persistence, database layer. *(Research brief Phase 1)*
**Docs needed:** all of 05_TECHNICAL (done/new), WORLD_INSTANCING_STRATEGY (new).

### Phase 2 — Vertical Slice (prove the fantasy)
Avatar & movement (modular rig, FSkeletalMeshMerge, touch controls), UI Student Hub district, World Partition streaming, GAS needs, inventory, Chaos vehicles (micra, keke), then economy & social (property leasing, supply chain, proximity voice).
**Docs needed:** Phase 2 backlog above + VERTICAL_SLICE_PLAN.

### Phase 3 — MVP 1 → MVP 2 → Live (ship and grow)
MVP 1 (Proof of Concept): UI Student Hub & Samonda Corridor, 32 players/instance, okada/buka/vendor/mechanic/banker/police careers, keke & micra, basic needs, local chat, housing rent.
MVP 2 (Expansion): + Dugbe CBD & Iwo Road, 64 players/instance, logistics & real-estate careers, danfo & cargo vans, full supply chain, player shops, district governance.
Post-MVP: + Bodija & Agodi, 128 players/instance, corporate & promoter careers, luxury vehicles, elections, billboard ad network.
Full Vision: full Ibadan metro (Bower's, Airport), dynamic spatial sharding, full customisation.

---

## 8. Governance

- **Tier 0/1 changes** → ADR + Project Lead approval.
- **This rebrand** → recorded as **ADR-0002**.
- **Agent decisions** → logged in `AGENT_DECISIONS/`. This takeover is logged as `2026-10-08-takeover.md`.
- **Review rhythm:** every rewritten doc is checked against the Quality Bar (§6) and the brand voice before commit.

---

## 9. Success Criteria for This Takeover

- [ ] Zero empty stubs remain in the existing set.
- [ ] Every document follows the standard header + North Star line.
- [ ] Every document passes the brand voice check (specific, confident, warm, no filler).
- [ ] The master index shows an honest status for every document (no broken promises).
- [ ] A new engineer, designer, artist, producer, or agent can onboard via ONBOARDING_GUIDE.md in under 30 minutes.
- [ ] The project reads, in voice and structure, like one of the best games in the world — because it is being built like one.

---

## 10. Immediate Next Actions

1. Commit and push the rebranded, completed documentation set.
2. Open a pull request into `main` so the work is visible under the project.
3. Begin **Phase 1 (Core Engine & Network)** — the first build phase.
4. Schedule Phase 2 backlog docs to their owners.

---

*This plan is the programme of record for the IBADAN LIFE takeover. It is ambitious because the game is ambitious. Let's build one of the best games in the world.*
