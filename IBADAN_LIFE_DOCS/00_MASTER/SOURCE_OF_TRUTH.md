# SOURCE OF TRUTH

**Version:** 1.0  
**Status:** Immutable Project Rule  
**Owner:** Project Lead  

---

## Purpose

This document defines which files are the authoritative sources of truth for IBADAN LIFE and the rules that prevent contradictory decisions by humans or AI agents.

---

## Hierarchy of Truth (Strict Order)

1. **Tier 0 – Project Constitution**  
   - PROJECT_CHARTER.md  
   - PRODUCT_VISION.md  
   - DESIGN_PILLARS.md  
   - NON_GOALS.md  
   - This file (SOURCE_OF_TRUTH.md)

2. **Tier 1 – Core Design**  
   - MASTER_GAME_DESIGN_DOCUMENT.md  
   - CORE_GAME_LOOP.md  
   - WORLD_BIBLE.md  
   - MVP_GAMEPLAY_SCOPE.md  
   - VERTICAL_SLICE_DEFINITION.md

3. **Tier 2 – System Specifications**  
   All documents under `/04_SYSTEMS/` and major technical architecture documents.

4. **Tier 3 – Implementation & Process**  
   Production plans, AI agent rules, testing standards, live operations.

5. **Tier 4 – Generated / Working Data**  
   Asset catalogues, temporary notes, generated lists. These must never override higher tiers.

---

## Rules

1. A lower-tier document may never contradict a higher-tier document.
2. If a conflict is discovered, the higher-tier document wins until an official change is approved.
3. Any change to Tier 0 or Tier 1 requires:
   - A written Architecture Decision Record (ADR)
   - Explicit approval from the Project Lead / Design Authority
4. AI agents must declare which source-of-truth documents they are operating under before making significant changes.
5. No agent may silently “improve” or reinterpret Tier 0 or Tier 1 documents.

---

## Decision Logging

- All major architectural and design decisions → `/ADR/`
- All consequential decisions made by AI agents → `/AGENT_DECISIONS/`

---

## Change Control for This Document

This document itself may only be changed via ADR and Project Lead approval.
