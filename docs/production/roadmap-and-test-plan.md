# Prioritised Roadmap & Verification Plan

**Roadmap type:** dependency-based gates, not calendar promises.
**First priority:** prepare/licence real area data and first content assets before city production.
**Status date:** 2026-10-10.

## 1. Milestones

### M0 — Research, design and asset plan (current)

**Prepared in this planning pass:** source-referenced Ibadan geographic reference; provisional Sango–UI–Agbowo download envelope; district layout plan; first gameplay loop; engine/backend recommendation; asset bible and asset register; test gates.

**Exit:** all documents agree on the first district and honest offline-first scope; no unresolved source/license conflict is hidden.

### M1 — Acquire, verify and stage assets (next)

1. Download a small, dated OSM source clip for the provisional envelope; record ODbL provenance and verify source legality.
2. Import roads, paths, footprints, waterways and POIs into QGIS; check topology/coverage and compare to public/local references.
3. Obtain broad SRTM terrain; store source/license/version and test it against known local elevation behavior.
4. Block out exact slice boundary and walking/vehicle routes in a map viewer/editor. Ask an Ibadan-local reviewer to review the corridor and visual reference list.
5. Author the first four proof assets in Blender: road/junction/curb segment, shopfront, gated compound, and player placeholder/rig. Add licensed texture only if it closes a measured gap.

**Exit:** valid clipped data + provenance, approved first-area layout, at least one imported/exported asset validated in a minimal viewer, no unresolved licenses.

### M2 — Browser project and third-person controller

- Create TypeScript/Vite/Three.js app with full-screen browser entry, error/retry UI and responsive HUD shell.
- Load a procedural test ground + one modular obstacle; add third-person walk/run, touch joystick, camera drag, collision, interaction ray/cone, and keyboard fallback.
- Test resizing, device pixel ratio, context recovery and mobile touch capture. Do not start with large streamed data.

**Exit:** browser opens in a current Android Chrome and desktop browser; controls work; camera does not spin under joystick; player cannot pass through test wall; no real-world terrain claim yet.

### M3 — Connected Sango district geometry

- Import simplified real centerlines/footpaths/footprints into local coordinates.
- Build one compact connected corridor, use original shop/compound kit, add sidewalk/drain/pole/sign/vegetation assets and one enterable vendor/contact location.
- Add simple navigation markers and collision; test route graph connectivity and cell load/unload.

**Exit:** player can walk a continuous, georeferenced route between at least three content points; source tags and deviations are traceable; cells load/unload without holes or memory leaks.

### M4 — Complete offline life loop

- Implement physical job/contact point, one task, wallet/transaction ledger, vendor purchase, inventory, hunger/energy and local IndexedDB save.
- Keep `Solo prototype` label visible in the help/pause screen; no fake player avatars or online badge.
- Add an automated test for valid task payout, duplicate completion prevention, insufficient funds, successful purchase, inventory/need delta and reload state.

**Exit:** user completes the loop and all state survives reload; invalid repeat purchases/tasks do not create negative balance or duplicate payout.

### M5 — Mobile/performance/content pass

- Add first avatar rig/animations, day/night, audio zones and visual finish; profile on selected actual low-end Android devices.
- Tune draw calls, resolution, visible crowds, texture quality, cell size and shadows.
- Test mobile browser suspend/resume, orientation/resizing, touch controls, slow/failed network for static assets, reduced motion and graphics settings.

**Exit:** at least one documented physical-device pass meets agreed stable 30 fps target for 10 minutes without critical memory/crash issue; all performance results include device/browser and scene conditions.

### M6 — Real multiplayer proof (only after M4/M5 foundations)

- Deploy one authoritative Colyseus room, token authentication, two real browser clients, movement replication, presence, reconnect and server-validated interactions.
- Store durable character/wallet/inventory state in Postgres; expose protected operations through server only.
- Add privacy/moderation/reporting and chat safety before public access.

**Exit:** two independent humans can see each other move and perform a verified server-authoritative interaction; disconnect/reconnect and durable state restore pass; latency/CCU results are published.

### M7 — Expand lives and city

Add rent/room recovery, one more job, additional interiors, friend/profile/chat, trading, then limited vehicle ownership/driveability. Expand to Mokola, Bodija, Dugbe, Mapo/Oja’ba and Agodi in connected cells, each with its own geospatial source and review. Do not add full business management, police/wanted systems, public transit and wide vehicle variety before economy/anti-abuse and mobile load tests exist.

## 2. Testing plan by feature

| Area | Test | Pass condition |
|---|---|---|
| 3D entry | Open the app on desktop and Android browser; check WebGL/init failures | World renders, loading recovers on error, no blank indefinite screen |
| Third-person movement | Move in 8 directions, run/stop, rotate camera, enter/leave touch zones | No input conflicts, no uncontrollable camera, consistent movement speeds |
| Collision | Walk into wall/gate/curb; traverse stairs/ramps; resume after pause | No pass-through, stuck loops, unintended falls or extreme slope launch |
| Navigation | Walk from spawn to job point, vendor and rest point; pathfind graph | All points reachable with no floating/gapped road or dead-end blocking the only route |
| Mobile UI | 360×800 and 390×844 portrait/landscape; touch joystick and right-side drag | Buttons remain visible/usable, HUD respects safe area, view not excessively obscured |
| Transactions | Valid/invalid task completion, repeated request, successful purchase, insufficient funds | Exact wallet/item/need deltas; no double payout; state and ledger consistent |
| Persistence | Save, reload, close tab/reopen, schema migration | Data restores; version migration works; reset clears all local data intentionally |
| Real multiplayer (later) | Two independent browser sessions; latency, jitter, disconnect and reconnect | Both humans visible; server sends authoritative positions/actions; no fake-online indicators |
| Performance | 10-minute scene on named low-end Android; capture FPS/frame-time, memory, draw calls | Stable ≥30 fps baseline or documented action plan; no progressive memory leak/crash |
| Asset rights | Audit each runtime file against `assets/manifest.csv` | Every shipped asset has owner/source, license, attribution and approved use |
| Geography | Compare junctions/landmarks, test graph/cell seams and local reviewer pass | Key topology matches source; deviations documented; no unsupported precision claim |

## 3. Required test evidence

For every release test, record build commit/hash, device model and RAM/GPU if available, Android/Chrome version, screen size, quality setting, network conditions, fps/frame-time percentiles, `renderer.info` draw calls/triangles, asset download sizes, memory estimate, errors/console log, steps and result. For mobile testing, include a short screen recording with touch controls visible. A successful Vite build is not proof that the game behaves correctly.

## 4. Delivery/run instructions (once M2 exists)

The game is not bootstrapped yet, so no `npm run dev` command exists today. Planned commands once M2 creates `package.json`:

```sh
npm install
npm run dev -- --host 0.0.0.0
npm run typecheck
npm run test
npm run build
npm run preview -- --host 0.0.0.0
```

Development server must accept the Arena preview host; browser code must call APIs using relative URLs, never `localhost`. A live preview is offered after the first runnable scene is implemented and verified.
