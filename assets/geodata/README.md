# Geodata staging

`aoi-sango-ui-rough.geojson` is an agent-authored broad research/download envelope; `aoi-sango-core-qa.geojson` is a smaller coverage-check rectangle. Neither is an official neighbourhood boundary or a playable map.

A dated OSM-derived road GeoPackage is staged at [`raw/ibadan-north-roads-2026-09-13.gpkg`](raw/ibadan-north-roads-2026-09-13.gpkg). It contains 4,560 road LineStrings in EPSG:4326 and has a recorded 2026-09-13 snapshot. A reproducible, approximately 0.8 × 1.0 km Sango core clip is at [`processed/sango-core-roads-2026-09-13.geojson`](processed/sango-core-roads-2026-09-13.geojson), with a color-coded QA preview at [`processed/sango-core-road-preview.png`](processed/sango-core-road-preview.png). This is **road geometry only**—not buildings, POIs, terrain, or a full Sango–UI–Agbowo corridor. Its exact scope and limitations are recorded in [`M1_DATA_AUDIT.md`](M1_DATA_AUDIT.md).

The raw source repository has no declared repository-level license, although its data notes identify the road layer as OpenStreetMap/QuickOSM-derived. The project includes only the road layer, preserves its IDs/tags, and records ODbL attribution. A legal review remains outstanding. No QGIS inspection or local ground-truth review has been performed.

Other evidence remains distinct: [`osm-coverage-counts-2026-10-10.json`](osm-coverage-counts-2026-10-10.json) is a live count audit and [`observed-major-roads.json`](observed-major-roads.json) is a partial road-tag/center sample; representative centers are not navigable line geometry.

## Reproducible workflow

1. Keep the source file, commit, recorded snapshot, bounds, SHA-256 and license caveat alongside the derivative.
2. Run [`../../tools/geodata/clip_ibadan_roads.py`](../../tools/geodata/clip_ibadan_roads.py) with a WGS84 bbox to preserve IDs/tags and produce clipped GeoJSON; run [`../../tools/geodata/render_geojson_preview.py`](../../tools/geodata/render_geojson_preview.py) to create a standard-library QA preview.
3. Inspect geometry and connectivity in QGIS/another GIS and compare with independent/local references before gameplay use. The scripts' coordinate checks are not a replacement for that review.
4. Keep OSM attribution visible in derived-data credits and meet applicable ODbL obligations. Store DEM provenance separately if terrain is later acquired.
