# IBADAN LIFE Asset Workspace

This directory starts the project asset system. It contains **provisional research-envelope polygons**, a small OSM coverage-count audit, a metadata-only major-road sample and the asset/source register. It does not yet contain a finished game asset pack or a complete OSM geometry extract.

- [`manifest.csv`](manifest.csv) is the inventory and licensing/readiness source of truth.
- [`geodata/aoi-sango-ui-rough.geojson`](geodata/aoi-sango-ui-rough.geojson) is the broad hand-authored research/download envelope.
- [`geodata/aoi-sango-core-qa.geojson`](geodata/aoi-sango-core-qa.geojson) is a small Sango coverage-check window.
- [`geodata/M1_DATA_AUDIT.md`](geodata/M1_DATA_AUDIT.md) records live query counts, a sample of major-road tags, extraction failures, and the remaining M1 tasks.
- [`geodata/osm-coverage-counts-2026-10-10.json`](geodata/osm-coverage-counts-2026-10-10.json) and [`geodata/observed-major-roads.json`](geodata/observed-major-roads.json) preserve machine-readable query evidence; neither file contains complete road geometry.
- The acquisition, modeling, naming, optimization, and licensing rules are in [`docs/art/asset-bible.md`](../docs/art/asset-bible.md).
- The geographic data/attribution workflow is in [`docs/research/ibadan-geographic-reference.md`](../docs/research/ibadan-geographic-reference.md).

Before importing source data, create `assets/licenses/` and record the source URL, retrieval date, data snapshot date, exact license, attribution, query/bounds, transformation notes, and checksum. Keep country-scale OSM extracts, caches, editor backups, and unoptimized source images out of Git. Do not use map tiles or photos as textures without their own rights review.
