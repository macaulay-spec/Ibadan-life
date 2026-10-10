#!/usr/bin/env python3
"""Clip a WGS84 OSM road GeoPackage to a small WGS84 bbox using stdlib only.

This intentionally targets the OSM LINESTRING layer in the Ibadan North source
GeoPackage. It preserves OSM identifiers/tags and emits GeoJSON for GIS review.
It does not infer missing roads, add building footprints, or transform CRS.
"""
from __future__ import annotations

import argparse
import json
import sqlite3
import struct
import sys
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any

# Public source record for the current M1 working extract.
SOURCE_REPOSITORY = (
    "https://github.com/Oluwafunmilade-A/geodev-week02-ibadan-north"
)
SOURCE_COMMIT = "c0a8de3e7700e7f0990dc6e0e8111821744b2699"
SOURCE_DATASET_DATE = "2026-09-13"
SOURCE_SHA256 = "34db4170cb421cbf18915868ce78550e7668faa9f189064fcd88110a5f17f8d1"
OSM_LICENSE = "ODbL"


def decode_gpkg_linestring(blob: bytes) -> list[tuple[float, float]]:
    """Decode a GeoPackage geometry header followed by a 2D WKB LineString."""
    if len(blob) < 9 or blob[:2] != b"GP":
        raise ValueError("Geometry is not a valid GeoPackage binary blob")

    flags = blob[3]
    little_endian = bool(flags & 1)
    header_order = "<" if little_endian else ">"
    envelope_code = (flags >> 1) & 0b111
    envelope_bytes = {0: 0, 1: 32, 2: 48, 3: 48, 4: 64}.get(envelope_code)
    if envelope_bytes is None:
        raise ValueError(f"Unsupported GeoPackage envelope code: {envelope_code}")

    srs_id = struct.unpack_from(header_order + "i", blob, 4)[0]
    if srs_id != 4326:
        raise ValueError(f"Expected EPSG:4326 geometry, received SRS {srs_id}")

    offset = 8 + envelope_bytes
    byte_order = blob[offset]
    order = "<" if byte_order == 1 else ">" if byte_order == 0 else None
    if order is None:
        raise ValueError(f"Invalid WKB byte-order marker: {byte_order}")

    geom_type = struct.unpack_from(order + "I", blob, offset + 1)[0]
    # This source layer is declared LINESTRING, 2D in gpkg_geometry_columns.
    if geom_type != 2:
        raise ValueError(f"Expected 2D WKB LineString (type 2), received {geom_type}")

    count = struct.unpack_from(order + "I", blob, offset + 5)[0]
    coord_offset = offset + 9
    expected_end = coord_offset + count * 16
    if expected_end > len(blob):
        raise ValueError("Truncated LineString coordinate array")

    coords = [
        struct.unpack_from(order + "dd", blob, coord_offset + i * 16)
        for i in range(count)
    ]
    if len(coords) < 2:
        raise ValueError("LineString contains fewer than two points")
    return coords


def same_point(a: tuple[float, float], b: tuple[float, float]) -> bool:
    return abs(a[0] - b[0]) < 1e-11 and abs(a[1] - b[1]) < 1e-11


def clip_segment(
    a: tuple[float, float],
    b: tuple[float, float],
    west: float,
    south: float,
    east: float,
    north: float,
) -> tuple[tuple[float, float], tuple[float, float]] | None:
    """Liang-Barsky clip of one lon/lat segment against an axis-aligned bbox."""
    x0, y0 = a
    x1, y1 = b
    dx, dy = x1 - x0, y1 - y0
    p = (-dx, dx, -dy, dy)
    q = (x0 - west, east - x0, y0 - south, north - y0)
    t0, t1 = 0.0, 1.0

    for pi, qi in zip(p, q):
        if abs(pi) < 1e-18:
            if qi < 0:
                return None
            continue
        ratio = qi / pi
        if pi < 0:
            if ratio > t1:
                return None
            t0 = max(t0, ratio)
        else:
            if ratio < t0:
                return None
            t1 = min(t1, ratio)

    if t0 > t1:
        return None
    return (
        (x0 + t0 * dx, y0 + t0 * dy),
        (x0 + t1 * dx, y0 + t1 * dy),
    )


def clip_polyline(
    coords: list[tuple[float, float]],
    bbox: tuple[float, float, float, float],
) -> list[list[tuple[float, float]]]:
    west, south, east, north = bbox
    pieces: list[list[tuple[float, float]]] = []
    current: list[tuple[float, float]] = []

    def flush() -> None:
        nonlocal current
        if len(current) >= 2 and any(not same_point(current[0], p) for p in current[1:]):
            pieces.append(current)
        current = []

    for a, b in zip(coords, coords[1:]):
        clipped = clip_segment(a, b, west, south, east, north)
        if clipped is None:
            flush()
            continue
        start, end = clipped
        if current and same_point(current[-1], start):
            if not same_point(current[-1], end):
                current.append(end)
        else:
            flush()
            current = [start, end]
    flush()
    return pieces


def coordinate_graph_metrics(features: list[dict[str, Any]]) -> dict[str, Any]:
    """Build a diagnostic graph by snapping coordinates to 1e-8 degrees.

    OSM way nodes are not retained as standalone records in this road layer, so
    this coordinate graph is a consistency hint, not authoritative topology.
    """
    adjacency: dict[tuple[float, float], set[tuple[float, float]]] = defaultdict(set)
    for feature in features:
        geometry = feature["geometry"]
        lines = [geometry["coordinates"]] if geometry["type"] == "LineString" else geometry["coordinates"]
        for line in lines:
            points = [(round(float(x), 8), round(float(y), 8)) for x, y in line]
            for start, end in zip(points, points[1:]):
                if start == end:
                    continue
                adjacency[start].add(end)
                adjacency[end].add(start)

    remaining = set(adjacency)
    component_sizes: list[int] = []
    while remaining:
        seed = remaining.pop()
        stack = [seed]
        size = 0
        while stack:
            point = stack.pop()
            size += 1
            neighbours = adjacency[point] & remaining
            remaining.difference_update(neighbours)
            stack.extend(neighbours)
        component_sizes.append(size)

    component_sizes.sort(reverse=True)
    return {
        "coordinate_rounding_decimal_places": 8,
        "unique_vertices": len(adjacency),
        "unique_undirected_edges": sum(len(neighbours) for neighbours in adjacency.values()) // 2,
        "connected_components": len(component_sizes),
        "component_vertex_counts_descending": component_sizes,
        "vertices_degree_3_or_more": sum(len(neighbours) >= 3 for neighbours in adjacency.values()),
        "warning": "Coordinate-snapped diagnostic only; does not validate OSM node IDs, grade separation, road rules, or ground truth.",
    }


def bbox_intersects_geometry_table(
    connection: sqlite3.Connection,
    table_name: str,
    bbox: tuple[float, float, float, float],
) -> list[sqlite3.Row]:
    west, south, east, north = bbox
    rtree = f"rtree_{table_name}_geom"
    table_exists = connection.execute(
        "SELECT 1 FROM sqlite_master WHERE type='table' AND name=?", (rtree,)
    ).fetchone()
    if table_exists:
        sql = f"""
            SELECT h.* FROM \"{table_name}\" h
            JOIN \"{rtree}\" r ON r.id = h.fid
            WHERE r.minx <= ? AND r.maxx >= ?
              AND r.miny <= ? AND r.maxy >= ?
            ORDER BY h.fid
        """
        return list(connection.execute(sql, (east, west, north, south)))
    return list(connection.execute(f'SELECT * FROM "{table_name}" ORDER BY fid'))


def extract_clip(source: Path, bbox: tuple[float, float, float, float]) -> dict[str, Any]:
    connection = sqlite3.connect(f"file:{source.resolve()}?mode=ro", uri=True)
    connection.row_factory = sqlite3.Row
    try:
        contents = connection.execute(
            "SELECT table_name, data_type, last_change, min_x, min_y, max_x, max_y, srs_id "
            "FROM gpkg_contents WHERE data_type='features' ORDER BY table_name LIMIT 1"
        ).fetchone()
        if contents is None:
            raise ValueError("GeoPackage has no feature table")
        if contents["srs_id"] != 4326:
            raise ValueError(f"Source layer must be EPSG:4326; found {contents['srs_id']}")
        table_name = contents["table_name"]
        geom_columns = connection.execute(
            "SELECT column_name, geometry_type_name, srs_id, z, m "
            "FROM gpkg_geometry_columns WHERE table_name=?", (table_name,)
        ).fetchone()
        if geom_columns is None or geom_columns["geometry_type_name"] != "LINESTRING":
            raise ValueError("Expected a LineString geometry table")

        candidate_rows = bbox_intersects_geometry_table(connection, table_name, bbox)
        features: list[dict[str, Any]] = []
        invalid = 0
        class_counts: Counter[str] = Counter()
        name_count = 0
        coordinate_count = 0
        part_count = 0
        for row in candidate_rows:
            row_dict = dict(row)
            try:
                coords = decode_gpkg_linestring(row_dict[geom_columns["column_name"]])
                if any(not (-180 <= x <= 180 and -90 <= y <= 90) for x, y in coords):
                    raise ValueError("Coordinate outside WGS84 ranges")
                parts = clip_polyline(coords, bbox)
            except (ValueError, struct.error):
                invalid += 1
                continue
            if not parts:
                continue

            properties: dict[str, Any] = {"source_fid": row_dict.get("fid")}
            for key, value in row_dict.items():
                if key in ("fid", geom_columns["column_name"]) or value in (None, ""):
                    continue
                properties[key] = value
            class_counts[str(properties.get("highway", "unknown"))] += 1
            name_count += int(bool(properties.get("name")))
            coordinate_count += sum(len(part) for part in parts)
            part_count += len(parts)
            coordinates: Any
            geometry_type: str
            if len(parts) == 1:
                geometry_type, coordinates = "LineString", parts[0]
            else:
                geometry_type, coordinates = "MultiLineString", parts
            features.append({
                "type": "Feature",
                "id": str(properties.get("full_id") or properties.get("osm_id") or properties["source_fid"]),
                "properties": properties,
                "geometry": {"type": geometry_type, "coordinates": coordinates},
            })

        source_total = connection.execute(f'SELECT COUNT(*) FROM "{table_name}"').fetchone()[0]
        return {
            "type": "FeatureCollection",
            "name": "Sango core clipped OSM road features",
            "bbox": [bbox[0], bbox[1], bbox[2], bbox[3]],
            "metadata": {
                "source": "OpenStreetMap contributors via QuickOSM; staged as an Ibadan North road GeoPackage",
                "source_repository": SOURCE_REPOSITORY,
                "source_repository_commit": SOURCE_COMMIT,
                "source_snapshot_date": SOURCE_DATASET_DATE,
                "source_geopackage_sha256": SOURCE_SHA256,
                "source_layer": table_name,
                "source_crs": "EPSG:4326",
                "source_layer_last_change": contents["last_change"],
                "source_layer_extent": [contents["min_x"], contents["min_y"], contents["max_x"], contents["max_y"]],
                "license": OSM_LICENSE,
                "attribution": "© OpenStreetMap contributors",
                "clip_bbox_order": "west,south,east,north",
                "clip_method": "Liang-Barsky clipping of source LineString segments to the AOI rectangle",
                "source_rows_total": source_total,
                "candidate_rows_intersecting_bbox": len(candidate_rows),
                "exported_features": len(features),
                "invalid_or_unsupported_geometries": invalid,
                "line_parts": part_count,
                "coordinate_count": coordinate_count,
                "named_features": name_count,
                "highway_class_counts": dict(sorted(class_counts.items())),
                "coordinate_graph": coordinate_graph_metrics(features),
                "known_coverage_limit": "Source extent stops at latitude 7.4404545; this clip does not cover all of Agbowo or the complete UI campus.",
                "source_license_note": "The source GitHub repository has no declared repository license. This file contains only its documented OSM-derived road layer, retained under ODbL with attribution; no repository-authored code or administrative-boundary layer is redistributed.",
            },
            "features": features,
        }
    finally:
        connection.close()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path, help="Input GeoPackage with an EPSG:4326 LineString layer")
    parser.add_argument("--bbox", nargs=4, type=float, required=True,
                        metavar=("WEST", "SOUTH", "EAST", "NORTH"),
                        help="Clip rectangle in WGS84 longitude/latitude")
    parser.add_argument("--output", type=Path, required=True, help="Output GeoJSON path")
    args = parser.parse_args()
    west, south, east, north = args.bbox
    if not (west < east and south < north):
        parser.error("bbox must satisfy west < east and south < north")

    result = extract_clip(args.source, (west, south, east, north))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(result["metadata"], ensure_ascii=False, indent=2))
    print(f"Wrote {len(result['features'])} clipped features to {args.output}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
