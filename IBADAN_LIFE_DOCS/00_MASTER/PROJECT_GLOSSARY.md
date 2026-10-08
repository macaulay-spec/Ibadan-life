# PROJECT GLOSSARY – IBADAN LIFE

**Version:** 1.1  
**Last Updated:** October 2026  
**Status:** Living Document  
**Owner:** Project Lead  
**Tier:** 0 (support)  

> **North Star:** one shared vocabulary so every human and agent speaks the same language. *This glossary is binding.*

---

## Core Terms

| Term | Definition |
|------|------------|
| **IBADAN LIFE** | The official name of the game. A persistent 3D open-world multiplayer Nigerian life simulation. Tagline: *Your city. Your hustle. Your story.* |
| **The City** | The continuous, physically explorable 3D world inspired by Ibadan. |
| **Player Character / Avatar** | The fully 3D controllable character belonging to a real human player. |
| **Real Player** | A human being connected to the game. Real players form the primary population of the world. |
| **NPC** | Non-Player Character. Support only (services, ambient life, police, traffic, essential functions). Never the main population. |
| **Persistent World** | The city continues to exist and change whether an individual player is online or offline. |
| **Server Authority** | The server is the final source of truth for all gameplay state (position, inventory, money, ownership, etc.). |
| **Player-Driven Economy** | Economic activity primarily created and sustained by real players (owning businesses, working, trading, supplying, delivering, advertising). |
| **Vertical Slice** | A small but complete, high-quality playable section that demonstrates the full intended experience in one limited area. |
| **MVP** | Minimum Viable Product — the first publicly releasable version that delivers the core fantasy. |
| **Life Progression** | The continuous loop: arrive → shelter → income → spending → skills/relationships → better assets → reputation → deeper participation in the city. |
| **Wanted Level** | Fictional criminal notoriety that triggers police response and consequences. |
| **District** | A major named area of the city with its own identity, landmarks, and economic character. |
| **Streaming** | Loading and unloading parts of the world based on player location, for mobile performance. |

---

## The Six Districts

| District | Character |
|----------|-----------|
| **UI Student Hub** | Academic, high-density, low-cost — hostels, tech kiosks (UI Main Gate) |
| **Dugbe CBD** | Commercial / corporate / finance — Cocoa House, banking plaza |
| **Bodija Central** | Upscale residential & market — gated estates, nightlife, Bodija Market |
| **Iwo Transit Hub** | Transport & wholesale — interstate bus park, mechanic village |
| **Bower's Historic** | Heritage, low-income — Bower's Tower, rust-roof neighbourhoods |
| **Agodi Green Zone** | Administrative & recreational — secretariat, Agodi Lake, golf club |

---

## Economy Terms

| Term | Definition |
|------|------------|
| **Naira (₦)** | The in-game currency. Earned through work, trade, and enterprise. |
| **Faucet** | A source of currency entering the economy (wages, relief stipends, business earnings). |
| **Sink** | A place currency leaves the economy (rent, utilities, food, fuel, taxes). |
| **Supply Chain** | The five-tier flow from raw production → logistics → processing → retail/service → consumption. |
| **Municipal Tax** | A 2.5% tax on peer-to-peer wallet transfers — a core currency sink. |
| **Nepo** | A privileged starting background — starting capital and assets. |
| **Lapo** | A struggling starting background — microfinance debt, hustle from zero. |

---

## Transport Terms

| Term | Definition |
|------|------------|
| **Danfo** | Public yellow buses — the backbone of city transport. |
| **Micra** | Light taxis (shared cabs) on fixed routes. |
| **Okada** | Motorcycle taxis — fast, everywhere, risky. |
| **Keke / Bajaj** | Three-wheeled tricycles — short hops, tight streets. |

---

## Culture & Language Terms

| Term | Definition |
|------|------------|
| **Buka** | A small local eatery — the soul of city food. |
| **Amala / Abula** | Iconic Yorùbá dishes (yam flour / bean stew) — staple meals. |
| **Agbada** | Flowing traditional robe. |
| **Iro and Buba** | Traditional wraparound skirt and blouse. |
| **Gele** | Elaborate traditional headtie. |
| **Fila** | Traditional cap. |
| **Aso-Oke / Ankara** | Prestigious handwoven / printed Nigerian fabrics. |
| **Owambe** | A lively Nigerian celebration/party. |
| **Hustle** | The culture of enterprising work and ambition — a core player motivation. |
| **Yorùbá** | The language and culture of southwestern Nigeria, centred on Ibadan. |

---

## Design Pillars (short reference)

1. Physical Presence · 2. Player-First Population · 3. Interconnected Player Economy · 4. Authentic Ibadan Texture · 5. Believable Life Progression · 6. Mobile-First Reality

*(Full definitions: DESIGN_PILLARS.md)*

---

## Technical Terms

| Term | Definition |
|------|------------|
| **UE5** | Unreal Engine 5. |
| **GAS** | Gameplay Ability System — UE5's framework for attributes, abilities, and effects. |
| **Iris** | UE5's modern replication pipeline for networked multiplayer. |
| **World Partition** | UE5's large-world streaming and management system. |
| **FSkeletalMeshMerge** | Runtime merging of skeletal mesh parts into one mesh (for modular avatars). |
| **Replication** | Synchronising game state from server to clients. |
| **Authority** | Which machine (usually the server) has the final say on a piece of state. |
| **Instancing** | Separate copies of world areas/sessions for scalability. |
| **Persistence** | Saving and restoring world and player state across sessions. |
| **LOD** | Level of Detail — lower-detail versions of assets for performance. |

---

## Governance Terms

| Term | Definition |
|------|------------|
| **ADR** | Architecture Decision Record — a logged, major decision. |
| **Tier** | A document's authority level (0 highest → 5 lowest). |
| **Source of Truth** | The document that wins when documents conflict. |
| **North Star** | The one-line statement at the top of a document capturing what it is *for*. |
| **North Star Metric** | The single KPI that measures whether the player-driven society is forming. |

---

*All documents and AI agents must use these definitions consistently. New terms are added here first.*
