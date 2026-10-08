# LIFE SIMULATION MASTER – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Systems Design Lead  
**Tier:** 2  
**Depends On:** MASTER_GAME_DESIGN_DOCUMENT.md, DESIGN_PILLARS.md, NEEDS_SYSTEM.md, TIME_AND_DAY_NIGHT.md  

> **North Star:** the systems that make a player's life feel real — needs, time, rest, and routine — creating pressure and rhythm, never a chore.

---

## 1. Philosophy

Life simulation creates **pressure and routine**, not micro-management. Needs exist so that **eating, resting, and caring for yourself** are part of living in the city — and so that **other players matter** (someone cooks your food, someone houses you, someone drives you).

We reject the rigid, needy Tamagotchi model. Needs are **contextual, forgiving, and social**.

---

## 2. The Life Systems

| System | Role | Detail doc |
|--------|------|------------|
| **Needs** | Six needs create daily rhythm | NEEDS_SYSTEM.md |
| **Time & rest** | Day/night; sleep restores energy | TIME_AND_DAY_NIGHT.md |
| **Health** | Injury, illness, recovery | LIFE_SIMULATION_MASTER.md §4 |
| **Hygiene & mood** | Cleanliness and morale affect social life | NEEDS_SYSTEM.md |

---

## 3. How Life Sim Drives the Loop

- **Needs create errands:** hungry → visit a buka (run by a player) → the cook earns → you recover.
- **Rest creates home value:** a good home restores energy faster → housing matters.
- **Routine creates identity:** the same streets, the same people, the same rhythm → *"I have a life here."*
- **Pressure creates stories:** neglected needs, a debt, a late shift → consequences and comebacks.

---

## 4. Health

- Players can be **injured** (accidents, fights, crime) and **sick** (neglected hygiene/needs).
- Recovery needs **rest, food, and care** — clinics and player medics are services.
- Health never **hard-blocks** play; it **debuffs** until treated (soft pressure, recovery always possible).

---

## 5. Offline Life (Persistence)

The city continues when you are away. Your home keeps your things; your shop may keep earning (if staffed); your needs **do not punish you for logging off** — life resumes where it paused, within reason.

---

## 6. Design Rules

1. Needs **never** become a chore that makes players quit.
2. Every need has a **social solution** (another player can meet it).
3. **Recovery is always possible.**
4. Life sim **serves** the economy and social fabric; it is not the whole game.
