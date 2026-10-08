# AI DEVELOPMENT PROTOCOL – IBADAN LIFE

**Version:** 1.1  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** AI Coordination Lead  
**Tier:** 4  
**Depends On:** AGENTS.md, SOURCE_OF_TRUTH.md, BRAND_AND_TONE_OF_VOICE.md, AI_CODING_AND_UNREAL_RULES.md, AI_CHANGE_CONTROL.md  

> **North Star:** a single, strict protocol so AI agents contribute code, design, and documentation that keeps the project coherent, secure, and true to the vision.

---

## 1. Purpose

This protocol governs how AI agents contribute code, design, and documentation so the project remains coherent, secure, and true to the vision.

---

## 2. Mandatory Pre-Work Checklist for Agents

Before starting any task, an agent must:

1. Confirm it has read the current **MASTER_PROJECT_INDEX.md** and **SOURCE_OF_TRUTH.md**.
2. Confirm it understands the **six Design Pillars**.
3. **Declare** its current role and permissions (AGENT_CONTEXT_AND_PERMISSIONS.md).
4. State which documents it will treat as **binding** for this task.
5. Confirm the task does not violate any **Non-Goal**.

---

## 3. Change Control

- **Tier 0 / Tier 1 changes** → require **ADR + human Project Lead approval**.
- **Major system design changes** → require **Design Review**.
- Code affecting **economy, persistence, security, or replication** → requires **extra validation**.
- All **consequential agent decisions** → logged in `AGENT_DECISIONS/`.

(Full process: AI_CHANGE_CONTROL.md.)

---

## 4. Code Standards (Summary)

- Follow project **naming conventions** and **module boundaries**.
- Prefer **clarity and maintainability** over cleverness.
- **Never** put authoritative game logic solely on the client.
- **Mobile performance** considerations are mandatory in all gameplay code.

(Full rules: AI_CODING_AND_UNREAL_RULES.md.)

---

## 5. Handoff Protocol

When one agent finishes work that another must continue:

- **Explicit handoff note**
- **List of files changed**
- **Open questions**
- **Validation status**
- Any **temporary assumptions** made

---

## 6. Validation

Work is **not done** until it has been checked against the relevant higher-tier documents and the **Definition of Done**.
