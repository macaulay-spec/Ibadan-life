# M1 Data Acquisition Audit — Sango / UI / Agbowo

**Audit date:** 2026-10-10
**Source:** OpenStreetMap contributors queried through the Overpass API.
**License:** ODbL; attribution and derivative-database obligations apply.
**Status:** Coverage audit completed; **full geometry extract not acquired/imported**.

## 1. What was queried

### Broad research envelope

- WGS84 bbox (Overpass order: south, west, north, east): `7.417, 3.872, 7.455, 3.922`.
- Overpass data base timestamp returned: `2026-10-10T16:04:36Z`.
- Count-only query looked for OSM ways tagged `highway`, `building`, `waterway`, plus `nwr[amenity]`.

| Feature query | Count | OSM element breakdown |
|---|---:|---|
| `way[highway]` | 1,932 | 1,932 ways |
| `way[building]` | 30,063 | 30,063 ways |
| `way[waterway]` | 83 | 83 ways |
| `nwr[amenity]` | 111 | 71 nodes, 39 ways, 1 relation |

### Small Sango QA window

- WGS84 bbox: `7.423, 3.877, 7.432, 3.884` (about 1.0 km north–south by 0.8 km east–west at this latitude).
- Overpass data base timestamp returned: `2026-10-10T16:07:35Z`.

| Feature query | Count | OSM element breakdown |
|---|---:|---|
| `way[highway]` | 46 | 46 ways |
| `way[building]` | 1,305 | 1,305 ways |
| `nwr[amenity]` | 3 | 3 nodes |
| `nwr[shop]` | 0 | none tagged in this bbox |
| `nwr[public_transport]` | 0 | none tagged in this bbox |
| `nwr[landuse=marketplace]` | 0 | none tagged in this bbox |

The zeroes indicate **missing matching tags in this query window**, not proof that shops, transport stops or markets do not exist on the ground. The disparity between mapped footprints and tagged service POIs is a reason to do local verification and not build the gameplay economy from OSM tags alone.

## 2. Road-name/class observations

A separate OSM query for `highway=primary|trunk|secondary` returned tagged ways around the wider envelope. The sample below preserves only observed metadata and approximate Overpass `center` values; it is **not a complete road inventory** and not road-line geometry.

| OSM way IDs | Observed name / class | Notes |
|---|---|---|
| 30045716, 30045719 | Polytechnic Road / `primary` | Both returned `oneway=yes`; segment shape/direction still requires geometry review. |
| 30764960, 583882723, 583882725, 997072921, 997072922 | Ijokodo Road / `secondary` | Some pieces carry source tags such as `yahoo`; verify current local naming and network continuity. |
| 30045707 | Oyo Road / `primary` | OSM tag returned `oneway=yes`. |
| 230621899, 230621907 | Oyo Road / `trunk`, ref `A1` | OSM tags returned `lanes=2`, `oneway=yes`, `surface=paved` on sampled segments. |
| 230621904, 230621911, 230621913, 230621914 | Kenneth Dike Way / `trunk`, ref `A1` | OSM tags vary by way segment; do not infer whole-route values from this sample. |

The `center` for an OSM way is a derived representative point for the complete way and can lie outside the queried bbox even when the way intersects the bbox. Never place or draw a road using this point. Preserve `way_id` and retrieve the full ordered node geometry for map production.

## 3. Interpretation for the first slice

1. The broad AOI is too wide to treat as one first cell: its 30,063 building ways would create excessive authoring and runtime scope. Keep it as a research clip, then select a narrow road-connected corridor and stream cells.
2. The Sango QA window has enough mapped geometry to justify detailed import review (46 road ways and 1,305 building ways), but the bbox counts do not prove that roads connect correctly or that polygons are complete.
3. OSM service tags are sparse in that small window (3 amenities, no `shop`/`public_transport`/`marketplace` tags returned). Local survey or an Oyo/University/market reference is necessary for gameplay destinations and local context.
4. `highway`, `surface`, `lanes`, `oneway` and names are useful clues, not ground truth. Several records have legacy `source=yahoo` tags. Confirm geometry, directions and surface before authoring traffic.

## 4. Geometry acquisition attempt and blocker

- Count-only queries succeeded and returned the timestamps/counts above.
- A large roads-with-full-geometry query against the broad AOI returned a response split into 181 fetch chunks; this is too large and awkward to ingest through the page-fetch path and was not saved as an asset.
- Several targeted `out geom` / way-body calls returned Overpass dispatcher timeout errors; one alternate public endpoint returned HTTP 500. This appears to be a query-service/load issue, not a license refusal.
- A query for major-way tags and representative centers succeeded, but the centers are not a usable navigable network.
- No line/polygon geometry, PBF, GeoPackage or DEM file has been added to the repository. Do **not** mark GEO-001 or GEO-002 as acquired.

## 5. Reproducible queries

Query files in this folder:

- [`queries/sango-ui-counts.ql`](queries/sango-ui-counts.ql) — count-only broad envelope audit.
- [`queries/sango-core-counts.ql`](queries/sango-core-counts.ql) — count-only small Sango QA window.
- [`queries/sango-ui-major-roads.ql`](queries/sango-ui-major-roads.ql) — major-road metadata query.

Run a single count/metadata request responsibly. For an actual geometry download, use a clipped, dated source (preferably process an OSM PBF/GeoPackage locally), retain source IDs/tags and license metadata, and do not send repeated large queries to a public endpoint. The source must include the full ordered coordinates needed for road topology and buildings.

## 6. Provenance / attribution

The Overpass response identified the source as OpenStreetMap data and stated that it is made available under ODbL. Credit **© OpenStreetMap contributors** and link to [OpenStreetMap copyright](https://www.openstreetmap.org/copyright). This small query audit is not a substitute for an ODbL compliance review if OSM-derived database extracts are redistributed.

## 7. M1 remaining work

- Acquire a manageable, dated OSM geometry extract with roads, building footprints, waterways and relevant POIs; keep national PBFs out of Git.
- Verify way geometry, road graph connectivity, one-way tags, local street names, surface/width tags and the small area’s mapped completeness.
- Compare the data with a local walk/drive or Ibadan-local review; manually add fictional content only where it is clearly not asserted as fact.
- Acquire the planned SRTM DEM tile, verify the actual tile bounds/resolution, and preserve its exact CC BY 4.0 attribution.
- Narrow the AOI from source geometry, then import one test cell and build a visible map-preview before committing to the first district art kit.
