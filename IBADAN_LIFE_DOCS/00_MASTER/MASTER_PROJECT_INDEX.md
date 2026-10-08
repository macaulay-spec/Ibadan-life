# IBADAN LIFE – Master Project Index

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active Source of Truth  
**Owner:** Project Lead / Design Authority  

---

## 1. Project Identity

**Project Name:** IBADAN LIFE  
**Codename:** IBADAN  
**Engine:** Unreal Engine 5 (mobile-first)  
**Genre:** Persistent 3D Open-World Multiplayer Life Simulation  
**Platform Priority:** Android (primary) → iOS → possible future PC/Console  
**Current Phase:** Pre-Production / System & Design Planning  

---

## 2. One-Sentence Definition

IBADAN LIFE is a persistent, multiplayer, 3D open-world Nigerian life simulation in which real players freely inhabit, work, socialise, trade, own property and businesses, and create their own stories inside a physically explorable city inspired by Ibadan.

---

## 3. Documentation Hierarchy (Source of Truth Order)

| Tier | Category                        | Authority Level      | Change Process                  |
|------|---------------------------------|----------------------|---------------------------------|
| 0    | Master & Product Truth          | Highest              | Formal ADR + Project Lead       |
| 1    | Core Design & World             | High                 | Design Review + ADR if major    |
| 2    | System Specifications           | Medium-High          | System Owner + Design Review    |
| 3    | Technical Architecture          | Medium-High          | Tech Lead + ADR for major decisions |
| 4    | Production, AI Agents, Ops      | Medium               | Relevant Lead                   |
| 5    | Catalogues, Working Docs        | Lowest               | Can be updated freely (must not contradict higher tiers) |

**Rule:** No document in a lower tier may contradict a higher-tier document. Any conflict is resolved in favour of the higher tier. Changes to Tier 0 or Tier 1 require an Architecture Decision Record (ADR).

---

## 4. Complete Documentation Map

### 00_MASTER
- MASTER_PROJECT_INDEX.md (this file)
- SOURCE_OF_TRUTH.md
- PROJECT_GLOSSARY.md
- DOCUMENTATION_STANDARDS.md

### 01_PRODUCT
- PROJECT_CHARTER.md
- PRODUCT_VISION.md
- DESIGN_PILLARS.md
- PROJECT_GOALS.md
- NON_GOALS.md
- SUCCESS_METRICS.md
- TARGET_AUDIENCE.md
- COMPETITIVE_POSITIONING.md

### 02_DESIGN
- MASTER_GAME_DESIGN_DOCUMENT.md
- CORE_GAME_LOOP.md
- PLAYER_EXPERIENCE.md
- PLAYER_JOURNEY.md
- PROGRESSION_DESIGN.md
- MVP_GAMEPLAY_SCOPE.md
- VERTICAL_SLICE_DEFINITION.md

### 03_WORLD
- WORLD_BIBLE.md
- IBADAN_WORLD_SPEC.md
- CITY_LAYOUT.md
- DISTRICT_BIBLE.md
- LOCATION_CATALOG.md
- BUILDING_CATALOG.md
- TRANSPORT_NETWORK.md
- WORLD_SIMULATION.md
- TIME_AND_DAY_NIGHT.md
- WEATHER_SYSTEM.md
- WORLD_STREAMING_STRATEGY.md

### 04_SYSTEMS
**Player**  
- PLAYER_BIBLE.md  
- CHARACTER_CREATION.md  
- AVATAR_AND_CUSTOMIZATION.md  
- SKILL_AND_ATTRIBUTE_SYSTEM.md  
- REPUTATION_SYSTEM.md  

**Life Simulation**  
- LIFE_SIMULATION_MASTER.md  
- NEEDS_SYSTEM.md  

**Economy**  
- ECONOMY_MASTER_SPEC.md  
- CURRENCY_AND_BANKING.md  
- PLAYER_MARKETPLACE.md  

**Businesses**  
- BUSINESS_MASTER_SPEC.md  

**Property**  
- PROPERTY_SYSTEM.md  

**Jobs**  
- JOB_AND_CAREER_SYSTEM.md  

**Vehicles & Transport**  
- TRANSPORT_AND_VEHICLE_SYSTEM.md  

**Social**  
- SOCIAL_AND_RELATIONSHIP_SYSTEM.md  

**Crime & Law**  
- CRIME_AND_LAW_SYSTEM.md  

**Inventory**  
- INVENTORY_AND_ITEM_SYSTEM.md  

### 05_TECHNICAL
- SYSTEM_ARCHITECTURE.md
- UNREAL_ENGINE_ARCHITECTURE.md
- BACKEND_ARCHITECTURE.md
- NETWORK_ARCHITECTURE.md
- DATABASE_AND_DATA_MODEL.md
- SAVE_AND_PERSISTENCE.md
- AUTHENTICATION_AND_ACCOUNT.md
- PERFORMANCE_AND_MOBILE_TARGETS.md
- SECURITY_ARCHITECTURE.md
- WORLD_STREAMING_TECHNICAL.md

### 06_MULTIPLAYER
- MULTIPLAYER_MASTER_SPEC.md
- SERVER_AUTHORITY_AND_REPLICATION.md
- PLAYER_SESSION_AND_PRESENCE.md
- WORLD_INSTANCING_STRATEGY.md

### 07_ART_AUDIO
- ART_BIBLE.md
- VISUAL_DIRECTION.md
- CHARACTER_ART_BIBLE.md
- ENVIRONMENT_ART_BIBLE.md
- AUDIO_BIBLE.md
- CULTURAL_AUTHENTICITY_GUIDE.md
- ASSET_PIPELINE_AND_STANDARDS.md

### 08_PRODUCTION
- DEVELOPMENT_ROADMAP.md
- MILESTONE_PLAN.md
- VERTICAL_SLICE_PLAN.md
- MVP_PLAN.md
- FEATURE_DEPENDENCY_MAP.md
- DEFINITION_OF_READY.md
- DEFINITION_OF_DONE.md

### 09_AI_AGENTS
- AGENTS.md
- AI_DEVELOPMENT_PROTOCOL.md
- AI_AGENT_ROLES_AND_HIERARCHY.md
- AGENT_CONTEXT_AND_PERMISSIONS.md
- AGENT_HANDOFF_AND_VALIDATION.md
- AI_CODING_AND_UNREAL_RULES.md
- AI_CHANGE_CONTROL.md

### 10_OPERATIONS
- LIVE_OPERATIONS.md
- MODERATION_AND_SAFETY.md
- ANALYTICS_AND_METRICS.md
- INCIDENT_AND_HOTFIX_PROCESS.md
- ECONOMY_MONITORING.md

### 11_LEGAL_BUSINESS
- BUSINESS_MODEL_AND_MONETIZATION.md
- CONTENT_AND_COMMUNITY_POLICY.md
- PRIVACY_AND_DATA_PROTECTION.md
- AGE_RATING_AND_LEGAL.md

### ADR/
Architecture Decision Records (numbered ADR-0001, ADR-0002…)

### AGENT_DECISIONS/
Consequential decisions made by AI agents during development

### DIAGRAMS/
All Mermaid source diagrams and exported visuals

---

## 5. How to Use This Index

1. Always start here when onboarding a new human or AI agent.
2. Follow the Tier hierarchy strictly.
3. Before proposing any significant design or technical change, check whether it conflicts with a higher-tier document.
4. All major architectural or design decisions must be recorded as an ADR.

---

## 6. Version History

| Version | Date       | Author          | Changes                     |
|---------|------------|-----------------|-----------------------------|
| 1.0     | Oct 2026   | Project Authority | Initial complete structure |
