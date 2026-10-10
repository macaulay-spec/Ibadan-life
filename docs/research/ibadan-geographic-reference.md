# Ibadan Geographic Research & World Reference

**Research cut-off:** 2026-10-10
**Purpose:** Ground the first playable district in the real city before generating game geometry.
**Confidence note:** Desk research only. No field survey, exhaustive OSM audit, survey-grade boundary, or independent legal review has yet been completed.

## 1. Place identity and spatial character

Ibadan is the capital of Oyo State in southwest Nigeria. It is not a flat generic grid: published geographic summaries describe a city of hills and valleys, with a north–south ridge and substantial elevation variation; Britannica describes Ibadan as situated on seven hills and identifies its education and commercial significance. [Britannica](https://www.britannica.com/place/Ibadan)

The city’s form is layered rather than uniformly planned. The Ibadan City Diagnostic Report describes a traditional core, later suburban growth, peri-urban expansion, and settlement/flood risks tied to slopes and rapid runoff. This matters to gameplay: the environment needs changing street grain and density, local rises and dips, drainage/stream corridors, and mixed formal/informal edges—not one repeated suburban block. [Adelekan, *Ibadan City Diagnostic Report*](https://assets.publishing.service.gov.uk/media/5a02c4e9ed915d0ade60daac/Urban_ARK-IBADAN_CITY_DIAGNOSTIC_REPORT-07032016_2___IOA.pdf)

The city’s recognisable anchors include the University of Ibadan, the commercial Dugbe/Cocoa House area, Mapo Hall and the old core, Bower’s Tower, and Agodi Gardens. The Oyo State government’s “At a Glance” document lists several of these landmarks and gives a useful public-sector starting reference; details still require cross-checking before a landmark is modelled. [Oyo State, *At a Glance*](https://old.oyostate.gov.ng/wp-content/uploads/2020/10/OYO-STATE-AT-A-GLANCE-NEW.pdf)

## 2. First reference area: Sango–UI First Gate–Agbowo

### Why this area first

The initial slice should use the **Sango junction → University of Ibadan / First Gate → Agbowo edge** corridor. It has a distinct and playable combination of a busy junction, university-frontage movement, shops/food services and nearby residential/hostel fabric. It is more practical for an early daily-life loop than attempting the entire metropolitan area. The Oyo State Road Maintenance Agency explicitly lists the **Mokola–Sango–U.I.** road corridor among its Ibadan road works; a local study describes the Sango T-junction as connecting Sango to Mokola, UI/Agbowo, and the Elewure/Mokola axis. [Oyo State road agency](https://oyostate.gov.ng/oyo-state-road-maintenance-agency/) · [Sango junction study](https://www.researchgate.net/figure/Map-of-Sango-T-Junction-source-Google-map_fig1_342279815)

### Approximate reference pins

These are **orientation pins, not survey control points or final in-game coordinates**. Re-geocode them against the chosen OSM snapshot and verify during local review.

| Reference | Approximate WGS84 position | Use in planning |
|---|---:|---|
| Sango T-junction | 7.4275° N, 3.8803° E | Western transport anchor; junction topology and approach roads must be taken from current OSM geometry and checked locally. [Sango junction study](https://www.researchgate.net/figure/Map-of-Sango-T-Junction-source-Google-map_fig1_342279815) |
| University of Ibadan campus reference | 7.4431° N, 3.9022° E | Approximate campus point, not a gate coordinate. [Mapcarta](https://mapcarta.com/31565648) |
| Agbowo reference | 7.4465° N, 3.9138° E | Approximate neighborhood point; confirm extent and its connection to the main road using OSM. [Coordinate listing](https://www.findlatitudeandlongitude.com/l/Agbowo,+Ibadan+North,+Oyo,+200284,+Nigeria/6771547/) |
| Ibadan city centre (context only) | about 7.38° N, 3.90° E | Not the first-slice origin; city-wide context only. [Britannica](https://www.britannica.com/place/Ibadan) |

A provisional **data-download envelope** is stored as [`assets/geodata/aoi-sango-ui-rough.geojson`](../../assets/geodata/aoi-sango-ui-rough.geojson), approximately 3.872–3.922° E and 7.417–7.455° N. It is a rectangular research clip, not a ward, district, campus, or development boundary. The playable slice should be a narrower road-connected corridor selected after viewing the actual extract; do not turn the whole envelope into one loaded scene.

### Road and place structure to verify in the source data

- **Primary spine:** Mokola–Sango–UI / Sango–UI approach, preserving the real sequence and junction connections.
- **Sango junction:** preserve its actual branches and angles from OSM; do not replace it with a symmetrical four-way crossroads.
- **University edge:** represent the public approach, gate frontage, and road-edge activity. Do not claim to recreate interior campus roads/buildings without verified source data and permission review.
- **Agbowo edge:** use actual mapped streets/footprints where present; model the surrounding commercial/residential mix from field references rather than assuming every parcel is a shop or hostel.
- **District exits:** keep the Mokola and Elewure-side road connections open as real-looking continuation stubs so the first area is visibly part of a larger connected city. Expand toward Bodija, Dugbe, and the historic core only after the first cell network is validated.

### Wider-city expansion anchors

| Expansion | Real-world role | Planned game treatment |
|---|---|---|
| Mokola | North/south road interchange and hill-area connection | First visible route out of the Sango slice; expand when junction transitions are stable. |
| Bodija / Bodija Market | Major commercial/market anchor north-east of the central districts | Separate market-heavy district; research loading, stalls, service lanes, and market operating pattern before asset production. |
| Dugbe / Cocoa House | Commercial centre and recognisable skyline landmark | Later high-density commercial district; use a custom silhouette, not copied imagery or a trademarked building interior. |
| Mapo / Oja’ba / Beere | Historic core and hilltop civic/market references | Later, denser, more organic street grain; terrain and walking routes are important. |
| Agodi / Bower’s Tower | Green/recreation and elevated landmark references | Later public-space district and city skyline/viewpoint composition. |

Road names and corridors above are not an exhaustive road inventory. The state road agency’s list also references Gate–Total Garden–Mokola, Bodija Market–Ojoo, and several central Ibadan connections, which provide later expansion links. [Oyo State road agency](https://oyostate.gov.ng/oyo-state-road-maintenance-agency/)

## 3. Data and asset sources: what we can use

| Source | Intended use | Terms / cautions |
|---|---|---|
| OpenStreetMap (OSM) contributors | Road centre-lines, paths, building footprints, waterways, land use, and tagged POIs | OSM data is under ODbL. Credit “© OpenStreetMap contributors” and link to the ODbL/copyright page. If a distributed derived database is made, review ODbL share-alike obligations; game output and database obligations are not automatically the same question. Keep source IDs/tags/date and get a legal review before commercial release. [OSM Legal FAQ](https://wiki.openstreetmap.org/wiki/Legal_FAQ) · [OSM copyright](https://www.openstreetmap.org/copyright) |
| Geofabrik Nigeria extract | Versioned OSM source PBF, clipped locally to the study area | The current Nigeria extract is a country-wide file (large; around 676 MB in the research result), so do not ship it with the game or commit it to Git. Filter it down to the corridor. [Geofabrik Nigeria](https://download.geofabrik.de/africa/nigeria.html) |
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

1. **Freeze an acquisition snapshot.** Download a small AOI extract from a suitable OSM source; record source URL, retrieval timestamp, snapshot timestamp, query/bounds, and license in `assets/licenses/`. Do not query public Overpass repeatedly at runtime.
2. **Inspect coverage.** Open the clipped data in QGIS; check roads, buildings, tags, names, waterways, and gaps against multiple independent maps and local review. Mark uncertain/incomplete features. OSM is volunteer mapping and must not be treated as exhaustive.
3. **Project correctly.** Keep source positions in WGS84 (EPSG:4326); convert to UTM Zone 31N (EPSG:32631) for metric modelling. Choose a local origin close to the slice so Three.js coordinates remain small; store the inverse transform for map/debug coordinates.
4. **Build street graph.** Classify roads/paths by OSM tags; use tagged widths/lanes only where present. Where data is absent, infer a conservative playable width and label it as designed, not surveyed. Preserve connectivity, junction angles and named route sequence.
5. **Create blocks and plots.** Use building footprints as placement/roofline references. Generate original facades from modular kits; merge repetitive small buildings where needed, while protecting landmarks and block/street silhouettes. Never use raw OSM 2D polygons as proof of actual building height or façade.
6. **Shape terrain.** Sample the 30 m DEM for broad height and slopes; hand-correct road crowns, entrances, drainage channels and walkable grades. Do not claim DEM precision below its resolution.
7. **Add navigation and collisions.** Convert walkable surfaces to a simplified collision/nav graph; test routes from spawn to each shop/job/interior and between all open road ends. Keep cars on a road graph; keep pedestrian shortcuts connected to sidewalks/alleys.
8. **Package spatial cells.** Make an offline processed map in 250 m neighbourhood cells (tune from measurements). Load cells near the player and unload far cells; share geometry/materials and use LOD/instancing.
9. **Validate and record changes.** Compare key junctions/landmarks against the source and, later, an on-ground review. Keep an OSM source attribution in credits and a data provenance manifest with the build.

## 5. Accuracy vs fictionalisation rules

**Keep geographically faithful:** overall route topology, major junction shape/sequence, landmark relative placement, dominant hill/valley direction, broad water/drainage corridors, and the relationship between campus edge, Sango and Agbowo.

**Can be condensed or fictionalised:** exact parcel widths where OSM is incomplete, repetitive shop/compound facades, interior floor plans, minor alleys/plot boundaries, individual business names, signage, street furniture, non-critical vegetation, and traffic timings. Use fictional businesses unless permission is granted.

**Never imply precision not supported by evidence:** survey-grade elevations, live traffic, legal property boundaries, current store occupancy, road surface condition, exact house numbers, or private campus detail.

## 6. Research gaps to close before content lock

- Obtain and inspect the actual Sango–UI OSM extract; confirm road/building completeness and named routes.
- Perform a local walk/drive or arrange a knowledgeable reviewer; validate sightlines, junction behaviour, market/hostel/shop mix, drains, shade, and soundscape.
- Resolve conflicting coordinates for points of interest by snapping to current OSM ways/nodes.
- Check local names and Yoruba spellings/pronunciation with a local cultural reviewer.
- Review ODbL compliance, public photo/video releases, signage/trademark use, and any local data/photography restrictions with counsel before release.

## 7. Sources consulted

- [Britannica: Ibadan](https://www.britannica.com/place/Ibadan)
- [Oyo State Road Maintenance Agency](https://oyostate.gov.ng/oyo-state-road-maintenance-agency/)
- [Oyo State, At a Glance (PDF)](https://old.oyostate.gov.ng/wp-content/uploads/2020/10/OYO-STATE-AT-A-GLANCE-NEW.pdf)
- [Adelekan, Ibadan City Diagnostic Report (UK Government-hosted PDF)](https://assets.publishing.service.gov.uk/media/5a02c4e9ed915d0ade60daac/Urban_ARK-IBADAN_CITY_DIAGNOSTIC_REPORT-07032016_2___IOA.pdf)
- [OSM Legal FAQ](https://wiki.openstreetmap.org/wiki/Legal_FAQ) and [OSM copyright](https://www.openstreetmap.org/copyright)
- [Geofabrik Nigeria extract](https://download.geofabrik.de/africa/nigeria.html)
- [HOT/HDX Nigeria roads](https://data.humdata.org/dataset/hotosm_nga_roads) and [buildings](https://data.humdata.org/dataset/hotosm_nga_buildings)
- [Digital Earth Africa SRTM product specification](https://docs.digitalearthafrica.org/en/latest/data_specs/SRTM_DEM_specs.html)
- [University of Ibadan / Sango / Agbowo approximate georeference links](https://mapcarta.com/31565648) · [Sango study](https://www.researchgate.net/figure/Map-of-Sango-T-Junction-source-Google-map_fig1_342279815) · [Agbowo coordinate listing](https://www.findlatitudeandlongitude.com/l/Agbowo,+Ibadan+North,+Oyo,+200284,+Nigeria/6771547/)
- [Poly Haven license](https://polyhaven.com/license)
