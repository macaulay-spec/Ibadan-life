# BRAND AND TONE OF VOICE – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Project Lead / Design Authority  
**Tier:** 0 (Brand Constitution)  
**Depends On:** PROJECT_CHARTER.md, PRODUCT_VISION.md, DESIGN_PILLARS.md  

---

## North Star

Every word we write about IBADAN LIFE should make a stranger feel the city and trust the team.

---

## 1. Identity

| Element | Definition |
|---------|------------|
| **Name** | IBADAN LIFE |
| **Codename** | IBADAN |
| **Tagline** | **Your city. Your hustle. Your story.** |
| **One-line identity** | A persistent 3D multiplayer city where real people live second lives that continue when they log off. |
| **Engine** | Unreal Engine 5, mobile-first (mid-range Android) |
| **Setting** | A city inspired by Ibadan, Nigeria — specific, proud, unmistakable |

The name **IBADAN LIFE** is the identity anchor. It is not being renamed. The rebrand elevates everything *around* the name: how we sound, how we structure, how we present, and the quality bar we hold every document and decision to.

---

## 2. Brand Promise

> We are building one of the best games in the world — a living Nigerian city that millions of players will call home.

That promise has three obligations:

1. **Respect the player.** Their time, their data, their money, their culture.
2. **Respect the craft.** No filler, no shortcuts, no "good enough for now" that becomes forever.
3. **Respect the place.** Ibadan is a real city with a real soul. We do not borrow its name; we earn it.

---

## 3. Voice Pillars

Every document, commit message, design note, and player-facing string must reflect these five voice pillars.

### 1. Specific over generic
Name the district, the dish, the bus, the Naira amount. "A market" becomes **Bodija Market**. "Food" becomes **amala and abula from a buka on the corner**. "Transport" becomes **danfo, okada, keke, micra**.

- ❌ Basic: "Players can buy food to restore hunger."
- ✅ IBADAN LIFE: "Players walk into a buka, order amala, and watch their Hunger need recover — while the cook, a real player, earns the sale."

### 2. Confident, not arrogant
We know this is one of the hardest games to build: a persistent, 3D, multiplayer, player-driven economy on mid-range phones. We say so plainly, then we solve it. We do not pretend difficulty away, and we do not oversell.

### 3. Warm and human
Write like a founder talking to a small, trusted team — not a consultancy writing a report. Short sentences. Active voice. Direct address ("you", "we"). Humour where it belongs; seriousness where it matters.

### 4. Respectful authenticity
Yorùbá, Pidgin, and Nigerian English terms are used with care and **always explained on first use** for our global audience. Authenticity is a design requirement, not decoration. We never caricature; we represent.

### 5. No filler
Every sentence earns its place. If a line does not inform, decide, or inspire, it goes. "Make it fun" and "add more features" are banned phrases — replaced with concrete, measurable descriptions.

---

## 4. Tone by Document Type

| Document Type | Tone | Example |
|---------------|------|---------|
| Vision & Charter | Inspiring, declarative | "The city is not a backdrop. It is a society." |
| Design Pillars & GDD | Precise, principled | "Every feature must support at least one pillar and undermine none." |
| System Specs | Exact, implementable | "A 2.5% municipal tax is applied to every peer-to-peer wallet transfer." |
| Technical Architecture | Rigorous, honest about trade-offs | "We reject client-authoritative state. The server owns money, inventory, and ownership." |
| World & Culture | Evocative, grounded | "Rust-tinted roofs. Red earth. The university on the hill." |
| Production & Ops | Calm, organised, accountable | "Phase 1 must be green before Phase 2 starts." |
| Player-facing strings | Warm, clear, concise | "Welcome home. Your city missed you." |

---

## 5. Language Rules

1. **Default language:** English (clear, international).
2. **Local terms:** Yorùbá / Pidgin terms are welcome and encouraged *when they add meaning* — always italicised or quoted on first use and defined in PROJECT_GLOSSARY.md.
3. **No caricature.** Slang is used respectfully and sparingly. When in doubt, ask: would a Nigerian player feel respected reading this?
4. **Define on first use.** Every game term is defined at first mention or linked to the Glossary.
5. **Numbers and currency:** Use the in-game currency name **Naira (₦)** for the fictional economy. Be concrete: "₦500" not "some money."

---

## 6. Naming Conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Game | IBADAN LIFE (all caps) | — |
| The city | "the City" or "Ibadan" | — |
| Currency | Naira (₦) | — |
| Districts | Proper nouns, capitalised | Bodija Central, Dugbe CBD, UI Student Hub, Iwo Transit Hub, Bower's Historic, Agodi Green Zone |
| Vehicles | Lowercase common nouns | danfo, okada, keke, micra |
| Documents | UPPER_SNAKE_CASE.md | ECONOMY_MASTER_SPEC.md |
| Folders | Numbered, UPPER_SNAKE | 04_SYSTEMS/Economy/ |

---

## 7. Document Presentation Standard

Every document opens with the standard header (see DOCUMENTATION_STANDARDS.md) and a one-line **North Star** statement — the single sentence that captures what the document is *for*. Then it gets on with the substance.

A document is finished when a new team member could read it cold and know exactly what to do next.

---

## 8. What "Basic" Looks Like (And What We Reject)

| Basic (rejected) | IBADAN LIFE (required) |
|------------------|------------------------|
| "A stub to be expanded later." | A complete, specific, implementable spec. |
| "Make it fun." | "The 30-second loop must let a player feel the city within one screen of movement." |
| "Add more features." | A concrete feature with an owner, a pillar it serves, and a success metric. |
| "African-themed city." | "Rust-tinted corrugated roofs, red-laterite earth, danfo buses, a university on a hill." |
| "Multiplayer support." | "Dedicated authoritative servers; real players are the primary population; NPCs only do infrastructure." |

---

## 9. Governance

This document is Tier 0. Changes require an ADR and Project Lead approval. All other documents must align their voice to this standard.
