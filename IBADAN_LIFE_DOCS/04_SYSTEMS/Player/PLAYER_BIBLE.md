# PLAYER BIBLE – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Systems Design Lead  
**Tier:** 2  
**Depends On:** MASTER_GAME_DESIGN_DOCUMENT.md, DESIGN_PILLARS.md, CHARACTER_CREATION.md, SKILL_AND_ATTRIBUTE_SYSTEM.md, REPUTATION_SYSTEM.md  

> **North Star:** who the player is — their body, their background, their stats, their standing — and how all of it persists.

---

## 1. What a Player Is

A player is a **real human** with a persistent 3D avatar, a background, attributes, skills, wealth, relationships, a reputation, and a place in the city. Everything that defines them **persists across sessions**.

---

## 2. Player Components

| Component | Summary | Detail doc |
|-----------|---------|------------|
| **Identity** | Name, appearance, avatar | CHARACTER_CREATION.md |
| **Background** | Nepo or Lapo starting conditions | CHARACTER_CREATION.md |
| **Attributes** | Stamina, charisma, craft, etc. | SKILL_AND_ATTRIBUTE_SYSTEM.md |
| **Skills** | Career and life abilities, grown by doing | SKILL_AND_ATTRIBUTE_SYSTEM.md |
| **Wealth** | Naira (cash + bank), assets | CURRENCY_AND_BANKING.md |
| **Needs** | Hunger, energy, hygiene, bladder, fun, social | NEEDS_SYSTEM.md |
| **Inventory** | Items carried and stored | INVENTORY_AND_ITEM_SYSTEM.md |
| **Property** | Homes, businesses, vehicles owned | PROPERTY_SYSTEM.md |
| **Relationships** | Friends, crew, family, rivals | SOCIAL_AND_RELATIONSHIP_SYSTEM.md |
| **Reputation** | Standing per district and circle | REPUTATION_SYSTEM.md |
| **Legal** | Wanted level, fines, record | CRIME_AND_LAW_SYSTEM.md |

---

## 3. The Avatar

- A **modular 3D character** (shared skeletal base + merged parts).
- Customisable face (morph targets), attire (traditional and contemporary), and later accessories.
- **LOD'd** for performance: detailed up close, simple in crowds.
- The avatar **is** the player in the world — others see the same person you customised.

---

## 4. Persistence

**Everything about a player persists.** Log off, close the app, lose signal — your life is exactly where you left it. The server owns your truth; the client shows it.

---

## 5. Player Agency

The player chooses:
- Their **path** (worker, hustler, owner, driver, creator).
- Their **pace** (a short errand or a long session).
- Their **risk** (honest, grey, or underworld — each with consequences).
- Their **mark** (the home, shop, car, and name they leave behind).

---

## 6. The Player Promise

> *You are a person in a city. You matter. The city remembers you.*
