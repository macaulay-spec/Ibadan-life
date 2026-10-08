# IBADAN LIFE – Master Project Index

**Version:** 2.0  
**Last Updated:** October 2026  
**Status:** Active Source of Truth  
**Owner:** Project Lead / Design Authority  
**Tier:** 0  

> **North Star:** the single, honest map of every document in this project — what exists, what is planned, and who owns it.

---

## 1. Project Identity

| Field | Value |
|-------|-------|
| **Project Name** | IBADAN LIFE |
| **Tagline** | Your city. Your hustle. Your story. |
| **Codename** | IBADAN |
| **Engine** | Unreal Engine 5 (mobile-first) |
| **Genre** | Persistent 3D Open-World Multiplayer Life Simulation |
| **Platform Priority** | Android (primary) → iOS → possible future PC/Console |
| **Current Phase** | Phase 0 complete → entering Phase 1 (Core Engine & Network) |

---

## 2. One-Sentence Definition

IBADAN LIFE is a persistent, multiplayer, 3D open-world Nigerian life simulation in which real players freely inhabit, work, socialise, trade, own property and businesses, and create their own stories inside a physically explorable city inspired by Ibadan.

---

## 3. Documentation Hierarchy (Source of Truth Order)

| Tier | Category | Authority | Change Process |
|------|----------|-----------|----------------|
| 0 | Master, Brand & Product Truth | Highest | Formal ADR + Project Lead |
| 1 | Core Design & World | High | Design Review + ADR if major |
| 2 | System Specifications | Medium-High | System Owner + Design Review |
| 3 | Technical Architecture | Medium-High | Tech Lead + ADR for major decisions |
| 4 | Production, AI Agents, Ops | Medium | Relevant Lead |
| 5 | Catalogues, Working Docs | Lowest | Free (must not contradict higher tiers) |

**Rule:** No lower-tier document may contradict a higher-tier document. Tier 0/1 changes require an ADR.

---

## 4. Complete Documentation Map

Status: ✅ Complete · 🚧 In progress · 📋 Planned (phase)

### 00_MASTER
- ✅ MASTER_PROJECT_INDEX.md (this file)
- ✅ SOURCE_OF_TRUTH.md
- ✅ PROJECT_GLOSSARY.md
- ✅ DOCUMENTATION_STANDARDS.md
- ✅ BRAND_AND_TONE_OF_VOICE.md *(new — the rebrand)*
- ✅ ONBOARDING_GUIDE.md *(new — start here)*
- ✅ PROJECT_TAKEOVER_PLAN.md *(new — the programme)*

### 01_PRODUCT (Tier 0)
- ✅ PROJECT_CHARTER.md
- ✅ PRODUCT_VISION.md
- ✅ DESIGN_PILLARS.md
- ✅ PROJECT_GOALS.md
- ✅ NON_GOALS.md
- ✅ SUCCESS_METRICS.md
- ✅ TARGET_AUDIENCE.md
- ✅ COMPETITIVE_POSITIONING.md

### 02_DESIGN (Tier 1)
- ✅ MASTER_GAME_DESIGN_DOCUMENT.md
- ✅ CORE_GAME_LOOP.md
- ✅ PLAYER_EXPERIENCE.md
- ✅ PLAYER_JOURNEY.md
- ✅ PROGRESSION_DESIGN.md
- ✅ MVP_GAMEPLAY_SCOPE.md
- ✅ VERTICAL_SLICE_DEFINITION.md

### 03_WORLD
- ✅ WORLD_BIBLE.md
- ✅ IBADAN_WORLD_SPEC.md
- ✅ CITY_LAYOUT.md
- ✅ DISTRICT_BIBLE.md
- ✅ TIME_AND_DAY_NIGHT.md *(new)*
- ✅ WORLD_STREAMING_STRATEGY.md
- 📋 (P2) WEATHER_SYSTEM.md
- 📋 (P2) TRANSPORT_NETWORK.md
- 📋 (P2) WORLD_SIMULATION.md
- 📋 (P2) LOCATION_CATALOG.md
- 📋 (P2) BUILDING_CATALOG.md

### 04_SYSTEMS
**Player**
- ✅ PLAYER_BIBLE.md
- ✅ CHARACTER_CREATION.md *(new)*
- ✅ SKILL_AND_ATTRIBUTE_SYSTEM.md *(new)*
- ✅ REPUTATION_SYSTEM.md *(new)*
- 📋 (P2) AVATAR_AND_CUSTOMIZATION.md

**Life Simulation**
- ✅ LIFE_SIMULATION_MASTER.md
- ✅ NEEDS_SYSTEM.md

**Economy**
- ✅ ECONOMY_MASTER_SPEC.md
- ✅ CURRENCY_AND_BANKING.md *(new)*
- ✅ PLAYER_MARKETPLACE.md *(new)*

**Businesses**
- ✅ BUSINESS_MASTER_SPEC.md

**Property**
- ✅ PROPERTY_SYSTEM.md

**Jobs**
- ✅ JOB_AND_CAREER_SYSTEM.md

**Vehicles & Transport**
- ✅ TRANSPORT_AND_VEHICLE_SYSTEM.md

**Social**
- ✅ SOCIAL_AND_RELATIONSHIP_SYSTEM.md

**Crime & Law**
- ✅ CRIME_AND_LAW_SYSTEM.md

**Inventory**
- ✅ INVENTORY_AND_ITEM_SYSTEM.md

### 05_TECHNICAL
- ✅ SYSTEM_ARCHITECTURE.md
- ✅ UNREAL_ENGINE_ARCHITECTURE.md
- ✅ BACKEND_ARCHITECTURE.md *(new)*
- ✅ NETWORK_ARCHITECTURE.md
- ✅ DATABASE_AND_DATA_MODEL.md *(new)*
- ✅ SAVE_AND_PERSISTENCE.md *(new)*
- ✅ AUTHENTICATION_AND_ACCOUNT.md *(new)*
- ✅ PERFORMANCE_AND_MOBILE_TARGETS.md
- ✅ SECURITY_ARCHITECTURE.md
- 📋 (P2) WORLD_STREAMING_TECHNICAL.md

### 06_MULTIPLAYER
- ✅ MULTIPLAYER_MASTER_SPEC.md
- ✅ SERVER_AUTHORITY_AND_REPLICATION.md
- ✅ WORLD_INSTANCING_STRATEGY.md *(new)*
- 📋 (P2) PLAYER_SESSION_AND_PRESENCE.md

### 07_ART_AUDIO
- ✅ ART_BIBLE.md
- ✅ VISUAL_DIRECTION.md *(new)*
- ✅ CHARACTER_ART_BIBLE.md *(new)*
- ✅ ENVIRONMENT_ART_BIBLE.md *(new)*
- ✅ CULTURAL_AUTHENTICITY_GUIDE.md
- 📋 (P2) AUDIO_BIBLE.md
- 📋 (P2) ASSET_PIPELINE_AND_STANDARDS.md

### 08_PRODUCTION
- ✅ DEVELOPMENT_ROADMAP.md
- ✅ MILESTONE_PLAN.md *(new)*
- ✅ VERTICAL_SLICE_PLAN.md
- ✅ MVP_PLAN.md
- ✅ FEATURE_DEPENDENCY_MAP.md *(new)*
- ✅ DEFINITION_OF_READY.md *(new)*
- ✅ DEFINITION_OF_DONE.md

### 09_AI_AGENTS
- ✅ AGENTS.md
- ✅ AI_DEVELOPMENT_PROTOCOL.md
- ✅ AI_AGENT_ROLES_AND_HIERARCHY.md *(new)*
- ✅ AGENT_CONTEXT_AND_PERMISSIONS.md *(new)*
- ✅ AI_CODING_AND_UNREAL_RULES.md *(new)*
- ✅ AI_CHANGE_CONTROL.md *(new)*
- 📋 (P2) AGENT_HANDOFF_AND_VALIDATION.md

### 10_OPERATIONS
- ✅ LIVE_OPERATIONS.md
- ✅ MODERATION_AND_SAFETY.md
- ✅ ANALYTICS_AND_METRICS.md *(new)*
- ✅ INCIDENT_AND_HOTFIX_PROCESS.md *(new)*
- ✅ ECONOMY_MONITORING.md *(new)*

### 11_LEGAL_BUSINESS
- ✅ BUSINESS_MODEL_AND_MONETIZATION.md
- ✅ CONTENT_AND_COMMUNITY_POLICY.md
- ✅ PRIVACY_AND_DATA_PROTECTION.md *(new)*
- ✅ AGE_RATING_AND_LEGAL.md *(new)*

### ADR/
- ✅ ADR-0001-Template.md
- ✅ ADR-0002-Documentation-Rebrand-And-Elevation.md *(new)*
- ADR-0003+ … (numbered as created)

### AGENT_DECISIONS/
- ✅ 2026-10-08-takeover.md *(new)*
- … (every consequential agent decision)

### DIAGRAMS/
- 📋 (P2) Mermaid sources for architecture, core loop, economy, districts

---

## 5. How to Use This Index

1. **New here?** Start with [ONBOARDING_GUIDE.md](ONBOARDING_GUIDE.md).
2. **Looking for a document?** It is listed above with its status. ✅ = read it now. 📋 = scheduled; see [PROJECT_TAKEOVER_PLAN.md](PROJECT_TAKEOVER_PLAN.md) §5.
3. **Changing something?** Check the Tier table first. Tier 0/1 changes need an ADR.
4. **AI agents?** Declare which documents you are operating under before acting.

---

## 6. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0 | Oct 2026 | Project Lead (takeover) | Full rebrand; honest status map; new docs added; takeover plan linked |
| 1.0 | Oct 2026 | Project Authority | Initial complete structure |
