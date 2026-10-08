# CHARACTER CREATION – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Systems Design Lead / Art Lead  
**Tier:** 2  
**Depends On:** PLAYER_BIBLE.md, PROGRESSION_DESIGN.md, CHARACTER_ART_BIBLE.md, WORLD_BIBLE.md  

> **North Star:** the moment a player becomes someone — a face, a background, a body, and a first step into the city.

---

## 1. Purpose

Character creation is the player's **entry into a life**. In a few minutes they choose **who they are** and **where they start** — and the city takes it from there.

---

## 2. Step 1 — Choose Your Background

Every player picks a **socio-economic starting point**. This is a real, respected choice — not a difficulty setting.

| Background | Starting point | The story |
|------------|----------------|-----------|
| **Nepo** | Starting capital, some assets, connections | Born into ease — expectations are higher |
| **Lapo** | Microfinance debt, hustle from zero, raw drive | Born into struggle — the climb is the story |

- Background affects **starting Naira, assets, debts, and connections**.
- Both are **valid, respected paths** — neither mocked, neither glorified beyond reality.

---

## 3. Step 2 — Shape Your Body

Using **morph targets** (16 facial scalar parameters):

- Jaw width, nose height, **melanin slider**, lip fullness, cheekbone prominence.
- Height, build, and proportions.
- The goal: **a face that feels like you** — diverse and authentic Nigerian appearance.

---

## 4. Step 3 — Dress Yourself

Choose starter attire across **traditional and contemporary**:

- **Traditional:** agbada, iro and buba, gele, fila, aso-oke, Ankara.
- **Contemporary:** streetwear, varsity jackets, corporate suits, mechanic overalls, transport uniforms.
- Starter outfits are simple; fashion grows as you earn.

---

## 5. Step 4 — Name & Identity

- Choose a **name** (first + surname) — the name the city will know you by.
- Your name is your **identity and reputation anchor**.

---

## 6. Step 5 — Enter the City

- You arrive in the **UI Student Hub**.
- A guided **first-hour path** begins: move, eat, earn, meet someone.
- Your background and choices are already shaping your first day.

---

## 7. Technical (Avatar)

- **Modular mesh assembly** (FSkeletalMeshMerge) builds your avatar from slot parts.
- **One draw call** per character for performance.
- **LOD'd** (detailed up close, simple in crowds).
- All choices are **persisted** server-side.

---

## 8. Rules

1. Creation is **fast** (under ~3 minutes) — the city is the game.
2. Choices are **meaningful** (background shapes the journey).
3. Appearance is **authentic and respectful** (see CULTURAL_AUTHENTICITY_GUIDE.md).
4. You can **change appearance later** (barber, fashion shops) — identity can grow.
