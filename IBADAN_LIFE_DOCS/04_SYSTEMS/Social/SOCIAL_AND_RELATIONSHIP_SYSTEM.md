# SOCIAL AND RELATIONSHIP SYSTEM – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Systems Design Lead (Social)  
**Tier:** 2  
**Depends On:** MASTER_GAME_DESIGN_DOCUMENT.md, REPUTATION_SYSTEM.md, MULTIPLAYER_MASTER_SPEC.md, MODERATION_AND_SAFETY.md  

> **North Star:** real relationships in a real place — friends, crew, family, rivals — because other people are the point of the city.

---

## 1. Philosophy

The city is a **society**. Players meet, talk, group, fall out, fall in, build crews, and earn standing. Social systems are **proximity-first**: you meet people **where you are**, not in a global chat room.

---

## 2. Communication

| Channel | Scope | Notes |
|---------|-------|-------|
| **Proximity chat** | Nearby players | Text + (later) voice; the default social layer |
| **Direct messages** | Friends | Persistent conversations |
| **Crew / group chat** | A player's circle | The social unit of the game |
| **Global / district channels** | Broadcast | Secondary; never the main social layer |

- **Proximity voice chat** (later) is the north star for presence.
- All communication is **moderated** (see MODERATION_AND_SAFETY.md).

---

## 3. Relationships

Players form **graded relationships**:

- **Stranger → Acquaintance → Friend → Close Friend → Crew / Family → Rival / Enemy**

Relationships carry **history and effect**: friends trust you, crew shares with you, rivals remember.

---

## 4. Crews & Communities

- Players form **crews** — small, persistent social groups (friends, colleagues, a hustle team).
- Crews can **share resources, coordinate, and build a collective reputation**.
- Communities emerge organically: a market, a campus, a neighbourhood, a nightlife.

---

## 5. Social Mechanics

| Mechanic | What it does |
|----------|--------------|
| **Greeting / emote** | Low-friction presence and personality |
| **Gifting / transfer** | Give Naira or items; generosity and friction both create stories |
| **Invite** | Bring someone along (to a home, a job, a ride) |
| **Crew up** | Form or join a crew |
| **Reputation link** | Social actions feed REPUTATION_SYSTEM.md |

---

## 6. Social Drives the City

- **Jobs** come from other players (employers).
- **Businesses** need customers, staff, suppliers — all players.
- **Homes** host friends. **Vehicles** carry crew. **Reputation** travels by word of mouth.

The social fabric **is** the economy.

---

## 7. Safety

- **Reporting and blocking** from day one.
- **Proximity** limits who can bother you; **safe spaces** (home) are protected.
- Moderation is **always on** (see MODERATION_AND_SAFETY.md).

---

## 8. Rules

- Social systems must **increase** real-player interaction, never replace it with NPC chatter.
- No system may **force** socialising; it must **reward** it.
- Relationships persist; the city remembers who you were to people.
