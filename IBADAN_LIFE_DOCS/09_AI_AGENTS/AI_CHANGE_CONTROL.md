# AI CHANGE CONTROL – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** AI Coordination Lead / Project Lead  
**Tier:** 4  
**Depends On:** AGENTS.md, AI_DEVELOPMENT_PROTOCOL.md, SOURCE_OF_TRUTH.md, ADR/ADR-0001-Template.md  

> **North Star:** every significant change is proposed, decided, and recorded — so the project stays coherent and no decision is lost.

---

## 1. Change Classes

| Class | Examples | Process |
|-------|----------|---------|
| **Tier 0/1 change** | Vision, pillars, core design, world truth | **ADR + Project Lead approval** (mandatory) |
| **Major system design** | New economy rule, new system spec | **Design Review + ADR** if major |
| **Technical architecture** | Networking, database, engine choice | **Tech Lead + ADR** for major decisions |
| **Minor / working** | Typos, clarifications, catalogue updates | Relevant lead; must not contradict higher tiers |
| **Agent consequential decision** | Any significant choice an agent makes | **Log in `AGENT_DECISIONS/`** |

---

## 2. The ADR Process

1. **Propose** — write the ADR using `ADR/ADR-0001-Template.md` (context, decision, consequences, alternatives, related docs).
2. **Review** — Design Authority / Tech Lead / Project Lead review.
3. **Decide** — Accepted / Rejected / Deferred; status recorded in the ADR.
4. **Record** — accepted ADRs are numbered and linked from the master index.

---

## 3. Agent Decision Logging

- Every **consequential** decision an agent makes is logged in `AGENT_DECISIONS/` with: date, agent/role, decision, rationale, documents affected, and validation status.
- Logging is **mandatory**, not optional.

---

## 4. No Silent Changes

- No agent may **silently** change Tier 0/1 meaning, delete content, or reinterpret the vision.
- **Silence is not consent.** If a change is significant, it is proposed and recorded.

---

## 5. Superseding

- A decision can be **superseded** by a newer ADR — never edited in place. The record of *why* is preserved.

---

## 6. Rule

**If it matters, it is written down.** The project's memory lives in `ADR/` and `AGENT_DECISIONS/` — that is how a big game stays coherent across many hands and many months.
