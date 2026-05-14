import Image from "next/image";

export type WixFigure = {
  id?: string;
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

type WixImageGalleryProps = {
  items: readonly WixFigure[];
  columns?: "single" | "double" | "triple";
  className?: string;
};

const DEFAULT_WIDTH = 1200;
const DEFAULT_HEIGHT = 800;

export function WixImageGallery({
  items,
  columns = "double",
  className = "",
}: WixImageGalleryProps) {
  const grid =
    columns === "single"
      ? "grid gap-8"
      : columns === "triple"
        ? "grid gap-6 md:grid-cols-3 md:gap-8"
        : "grid gap-6 sm:grid-cols-2 sm:gap-8";

  const imageSizes =
    columns === "triple"
      ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px";

  return (
    <div
      className={`mx-auto w-full max-w-6xl ${grid} ${className}`.trim()}
      role="list"
    >
      {items.map((img) => {
        const width = img.width ?? DEFAULT_WIDTH;
        const height = img.height ?? DEFAULT_HEIGHT;

        return (
          <figure
            key={img.id ?? img.src}
            className="overflow-hidden rounded-xl border border-eds-charcoal/10 bg-white shadow-sm"
            role="listitem"
          >
            <div className="relative flex min-h-[200px] w-full items-center justify-center bg-eds-blue-soft/25 p-2 sm:min-h-[240px]">
              <Image
                src={img.src}
                alt={img.alt}
                width={width}
                height={height}
                className="h-auto max-h-[min(70vh,520px)] w-full object-contain"
                sizes={imageSizes}
              />
            </div>
            {img.caption ? (
              <figcaption className="border-t border-eds-charcoal/10 px-3 py-2.5 text-center text-sm text-eds-muted">
                {img.caption}
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}
