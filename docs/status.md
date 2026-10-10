# Implementation & Evidence Status

**As of:** 2026-10-10
**Current phase:** M1 — acquire, verify and stage assets.
**Scope:** user-directed research/asset preparation followed by initial data acquisition. No game runtime is built.

## Implemented and tested

- Prepared the geographic research, district plan, GDD baseline, asset bible/register, technical/backend plan, roadmap and test gates.
- Queried OpenStreetMap via Overpass and recorded count-only results with returned data timestamps in `assets/geodata/`. The broad envelope count is 1,932 highway ways, 30,063 building ways, 83 waterway ways and 111 amenity objects; a smaller Sango QA window returned 46 highway ways, 1,305 building ways and 3 amenity nodes.
- Captured a limited major-road tag/center sample. It suggests Polytechnic Road and Ijokodo Road near the Sango window, with Oyo Road/Kenneth Dike Way farther east. These are tags/representative centers only—not navigable geometry.
- Created two provisional AOI GeoJSON files and documented the OSM attribution/ODbL provenance.
- **Local file validation:** passed: 21 complete/unique manifest rows; all 4 JSON/GeoJSON files parse; both GeoJSON rings close; relative Markdown links resolve. No game runtime has been implemented, so there is no gameplay test result.

## Implemented but unverified

- Desk research and map-tag findings identify real anchors/routes but have not been field-checked. OSM feature counts do not prove mapped completeness, current naming or on-ground conditions.
- The two AOI polygons are research/QA windows only; neither is an administrative boundary or final playable footprint.
- Engine/backend recommendations remain planning decisions; no browser scene, server or Android benchmark exists.

## Partially implemented

- **M1 geodata:** count audit and limited road metadata are saved. Full road/building geometry, a dated PBF/GeoPackage, terrain raster, QGIS topology review and local review are still outstanding. Targeted Overpass geometry/body calls returned dispatcher timeouts; no geometry file was imported.
- **Asset readiness:** specifications, acquisition/licensing workflow and 21-row manifest exist. Finished Blender assets, character rig/animations, final textures, vehicles, audio and UI are not yet in the project.
- **Game design:** first complete earn–spend–persist loop is defined; none of its code/state transitions exist.

## Not yet implemented

- Vite/Three.js project or browser entry point.
- 3D world, player character, movement, camera, collision, interactions or touch HUD.
- Buildable city cells, terrain, buildings, interiors, day/night or weather.
- Economy/job/vendor/needs systems and IndexedDB save.
- Authentication, Postgres, Colyseus server, real online users, friend/chat/social features.
- Driveable vehicles, housing ownership, player businesses, law/wanted system.
- Physical Android tests, performance report, deployment or live preview.

## Actual blockers / risks

1. Overpass count queries succeeded, but detailed geometry requests timed out or returned server errors. The full 5.5 × 4.2 km research envelope is also too broad to ingest as one mobile cell.
2. A local walk/drive or Ibadan-local reviewer is still needed for street condition, POIs, naming, market activity and cultural details.
3. The planned SRTM tile is not downloaded; DEM resolution must not be treated as street-level survey data.
4. ODbL derivative database obligations, photo/audio releases, and brand/landmark rights need legal review before public release.
5. No Android device benchmark is available; performance targets remain hypotheses. Multiplayer hosting also needs measured CCU and a cost/latency test.

## Next M1 actions

1. Acquire a dated, manageable OSM geometry clip (prefer a locally processed PBF/GeoPackage or split small cells), save provenance and checksum, and keep the raw national file out of Git.
2. Import the Sango test window into QGIS, confirm road topology/connectivity, footprint coverage and POI gaps, then narrow the playable corridor.
3. Acquire and record the SRTM tile/attribution; ask for a local review of the selected block.
4. Only after geometry validation, make/export the first road-junction, shopfront and compound-gate assets.

When M1 data acquisition is complete, proceed to M2: a runnable browser scene and third-person controller.
