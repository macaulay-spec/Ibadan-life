# IBADAN LIFE — Pre-production Pack

**Planning baseline:** 2026-10-10
**Phase:** Geography, asset readiness, and vertical-slice planning
**Source of direction:** The IBADAN LIFE brief supplied in this conversation

This package turns the brief into a practical, evidence-based first milestone. It is deliberately a plan and asset-preparation package, not a claim that a playable game, licensed asset pack, or live multiplayer service already exists.

## Start here

1. [Geographic research & reference](research/ibadan-geographic-reference.md) — real anchors, source quality, data licensing, conversion workflow, and known uncertainty.
2. [World & district plan](world/district-plan.md) — the proposed Sango–University of Ibadan–Agbowo slice and expansion links.
3. [Game design document](design/game-design-document.md) — core fantasy, complete first playable loop, feature boundaries, and future-life systems.
4. [Asset bible & readiness](art/asset-bible.md) — art direction, model/texture/audio specifications, acquisition rules, and performance budgets.
5. [`assets/manifest.csv`](../assets/manifest.csv) — traceable asset register with license and readiness states.
6. [Technical architecture](technical/architecture.md) — browser engine choice, mobile pipeline, persistence, and a real multiplayer path.
7. [Roadmap & verification plan](production/roadmap-and-test-plan.md) — milestones and measurable exit tests.
8. [Current status](status.md) — what is researched, prepared, not acquired, not built, and not tested.

## Decisions made for planning

- **First district:** a connected corridor from Sango junction toward the University of Ibadan First Gate and Agbowo edge. Exact playable boundary remains provisional until an OSM extract and local review are checked.
- **First browser implementation:** TypeScript + Vite + raw Three.js (no React renderer in the game loop), with a small Rapier physics trial before committing to physics-dependent features.
- **First playable target:** a clearly labelled offline, single-player vertical slice with a real walkable street network and one earn–spend–persist loop. It will not contain fake online players.
- **Multiplayer path:** an authoritative TypeScript/Node room server (Colyseus is the leading candidate), plus PostgreSQL-backed persistence. Supabase is a possible auth/database host, not the authority for real-time movement or the in-game ledger.
- **Asset strategy:** use OSM geometry only with ODbL attribution/compliance, an openly licensed terrain layer, original Ibadan-specific models, and individually audited CC0 assets only for generic material/prop gaps.

## Asset readiness, honestly stated

The **asset specification, sourcing policy, provisional study-area polygon, and register are prepared**. The raw OSM/terrain extracts, production 3D models, animations, textures, and field-recorded audio have **not** been downloaded, authored, or license-audited yet. The next asset action is to acquire and snapshot a clipped OSM dataset, check its local coverage, and author the first modular kit against that actual geometry. See the manifest for per-asset state.
