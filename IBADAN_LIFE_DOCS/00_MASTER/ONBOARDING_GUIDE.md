# ONBOARDING GUIDE – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Project Lead  
**Tier:** 0 (Navigation)  
**Depends On:** MASTER_PROJECT_INDEX.md, SOURCE_OF_TRUTH.md, BRAND_AND_TONE_OF_VOICE.md  

---

## North Star

Get any new human or AI agent from "I just arrived" to "I know my role and my first task" in under 30 minutes.

---

## The 15-Minute Core Path (Everyone)

Read these five documents, in this order. They define the project.

| # | Document | Why |
|---|----------|-----|
| 1 | `01_PRODUCT/PRODUCT_VISION.md` | The dream we are selling. |
| 2 | `01_PRODUCT/DESIGN_PILLARS.md` | The six non-negotiable rules. |
| 3 | `01_PRODUCT/NON_GOALS.md` | What we refuse to build. |
| 4 | `00_MASTER/SOURCE_OF_TRUTH.md` | Which documents win when they conflict. |
| 5 | `00_MASTER/BRAND_AND_TONE_OF_VOICE.md` | How we sound and write. |

After this path, you understand **what** we are building, **why**, what we **won't** build, and **how** we talk about it.

---

## Role-Based Paths

### I am a Designer
1. `02_DESIGN/MASTER_GAME_DESIGN_DOCUMENT.md`
2. `02_DESIGN/CORE_GAME_LOOP.md`
3. `02_DESIGN/PLAYER_JOURNEY.md` + `PLAYER_EXPERIENCE.md`
4. `02_DESIGN/PROGRESSION_DESIGN.md`
5. The system specs in `04_SYSTEMS/` relevant to your feature

### I am an Engineer (Unreal / Backend)
1. `05_TECHNICAL/SYSTEM_ARCHITECTURE.md`
2. `05_TECHNICAL/UNREAL_ENGINE_ARCHITECTURE.md`
3. `05_TECHNICAL/NETWORK_ARCHITECTURE.md` + `BACKEND_ARCHITECTURE.md`
4. `06_MULTIPLAYER/SERVER_AUTHORITY_AND_REPLICATION.md`
5. `05_TECHNICAL/PERFORMANCE_AND_MOBILE_TARGETS.md` + `SECURITY_ARCHITECTURE.md`

### I am an Artist / Audio Designer
1. `07_ART_AUDIO/ART_BIBLE.md`
2. `07_ART_AUDIO/CULTURAL_AUTHENTICITY_GUIDE.md`
3. `07_ART_AUDIO/VISUAL_DIRECTION.md` + `ENVIRONMENT_ART_BIBLE.md` + `CHARACTER_ART_BIBLE.md`
4. `07_ART_AUDIO/AUDIO_BIBLE.md`

### I am a Producer / Project Manager
1. `08_PRODUCTION/DEVELOPMENT_ROADMAP.md`
2. `08_PRODUCTION/MILESTONE_PLAN.md` + `VERTICAL_SLICE_PLAN.md` + `MVP_PLAN.md`
3. `08_PRODUCTION/FEATURE_DEPENDENCY_MAP.md`
4. `08_PRODUCTION/DEFINITION_OF_READY.md` + `DEFINITION_OF_DONE.md`

### I am an AI Agent
1. `09_AI_AGENTS/AGENTS.md`
2. `09_AI_AGENTS/AI_DEVELOPMENT_PROTOCOL.md`
3. `09_AI_AGENTS/AI_AGENT_ROLES_AND_HIERARCHY.md`
4. `09_AI_AGENTS/AGENT_CONTEXT_AND_PERMISSIONS.md`
5. `09_AI_AGENTS/AI_CODING_AND_UNREAL_RULES.md` + `AI_CHANGE_CONTROL.md`
6. Declare your role, loaded documents, and permissions **before** acting.

### I am in Live Ops / Community / Trust & Safety
1. `10_OPERATIONS/LIVE_OPERATIONS.md`
2. `10_OPERATIONS/MODERATION_AND_SAFETY.md`
3. `10_OPERATIONS/ANALYTICS_AND_METRICS.md`
4. `10_OPERATIONS/ECONOMY_MONITORING.md` + `INCIDENT_AND_HOTFIX_PROCESS.md`

### I am in Legal / Business
1. `11_LEGAL_BUSINESS/BUSINESS_MODEL_AND_MONETIZATION.md`
2. `11_LEGAL_BUSINESS/CONTENT_AND_COMMUNITY_POLICY.md`
3. `11_LEGAL_BUSINESS/PRIVACY_AND_DATA_PROTECTION.md`
4. `11_LEGAL_BUSINESS/AGE_RATING_AND_LEGAL.md`

---

## The World in One Minute

Read `03_WORLD/WORLD_BIBLE.md` and `03_WORLD/DISTRICT_BIBLE.md` to understand the six districts: **Bodija Central, Dugbe CBD, UI Student Hub, Iwo Transit Hub, Bower's Historic,** and **Agodi Green Zone**.

---

## Your First Task

Pick the smallest useful thing in your domain and make it excellent:

- **Designer:** write one complete player story for the first 10 minutes.
- **Engineer:** get a dedicated server booting and one client connected.
- **Artist:** produce one culturally grounded environment prop (e.g., a danfo bus stop).
- **Producer:** confirm the Phase 1 milestone list is accurate.
- **AI Agent:** log your first decision in `AGENT_DECISIONS/`.

---

## Golden Rules

1. **Respect the tiers.** Lower documents never contradict higher ones.
2. **Respect the pillars.** Every feature serves at least one; undermines none.
3. **Respect the brand.** Specific, warm, confident, respectful, no filler.
4. **Log decisions.** Major choices go to `ADR/`; agent choices go to `AGENT_DECISIONS/`.
5. **When unsure, ask which document is the Source of Truth — and follow it.**
