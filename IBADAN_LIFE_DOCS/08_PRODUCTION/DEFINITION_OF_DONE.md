# DEFINITION OF DONE – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Production  
**Tier:** 4  
**Depends On:** DOCUMENTATION_STANDARDS.md, DESIGN_PILLARS.md, PERFORMANCE_AND_MOBILE_TARGETS.md, SECURITY_ARCHITECTURE.md  

> **North Star:** a feature is not done until it meets every bar below. No exceptions, no "we'll fix it later."

---

## A feature is DONE when ALL of these are true:

### Design
- [ ] It serves **at least one design pillar** and undermines none (or the trade-off is ADR-approved).
- [ ] It does not violate any **Non-Goal**.
- [ ] Its design is documented and consistent with the **Source of Truth**.

### Engineering
- [ ] It is **server-authoritative** where it touches money, inventory, ownership, or state.
- [ ] It is **validated server-side**; no exploitable client path.
- [ ] Code is **reviewed** and follows project standards.

### Performance
- [ ] It meets **PERFORMANCE_AND_MOBILE_TARGETS.md** on target mid-range devices (FPS, memory, no hitches).
- [ ] It does not regress existing performance budgets.

### Quality
- [ ] It is **tested** (automated where possible; headless bot stress tests for network features).
- [ ] **Crash-free** in test; telemetry wired.
- [ ] Edge cases and failure states handled (recovery paths exist).

### Content & Voice
- [ ] Art/audio (if any) are **culturally authentic** and pass the Respect Checklist.
- [ ] All text follows **BRAND_AND_TONE_OF_VOICE.md**.

### Safety & Ops
- [ ] Moderation/reporting hooks exist where the feature touches other players.
- [ ] Analytics events are wired (see ANALYTICS_AND_METRICS.md).

### Governance
- [ ] Any major decision is recorded as an **ADR**; agent decisions in **AGENT_DECISIONS/**.
- [ ] Documentation is **updated** (no stale docs).

---

## Rule

**If a box is unchecked, the feature is not done.** Schedule pressure never overrides the Definition of Done — it changes scope, not quality.
