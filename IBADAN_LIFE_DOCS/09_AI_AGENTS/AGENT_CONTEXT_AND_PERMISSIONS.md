# AGENT CONTEXT AND PERMISSIONS – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** AI Coordination Lead  
**Tier:** 4  
**Depends On:** AGENTS.md, AI_AGENT_ROLES_AND_HIERARCHY.md, SOURCE_OF_TRUTH.md, BRAND_AND_TONE_OF_VOICE.md  

> **North Star:** before an agent acts, it declares what it knows, what it may change, and what it may not — so nothing is assumed and nothing is silent.

---

## 1. The Declaration (Mandatory Before Significant Work)

Before any significant task, an agent must **declare**:

1. **Role** — which agent role it is operating under.
2. **Loaded documents** — which Source-of-Truth and Tier 0/1 documents it has read and is respecting.
3. **Allowed to change** — the specific files/systems in scope.
4. **Not allowed to change** — the boundaries it must not cross.
5. **Non-Goal check** — confirmation the task violates no Non-Goal.
6. **Pillar check** — which design pillar(s) the task serves.

---

## 2. Permission Levels

| Level | Meaning | Who grants |
|-------|---------|------------|
| **Read** | May read any document | Default |
| **Propose** | May draft changes and propose them (no merge) | Default for its domain |
| **Edit (owned)** | May edit documents/systems it owns | Its role domain |
| **Edit (cross-domain)** | May edit outside its domain | Explicit hand-off only |
| **Tier 0/1 change** | May change Tier 0/1 meaning | **Never** without ADR + Project Lead |

---

## 3. Boundaries (Never Cross Without Authority)

- **Never** contradict PRODUCT_VISION, DESIGN_PILLARS, NON_GOALS, or SOURCE_OF_TRUTH.
- **Never** silently rewrite Tier 0/1 content.
- **Never** put authoritative game logic on the client.
- **Never** skip the brand voice (BRAND_AND_TONE_OF_VOICE.md).
- **Never** make an unlogged consequential decision.

---

## 4. Context Loading Rule

Before acting, load and respect (minimum):

- MASTER_PROJECT_INDEX.md
- SOURCE_OF_TRUTH.md
- BRAND_AND_TONE_OF_VOICE.md
- Your domain's Tier 0/1 documents
- AGENTS.md + AI_DEVELOPMENT_PROTOCOL.md

---

## 5. Failure Recovery

If an agent produces work that contradicts higher-tier documents, **the work is rejected**. The agent is **re-contextualised** with the correct Source of Truth before continuing. Rejection is not punishment; it is the system working.
