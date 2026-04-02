import Image from "next/image";

export type WixFigure = {
  src: string;
  alt: string;
  caption?: string;
};

type WixImageGalleryProps = {
  items: readonly WixFigure[];
  /** default: 1 col mobile, 2 on sm+ */
  columns?: "single" | "double";
  className?: string;
};

export function WixImageGallery({
  items,
  columns = "double",
  className = "",
}: WixImageGalleryProps) {
  const grid =
    columns === "single"
      ? "grid gap-8"
      : "grid gap-6 sm:grid-cols-2 sm:gap-8";

  return (
    <div
      className={`mx-auto w-full max-w-5xl ${grid} ${className}`.trim()}
      role="list"
    >
      {items.map((img) => (
        <figure
          key={img.src}
          className="overflow-hidden rounded-xl border border-eds-charcoal/10 bg-white shadow-sm"
          role="listitem"
        >
          <div className="relative flex min-h-[200px] w-full items-center justify-center bg-eds-blue-soft/25 p-2 sm:min-h-[240px]">
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={800}
              className="h-auto max-h-[min(70vh,520px)] w-full object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
            />
          </div>
          {img.caption ? (
            <figcaption className="border-t border-eds-charcoal/10 px-3 py-2.5 text-center text-sm text-eds-muted">
              {img.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
