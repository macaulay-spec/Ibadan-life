# Implementation & Evidence Status

**As of:** 2026-10-10
**Scope of this pass:** user asked to begin with asset readiness and planning. The original project files were not used as input to this plan.

## Implemented and tested

- Written a fresh pre-production plan pack from the supplied brief: geographic research, district plan, GDD, asset bible/register, technical/backend plan, roadmap/test gates.
- Created a provisional GeoJSON download-envelope asset for the Sango–UI–Agbowo reference corridor. It is labelled provisional and contains no real road/building data.
- Defined an honest offline-first prototype boundary and the test required before claiming multiplayer.
- **Document/file validation:** passed local checks: 20 unique CSV asset IDs; GeoJSON parses and its polygon ring is closed; all 8 planning documents are present. No game runtime has been implemented, so there is no gameplay test result.

## Implemented but unverified

- Desk research identifies real anchors and routes, with cited sources. It is not ground-truthed, and point coordinates are approximate.
- The AOI polygon is machine-readable but not snapped to OSM, an administrative district or surveyed boundary.
- The engine and backend recommendation is a planning decision only; no package, server or Android benchmark exists.
- The asset manifest/source policy is ready as a production checklist; no finished 3D or audio pack is imported.

## Partially implemented

- **Asset readiness:** specifications and acquisition/licensing workflow exist; actual OSM and SRTM data, Blender assets, character model/animations, textures, vehicles, audio and final UI assets remain to be sourced/authored and audited.
- **Geography:** real corridors and landmarks are researched; there is no downloaded OSM network or validated 3D city yet.
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

1. The Sango–UI OSM extract has not been acquired or inspected; mapped completeness and geometry quality are not yet known.
2. The current source list supports a research plan, not a survey-grade map; field/local cultural review is still needed.
3. OSM derivative database obligations, photo/audio releases, and brand/landmark rights need an explicit legal review before public release.
4. No Android device benchmark is available in this phase; performance targets are starting hypotheses.
5. A real multiplayer server introduces always-on compute, bandwidth, security, moderation, and operational costs. No CCU or monthly bill can be honestly promised before load tests and hosting quotes.

## Next step

Execute **M1 (Acquire, verify and stage assets)**: download a dated OSM clip, document license/source and checksum, inspect it in QGIS, choose the exact walkable slice, and then create/import the first modular road/shop/compound/player assets. After M1, create the Vite scene and start the controller milestone.
