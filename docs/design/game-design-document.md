# IBADAN LIFE — Game Design Document (Vertical-Slice Baseline)

**Version:** 0.1 · **Date:** 2026-10-10
**Design scope:** First browser-playable district, with the persistent-world vision as the destination.
**Status:** Design plan; not implemented gameplay.

## 1. Product definition

**IBADAN LIFE** is a mobile-first, browser-playable 3D Nigerian life simulation. Players create an avatar and inhabit a connected Ibadan world: walk the streets, meet people, find work, earn and spend money, build routines, and gradually acquire a home, vehicle and business. Real human players—not bots presented as humans—are intended to become the city’s central population.

### Core player fantasy

> “I know where I am in this city. I have a place to go, a way to earn, people to meet, and the freedom to make this corner of Ibadan my own.”

### Design pillars

1. **Place first:** the street network, buildings, sound and familiar geography make the world legible.
2. **Presence over menus:** important actions happen at physical locations, with lightweight interface support.
3. **Life systems connect:** earning changes the wallet; purchases change inventory and needs; housing offers recovery and a return point.
4. **People are the point:** the long-term population is real players; NPCs are limited service/ambient support, never disguised as online users.
5. **Local without caricature:** culturally grounded contemporary Nigerian life, reviewed by people familiar with Ibadan.
6. **Mobile is a constraint from day one:** stable touch input, low memory/draw-call budgets, and short sessions.

## 2. Experience and controls

### Camera and movement

- Third-person follow camera; camera yaw/pitch from right-side drag or swipe, smoothed follow, pitch and zoom limits.
- Left-side virtual joystick for movement; walk/run toggle or pressure-sensitive run button; one context action button; optional camera recenter.
- Desktop test fallback: WASD, mouse drag, E interact, Shift run, Esc pause.
- Walking, running, turning, idle and interaction are required animation states. Jump is not part of the first life-sim slice; do not add it unless world traversal proves it necessary.
- Player collision uses a capsule and simple collision shapes for buildings/walls. The visual mesh is never the only collision surface.
- Screen overlay safe areas, haptics optional; all controls reachable one-handed where possible and never block the player's feet or interaction target.

### Interaction

- Context prompt appears when a target is in range, unobstructed and under the reticle/interaction cone.
- Initial radius: roughly 2 m for kiosks/doors; tune in playtests.
- Tap/click context button to interact; show a clear accessible label, price/reward, and confirmation for spending.
- No interaction should require tiny text or precise desktop-style aiming.

## 3. First vertical-slice story and loop

### First session

1. A short loading screen explains the controls, then the player enters Sango with a preset avatar. Character appearance can be edited before or at a nearby mirror/barber point after the controller exists.
2. A compact toast points to a physical job/contact point. The player is not trapped in a lobby or multi-tab menu.
3. The player accepts a short local errand, walks along the connected road/sidewalk to its destination, and completes it by interacting with the correct service point.
4. A successful completion adds a reward to the wallet and a durable transaction entry; the user sees the wallet change in the HUD.
5. The player spends part of the reward on a food/drink item at a nearby vendor. Inventory quantity and hunger change; the wallet decreases by the exact cost.
6. The player can continue exploring or pause/exit. Progress survives a reload on the same browser profile in the offline milestone.

The sample reward, item and price values are balancing placeholders—not a claim about current Ibadan prices. The offline vertical slice is intentionally labelled **Solo prototype**. There are no simulated online people and no claims of shared persistence.

### Core loop

`Enter city → orient → choose a physical activity → complete a task / social interaction → earn or spend → manage needs and belongings → explore / return to a safe place → persist progress`

### First-slice completion test

A new player can, without instructions beyond the first prompt: move, rotate the camera, avoid a building, find the task point, complete one task, observe a wallet increase, purchase one item, see inventory/need state change, and reload to find that offline state saved.

## 4. Feature scope: what is complete first and what waits

| System | First browser slice | Later persistent-world target |
|---|---|---|
| World | One connected Sango–UI/Agbowo road/foot corridor, landmarks and enterable service point | Streamed multiple districts and inter-area transit |
| Character | One rigged base body, a small original appearance/clothing set, walk/run/idle/interact | Expanded hair, clothing, accessories, body/face options and wardrobe storage |
| Camera/input | Third-person, keyboard/mouse plus touch joystick/drag/action | Tunable input accessibility, controller support, haptics, remapping |
| Collision | Capsule vs tested simplified road/building geometry | Server-validated movement, vehicles, dynamic interactions |
| Economy | Local-only Naira wallet/ledger; one job; one NPC-supported vendor; item quantity | Server-authoritative jobs, cash/bank, expenses, player markets/trading and anti-fraud controls |
| Needs | Hunger and energy at gentle rates; food/rest restore them | More needs/activities with opt-in pressure and anti-grind limits |
| Housing | One simple rest point if slice time permits | Rent, bills, ownership, room furnishing and property transfer |
| Social | No fake online users; local debug identity only | Real friend graph, real chat, presence, profiles, interactions and safety/moderation |
| Vehicles | Visible traffic only if motion/collision is tested; not driveable in slice | Driveable sedan/minibus/motorcycle with entry/exit, steering, brakes, collisions and running costs |
| Law/safety | No crime/wanted gameplay in first slice | Fictionalized, proportionate fines/wanted model; reporting and moderation; no real-world crime instruction |
| Persistence | Versioned IndexedDB profile for one browser; export/reset options | Authenticated server saves and transactional Postgres persistence |
| Multiplayer | None. Explicit solo label. | Human-only shared room, server authority, reconnection and shared-world tests |

## 5. Economy and connected life mechanics

### Currency and transactions

- Display Nigerian Naira (₦). Store money as integer minor units (kobo) or integer NGN according to the chosen price precision; never use floating-point accumulation.
- Each completed task/purchase creates a transaction record with actor, action, amount, source/sink, timestamp, idempotency key and result.
- The offline prototype is local and can be edited by the user; it is not cheat-resistant. A network version moves reward calculation, inventory changes, property and transfers to the authoritative server.
- Starting funds and all balancing numbers remain tuneable and are not presented as real market pricing.

### First work activity

One short courier/helper errand is enough to demonstrate the first loop. Acceptance defines a destination and objective; progress is shown in a small world-space marker and optional map pin; only the correct completion event grants the reward. Avoid multiple unfinished job menu cards.

### Vendor / inventory / needs

The physical vendor shows a small list of available consumables, price and effect. A successful purchase atomically changes wallet, inventory and hunger (in the offline data model, one transaction). The item is not sold if funds are insufficient. Need decay is slow enough not to punish exploration or intermittent mobile sessions.

### Housing, business, vehicles and social target design

- **Housing:** rent a room before buy-to-own; access through a physical compound door; bed/rest restores energy; use server ownership records later. No large furnishing editor until simple persistence works.
- **Business:** one template stock/business state, then owner/stock/price/access rules; business income is server calculated. Player-owned shops are not claimed before this works.
- **Vehicles:** begin with one low-speed, physics-tested vehicle at a later milestone. Need vehicle model, seat/exit points, a road network, collision and browser performance before adding variety.
- **Social:** proximity discovery, opt-in friend requests, profile, short text chat, and moderated/filtered player-to-player trade. Always identify real online players via network presence. NPCs do not carry fake human accounts.
- **Law:** only after economy/social; clear rules, fair notices/appeals, server-side fine calculation, no griefing-oriented power fantasy.

## 6. Onboarding, HUD and menus

- **Loading/entry:** one progress state with recovery/retry and a visible compatibility error when WebGL is unavailable.
- **Character setup:** modest first choices; let the user enter the world quickly. No long mandatory creator questionnaire.
- **HUD:** health/needs are discreet bars or icons; wallet; task prompt; one interaction button; small connection/save status. Do not put a persistent phone menu over the world.
- **World map:** simple locally generated district map after the street graph exists; do not use unlicensed map tiles as a minimap.
- **Phone/inventory:** later, a light contextual surface that doesn't replace interacting with the world. Each button needs an implemented result.
- **Pause/settings:** sensitivity, graphics quality, sound, control visibility/size, reduce motion, reset local save. Keep game simulation paused where appropriate.
- **Accessibility:** scaleable HUD/text, colour contrast, non-audio onboarding, large touch targets, camera sensitivity slider, and optional reduced camera shake.

## 7. Content and cultural principles

- Model present-day everyday life with variety across age, fashion, skin tone, occupation and housing, not one “Nigerian character” stereotype.
- Yoruba-inspired clothes/words/patterns should be researched and reviewed; contemporary clothing is not uniformly ceremonial.
- Use original fictional shop names/signs unless permission exists. Do not use real logos as shorthand for authenticity.
- Sound design can layer city traffic, footsteps, vendors, power equipment, birds and weather, but field-recorded speech/music requires consent and clear cultural context.
- Do not equate poverty, unsafe roads or low-income housing with the city's entire identity; show education, business, parks, family and modern commercial life too.

## 8. Success metrics for this milestone

- First-time player reaches movement and camera control with no external instructions.
- 90% of testers find and complete the one task in under 5 minutes without getting stuck.
- At least one full foot route connects spawn, job point and vendor with no jump/fall-through blockers.
- Wallet, item quantity and hunger are visibly consistent after every transaction and after reload.
- No fake player presence or multiplayer wording in the UI.
- The experience can run at a stable 30 fps target on an agreed low-end Android test device before the district is expanded.
- Map geometry and asset provenance are documented, and research uncertainty is visible to the team.

## 9. Deferred by design

Full Ibadan, mass traffic, extensive procedural interiors, multiple businesses, player-to-player trading, detailed banking, player-owned property, vehicles, complex crime, voice chat, and a large live economy are not first-slice deliverables. They depend on a stable, measurable world, controller, local economy loop and server/persistence foundation.
