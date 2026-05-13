import Image from "next/image";

type DashboardSectionFigureProps = {
  label: string;
  src: string;
  alt: string;
};

export function DashboardSectionFigure({
  label,
  src,
  alt,
}: DashboardSectionFigureProps) {
  return (
    <div className="mt-4 sm:mt-6">
      <p className="font-display text-sm font-semibold tracking-wide text-eds-green">
        {label}
      </p>
      <figure className="mt-1.5 overflow-hidden rounded-xl border border-eds-charcoal/10 bg-white shadow-sm sm:mt-2">
        <div className="flex w-full items-center justify-center bg-eds-blue-soft/30 px-2 py-3 sm:px-4 sm:py-4">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="h-auto max-h-[min(72vh,560px)] w-full object-contain"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </div>
      </figure>
    </div>
  );
}
