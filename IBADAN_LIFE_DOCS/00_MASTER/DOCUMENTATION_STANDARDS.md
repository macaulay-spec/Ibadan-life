# DOCUMENTATION STANDARDS

**Version:** 1.1  
**Last Updated:** October 2026  
**Status:** Binding for all project documents  
**Owner:** Project Lead  
**Tier:** 0 (support)  

> **North Star:** every document in this project is consistent, usable by humans and AI agents, and worthy of a world-class game.

---

## 1. Purpose

These standards ensure every Markdown document in the IBADAN LIFE project is consistent, usable by both humans and AI agents, and maintainable over the multi-year life of the project.

---

## 2. File Naming

- Use **UPPER_SNAKE_CASE** for all documentation files. Example: `MASTER_GAME_DESIGN_DOCUMENT.md`
- No spaces; underscore and hyphen only where necessary.
- Folder names follow clear hierarchical naming (`00_MASTER/`, `04_SYSTEMS/Economy/`).

---

## 3. Document Header (Required)

Every document must begin with:

```markdown
# DOCUMENT TITLE

**Version:** X.Y  
**Last Updated:** Month Year  
**Status:** Draft | Active | Deprecated  
**Owner:** Role or Name  
**Tier:** 0 | 1 | 2 | 3 | 4  
**Depends On:** (list of higher documents)  
```

Immediately after the header, add a one-line **North Star** statement in blockquote:

```markdown
> **North Star:** the single sentence that captures what this document is *for*.
```

---

## 4. Versioning Rules

- **Major (1.0 → 2.0):** fundamental change in meaning or scope (e.g., a rebrand).
- **Minor (1.0 → 1.1):** significant additions or clarifications.
- **Patch (1.0.1):** typos, small wording, broken links.

All Tier 0 and Tier 1 changes require an ADR.

---

## 5. Writing Style (Brand Voice)

Aligned to **BRAND_AND_TONE_OF_VOICE.md**. In short:

- **Clear, precise, professional** — short sentences, active voice.
- **Specific over generic** — name the district, the dish, the bus, the Naira amount.
- **Warm and human** — write like a founder, not a consultancy.
- **Respectful authenticity** — local terms used with care and defined on first use.
- **No filler** — tables and bullets for scannability; every sentence earns its place.
- Define terms on first use or reference the **Glossary**.
- **Banned:** vague language ("make it fun", "add more features") without a concrete, measurable description.

---

## 6. AI Agent Rules for Documentation

- An AI agent may only edit a document if it has **explicit ownership or permission** for it.
- Before editing, the agent must **state which Source of Truth documents** it is respecting.
- All consequential changes must be **logged in `/AGENT_DECISIONS/`**.
- Agents must **never silently delete or rewrite** Tier 0/1 content.

---

## 7. Diagrams

- All diagrams are written in **Mermaid** syntax and stored in `/DIAGRAMS/`.
- The Mermaid source is the source of truth; exported images are convenience only.

---

## 8. Review & Approval

- **Tier 0 & 1:** Project Lead + Design Authority
- **Tier 2:** System Owner + Design Review
- **Tier 3+:** Relevant technical or production lead

---

## 9. Definition of "Complete"

A document is **complete** when it contains no stub language ("to be expanded later"), is specific and implementable, and a new team member could act on it cold. If a topic is too large for one document, split it into linked sub-documents — all present.
