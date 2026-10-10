# M1 Data Acquisition Audit — Sango Core

**Audit date:** 2026-10-10
**Scope decision:** recommend a compact Sango T-junction slice, not all Ibadan or Oyo State.
**Status:** a dated road-only OSM snapshot has been imported and clipped for research. The first-area boundary remains provisional; QGIS/local visual review, building/POI/terrain data and legal review are still outstanding.

## 1. Focused-area recommendation

Use an approximately **0.8 km east–west × 1.0 km north–south** road window around Sango T-junction, including short approaches on **Polytechnic Road** and **Ijokodo Road**. The working WGS84 rectangle is `[west=3.877, south=7.423, east=3.884, north=7.432]`; it is a data clip, not an official neighbourhood boundary or an already playable level.

This keeps the first geography legible and small enough for a curated life-sim loop: a Sango transport/meeting anchor, a few nearby fictional service destinations, and connected local streets. The clip does **not** reach the approximate Agbowo point and is not the Sango–UI–Agbowo corridor. Treat UI/Agbowo as later adjacent expansion after new geometry is obtained and reviewed.

## 2. Live OSM coverage counts (separate from the dated geometry file)

Count-only Overpass queries returned the following live coverage results. These counts do not describe the included GeoPackage snapshot and do not prove feature completeness.

### Broad research envelope

- WGS84 bbox (Overpass order: south, west, north, east): `7.417, 3.872, 7.455, 3.922`.
- Overpass data base timestamp: `2026-10-10T16:04:36Z`.

| Feature query | Count | OSM element breakdown |
|---|---:|---|
| `way[highway]` | 1,932 | 1,932 ways |
| `way[building]` | 30,063 | 30,063 ways |
| `way[waterway]` | 83 | 83 ways |
| `nwr[amenity]` | 111 | 71 nodes, 39 ways, 1 relation |

### Small Sango QA window

- WGS84 bbox: `7.423, 3.877, 7.432, 3.884` (approximately 1.0 km north–south by 0.8 km east–west).
- Overpass data base timestamp: `2026-10-10T16:07:35Z`.

| Feature query | Count | OSM element breakdown |
|---|---:|---|
| `way[highway]` | 46 | 46 ways |
| `way[building]` | 1,305 | 1,305 ways |
| `nwr[amenity]` | 3 | 3 nodes |
| `nwr[shop]` | 0 | none tagged in this bbox |
| `nwr[public_transport]` | 0 | none tagged in this bbox |
| `nwr[landuse=marketplace]` | 0 | none tagged in this bbox |

Zero matching tags mean **not mapped under those tags in this query**, not proof that shops, transport stops or a market do not exist on the ground. Do not derive the playable economy from OSM POI tags alone.

## 3. Dated road geometry snapshot

- **Provider/staging repository:** [Oluwafunmilade-A/geodev-week02-ibadan-north](https://github.com/Oluwafunmilade-A/geodev-week02-ibadan-north), commit `c0a8de3e7700e7f0990dc6e0e8111821744b2699`.
- The source repository's `data-notes.md` describes the layer as **OSM Roads – Ibadan North**, obtained with OSM/QuickOSM on `2026-09-13`. The source GitHub repository has no declared repository license.
- The single source layer is `highway`: **4,560 LineString features**, **EPSG:4326**, extent `[3.8591817, 7.3359635, 4.009407, 7.4404545]`; GeoPackage layer timestamp `2026-09-13T18:16:05.743Z`.
- The source extract was copied to [`raw/ibadan-north-roads-2026-09-13.gpkg`](raw/ibadan-north-roads-2026-09-13.gpkg). SHA-256: `34db4170cb421cbf18915868ce78550e7668faa9f189064fcd88110a5f17f8d1`.
- Its extent ends at latitude `7.4404545`, south of the cited approximate Agbowo point near `7.4465`. Do not present it as covering all of UI or Agbowo.

The upstream notes identify OSM as the data origin; only the OSM-derived road layer is included here, with OSM IDs/tags and attribution. No upstream repository code or non-OSM layer is redistributed. The absent repository-level license and ODbL share-alike obligations still require a legal review before commercial/public release. See [`../licenses/OSM-ODBL-attribution.md`](../licenses/OSM-ODBL-attribution.md) and [`raw/README.md`](raw/README.md).

## 4. Sango core geometry clip

Reproducible output: [`processed/sango-core-roads-2026-09-13.geojson`](processed/sango-core-roads-2026-09-13.geojson). The standard-library processor [`tools/geodata/clip_ibadan_roads.py`](../../tools/geodata/clip_ibadan_roads.py) uses the GeoPackage R-tree to select candidates and clips ordered LineString segments to the stated WGS84 rectangle.

| QA measure | Result |
|---|---:|
| R-tree bbox candidate features | 48 |
| Features with line geometry inside the clip | 46 |
| Geometry types / parts | 45 LineString features + 1 MultiLineString feature (2 parts); 47 parts total |
| Coordinates in clipped output | 442 |
| Unsupported/invalid geometries | 0 |
| Named way features | 5 |
| Named records | 2 × `Polytechnic Road` (`primary`; ways 30045716, 30045719), 3 × `Ijokodo Road` (`secondary`; ways 30764960, 583882723, 583882725) |

Road classes in the 46 exported features: 2 primary, 3 secondary, 9 residential, 9 service, and 23 unclassified. The OSM source IDs and available tags are retained in feature properties. The two Polytechnic Road primary ways carry `oneway=yes` in the snapshot; direction still needs GIS/local review. The reproducible coordinate-graph diagnostic is embedded in the GeoJSON metadata: 389 unique rounded vertices and 395 edges, 8 components, one main component with 352 vertices, and 49 vertices with degree 3 or more. This simple coordinate-based result is a useful diagnostic, **not** proof of OSM-node topology or a final route graph.

[`processed/sango-core-road-preview.png`](processed/sango-core-road-preview.png) is a color-coded preview rendered from the clipped GeoJSON, with an approximate research pin for Sango. It is not a basemap, not a QGIS inspection, and not proof that the pin is survey-accurate. The renderer is [`tools/geodata/render_geojson_preview.py`](../../tools/geodata/render_geojson_preview.py).

- Clip GeoJSON SHA-256: `3be66f1b65f3cd66f9dc0fd143124c71825cbd38aef211bfd45bd672a52cdbeb`.
- PNG preview SHA-256: `404fd6f6400515c9eeef8d425bfc69c3b14a2867b927bec7d8a05de74f88b672`.

Example regeneration and test commands from the repository root:

```sh
python3 tools/geodata/clip_ibadan_roads.py \
  assets/geodata/raw/ibadan-north-roads-2026-09-13.gpkg \
  --bbox 3.877 7.423 3.884 7.432 \
  --output assets/geodata/processed/sango-core-roads-2026-09-13.geojson

python3 tools/geodata/render_geojson_preview.py \
  assets/geodata/processed/sango-core-roads-2026-09-13.geojson \
  assets/geodata/processed/sango-core-road-preview.png

python3 -m unittest discover -s tests -v
```

## 5. Road-tag observations and data limitations

The Sango clip contains two named Polytechnic Road primary segments and three named Ijokodo Road secondary segments. A separate earlier Overpass sample around the wider envelope returned other major-road tags, but its representative centers were not navigable geometry; see [`observed-major-roads.json`](observed-major-roads.json).

In the 4,560-feature source layer, only 474 ways (10.4%) have `name`, 454 (10.0%) have `surface`, 385 (8.4%) have `oneway`, 162 (3.6%) have `lanes`, 2 have `width`, and 7 have `maxspeed`. Road width, material, lane count and operating behaviour therefore need explicit uncertainty and local review. These are mapped tags, not ground truth.

This source contains **roads only**. It provides no building footprints, water features, POI layer, terrain/DEM, sidewalk completeness or verified street widths. The earlier live count audit's 1,305 building ways and 3 amenities in the Sango window were not included in this GeoPackage and have not been clipped. Keep any game venues fictional/curated unless separately verified; do not infer actual businesses from absent tags.

## 6. Earlier road-name sample (metadata only)

A separate Overpass request for `highway=primary|trunk|secondary` returned tags and approximate way-center values, not full line geometry. This is context only and should not be used to draw or place roads.

| OSM way IDs | Observed name / class | Notes |
|---|---|---|
| 30045716, 30045719 | Polytechnic Road / `primary` | Sampled `oneway=yes`; geometry is now present in the dated GeoPackage clip. |
| 30764960, 583882723, 583882725, 997072921, 997072922 | Ijokodo Road / `secondary` | Some sample pieces carry legacy source tags; verify local naming and continuity. |
| 30045707 | Oyo Road / `primary` | Outside the small clip / broader context only. |
| 230621899, 230621907 | Oyo Road / `trunk`, ref `A1` | Do not infer route-wide values from sampled segments. |
| 230621904, 230621911, 230621913, 230621914 | Kenneth Dike Way / `trunk`, ref `A1` | Segment tags vary; outside first-slice scope. |

## 7. Acquisition attempts and provenance

- Count-only Overpass queries succeeded. Some detailed `out geom`/way-body calls returned dispatcher timeouts; one alternate endpoint returned HTTP 500. No large response was saved through the page-fetch path.
- A separate dated GeoPackage was found and inspected locally through its SQLite/GeoPackage tables and R-tree. QGIS, `ogrinfo` and `ogr2ogr` are not installed in this environment; no QGIS visual QA is claimed.
- OSM underlying data is under ODbL. Credit **© OpenStreetMap contributors** and link to [OpenStreetMap copyright](https://www.openstreetmap.org/copyright). Preserve source IDs, snapshot date, checksum and derivative dataset. Obtain legal review before public or commercial release.

## 8. Remaining M1 work

1. Review the clip in QGIS/another GIS and verify junction connectivity, road direction tags and geometric clipping; confirm with an Ibadan-local reviewer. The coordinate graph is preliminary only.
2. Obtain a properly documented OSM buildings/POI/land-use source for the same compact window, or intentionally author fictional points without presenting them as factual venues. Do not expand into an entire city extract.
3. Acquire a correctly attributed SRTM tile if terrain is needed; use it only for broad landform, not street/kerb elevation.
4. Resolve the source repository's missing repository-level license and ODbL compliance with a legal review before release.
5. Only after these checks, freeze a playable area, build authored street/building assets, and verify the walkable route between gameplay destinations.

## 9. Reproducible query files

- [`queries/sango-ui-counts.ql`](queries/sango-ui-counts.ql) — broad-envelope count audit.
- [`queries/sango-core-counts.ql`](queries/sango-core-counts.ql) — small Sango count audit.
- [`queries/sango-ui-major-roads.ql`](queries/sango-ui-major-roads.ql) — earlier major-road metadata query.
