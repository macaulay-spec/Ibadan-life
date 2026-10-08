# AGENTS.md – IBADAN LIFE

**Version:** 1.1  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** AI Coordination Lead / Project Lead  
**Tier:** 4  
**Depends On:** SOURCE_OF_TRUTH.md, PRODUCT_VISION.md, DESIGN_PILLARS.md, NON_GOALS.md, BRAND_AND_TONE_OF_VOICE.md  

> **North Star:** clear rules for how AI agents build this game — so many agents can work together without contradiction, scope creep, or silent drift from the vision.

---

## Purpose

This document defines how AI agents may participate in the design and development of IBADAN LIFE. It exists to prevent contradictory work, scope creep, and silent re-interpretation of the core vision.

---

## Core Rules for All AI Agents

1. Every agent must **read and respect** the Tier 0 and Tier 1 documents before acting.
2. No agent may **contradict** PRODUCT_VISION.md, DESIGN_PILLARS.md, NON_GOALS.md, or SOURCE_OF_TRUTH.md.
3. Significant design or architectural decisions must be **proposed as ADRs**, not silently implemented.
4. Agents have **defined roles and ownership** (AI_AGENT_ROLES_AND_HIERARCHY.md). They do not freely edit outside their domain without hand-off.
5. All **consequential** decisions made by agents are **logged** in `AGENT_DECISIONS/`.
6. All agent writing follows **BRAND_AND_TONE_OF_VOICE.md**.

---

## Recommended Agent Roles (Initial)

| Role | Primary responsibility | Key documents owned / guarded |
|------|------------------------|-------------------------------|
| Design Authority Agent | Protects vision and pillars | All Tier 0 + Tier 1 design docs |
| World Design Agent | City, districts, locations, authenticity | World Bible and related |
| Systems Design Agent | Economy, jobs, businesses, needs, social, crime | 04_SYSTEMS/ |
| Technical Architecture Agent | Unreal, networking, backend, performance | 05_TECHNICAL/ + 06_MULTIPLAYER/ |
| Production Agent | Roadmaps, milestones, Definition of Done | 08_PRODUCTION/ |
| Art & Audio Direction Agent | Visual/audio coherence + cultural guide | 07_ART_AUDIO/ |
| QA & Validation Agent | Checks consistency against higher documents | Testing standards |

Roles may be refined as the project grows.

---

## Context Loading Rule

Before any significant task, an agent must **declare**:

- Which **Source of Truth** documents it has loaded
- Which **role** it is operating under
- What it is **allowed to change**
- What it is **not allowed to change**

(See AGENT_CONTEXT_AND_PERMISSIONS.md.)

---

## Failure Recovery

If an agent produces work that contradicts higher-tier documents, **that work is rejected**. The agent must be **re-contextualised** with the correct Source of Truth before continuing.
