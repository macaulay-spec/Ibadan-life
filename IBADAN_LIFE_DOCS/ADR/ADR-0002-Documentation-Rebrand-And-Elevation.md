# ADR-0002: Documentation Rebrand and Elevation

**Date:** 2026-10-08  
**Status:** Accepted  
**Deciders:** Project Lead / Design Authority  
**Tier Impacted:** 0 (all tiers affected in voice and completeness)  

---

## Context

At takeover, the IBADAN LIFE documentation set had a sound skeleton — correct vision, a tiered Source of Truth, six strong design pillars, and a rich 22-page research brief — but the body was missing and the voice was flat:

- **27 of 46 documents were empty stubs** ("to be expanded later"), including every system spec, nearly all of the technical folder, multiplayer, art/audio, production, ops, and legal/business.
- The **master index referenced ~30 documents that did not exist**.
- The written Tier 0/1 docs were **competent but generic** — not distinctive.
- **Navigation was minimal** — no role-based onboarding, no status visibility.

The project's ambition is to be **one of the best games in the world**. The documentation did not yet match that ambition.

## Decision

We **rebrand and elevate** the documentation to world-class standard:

1. **Establish a brand constitution** — `BRAND_AND_TONE_OF_VOICE.md` (identity, tagline *"Your city. Your hustle. Your story."*, voice pillars, tone by document type, language and naming rules).
2. **Rebuild navigation** — a new `README.md` hub, an honest status-bearing `MASTER_PROJECT_INDEX.md`, and a role-based `ONBOARDING_GUIDE.md`.
3. **Rewrite Tier 0/1 and all navigation** to the elevated brand voice (specific, confident, warm, respectful, zero filler).
4. **Fill every existing stub** with a complete, specific, implementable v1.0 spec.
5. **Add load-bearing new documents** (economy, character, skills, reputation, marketplace, backend, database, save, auth, instancing, art direction, milestones, dependencies, analytics, incidents, economy monitoring, privacy, age rating, AI-agent governance).
6. **Keep the game's name.** IBADAN LIFE is the identity anchor and is strong; the rebrand elevates everything around it.
7. **Record the programme** in `PROJECT_TAKEOVER_PLAN.md` and log the agent takeover in `AGENT_DECISIONS/`.

## Consequences

**Positive:**
- Zero stubs remain; the documentation is coherent, complete for Phase 1, and unmistakably IBADAN LIFE.
- A new engineer, designer, artist, producer, or agent can onboard in under 30 minutes.
- The project's voice, structure, and quality now match its ambition.

**Negative / trade-offs:**
- Significant one-time writing effort (absorbed in Phase 0).
- Some documents referenced by the original index remain **planned** (Phase 2/3) and are now **honestly marked** rather than implied to exist.

**Neutral:**
- File names, folder structure, and the tier hierarchy are **unchanged** — no links or tooling break.

## Alternatives Considered

- **Rename the game.** Rejected: IBADAN LIFE is the identity anchor and is strong; renaming would be scope chaos with no upside.
- **Leave stubs, fix later.** Rejected: a world-class game cannot be built on undocumented systems; the heart of the game was unwritten.
- **Cosmetic polish only.** Rejected: the user explicitly asked for a full rewrite to match the project's taste — not a fresh coat of paint on stubs.

## Related Documents

- BRAND_AND_TONE_OF_VOICE.md
- PROJECT_TAKEOVER_PLAN.md
- MASTER_PROJECT_INDEX.md
- ONBOARDING_GUIDE.md
- DOCUMENTATION_STANDARDS.md
- AGENT_DECISIONS/2026-10-08-takeover.md
