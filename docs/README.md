# IBADAN LIFE — Pre-production Pack

**Planning baseline:** 2026-10-10
**Phase:** focused geography, asset readiness, and vertical-slice planning
**Source of direction:** the IBADAN LIFE brief supplied in this conversation

This package is a plan and asset-preparation milestone, not a claim that a playable game, licensed production asset pack, or live multiplayer service exists.

## Start here

1. [Geographic research & reference](research/ibadan-geographic-reference.md) — Ibadan context, compact Sango slice, road-data source/limits, licensing and review gates.
2. [Lagoslife.app pattern review](research/lagos-life-reference.md) — what was visible on the public page and how the curated-place pattern applies here.
3. [World & district plan](world/district-plan.md) — the proposed Sango-core slice and later connected-area expansion.
4. [Game design document](design/game-design-document.md) — core fantasy, first playable loop, feature boundaries, and future-life systems.
5. [Asset bible & readiness](art/asset-bible.md) — art direction, model/texture/audio specifications, acquisition rules, and performance budgets.
6. [`assets/manifest.csv`](../assets/manifest.csv) — traceable asset register with license and readiness states.
7. [Technical architecture](technical/architecture.md) — browser engine choice, mobile pipeline, persistence, and a real multiplayer path.
8. [Roadmap & verification plan](production/roadmap-and-test-plan.md) — milestones and measurable exit tests.
9. [Current status](status.md) — what is researched, prepared, acquired, not built, and not tested.

## Decisions for the first build

- **Scope:** do not attempt all of Oyo State or all of Ibadan. Start with a curated, approximately 0.8 × 1.0 km Sango T-junction area, featuring short road runs on Polytechnic Road and Ijokodo Road. This is a working recommendation; the final walkable boundary still needs GIS and local validation.
- **Why Sango:** the dated OSM-derived source has real road lines in this compact window, including both named corridors; the longer UI/Agbowo route is not covered by the source snapshot. Keep UI/Agbowo as a later expansion, not an implied first-slice destination.
- **M1 data:** a raw dated OSM-derived GeoPackage, a 46-feature Sango road clip, processing scripts, and a programmatic PNG preview are now staged. The data is roads-only; QGIS/other GIS review, local review, buildings/POIs and terrain are still missing. Provenance and caveats are in `assets/geodata/M1_DATA_AUDIT.md`.
- **Lagoslife.app pattern:** curate a few useful named places and a coherent street loop, rather than claiming broad, empty city coverage. Do not copy its names, UI, assets, map or unverified online counters.
- **First browser implementation:** TypeScript + Vite + raw Three.js (no React renderer in the game loop), with a small Rapier physics trial before committing to physics-dependent features.
- **First playable target:** a clearly labelled offline, single-player vertical slice with a walkable road network and one earn–spend–persist loop. It will not contain fake online players.
- **Multiplayer path:** an authoritative TypeScript/Node room server (Colyseus is the leading candidate), plus PostgreSQL-backed persistence. Supabase is a possible auth/database host, not the authority for real-time movement or the in-game ledger.
- **Asset strategy:** use OSM geometry only with ODbL attribution/compliance, an openly licensed terrain layer, original Ibadan-specific models, and individually audited CC0 assets only for generic material/prop gaps.

## Asset readiness, honestly stated

The **design/specification, sourcing policy, provisional area windows, and register are prepared**. A dated OSM-derived road layer has been staged and clipped for research. There are no imported building footprints, verified venue layer, terrain raster, production 3D models, animations, final textures, field-recorded audio, or game runtime. The staged road clip has not had QGIS/other GIS visual QA or local ground-truth review, and its upstream repository has no declared repository license; legal review remains open. See the manifest and data audit for per-asset state.
