# DOCUMENTATION STANDARDS

**Version:** 1.0  
**Status:** Binding for all project documents  

---

## 1. Purpose

These standards ensure that every Markdown document in the IBADAN LIFE project is consistent, usable by both humans and AI agents, and maintainable over the multi-year life of the project.

---

## 2. File Naming

- Use UPPER_SNAKE_CASE for all documentation files.
- Example: `MASTER_GAME_DESIGN_DOCUMENT.md`
- No spaces, no special characters except underscore and hyphen where necessary.
- Folder names also follow clear hierarchical naming.

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

---

## 4. Versioning Rules

- Major version (1.0 → 2.0): Fundamental change in meaning or scope.
- Minor version (1.0 → 1.1): Significant additions or clarifications.
- Patch (1.0.1): Typos, small wording improvements, broken links.

All Tier 0 and Tier 1 changes require an ADR.

---

## 5. Writing Style

- Clear, precise, professional language.
- Prefer short sentences and active voice.
- Use tables and bullet points for scannability.
- Define terms on first use or reference the Glossary.
- Never use vague language (“make it fun”, “add more features”) without measurable or concrete description.

---

## 6. AI Agent Rules for Documentation

- An AI agent may only edit a document if it has explicit ownership or permission for that document.
- Before editing, the agent must state which Source of Truth documents it is respecting.
- All consequential changes must be logged in `/AGENT_DECISIONS/`.
- Agents must never silently delete or rewrite Tier 0/1 content.

---

## 7. Diagrams

- All diagrams are written in Mermaid syntax and stored in `/DIAGRAMS/`.
- The Mermaid source is the source of truth; exported images are convenience only.

---

## 8. Review & Approval

- Tier 0 & 1: Project Lead + Design Authority
- Tier 2: System Owner + Design Review
- Tier 3+: Relevant technical or production lead
