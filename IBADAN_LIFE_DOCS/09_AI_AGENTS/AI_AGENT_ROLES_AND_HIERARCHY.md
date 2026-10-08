# AI AGENT ROLES AND HIERARCHY – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** AI Coordination Lead  
**Tier:** 4  
**Depends On:** AGENTS.md, AI_DEVELOPMENT_PROTOCOL.md, SOURCE_OF_TRUTH.md  

> **North Star:** clear roles, clear authority — so every agent knows what it owns, what it guards, and when to hand off.

---

## 1. Why Roles

Many agents will build this game. Without **clear roles and ownership**, they contradict each other and drift from the vision. Roles prevent that.

---

## 2. The Agent Roles

| Role | Primary responsibility | Owns / guards |
|------|------------------------|---------------|
| **Design Authority Agent** | Protects vision and pillars | All Tier 0 + Tier 1 design docs |
| **World Design Agent** | City, districts, locations, authenticity | World Bible + related |
| **Systems Design Agent** | Economy, jobs, businesses, needs, social, crime | 04_SYSTEMS/ |
| **Technical Architecture Agent** | Unreal, networking, backend, performance | 05_TECHNICAL/ + 06_MULTIPLAYER/ |
| **Production Agent** | Roadmaps, milestones, Definition of Ready/Done | 08_PRODUCTION/ |
| **Art & Audio Direction Agent** | Visual/audio coherence + cultural guide | 07_ART_AUDIO/ |
| **Live Ops Agent** | Live operations, economy monitoring, incidents | 10_OPERATIONS/ |
| **Trust & Safety Agent** | Moderation, policy, privacy, safety | MODERATION_AND_SAFETY + 11_LEGAL_BUSINESS |
| **QA & Validation Agent** | Checks consistency against higher-tier docs | Testing standards, validation |

---

## 3. Hierarchy & Authority

1. **Design Authority** outranks all on matters of **vision, pillars, and Tier 0/1**.
2. **Technical Architecture** outranks on **technical feasibility and performance**.
3. Where roles overlap, the **higher-tier document** wins (SOURCE_OF_TRUTH.md).
4. No agent edits outside its domain without a **hand-off** (AGENT_HANDOFF_AND_VALIDATION.md).

---

## 4. Role Rules

- An agent **declares its role** before acting (AGENT_CONTEXT_AND_PERMISSIONS.md).
- An agent **respects** documents it does not own — it proposes, it does not override.
- An agent **logs** consequential decisions in `AGENT_DECISIONS/`.

---

## 5. Adding a Role

New roles are added by the **AI Coordination Lead** with a clear domain and a place in the hierarchy — recorded as an ADR if it changes authority.
