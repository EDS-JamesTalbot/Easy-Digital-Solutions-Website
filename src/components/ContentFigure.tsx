import Image from "next/image";

export type ContentFigureImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  figureClassName?: string;
  sizes?: string;
  quality?: number;
};

type ContentFigureProps = ContentFigureImage;

export function ContentFigure({
  src,
  alt,
  width = 900,
  height = 500,
  figureClassName = "max-w-3xl",
  sizes,
  quality,
}: ContentFigureProps) {
  const isLocal = src.startsWith("/");

  return (
    <figure className={`mx-auto w-full ${figureClassName}`}>
      <div className="rounded-lg border border-eds-charcoal/10 bg-eds-blue-soft/20 shadow-md">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={
            isLocal
              ? "mx-auto block h-auto max-h-none rounded-[inherit]"
              : "mx-auto block h-auto w-full max-w-none object-contain object-top"
          }
          style={
            isLocal
              ? {
                  maxWidth: width ? `min(100%, ${width}px)` : "min(100%, 100vw)",
                  width: "auto",
                  height: "auto",
                }
              : undefined
          }
          sizes={
            sizes ??
            (isLocal ? "(max-width: 768px) 100vw, 768px" : "(max-width: 896px) 100vw, 896px")
          }
          quality={quality ?? (isLocal ? 88 : 100)}
        />
      </div>
    </figure>
  );
}
