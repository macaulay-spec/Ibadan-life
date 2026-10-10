# Ibadan Geographic Research & World Reference

**Research cut-off:** 2026-10-10
**Purpose:** Ground the first playable district in the real city before generating game geometry.
**Confidence note:** Desk research only. No field survey, exhaustive OSM audit, survey-grade boundary, or independent legal review has yet been completed.

## 1. Place identity and spatial character

Ibadan is the capital of Oyo State in southwest Nigeria. It is not a flat generic grid: published geographic summaries describe a city of hills and valleys, with a north–south ridge and substantial elevation variation; Britannica describes Ibadan as situated on seven hills and identifies its education and commercial significance. [Britannica](https://www.britannica.com/place/Ibadan)

The city’s form is layered rather than uniformly planned. The Ibadan City Diagnostic Report describes a traditional core, later suburban growth, peri-urban expansion, and settlement/flood risks tied to slopes and rapid runoff. This matters to gameplay: the environment needs changing street grain and density, local rises and dips, drainage/stream corridors, and mixed formal/informal edges—not one repeated suburban block. [Adelekan, *Ibadan City Diagnostic Report*](https://assets.publishing.service.gov.uk/media/5a02c4e9ed915d0ade60daac/Urban_ARK-IBADAN_CITY_DIAGNOSTIC_REPORT-07032016_2___IOA.pdf)

The city’s recognisable anchors include the University of Ibadan, the commercial Dugbe/Cocoa House area, Mapo Hall and the old core, Bower’s Tower, and Agodi Gardens. The Oyo State government’s “At a Glance” document lists several of these landmarks and gives a useful public-sector starting reference; details still require cross-checking before a landmark is modelled. [Oyo State, *At a Glance*](https://old.oyostate.gov.ng/wp-content/uploads/2020/10/OYO-STATE-AT-A-GLANCE-NEW.pdf)

## 2. First reference area: Sango T-junction core

### Why this area first

The first slice should be a **compact Sango core**, not the entire Sango–University of Ibadan–Agbowo corridor. A dated OSM-derived road snapshot contains a small, connected pattern around Sango, including short segments tagged Polytechnic Road (`primary`) and Ijokodo Road (`secondary`). That gives an authentic street backbone for a few curated daily-life destinations without requiring a city-wide map or empty kilometre-scale travel.

The Oyo State Road Maintenance Agency lists the **Mokola–Sango–U.I.** corridor among its Ibadan road works; a local study describes the Sango T-junction's connections to the UI/Agbowo and Mokola/Elewure axes. These sources make Sango a credible geographic anchor, but do not make our approximate pin or every mapped branch authoritative. [Oyo State road agency](https://oyostate.gov.ng/oyo-state-road-maintenance-agency/) · [Sango junction study](https://www.researchgate.net/figure/Map-of-Sango-T-Junction-source-Google-map_fig1_342279815)

### Approximate reference pins

These are **orientation pins, not survey control points or final in-game coordinates**. Re-geocode them against the chosen OSM snapshot and verify during local review.

| Reference | Approximate WGS84 position | Use in planning |
|---|---:|---|
| Sango T-junction | 7.4275° N, 3.8803° E | Approximate anchor from a secondary study. It falls inside the research clip and close to mapped local roads, but is not snapped/survey-verified. [Sango junction study](https://www.researchgate.net/figure/Map-of-Sango-T-Junction-source-Google-map_fig1_342279815) |
| University of Ibadan campus reference | 7.4431° N, 3.9022° E | Approximate campus point, not a gate coordinate. [Mapcarta](https://mapcarta.com/31565648) |
| Agbowo reference | 7.4465° N, 3.9138° E | Approximate neighborhood point. The current road source stops south of it. [Coordinate listing](https://www.findlatitudeandlongitude.com/l/Agbowo,+Ibadan+North,+Oyo,+200284,+Nigeria/6771547/) |
| Ibadan city centre (context only) | about 7.38° N, 3.90° E | Not the first-slice origin; city-wide context only. [Britannica](https://www.britannica.com/place/Ibadan) |

The broad provisional **research/download envelope** remains [`assets/geodata/aoi-sango-ui-rough.geojson`](../../assets/geodata/aoi-sango-ui-rough.geojson), approximately 3.872–3.922° E and 7.417–7.455° N. It is not a ward, district, campus or development boundary and is far too broad to turn into one first playable scene.

A smaller working Sango road clip is `[west=3.877, south=7.423, east=3.884, north=7.432]`, approximately 0.8 × 1.0 km. Its 46 clipped OSM road features and source limitations are documented in [`assets/geodata/M1_DATA_AUDIT.md`](../../assets/geodata/M1_DATA_AUDIT.md). The bounds are only a processing/QA window; finalize the walkable gameplay area after GIS and local review. The snapshot has roads only and its northern extent ends below the cited Agbowo point, so it does not provide an Sango–UI–Agbowo route.

### Road and place structure for the first slice

- **Sango core:** preserve the real asymmetric branch structure and relative road angles from the dated line geometry; do not redraw it as a symmetrical four-way crossroad.
- **Polytechnic Road / Ijokodo Road:** these names and road classes occur on segments inside the clip. Preserve their source IDs/tags and verify exact local naming/continuity; use only the short in-clip approaches for the first build.
- **Curated places:** set a small number of useful game destinations around the real street pattern. Use fictional names/shops until a local review verifies actual locations, current use and permission.
- **No UI/Agbowo claim:** the campus and Agbowo point remain later expansion anchors. Obtain and review new geometry before representing their road link, frontage or access.
- **Future exits:** do not extend roads past the available geometry as if the continuation were verified. Any authored continuation must be clearly marked as a design transition until mapped.

### Wider-city expansion anchors

| Expansion | Real-world role | Planned game treatment |
|---|---|---|
| UI approach / First Gate and Agbowo | University edge, student-facing activity, commercial/residential mix | First adjacent expansion candidate after acquiring a source that reaches north of the current road extent and local review. |
| Mokola | North/south road interchange and hill-area connection | Later route transition after Sango's junction and cell edges work. |
| Bodija / Bodija Market | Major commercial/market anchor north-east of central districts | Separate market-heavy district; research stalls, service lanes and market patterns before asset production. |
| Dugbe / Cocoa House | Commercial centre and recognisable skyline landmark | Later high-density commercial district; use an original silhouette, not copied imagery or trademarked interiors. |
| Mapo / Oja’ba / Beere | Historic core and hilltop civic/market references | Later, denser, more organic street grain; terrain and walking routes matter. |
| Agodi / Bower’s Tower | Green/recreation and elevated landmark references | Later public-space district and skyline/viewpoint composition. |

Road names and corridors above are not an exhaustive road inventory. The state road agency's list references Gate–Total Garden–Mokola, Bodija Market–Ojoo and central Ibadan connections as future research leads. [Oyo State road agency](https://oyostate.gov.ng/oyo-state-road-maintenance-agency/)

## 3. Data and asset sources: what we can use

| Source | Intended use | Terms / cautions |
|---|---|---|
| OpenStreetMap (OSM) contributors | Road centre-lines, paths, building footprints, waterways, land use, and tagged POIs | OSM data is under ODbL. Credit “© OpenStreetMap contributors” and link to the ODbL/copyright page. If a distributed derived database is made, review ODbL share-alike obligations; game output and database obligations are not automatically the same question. Keep source IDs/tags/date and get a legal review before commercial release. [OSM Legal FAQ](https://wiki.openstreetmap.org/wiki/Legal_FAQ) · [OSM copyright](https://www.openstreetmap.org/copyright) |
| Dated Ibadan North road GeoPackage (staged source) | Initial Sango road geometry and short named-road segments | Its source repository notes OSM/QuickOSM, extracted 2026-09-13, but declares no repository-level license. The included layer is road-only; the ODbL provenance and legal caveat are recorded. It does not cover all of UI/Agbowo. Do not treat its bounds or tags as local ground truth. See [`M1_DATA_AUDIT.md`](../../assets/geodata/M1_DATA_AUDIT.md). |
| Geofabrik Nigeria extract | Potential versioned OSM source PBF, clipped locally for a later area | The Nigeria extract is country-wide and large; do not ship it with the game or commit it to Git. Filter only the chosen compact area. [Geofabrik Nigeria](https://download.geofabrik.de/africa/nigeria.html) |
| HOT / Humanitarian Data Exchange Nigeria OSM exports | Cross-check road/building coverage or a focused alternative extract | Derived from volunteered OSM data, ODbL; source coverage can be incomplete. Use as cross-check, not as independent official survey truth. [Nigeria roads](https://data.humdata.org/dataset/hotosm_nga_roads) · [Nigeria buildings](https://data.humdata.org/dataset/hotosm_nga_buildings) |
| Digital Earth Africa SRTM DEM | Broad terrain slopes/valleys and relative elevation | 1 arc-second product is about 30 m and is listed as CC BY 4.0 by Digital Earth Africa. Too coarse for kerbs or individual drainage, suitable for the broad landform only. Store the attribution and source version. [SRTM specification](https://docs.digitalearthafrica.org/en/latest/data_specs/SRTM_DEM_specs.html) |
| Original field photos, sound and observation | Local façade palettes, signs, market props, street audio, and validation | Record only with consent and retain release/source metadata. Do not capture identifiable people/plates for a commercial texture pack without permission. |
| Generated/custom Blender assets | Nigerian/Ibadan-specific buildings, characters, vehicles, signage, props and interiors | Original production assets; use references for style and proportions, not as copied 3D scans. Do not reproduce logos or private interiors without permission. |
| Poly Haven CC0 | Generic PBR material gaps (e.g. concrete/metal/wood), if a needed texture is verified | Poly Haven says its donated assets are CC0; still record the individual asset identifier and download date. Do not use site renders/logos as game assets. [Poly Haven license](https://polyhaven.com/license) |

### Do not use without a separate license review

- Google, Bing, or other proprietary map/satellite tiles as game textures or as a public in-game basemap.
- OSM standard raster tiles as a baked texture or a bulk offline tile cache; OSM **data** and third-party/rendered **tiles** have different terms and usage policies.
- Social media images, street-view screenshots, uncredited photo packs, ripped commercial game models, or marketplace models with unclear redistribution rights.
- Real shop logos, private residential layouts, identifiable people, or recorded voices/music without explicit rights/consent.

## 4. Convert geography into a playable 3D world

1. **Freeze an acquisition snapshot.** The dated road-only source and Sango clip are recorded in `assets/geodata/M1_DATA_AUDIT.md` and `assets/licenses/`. If refreshed or expanded, record source URL, retrieval/snapshot dates, exact compact bounds, and license; do not query public Overpass at runtime.
2. **Inspect coverage.** Open the current Sango road clip in QGIS or another GIS; check roads, junctions, tags and geometry against independent references and local review. Obtain separate data for any needed buildings/POIs/water/terrain and mark gaps. OSM is volunteer mapping and is not exhaustive.
3. **Project correctly.** Keep source positions in WGS84 (EPSG:4326); convert to UTM Zone 31N (EPSG:32631) for metric modelling. Choose a local origin close to the slice so Three.js coordinates remain small; store the inverse transform for map/debug coordinates.
4. **Build street graph.** Classify roads/paths by OSM tags; use tagged widths/lanes only where present. Where data is absent, infer a conservative playable width and label it as designed, not surveyed. Preserve connectivity, junction angles and named route sequence.
5. **Create blocks and plots.** Use building footprints as placement/roofline references. Generate original facades from modular kits; merge repetitive small buildings where needed, while protecting landmarks and block/street silhouettes. Never use raw OSM 2D polygons as proof of actual building height or façade.
6. **Shape terrain.** Sample the 30 m DEM for broad height and slopes; hand-correct road crowns, entrances, drainage channels and walkable grades. Do not claim DEM precision below its resolution.
7. **Add navigation and collisions.** Convert walkable surfaces to a simplified collision/nav graph; test routes from spawn to each shop/job/interior and between all open road ends. Keep cars on a road graph; keep pedestrian shortcuts connected to sidewalks/alleys.
8. **Package spatial cells.** Make an offline processed map in 250 m neighbourhood cells (tune from measurements). Load cells near the player and unload far cells; share geometry/materials and use LOD/instancing.
9. **Validate and record changes.** Compare key junctions/landmarks against the source and, later, an on-ground review. Keep an OSM source attribution in credits and a data provenance manifest with the build.

## 5. Accuracy vs fictionalisation rules

**Keep geographically faithful:** within each released phase, overall route topology, major junction shape/sequence, landmark relative placement, dominant hill/valley direction, and supported water/drainage corridors. Only claim the relationship between Sango, the campus edge and Agbowo once the expansion geometry and local review support it.

**Can be condensed or fictionalised:** exact parcel widths where OSM is incomplete, repetitive shop/compound facades, interior floor plans, minor alleys/plot boundaries, individual business names, signage, street furniture, non-critical vegetation, and traffic timings. Use fictional businesses unless permission is granted.

**Never imply precision not supported by evidence:** survey-grade elevations, live traffic, legal property boundaries, current store occupancy, road surface condition, exact house numbers, or private campus detail.

## 6. Research gaps to close before content lock

- Inspect the staged Sango-core road clip in QGIS/another GIS; verify topology, road tags, clipping and named routes. Obtain a separate compact source for buildings/POIs only if they are needed.
- Before a UI/Agbowo expansion, acquire a new dated extract that actually reaches those areas; confirm route coverage rather than extrapolating the current file.
- Perform a local walk/drive or arrange a knowledgeable reviewer; validate sightlines, junction behaviour, activity/place anchors, drains, shade and soundscape.
- Resolve conflicting coordinates for points of interest by snapping to current OSM ways/nodes.
- Check local names and Yoruba spellings/pronunciation with a local cultural reviewer.
- Review ODbL compliance, public photo/video releases, signage/trademark use, and any local data/photography restrictions with counsel before release.

## 7. Sources consulted

- [Britannica: Ibadan](https://www.britannica.com/place/Ibadan)
- [Oyo State Road Maintenance Agency](https://oyostate.gov.ng/oyo-state-road-maintenance-agency/)
- [Oyo State, At a Glance (PDF)](https://old.oyostate.gov.ng/wp-content/uploads/2020/10/OYO-STATE-AT-A-GLANCE-NEW.pdf)
- [Adelekan, Ibadan City Diagnostic Report (UK Government-hosted PDF)](https://assets.publishing.service.gov.uk/media/5a02c4e9ed915d0ade60daac/Urban_ARK-IBADAN_CITY_DIAGNOSTIC_REPORT-07032016_2___IOA.pdf)
- [OSM Legal FAQ](https://wiki.openstreetmap.org/wiki/Legal_FAQ) and [OSM copyright](https://www.openstreetmap.org/copyright)
- [Staged Ibadan North OSM/QuickOSM road GeoPackage repository](https://github.com/Oluwafunmilade-A/geodev-week02-ibadan-north) — commit, file checksum, date and license caveat in [`assets/geodata/M1_DATA_AUDIT.md`](../../assets/geodata/M1_DATA_AUDIT.md)
- [Geofabrik Nigeria extract](https://download.geofabrik.de/africa/nigeria.html)
- [HOT/HDX Nigeria roads](https://data.humdata.org/dataset/hotosm_nga_roads) and [buildings](https://data.humdata.org/dataset/hotosm_nga_buildings)
- [Digital Earth Africa SRTM product specification](https://docs.digitalearthafrica.org/en/latest/data_specs/SRTM_DEM_specs.html)
- [University of Ibadan / Sango / Agbowo approximate georeference links](https://mapcarta.com/31565648) · [Sango study](https://www.researchgate.net/figure/Map-of-Sango-T-Junction-source-Google-map_fig1_342279815) · [Agbowo coordinate listing](https://www.findlatitudeandlongitude.com/l/Agbowo,+Ibadan+North,+Oyo,+200284,+Nigeria/6771547/)
- [Poly Haven license](https://polyhaven.com/license)
