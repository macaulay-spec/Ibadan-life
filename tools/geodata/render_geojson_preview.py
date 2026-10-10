#!/usr/bin/env python3
"""Render a tiny color-coded PNG preview of a clipped GeoJSON road layer.

This uses only the Python standard library so the research pipeline does not
require a GIS or image package. The PNG is a QA preview, not game art.
"""
from __future__ import annotations

import argparse
import json
import math
import struct
import zlib
from pathlib import Path
from typing import Iterable

# 5x7 bitmap font, enough for the map title, legend, and scale bar.
FONT = {
    "A": ("01110", "10001", "10001", "11111", "10001", "10001", "10001"),
    "B": ("11110", "10001", "10001", "11110", "10001", "10001", "11110"),
    "C": ("01111", "10000", "10000", "10000", "10000", "10000", "01111"),
    "D": ("11110", "10001", "10001", "10001", "10001", "10001", "11110"),
    "E": ("11111", "10000", "10000", "11110", "10000", "10000", "11111"),
    "F": ("11111", "10000", "10000", "11110", "10000", "10000", "10000"),
    "G": ("01111", "10000", "10000", "10111", "10001", "10001", "01111"),
    "H": ("10001", "10001", "10001", "11111", "10001", "10001", "10001"),
    "I": ("11111", "00100", "00100", "00100", "00100", "00100", "11111"),
    "J": ("00111", "00010", "00010", "00010", "10010", "10010", "01100"),
    "K": ("10001", "10010", "10100", "11000", "10100", "10010", "10001"),
    "L": ("10000", "10000", "10000", "10000", "10000", "10000", "11111"),
    "M": ("10001", "11011", "10101", "10101", "10001", "10001", "10001"),
    "N": ("10001", "11001", "10101", "10011", "10001", "10001", "10001"),
    "O": ("01110", "10001", "10001", "10001", "10001", "10001", "01110"),
    "P": ("11110", "10001", "10001", "11110", "10000", "10000", "10000"),
    "Q": ("01110", "10001", "10001", "10001", "10101", "10010", "01101"),
    "R": ("11110", "10001", "10001", "11110", "10100", "10010", "10001"),
    "S": ("01111", "10000", "10000", "01110", "00001", "00001", "11110"),
    "T": ("11111", "00100", "00100", "00100", "00100", "00100", "00100"),
    "U": ("10001", "10001", "10001", "10001", "10001", "10001", "01110"),
    "V": ("10001", "10001", "10001", "10001", "10001", "01010", "00100"),
    "W": ("10001", "10001", "10001", "10101", "10101", "10101", "01010"),
    "X": ("10001", "10001", "01010", "00100", "01010", "10001", "10001"),
    "Y": ("10001", "10001", "01010", "00100", "00100", "00100", "00100"),
    "Z": ("11111", "00001", "00010", "00100", "01000", "10000", "11111"),
    "0": ("01110", "10001", "10011", "10101", "11001", "10001", "01110"),
    "1": ("00100", "01100", "00100", "00100", "00100", "00100", "01110"),
    "2": ("01110", "10001", "00001", "00010", "00100", "01000", "11111"),
    "3": ("11110", "00001", "00001", "01110", "00001", "00001", "11110"),
    "4": ("00010", "00110", "01010", "10010", "11111", "00010", "00010"),
    "5": ("11111", "10000", "10000", "11110", "00001", "00001", "11110"),
    "6": ("01110", "10000", "10000", "11110", "10001", "10001", "01110"),
    "7": ("11111", "00001", "00010", "00100", "01000", "01000", "01000"),
    "8": ("01110", "10001", "10001", "01110", "10001", "10001", "01110"),
    "9": ("01110", "10001", "10001", "01111", "00001", "00001", "01110"),
    "-": ("00000", "00000", "00000", "11111", "00000", "00000", "00000"),
    "/": ("00001", "00010", "00010", "00100", "01000", "01000", "10000"),
    ".": ("00000", "00000", "00000", "00000", "00000", "00110", "00110"),
    ":": ("00000", "00110", "00110", "00000", "00110", "00110", "00000"),
    " ": ("00000", "00000", "00000", "00000", "00000", "00000", "00000"),
}


class Raster:
    def __init__(self, width: int, height: int, background: tuple[int, int, int]):
        self.width = width
        self.height = height
        self.pixels = bytearray(background * (width * height))

    def pixel(self, x: int, y: int, color: tuple[int, int, int]) -> None:
        if 0 <= x < self.width and 0 <= y < self.height:
            index = (y * self.width + x) * 3
            self.pixels[index:index + 3] = bytes(color)

    def line(self, x0: int, y0: int, x1: int, y1: int,
             color: tuple[int, int, int], thickness: int = 1) -> None:
        dx, dy = abs(x1 - x0), -abs(y1 - y0)
        sx, sy = (1 if x0 < x1 else -1), (1 if y0 < y1 else -1)
        error = dx + dy
        radius = max(0, thickness // 2)
        while True:
            for oy in range(-radius, radius + 1):
                for ox in range(-radius, radius + 1):
                    self.pixel(x0 + ox, y0 + oy, color)
            if x0 == x1 and y0 == y1:
                break
            twice = 2 * error
            if twice >= dy:
                error += dy
                x0 += sx
            if twice <= dx:
                error += dx
                y0 += sy

    def rect(self, x0: int, y0: int, x1: int, y1: int,
             color: tuple[int, int, int], thickness: int = 1) -> None:
        for i in range(thickness):
            self.line(x0 + i, y0 + i, x1 - i, y0 + i, color)
            self.line(x1 - i, y0 + i, x1 - i, y1 - i, color)
            self.line(x1 - i, y1 - i, x0 + i, y1 - i, color)
            self.line(x0 + i, y1 - i, x0 + i, y0 + i, color)

    def circle(self, cx: int, cy: int, radius: int,
               color: tuple[int, int, int]) -> None:
        r2 = radius * radius
        for y in range(-radius, radius + 1):
            for x in range(-radius, radius + 1):
                if x * x + y * y <= r2:
                    self.pixel(cx + x, cy + y, color)

    def text(self, x: int, y: int, value: str,
             color: tuple[int, int, int], scale: int = 2) -> None:
        cursor = x
        for char in value.upper():
            glyph = FONT.get(char, FONT[" "])
            for gy, row in enumerate(glyph):
                for gx, bit in enumerate(row):
                    if bit == "1":
                        for oy in range(scale):
                            for ox in range(scale):
                                self.pixel(cursor + gx * scale + ox, y + gy * scale + oy, color)
            cursor += 6 * scale

    def png(self) -> bytes:
        def chunk(tag: bytes, data: bytes) -> bytes:
            return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", zlib.crc32(tag + data) & 0xffffffff)
        rows = bytearray()
        stride = self.width * 3
        for y in range(self.height):
            rows.append(0)
            rows.extend(self.pixels[y * stride:(y + 1) * stride])
        return (
            b"\x89PNG\r\n\x1a\n"
            + chunk(b"IHDR", struct.pack(">2I5B", self.width, self.height, 8, 2, 0, 0, 0))
            + chunk(b"IDAT", zlib.compress(bytes(rows), level=9))
            + chunk(b"IEND", b"")
        )


def feature_lines(geometry: dict) -> Iterable[list[list[float]]]:
    if geometry["type"] == "LineString":
        yield geometry["coordinates"]
    elif geometry["type"] == "MultiLineString":
        yield from geometry["coordinates"]


def render(source: Path, output: Path) -> None:
    data = json.loads(source.read_text(encoding="utf-8"))
    west, south, east, north = data["bbox"]
    metadata = data.get("metadata", {})
    snapshot_date = str(metadata.get("source_snapshot_date", "DATE NOT SET"))
    feature_count = len(data.get("features", []))
    named_count = sum(bool(feature.get("properties", {}).get("name")) for feature in data.get("features", []))
    mid_lat = (south + north) / 2
    metres_per_lat = 110540.0
    metres_per_lon = 111320.0 * math.cos(math.radians(mid_lat))
    bbox_width_m = (east - west) * metres_per_lon
    bbox_height_m = (north - south) * metres_per_lat

    image = Raster(1200, 1000, (247, 244, 235))
    ink = (44, 57, 61)
    light_grid = (229, 224, 211)
    title = (40, 54, 59)
    image.text(55, 32, "SANGO CORE ROAD CLIP", title, scale=3)
    image.text(58, 62, f"OSM SNAPSHOT {snapshot_date}  -  QA PREVIEW", (94, 107, 106), scale=1)

    # Compact, nearly metric map viewport; keep equal ground scale in X and Y.
    max_map_w, max_map_h = 720, 780
    px_per_m = min(max_map_w / bbox_width_m, max_map_h / bbox_height_m)
    map_w, map_h = bbox_width_m * px_per_m, bbox_height_m * px_per_m
    map_x0 = 80 + (max_map_w - map_w) / 2
    map_y0 = 112 + (max_map_h - map_h) / 2
    map_x1, map_y1 = map_x0 + map_w, map_y0 + map_h

    def project(lon: float, lat: float) -> tuple[int, int]:
        x = map_x0 + (lon - west) * metres_per_lon * px_per_m
        y = map_y0 + (north - lat) * metres_per_lat * px_per_m
        return round(x), round(y)

    # Subtle coordinate-like grid, intentionally not a basemap.
    for i in range(1, 5):
        x = round(map_x0 + map_w * i / 5)
        y = round(map_y0 + map_h * i / 5)
        image.line(x, round(map_y0), x, round(map_y1), light_grid, 1)
        image.line(round(map_x0), y, round(map_x1), y, light_grid, 1)
    image.rect(round(map_x0), round(map_y0), round(map_x1), round(map_y1), (194, 186, 168), 2)

    palette = {
        "motorway": ((163, 74, 54), 7), "trunk": ((183, 81, 50), 7),
        "primary": ((213, 113, 49), 7), "secondary": ((224, 162, 64), 5),
        "tertiary": ((105, 131, 135), 3), "residential": ((93, 115, 124), 2),
        "unclassified": ((115, 135, 139), 2), "service": ((151, 162, 155), 1),
        "path": ((73, 151, 137), 1), "footway": ((73, 151, 137), 1),
        "pedestrian": ((73, 151, 137), 2), "track": ((151, 162, 155), 1),
    }
    # Draw local streets first, then major roads over them.
    ordered = sorted(data["features"], key=lambda f: palette.get(f["properties"].get("highway"), ((115,135,139), 2))[1])
    for feature in ordered:
        highway = feature["properties"].get("highway", "unclassified")
        color, width = palette.get(highway, ((115, 135, 139), 2))
        for line in feature_lines(feature["geometry"]):
            points = [project(float(p[0]), float(p[1])) for p in line]
            for a, b in zip(points, points[1:]):
                image.line(a[0], a[1], b[0], b[1], color, width)

    # Approximate Sango junction orientation pin, clearly separate from OSM geometry.
    sango_x, sango_y = project(3.8803, 7.4275)
    image.circle(sango_x, sango_y, 10, (255, 255, 255))
    image.circle(sango_x, sango_y, 7, (189, 54, 53))
    image.text(900, 125, "ROAD CLASSES", ink, scale=2)
    class_counts = metadata.get("highway_class_counts", {})
    legend = [
        (name.upper(), *palette.get(name, ((115, 135, 139), 2)))
        for name in class_counts
    ]
    legend.sort(key=lambda entry: (-entry[2], entry[0]))
    for index, (label, color, line_width) in enumerate(legend):
        y = 174 + index * 46
        image.line(900, y + 8, 946, y + 8, color, line_width)
        image.text(960, y, label, ink, scale=1)
    image.circle(923, 490, 8, (189, 54, 53))
    image.text(960, 486, "SANGO APPROX", ink, scale=1)
    image.text(900, 560, f"{feature_count} CLIPPED WAYS", ink, scale=1)
    image.text(900, 580, f"{named_count} WITH NAMES", ink, scale=1)
    image.text(900, 620, "SOURCE: OSM / ODBL", ink, scale=1)

    # 250 m scale bar.
    scale_px = round(250 * px_per_m)
    sx, sy = 105, 920
    image.line(sx, sy, sx + scale_px, sy, ink, 4)
    image.line(sx, sy - 7, sx, sy + 7, ink, 3)
    image.line(sx + scale_px, sy - 7, sx + scale_px, sy + 7, ink, 3)
    image.text(sx, sy + 15, "250 M", ink, scale=2)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_bytes(image.png())


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    render(args.source, args.output)
    print(f"Wrote QA preview: {args.output}")


if __name__ == "__main__":
    main()
