# IBADAN LIFE Asset Workspace

This directory contains provisional research polygons, live OSM count evidence, a metadata-only major-road sample, a dated OSM-derived **road-only** GeoPackage and a small Sango clip/QA preview. It does not contain a finished game asset pack, building/POI/terrain geometry, or production 3D assets.

- [`manifest.csv`](manifest.csv) is the inventory and licensing/readiness source of truth.
- [`geodata/aoi-sango-ui-rough.geojson`](geodata/aoi-sango-ui-rough.geojson) is the broad hand-authored research/download envelope.
- [`geodata/aoi-sango-core-qa.geojson`](geodata/aoi-sango-core-qa.geojson) is a small Sango coverage-check window, not a final boundary.
- [`geodata/M1_DATA_AUDIT.md`](geodata/M1_DATA_AUDIT.md) records the live count audit, dated road snapshot, clipped Sango result, source limitations and remaining M1 gates.
- [`geodata/raw/`](geodata/raw/) contains the dated OSM-derived source GeoPackage and its provenance note.
- [`geodata/processed/`](geodata/processed/) contains the reproducible Sango road GeoJSON and color-coded geometry preview; neither represents building, POI or terrain data.
- [`geodata/osm-coverage-counts-2026-10-10.json`](geodata/osm-coverage-counts-2026-10-10.json) and [`geodata/observed-major-roads.json`](geodata/observed-major-roads.json) preserve machine-readable Overpass query evidence; the road-center sample is not navigable geometry.
- Acquisition, modeling, naming, optimization and licensing rules are in [`docs/art/asset-bible.md`](../docs/art/asset-bible.md).
- Geographic data and attribution workflow are in [`docs/research/ibadan-geographic-reference.md`](../docs/research/ibadan-geographic-reference.md) and [`licenses/OSM-ODBL-attribution.md`](licenses/OSM-ODBL-attribution.md).

For every source, record URL, retrieval/snapshot date, exact license, attribution, bounds, transformation notes and checksum. The current OSM-derived extract is small enough to stage but still needs GIS/local review and a legal review of the upstream source/license chain. Keep national extracts, caches, editor backups and unoptimized source images out of Git. Do not use map tiles or photos as textures without their own rights review.
