# OpenStreetMap Data Attribution & Provenance Record

**Underlying source:** OpenStreetMap contributors. The staged road snapshot was retrieved from the public GitHub repository [`Oluwafunmilade-A/geodev-week02-ibadan-north`](https://github.com/Oluwafunmilade-A/geodev-week02-ibadan-north), which describes its road layer as OSM/QuickOSM-derived. The repository has no declared repository-level license.

**Attribution to display:** **© OpenStreetMap contributors** — link to <https://www.openstreetmap.org/copyright>.

## Dated road snapshot

- Source commit: `c0a8de3e7700e7f0990dc6e0e8111821744b2699`.
- Source notes: OSM Roads – Ibadan North, extracted `2026-09-13`.
- GeoPackage layer timestamp: `2026-09-13T18:16:05.743Z`.
- Source SHA-256: `34db4170cb421cbf18915868ce78550e7668faa9f189064fcd88110a5f17f8d1`.
- Raw staged file: [`../geodata/raw/ibadan-north-roads-2026-09-13.gpkg`](../geodata/raw/ibadan-north-roads-2026-09-13.gpkg).
- Layer: `highway`, 4,560 LineStrings, EPSG:4326; extent `[3.8591817, 7.3359635, 4.009407, 7.4404545]` (WGS84 west/south/east/north).
- Processed Sango clip: [`../geodata/processed/sango-core-roads-2026-09-13.geojson`](../geodata/processed/sango-core-roads-2026-09-13.geojson), bbox `[3.877, 7.423, 3.884, 7.432]`.

The project redistributes the documented OSM-derived `highway` data layer only, retaining OSM IDs/tags and this provenance. It does not redistribute upstream repository code or other layers. OSM data is under the Open Database License (ODbL). Attribution and applicable share-alike terms must be respected; if a derivative database is distributed, keep the corresponding source/derivative available as required. The source repository's missing repository-level license and exact data-chain documentation need legal review before commercial/public release. This record is not legal advice.

## Separate Overpass coverage audit

Count/tag queries were made through Overpass on `2026-10-10`; their timestamps, bbox, queries and limits are recorded in [`../geodata/M1_DATA_AUDIT.md`](../geodata/M1_DATA_AUDIT.md) and [`../geodata/queries/`](../geodata/queries/). The count audit and the September GeoPackage are distinct snapshots; do not combine their feature counts as if they came from one dataset.

OSM is volunteer geographic information and may be incomplete or stale. The staged GeoPackage is a road-only extract; it contains no building footprints, terrain or verified venue inventory. Local review and a QGIS/other GIS QA pass remain outstanding.
