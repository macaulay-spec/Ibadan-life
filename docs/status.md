# Implementation & Evidence Status

**As of:** 2026-10-10
**Current phase:** M1 — acquire, verify and stage assets.
**Scope:** a focused Sango-core candidate, not all Ibadan/Oyo State. No game runtime is built.

## Implemented and checked

- Prepared the geographic research, compact district plan, game-design baseline, asset bible/register, technical/backend plan, roadmap and test gates.
- Reviewed [Lagoslife.app](https://lagoslife.app/) as a public product-pattern reference. The page shows named place anchors and player/home-status UI; its displayed counters were not independently verified. See [`research/lagos-life-reference.md`](research/lagos-life-reference.md).
- Queried current OSM counts via Overpass for broad and small Sango research windows. The count audit is kept distinct from the dated geometry snapshot; results and limitations are in [`assets/geodata/M1_DATA_AUDIT.md`](../assets/geodata/M1_DATA_AUDIT.md).
- Staged a dated, OSM/QuickOSM-derived GeoPackage in [`assets/geodata/raw/`](../assets/geodata/raw/). SQLite inspection verified a `highway` layer with 4,560 LineStrings, EPSG:4326, snapshot metadata `2026-09-13`, source extent and SHA-256 recorded in the data audit.
- Added a standard-library clipping script and clipped the provisional Sango core rectangle `[3.877, 7.423, 3.884, 7.432]`. Output [`sango-core-roads-2026-09-13.geojson`](../assets/geodata/processed/sango-core-roads-2026-09-13.geojson) has 46 line features (47 line parts), 442 coordinates, and 5 named ways (Polytechnic Road and Ijokodo Road segments). Programmatic checks found no unsupported geometry, and clipped coordinates lie inside the bbox; **6 Python standard-library tests pass**.
- Rendered a color-coded PNG preview from the output GeoJSON and validated its PNG signature and 1200×1000 dimensions. It is a geometry-only QA preview, not QGIS/other GIS visual QA or a basemap.
- Recorded ODbL attribution and the source repository's missing repository-level license caveat. No upstream code or non-road layer was redistributed.
- Created provisional AOI GeoJSONs and kept the count audit, road-tag sample, source GeoPackage and processed clip separately labelled.

## Partially implemented / not yet validated

- **Area choice:** Sango T-junction with short Polytechnic Road/Ijokodo Road approaches is the working recommendation for the first build. The clip is a rectangle and not an official/playable boundary; exact venue placement and locally correct road behavior remain unverified.
- **Road connectivity:** a coordinate-based diagnostic found one main component and seven small components. This is not a QGIS inspection or an OSM-node-ID route-graph validation.
- **OSM content:** the staged geometry is roads only. It has no building footprints, POI layer, terrain, sidewalks, or verified business inventory. Earlier Overpass building/amenity counts were not imported.
- **Source/legal status:** data notes say OSM/QuickOSM, but the upstream GitHub repository declares no repository license. ODbL attribution/provenance are documented; legal review is outstanding.
- **Geographic research:** desk research only. No field survey or Ibadan-local reviewer has checked the road geometry, Sango pin, place names, access or street conditions.
- **Design:** one offline earn–spend–persist loop is specified; none of the gameplay state transitions exist.

## Not yet implemented

- Vite/Three.js project or browser entry point.
- 3D world, player character, movement, camera, collision, interactions or touch HUD.
- Playable roads, buildings, terrain, interiors, day/night or weather.
- Economy/job/vendor/needs systems and IndexedDB save.
- Authentication, PostgreSQL, Colyseus server, real online users, friend/chat/social features.
- Driveable vehicles, housing ownership, player businesses or law/wanted system.
- Physical Android tests, performance report, deployment or live preview.

## Actual blockers / risks

1. The available road snapshot is dated `2026-09-13`, covers an Ibadan North extent only, and ends south of the cited Agbowo point. It supports a compact Sango clip, not a Sango–UI–Agbowo map.
2. QGIS, `ogrinfo` and `ogr2ogr` were unavailable in this environment. The data still needs a GIS review (in QGIS or an equivalent tool) and local/topological verification.
3. Building footprints, verified places and terrain are missing. Do not invent exact real businesses or imply the road clip contains these layers.
4. The source repository has no declared repository-level license. ODbL provenance is recorded; resolve data-chain/share-alike questions with a legal review before release.
5. No Android device benchmark is available; performance targets remain hypotheses. Multiplayer hosting still needs measured latency/CCU and cost tests.

## Next M1 actions

1. Have a GIS reviewer inspect the Sango clip and confirm its junction/road topology; ask an Ibadan-local reviewer to confirm the area, names and a few activity/place anchors.
2. Resolve ODbL/source repository legal questions. Keep attribution and source provenance with any derivative release.
3. Decide whether to acquire a similarly small building/POI/terrain clip or use clearly fictional authored content for the first test; do not broaden to whole-city data.
4. Only after geography QA, author a small road/junction, shopfront and compound-gate proof asset. The runtime remains a later milestone.

M1 is still in progress. The next phase is a small browser scene only after the focused source geometry and first asset gate are reviewed; the planning pack does not imply a playable game exists.
