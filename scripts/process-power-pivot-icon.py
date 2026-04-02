"""
Process power-pivot.png: remove label under the graphic, match PQ icon height,
remove baked checkerboard, recolor greens toward Excel icon green.
"""
from __future__ import annotations

import colorsys
from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "icons" / "power-pivot.png"
OUT = SRC
REF_ICON = ROOT / "public" / "icons" / "power-query.png"

# Match the Excel icon PNG body green (sampled from public/icons/excel.png)
TARGET_RGB = (25, 131, 77)


def rgb_to_hsv(r: int, g: int, b: int) -> tuple[float, float, float]:
    return colorsys.rgb_to_hsv(r / 255.0, g / 255.0, b / 255.0)


def hsv_to_rgb(h: float, s: float, v: float) -> tuple[int, int, int]:
    r, g, b = colorsys.hsv_to_rgb(h, s, v)
    return int(r * 255), int(g * 255), int(b * 255)


def is_whiteish(r: int, g: int, b: int) -> bool:
    return r > 195 and g > 195 and b > 195 and abs(r - g) < 35 and abs(g - b) < 35


def is_background(r: int, g: int, b: int, a: int) -> bool:
    if a < 128:
        return True
    if r > 248 and g > 248 and b > 248:
        return True
    # Checkerboard / light grey canvas
    m = (r + g + b) / 3
    if abs(r - g) < 18 and abs(g - b) < 18 and m > 135:
        return True
    return False


def find_text_cutoff_below_gap(img: Image.Image) -> int:
    """Return y (exclusive) to crop off 'Power Pivot' text below a transparent gap."""
    px = img.load()
    w, h = img.size
    for y in range(10, h - 6):
        prev = sum(px[x, y - 1][3] for x in range(w))
        if prev < 400:
            continue
        if all(sum(px[x, yy][3] for x in range(w)) < 15 for yy in range(y, min(y + 6, h))):
            below = sum(
                sum(px[x, yy][3] for x in range(w)) for yy in range(y + 6, min(y + 45, h))
            )
            if below > 4000:
                return y
    return h


def crop_off_label(img: Image.Image) -> Image.Image:
    cut = find_text_cutoff_below_gap(img)
    if cut < img.height:
        return img.crop((0, 0, img.width, cut))
    return img


def tight_alpha_bbox(img: Image.Image) -> Image.Image:
    px = img.load()
    w, h = img.size
    minx, miny, maxx, maxy = w, h, 0, 0
    found = False
    for yy in range(h):
        for xx in range(w):
            if px[xx, yy][3] > 25:
                found = True
                minx = min(minx, xx)
                miny = min(miny, yy)
                maxx = max(maxx, xx)
                maxy = max(maxy, yy)
    if not found:
        return img
    return img.crop((minx, miny, maxx + 1, maxy + 1))


def resize_to_ref_height(img: Image.Image, target_h: int) -> Image.Image:
    if img.height <= 0 or target_h <= 0:
        return img
    ratio = target_h / img.height
    tw = max(1, int(round(img.width * ratio)))
    return img.resize((tw, target_h), Image.Resampling.LANCZOS)


def flood_transparent(img: Image.Image) -> None:
    pixels = img.load()
    w, h = img.size
    visited: set[tuple[int, int]] = set()
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        q.append((x, 0))
        q.append((x, h - 1))
    for y in range(h):
        q.append((0, y))
        q.append((w - 1, y))

    while q:
        x, y = q.popleft()
        if (x, y) in visited:
            continue
        if x < 0 or x >= w or y < 0 or y >= h:
            continue
        visited.add((x, y))
        r, g, b, a = pixels[x, y]
        if not is_background(r, g, b, a):
            continue
        pixels[x, y] = (0, 0, 0, 0)
        for dx, dy in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            nx, ny = x + dx, y + dy
            if (nx, ny) not in visited:
                q.append((nx, ny))


def recolor_pixel(r: int, g: int, b: int, a: int) -> tuple[int, int, int, int]:
    if a < 8:
        return (0, 0, 0, 0)
    if is_whiteish(r, g, b):
        return (r, g, b, a)

    h, s, v = rgb_to_hsv(r, g, b)
    th, ts, _ = rgb_to_hsv(*TARGET_RGB)

    # Green / lime family (icon body + highlights)
    if 0.12 < h < 0.52 and s > 0.04:
        # Hue → Excel green; keep saturation variation; darker value band
        ns = min(1.0, max(ts * 0.5, s * 0.85))
        nv = 0.1 + v * 0.52
        r2, g2, b2 = hsv_to_rgb(th, ns, nv)
        # Nudge toward sampled Excel body so highlights are not lime
        r2 = int(r2 * 0.65 + TARGET_RGB[0] * 0.35)
        g2 = int(g2 * 0.65 + TARGET_RGB[1] * 0.35)
        b2 = int(b2 * 0.65 + TARGET_RGB[2] * 0.35)
        return (max(0, min(255, r2)), max(0, min(255, g2)), max(0, min(255, b2)), a)

    # Dark neutral shadow (drop shadow on fake checkerboard)
    if v < 0.38 and s < 0.28:
        shade = max(0.12, min(1.0, v * 2.4))
        r2 = max(0, min(255, int(TARGET_RGB[0] * shade)))
        g2 = max(0, min(255, int(TARGET_RGB[1] * shade)))
        b2 = max(0, min(255, int(TARGET_RGB[2] * shade)))
        return (r2, g2, b2, a)

    return (r, g, b, a)


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"Missing {SRC}")

    target_h = Image.open(REF_ICON).height if REF_ICON.exists() else 167

    img = Image.open(SRC).convert("RGBA")
    img = crop_off_label(img)
    flood_transparent(img)

    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            px[x, y] = recolor_pixel(*px[x, y])

    img = tight_alpha_bbox(img)
    img = resize_to_ref_height(img, target_h)

    img.save(OUT, format="PNG", optimize=True)
    print(f"Wrote {OUT} size={img.size}")


if __name__ == "__main__":
    main()
