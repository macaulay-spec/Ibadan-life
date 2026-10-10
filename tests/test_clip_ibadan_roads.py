#!/usr/bin/env python3
"""Unit and snapshot tests for the standard-library Sango road clipper."""
from __future__ import annotations

import hashlib
import json
import struct
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools" / "geodata"))

from clip_ibadan_roads import (  # noqa: E402
    clip_polyline,
    clip_segment,
    decode_gpkg_linestring,
    extract_clip,
)


class SegmentClipTests(unittest.TestCase):
    def test_segment_crossing_rectangle_is_clipped(self) -> None:
        result = clip_segment((-1.0, 0.5), (2.0, 0.5), 0.0, 0.0, 1.0, 1.0)
        self.assertIsNotNone(result)
        self.assertAlmostEqual(result[0][0], 0.0)
        self.assertAlmostEqual(result[0][1], 0.5)
        self.assertAlmostEqual(result[1][0], 1.0)
        self.assertAlmostEqual(result[1][1], 0.5)

    def test_segment_outside_rectangle_is_rejected(self) -> None:
        self.assertIsNone(clip_segment((-2.0, 2.0), (-1.0, 3.0), 0.0, 0.0, 1.0, 1.0))

    def test_disconnected_intersections_become_two_line_parts(self) -> None:
        line = [(-1.0, 0.5), (2.0, 0.5), (2.0, 1.5), (-1.0, 1.5)]
        result = clip_polyline(line, (0.0, 0.0, 1.0, 2.0))
        self.assertEqual(len(result), 2)
        self.assertEqual(result[0], [(0.0, 0.5), (1.0, 0.5)])
        self.assertEqual(result[1], [(1.0, 1.5), (0.0, 1.5)])

    def test_geo_package_header_and_wkb_decode(self) -> None:
        coords = (3.1, 7.4, 3.2, 7.5)
        blob = (
            b"GP" + bytes((0, 1)) + struct.pack("<i", 4326)
            + bytes((1,)) + struct.pack("<II", 2, 2) + struct.pack("<dddd", *coords)
        )
        result = decode_gpkg_linestring(blob)
        self.assertEqual(result, [(3.1, 7.4), (3.2, 7.5)])


class SangoSnapshotTests(unittest.TestCase):
    def test_frozen_source_checksum_and_clip_counts(self) -> None:
        source = ROOT / "assets/geodata/raw/ibadan-north-roads-2026-09-13.gpkg"
        if not source.exists():
            self.skipTest("frozen source GeoPackage is not present")
        digest = hashlib.sha256(source.read_bytes()).hexdigest()
        self.assertEqual(digest, "34db4170cb421cbf18915868ce78550e7668faa9f189064fcd88110a5f17f8d1")

        result = extract_clip(source, (3.877, 7.423, 3.884, 7.432))
        self.assertEqual(result["metadata"]["source_rows_total"], 4560)
        self.assertEqual(result["metadata"]["candidate_rows_intersecting_bbox"], 48)
        self.assertEqual(result["metadata"]["exported_features"], 46)
        self.assertEqual(result["metadata"]["invalid_or_unsupported_geometries"], 0)
        graph = result["metadata"]["coordinate_graph"]
        self.assertEqual(graph["unique_vertices"], 389)
        self.assertEqual(graph["unique_undirected_edges"], 395)
        self.assertEqual(graph["connected_components"], 8)
        self.assertEqual(graph["component_vertex_counts_descending"][0], 352)
        self.assertEqual(graph["vertices_degree_3_or_more"], 49)
        self.assertEqual(len(result["features"]), 46)
        for feature in result["features"]:
            geometry = feature["geometry"]
            lines = [geometry["coordinates"]] if geometry["type"] == "LineString" else geometry["coordinates"]
            for line in lines:
                for lon, lat in line:
                    self.assertGreaterEqual(lon, 3.877 - 1e-10)
                    self.assertLessEqual(lon, 3.884 + 1e-10)
                    self.assertGreaterEqual(lat, 7.423 - 1e-10)
                    self.assertLessEqual(lat, 7.432 + 1e-10)

    def test_committed_clip_is_valid_json_and_keeps_osm_ids(self) -> None:
        output = ROOT / "assets/geodata/processed/sango-core-roads-2026-09-13.geojson"
        if not output.exists():
            self.skipTest("processed Sango clip is not present")
        data = json.loads(output.read_text(encoding="utf-8"))
        self.assertEqual(data["type"], "FeatureCollection")
        self.assertEqual(data["metadata"]["license"], "ODbL")
        self.assertEqual(data["metadata"]["coordinate_graph"]["connected_components"], 8)
        self.assertTrue(all(feature["properties"].get("osm_id") for feature in data["features"]))


if __name__ == "__main__":
    unittest.main(verbosity=2)
