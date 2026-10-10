# IBADAN LIFE Asset Workspace

This directory starts the project asset system. It contains a **provisional AOI research polygon** and an asset/source register. It does not yet contain a finished game asset pack.

- [`manifest.csv`](manifest.csv) is the inventory and licensing/readiness source of truth.
- [`geodata/aoi-sango-ui-rough.geojson`](geodata/aoi-sango-ui-rough.geojson) is a hand-authored research/download envelope only; it is not a mapped district boundary and does not contain OSM roads or building data.
- The acquisition, modeling, naming, optimization, and licensing rules are in [`docs/art/asset-bible.md`](../docs/art/asset-bible.md).
- The geographic data/attribution workflow is in [`docs/research/ibadan-geographic-reference.md`](../docs/research/ibadan-geographic-reference.md).

Before importing source data, create `assets/licenses/` and record the source URL, retrieval date, data snapshot date, exact license, attribution, query/bounds, transformation notes, and checksum. Keep country-scale OSM extracts, caches, editor backups, and unoptimized source images out of Git. Do not use map tiles or photos as textures without their own rights review.
