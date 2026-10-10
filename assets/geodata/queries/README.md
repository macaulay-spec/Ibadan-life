# M1 OSM query files

These are reproducible Overpass QL audit queries, not pre-shipped map geometry. The queries return counts or a limited road-tag/center sample; the actual OSM road/building geometry has not yet been downloaded into this workspace.

- `sango-ui-counts.ql`: broad AOI count audit.
- `sango-core-counts.ql`: small Sango QA-window counts and amenity/shop/transport tag presence.
- `sango-ui-major-roads.ql`: metadata for primary/trunk/secondary ways, including Overpass centers (not line geometry).

Use the public service sparingly. For the production extract, use a clipped dated source locally, preserve the OSM IDs and tags, and make sure any geometry output includes full ordered vertices rather than `center` only. See `../M1_DATA_AUDIT.md` and `../../licenses/OSM-ODBL-attribution.md`.
