# Geodata staging

`aoi-sango-ui-rough.geojson` is an agent-authored research envelope and nothing more. It contains no roads, buildings, POIs, land-cover or elevation data. The point coordinates in its metadata are approximate orientation pins and must be snapped to a dated source before use.

Future source-data workflow:

1. Acquire a small OSM clip (prefer a dated Geofabrik source processed locally or a one-off bounded export); avoid large repeated public API requests and never call a source API from the game client.
2. Save source URL, retrieval/snapshot dates, area/query, ODbL text/attribution, transform history, and a SHA-256 checksum in `assets/licenses/`.
3. Keep the raw extract outside Git if it is large; generate a lightweight, versioned processed artifact for development.
4. Store the original OSM feature type/id/tags and source date through processing so attribution and provenance survive.
5. Inspect the streets and building completeness in QGIS before generating geometry; field/local verification is a required step.
6. Keep DEM data in a separate source record; the planned SRTM resolution is suitable for broad landform only.
