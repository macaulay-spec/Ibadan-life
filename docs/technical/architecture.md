# Technical Architecture & Backend Plan

**Chosen initial path:** TypeScript + Vite + Three.js browser client; Rapier physics is a candidate to validate; Node.js/TypeScript authoritative rooms for later multiplayer; PostgreSQL persistence; Supabase is a candidate for account/database hosting, not the real-time game simulation.
**Status:** Planning decision, not a deployed stack.

## 1. Engine decision

| Option | Advantages for this project | Trade-offs |
|---|---|---|
| **Three.js (chosen, direct API)** | Lightweight, web-native renderer; strong glTF ecosystem; direct control over mobile rendering, streaming cells and touch UI; `InstancedMesh` can draw repeated geometry efficiently. [Three.js InstancedMesh](https://threejs.org/docs/pages/InstancedMesh.html) | It is a rendering library, not a complete game engine. We must own the scene lifecycle, input, collision integration, navigation, state, profiling and streaming. |
| React Three Fiber | Good React composition and UI integration, familiar component ergonomics | React should not own per-frame hot loops or high-frequency world entity state; adds abstraction and bundle/runtime complexity without solving world, physics or networking. Keep React for a later shell/dashboard if it offers value, not in the initial game loop. |
| Babylon.js | More integrated engine workflows; supports physics plugins and glTF loading; official Physics V2 docs recommend the newer physics architecture. [Babylon physics](https://doc.babylonjs.com/features/featuresDeepDive/physics) | More engine capability than the first slice needs; still needs game-specific world content/networking; benchmark real Android bundle and CPU/GPU costs before switching. |

**Decision:** use direct Three.js with TypeScript and Vite for the first browser slice. It minimizes the number of layers between the team and mobile frame-time/input problems. Revisit only if the prototype proves that scene/physics authoring cost outweighs the integration flexibility.

**Physics:** trial `@dimforge/rapier3d` (WASM) for capsule movement and simple collisions. Rapier has official web support, but WASM download/initialization and Android performance must be measured. [Rapier](https://rapier.rs/) The character controller can begin with a kinematic capsule and small fixed-step update; do not add full vehicle physics until the exact package/performance profile is chosen.

**Asset runtime format:** glTF 2.0 GLB. Khronos defines glTF as an API-neutral runtime delivery format; GLB keeps scene/buffers/images in a single binary container. [Khronos glTF 2.0](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html)

## 2. Client project boundaries

```text
src/
  app/                 bootstrap, loading, app state, error recovery
  renderer/            renderer setup, quality tiers, lighting, resource disposal
  world/               map source adapter, cells, roads, buildings, environment
  player/              avatar, input, camera, animation, collision controller
  interaction/         target query, prompts, interaction dispatch
  simulation/          economy, needs, jobs, items (pure domain logic)
  persistence/          local prototype repository; later API adapter
  ui/                  touch HUD, menus, status, accessibility
  audio/               sound zones and resource lifecycle
  platform/            browser/PWA/mobile capability checks
  assets/               generated asset manifest and load utilities
```

Keep renderer entities separate from game data. A wallet or inventory change updates domain state first, then the UI; a mesh is a view, never the authoritative owner of gameplay state. World cells own/dispose their GPU resources and event listeners when unloaded.

### Client responsibilities

- Render the currently visible world and local avatar.
- Capture touch/mouse/keyboard input and provide immediate local feel.
- Predict local movement when multiplayer is added, then reconcile with server snapshots.
- Present interactions and requests; never make a client-only claim of money, ownership or trade success.
- Offline milestone: local IndexedDB state only, marked as local and editable/untrusted.

### Mobile rendering plan

- WebGL renderer with conservative defaults; cap device pixel ratio (start at 1.25, allow lower tiers), resize without forcing full-resolution rendering on high-DPI phones.
- Baseline 30 fps; stronger devices may target 45–60 fps. Track frame-time percentiles, GPU draw calls, geometry/texture memory, load time and thermal degradation.
- Start with one key light, low-cost ambient fill, minimal dynamic shadows, no heavy full-screen post-processing. Use distance/LOD, frustum culling, instancing, material sharing, compressed textures and progressive cell loading.
- Target visible draw calls under ~100 on the baseline device, subject to profiling; keep an automatic low-quality tier with fewer NPCs/traffic, lower resolution and reduced effects.
- Handle WebGL context loss, tab suspend/resume, network loss, failed model loads and low-memory reload with a recoverable UI.
- Do not load the entire city. Begin around the player, then adjacent 250 m cells; tune cell size against hitching and draw-call costs.

## 3. Asset import/build pipeline

1. Source project in Blender/GeoPackage/QGIS is retained separately from runtime output.
2. Geographic data is clipped, projected to metres for authoring, cleaned, and provenance/OSM IDs retained.
3. Buildings/props export as GLB; validate scale, pivots, material count, texture paths, collision, LODs and animation clips.
4. Run glTF optimization/compression (Meshopt/Draco and KTX2 as chosen) in a reproducible asset build. Keep fallback textures for unsupported compressed formats if required by target browsers.
5. Generate cell manifests and asset bundles. Load only referenced cells/assets and cache with browser storage when available.
6. CI validates missing textures, illegal/untracked license entries, oversized assets, GLB parse errors, and duplicate IDs.

No actual Blender/GeoPackage importer or build scripts are present yet; the asset prep gate is described in [the asset bible](../art/asset-bible.md).

## 4. Persistence and connected systems

### Offline vertical slice

- Use IndexedDB, with a versioned schema and migration function; keep reset/export controls.
- Save player appearance, current spawn, wallet, inventory, needs, and completed-task IDs.
- This is convenience persistence, not secure storage. State can be changed from dev tools and is not suitable for real trading.

### First networked version

- **Realtime room:** TypeScript/Node.js server using Colyseus as the leading candidate. Colyseus provides rooms/matchmaking and state sync for authoritative game servers; clients send inputs/actions, the server validates and publishes state. [Colyseus overview](https://docs.colyseus.io/) · [Client/state sync API](https://docs.colyseus.io/sdk)
- **Accounts/database:** Supabase Auth + Postgres are candidates. The server validates identity tokens; Supabase Row Level Security is additional protection for user-facing data, not a substitute for game-server authorization.
- **Authority boundary:** client may send movement intent, job acceptance, interaction request, purchase request or trade proposal. Server checks permissions, distance, cooldown, wallet/inventory, ownership and state transition, then writes/commits. Clients cannot submit a new balance, item count, vehicle owner or business stock.
- **Persistence:** Postgres with migrations. Transaction ledger is append-only; balance is a query/cache over validated transactions. Store values as integer minor units. Apply purchases and inventory deltas in a single database transaction with idempotency keys.
- **Realtime vs database:** transient movement/animation/presence belongs in room memory; durable identity, wallet, ownership, friend edges, property and transaction history belong in the database. Do not write every movement frame to Postgres.

### Multiplayer room sizing and replication assumptions

These are initial load-test hypotheses, not promised capacity:

- Start with 16 players per shared room; test 24 as a stretch before increasing. Dense social activity is more valuable than an untested MMO player count.
- Server simulation around 20 Hz; send visible-player state around 10 Hz or as needed; client interpolates remote avatars. Client sends compact input/intent at a fixed rate (starting around 15 Hz).
- Interest management: server sends only entities in a defined area of interest and interaction range, with cell/zone partition boundaries and explicit room transition handling.
- Validate movement speed/acceleration, allowed state, sequence/timestamp, interaction range and rate limit. Reconnects rehydrate from durable state; ephemeral movement need not survive a process crash.
- Load-test per-client outgoing bandwidth, server CPU/GC, room update time, reconnects, packet loss and latency before choosing a provider or scale number.

### Minimum data entities

`Account`, `Character`, `Appearance`, `WalletAccount`, `LedgerTransaction`, `InventoryStack`, `JobDefinition`, `JobInstance`, `Property`, `Business`, `Vehicle`, `Friendship`, `ChatMessage`, `ModerationEvent`, `WorldCellState`.

Critical writes run through a server-owned service layer. Audit money/item/ownership actions, implement idempotency and rate limits, use least-privilege database roles, keep admin/service keys out of the browser, and validate all chat/username content. Minimise personal data; apply age-appropriate safety, privacy and retention policies before inviting real players.

## 5. Costs, free-tier limits, and scaling

### Prototype cost posture

- **Offline browser demo:** no online service cost; static web build can be hosted separately when implemented; local persistence only.
- **Closed auth/persistence experiment:** Supabase Free may be sufficient inside current quotas. Supabase currently lists 50,000 monthly active users, 500 MB database, 5 GB egress, 1 GB file storage, and states that free projects pause after one week of inactivity; automatic backups are not included on Free. These are prototype constraints, not a production capacity plan. [Supabase official pricing](https://supabase.com/pricing)
- **Realtime game server:** self-hosting Colyseus is open-source software but compute, bandwidth, TLS, logging, backups/operations and always-on availability are not free. Managed Colyseus Cloud or another game-server host needs a separate quote and regional latency test.
- **Production:** budget separately for active room-server hours, Postgres compute/storage/backups, egress, asset CDN, monitoring, DDoS protection, moderation and support. Add spend alerts and define a shutdown/failover policy.

A credible monthly estimate cannot be given until concurrency, session duration, player update rates, world cell size, chat load, target regions and uptime are measured. Build an estimate with: `rooms × always-on hourly room cost + database tier + asset egress + logs/monitoring + payment/support`, and run a load test at 2× planned launch CCU. Free tiers may pause, have quotas, or offer no SLA; never use one as the only home for a live persistent city.

### Scaling path

1. Local offline client.
2. One dev room server and one Postgres project; real two-browser tests.
3. One production region, a small number of area rooms, autosave/reconnect and monitoring.
4. Split rooms/cells by population and geography; introduce presence/room directory service and regional routing only when measured demand requires it.
5. Multiple regions plus durable backup/restore, maintenance windows, moderation tools and service-level objectives.

Do not microservice the first slice. Start with a modular monolith/game room process and a transactional database; split only at demonstrated load or operational boundaries.

## 6. Honest multiplayer status contract

The current plan contains **no multiplayer implementation**. A future networking feature can be labelled “online” only after two independent browser sessions join a server, see each other's live movement, interact through server validation, survive disconnect/reconnect, and persist the same durable state. Simulated pedestrians must be labelled NPC/ambient, never “other players.”
