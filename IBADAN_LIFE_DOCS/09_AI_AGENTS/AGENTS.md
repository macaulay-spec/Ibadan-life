# AGENTS.md – IBADAN LIFE

**Version:** 1.0  
**Status:** Active  
**Owner:** AI Coordination Lead / Project Lead  

---

## Purpose

This document defines how AI agents are allowed to participate in the design and development of IBADAN LIFE. It exists to prevent contradictory work, scope creep, and silent re-interpretation of the core vision.

---

## Core Rules for All AI Agents

1. Every agent must read and respect the Tier 0 and Tier 1 documents before acting.
2. No agent may contradict PRODUCT_VISION.md, DESIGN_PILLARS.md, NON_GOALS.md, or SOURCE_OF_TRUTH.md.
3. Significant design or architectural decisions must be proposed as ADRs, not silently implemented.
4. Agents have defined roles and ownership. They do not freely edit documents outside their domain without hand-off.
5. All consequential decisions made by agents are logged in `/AGENT_DECISIONS/`.

---

## Recommended Agent Roles (Initial)

| Role                        | Primary Responsibility                          | Key Documents Owned / Guarded          |
|----------------------------|--------------------------------------------------|----------------------------------------|
| Design Authority Agent     | Protects vision and pillars                      | All Tier 0 + Tier 1 design docs        |
| World Design Agent         | City, districts, locations, authenticity         | World Bible and related                |
| Systems Design Agent       | Economy, jobs, businesses, needs, social, crime  | Systems folder                         |
| Technical Architecture Agent | Unreal, networking, backend, performance       | Technical & Multiplayer folders        |
| Production Agent           | Roadmaps, milestones, definition of done         | Production folder                      |
| Art & Audio Direction Agent| Visual and audio coherence + cultural guide      | Art & Audio folder                     |
| QA & Validation Agent      | Tests consistency against higher documents       | Testing standards                      |

Roles may be refined as the project grows.

---

## Context Loading Rule

Before any significant task, an agent must declare:

- Which Source of Truth documents it has loaded
- Which role it is operating under
- What it is allowed to change
- What it is not allowed to change

---

## Failure Recovery

If an agent produces work that contradicts higher-tier documents, that work is rejected. The agent must be re-contextualised with the correct Source of Truth before continuing.
