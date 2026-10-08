# MASTER GAME DESIGN DOCUMENT – IBADAN LIFE

**Version:** 1.0  
**Status:** Active (Tier 1)  
**Owner:** Design Authority  
**Depends On:** PRODUCT_VISION.md, DESIGN_PILLARS.md, PROJECT_CHARTER.md  

---

## 1. Game Overview

**IBADAN LIFE** is a persistent multiplayer 3D open-world life simulation.  
Players create a character and enter a continuous city inspired by Ibadan. They move freely in third person, live daily life, participate in a player-driven economy, form relationships, own property and businesses, and create personal stories inside a shared persistent world.

The game is built on six design pillars (see DESIGN_PILLARS.md). All systems must serve those pillars.

---

## 2. Core Fantasy

“I live in this city. I have a place, a way to make money, people I know, and the freedom to move through a real place that feels like Ibadan.”

---

## 3. High-Level Pillars Recap

1. Physical Presence  
2. Player-First Population  
3. Interconnected Player Economy  
4. Authentic Ibadan Texture  
5. Believable Life Progression  
6. Mobile-First Reality  

---

## 4. Core Game Loop (Summary)

See CORE_GAME_LOOP.md for full detail.

**Short loop (session):**  
Enter world → Manage needs & immediate goals → Move through city → Work / trade / socialise / explore → Earn or spend → Return to housing or log off.

**Medium loop (days–weeks):**  
Establish stable housing and income → Improve skills and relationships → Acquire better assets → Participate more deeply in economy and social systems.

**Long loop (months+):**  
Build reputation, own significant property or businesses, shape local social circles, leave a lasting mark on the player-driven city.

---

## 5. Player Lifecycle

1. Character Creation  
2. Arrival in the city (onboarding)  
3. First shelter and first income  
4. Stabilisation (routine)  
5. Growth (skills, relationships, assets)  
6. Establishment (business, reputation, deeper systems)  
7. Mastery / Legacy (optional long-term goals)

---

## 6. Major System Groups

- World & City Simulation  
- Player Character & Progression  
- Needs & Life Simulation  
- Economy & Currency  
- Jobs & Careers  
- Businesses (player-owned)  
- Property & Housing  
- Vehicles & Transport  
- Inventory & Items  
- Social & Relationships  
- Crime & Law  
- Events & Activities  
- Multiplayer & Presence  

Each has its own detailed specification under `/04_SYSTEMS/` and related folders.

---

## 7. Multiplayer Philosophy

- The world is shared and persistent.  
- Real players are the primary population.  
- Server is authoritative.  
- Design for meaningful co-existence and interdependence rather than pure competition or pure cooperation.  
- Instantaneous global chat is secondary to proximity and relationship-based interaction.

---

## 8. Failure States & Consequences

Players can fail (lose housing, go into debt, gain wanted level, damage relationships, lose business).  
Failure should create interesting new goals, not pure punishment that makes players quit.  
Permanent character deletion is not a design goal; recovery paths should exist.

---

## 9. Content Philosophy

- Systems first, authored content second.  
- The best stories should come from players interacting with systems and each other.  
- Cultural events, world events, and seasonal content support the living city but do not replace player agency.

---

## 10. Open Design Questions (Tracked)

These will be resolved via ADR as design matures:

- Exact balance between NPC service fallback and pure player economy in early population stages  
- Degree of hardcore vs accessible needs pressure  
- Exact wanted-level and police response model  
- Housing scarcity and pricing model at different population levels  

---

*This Master GDD is the central design reference. All system documents must remain consistent with it.*
