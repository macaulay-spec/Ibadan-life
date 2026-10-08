# NEEDS SYSTEM – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Systems Design Lead  
**Tier:** 2  
**Depends On:** LIFE_SIMULATION_MASTER.md, MASTER_GAME_DESIGN_DOCUMENT.md, ECONOMY_MASTER_SPEC.md  

> **North Star:** six needs that give the day shape and give other players a reason to matter.

---

## 1. The Six Needs

| Need | What it represents | Restored by | Consequence if neglected |
|------|--------------------|-------------|--------------------------|
| **Hunger** | Fuel for the day | Food (buka, market, home cooking) | Reduced stamina and work output |
| **Energy** | Rest and recovery | Sleeping at home; short rests | Slower movement; poor work; can collapse |
| **Hygiene** | Cleanliness and self-respect | Bathing, laundry, barber | Social penalty; illness risk |
| **Bladder** | Basic bodily need | Toilets (home, public, venues) | Discomfort; urgency escalates |
| **Fun** | Joy and morale | Entertainment, games, owambe, friends | Low morale; social and work penalties |
| **Social** | Connection and belonging | Talking, crew, family, community | Loneliness; reputation and mood drop |

---

## 2. Design Principles

1. **Contextual, not constant.** Needs decay with **activity and time**, not on a brutal timer.
2. **Forgiving.** Neglect brings **soft consequences**, never instant failure.
3. **Social.** Most needs are best met **with other players** (a cook, a barber, a friend, a home).
4. **Visible but not nagging.** The player feels their state; the UI informs, it does not scold.

---

## 3. How Needs Drive Play

- **Hunger → buka/market → cook earns → you recover.** (player interdependence)
- **Energy → home → better housing restores faster.** (housing value)
- **Social → crew, friends, community → reputation and opportunity.** (social fabric)
- **Fun → entertainment, events, nightlife → morale and risk.** (the city at play)

---

## 4. Need States

Each need runs from **Empty → Low → Comfortable → Full**:

- **Comfortable/Full:** no penalty; small bonuses.
- **Low:** mild warning; slight debuff.
- **Empty:** meaningful debuff; prompts action; **never a hard stop**.

---

## 5. Offline Behaviour

Needs **pause** while a player is offline. The city does not starve you for living your real life. On return, you resume with your needs where they were — a small grace, because life is busy.

---

## 6. Tuning Goals

- A player in a **20–40 minute session** can meet their core needs and make progress.
- Needs create **at least one social interaction** per session for most players.
- No need should feel like a **punishment**; all should feel like **a reason to move through the city**.
