from __future__ import annotations

import argparse
from pathlib import Path

import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
REFERENCE_DIR = ROOT / "assets" / "referencias"
DEFAULT_BASE_SIZE = (2560, 1107)
DEFAULT_RETINA_SIZE = (5120, 2214)


def parse_size(raw: str) -> tuple[int, int]:
    try:
        width_text, height_text = raw.lower().split("x", 1)
        width = int(width_text)
        height = int(height_text)
    except ValueError as exc:
        raise argparse.ArgumentTypeError("Use the format WIDTHxHEIGHT, for example 2560x1107.") from exc

    if width <= 0 or height <= 0:
        raise argparse.ArgumentTypeError("Both dimensions must be positive integers.")

    return width, height


def normalize_stem(stem: str) -> str:
    for suffix in ("@2x", "@1x", "@3x"):
        if stem.endswith(suffix):
            return stem[: -len(suffix)]
    return stem


def resolve_source_path(raw_source: str, source_dir: Path) -> Path:
    source_path = Path(raw_source)
    if source_path.is_absolute():
        return source_path
    return source_dir / source_path


def display_path(path: Path) -> Path:
    try:
        return path.relative_to(ROOT)
    except ValueError:
        return path


def resize_for_reference(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    fitted = ImageOps.fit(
        ImageOps.exif_transpose(image).convert("RGB"),
        size,
        method=Image.Resampling.LANCZOS,
        centering=(0.5, 0.5),
    )

    # The reference screens are mostly clean UI captures, so a light
    # contrast-and-sharpness pass keeps text more legible after scaling
    # without overcooking the background.
    array = np.array(fitted)
    array = cv2.fastNlMeansDenoisingColored(array, None, 2, 2, 7, 21)

    lab = cv2.cvtColor(array, cv2.COLOR_RGB2LAB)
    lightness, a_channel, b_channel = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=1.55, tileGridSize=(8, 8))
    lightness = clahe.apply(lightness)
    lab = cv2.merge((lightness, a_channel, b_channel))

    fitted = Image.fromarray(cv2.cvtColor(lab, cv2.COLOR_LAB2RGB))
    fitted = ImageEnhance.Contrast(fitted).enhance(1.05)
    fitted = ImageEnhance.Sharpness(fitted).enhance(1.28)
    fitted = fitted.filter(
        ImageFilter.UnsharpMask(
            radius=1.0,
            percent=190,
            threshold=1,
        ),
    )

    return fitted


def build_variant(
    source_path: Path,
    destination_path: Path,
    size: tuple[int, int],
) -> None:
    with Image.open(source_path) as image:
        resized = resize_for_reference(image, size)

    destination_path.parent.mkdir(parents=True, exist_ok=True)
    resized.save(destination_path, format="PNG", optimize=True, compress_level=9)
    print(f"Created {display_path(destination_path)} -> {size[0]}x{size[1]}")


def build_reference_asset(
    source_path: Path,
    base_size: tuple[int, int],
    retina_size: tuple[int, int],
) -> None:
    if not source_path.exists():
        print(f"Skipping missing source: {display_path(source_path)}")
        return

    stem = normalize_stem(source_path.stem)
    base_destination = source_path.with_name(f"{stem}.png")
    retina_destination = source_path.with_name(f"{stem}@2x.png")

    build_variant(source_path, base_destination, base_size)

    if retina_size != base_size:
        build_variant(source_path, retina_destination, retina_size)
    else:
        print(f"Skipping duplicate retina variant for {display_path(source_path)}")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate optimized reference assets for future full-screen views.",
    )
    parser.add_argument(
        "sources",
        nargs="+",
        help="Source image files, relative to assets/referencias unless an absolute path is given.",
    )
    parser.add_argument(
        "--source-dir",
        type=Path,
        default=REFERENCE_DIR,
        help="Base directory used for relative source paths.",
    )
    parser.add_argument(
        "--base-size",
        type=parse_size,
        default=DEFAULT_BASE_SIZE,
        help="Target size for the standard asset, in WIDTHxHEIGHT format.",
    )
    parser.add_argument(
        "--retina-size",
        type=parse_size,
        default=DEFAULT_RETINA_SIZE,
        help="Target size for the @2x asset, in WIDTHxHEIGHT format.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()

    for raw_source in args.sources:
        source_path = resolve_source_path(raw_source, args.source_dir)
        build_reference_asset(source_path, args.base_size, args.retina_size)


if __name__ == "__main__":
    main()
