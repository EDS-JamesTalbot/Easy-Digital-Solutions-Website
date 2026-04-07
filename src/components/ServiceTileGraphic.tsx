import Image from "next/image";
import type { ReactNode } from "react";
import { smoothPayLogo } from "@/lib/smoothpay-brand";

export type ServiceTileGraphicId =
  | "dashboards"
  | "consulting"
  | "applications"
  | "learning"
  | "excel"
  | "testimonials"
  | "marketing"
  | "website"
  | "payroll";

type Props = {
  id: ServiceTileGraphicId;
  accent: "green" | "blue" | "gold";
};

const accentText = {
  blue: "text-eds-blue",
  green: "text-eds-green",
  gold: "text-eds-gold",
} as const;

/** Large watermark SVG — transparent strokes on white tile. */
function WatermarkSvg({
  accent,
  children,
}: {
  accent: "green" | "blue" | "gold";
  children: ReactNode;
}) {
  return (
    <svg
      className={`h-80 w-80 shrink-0 sm:h-[22rem] sm:w-[22rem] ${accentText[accent]}`}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.35}
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {children}
    </svg>
  );
}

/**
 * Full-tile background art: large, transparent watermark on white (matches card).
 * Sits behind copy; keep opacity low for readability.
 */
export function ServiceTileBackground({ id, accent }: Props) {
  if (id === "payroll") {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.14] sm:opacity-[0.16]">
          <div className="relative h-[min(22rem,95%)] w-[125%] min-h-[18rem] max-w-none sm:h-[min(26rem,98%)] sm:min-h-[22rem]">
            <Image
              src={smoothPayLogo.src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    );
  }

  const wrap = (
    inner: ReactNode,
    opacityClass = "opacity-[0.09] sm:opacity-[0.11]",
  ) => (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden ${opacityClass}`}
      aria-hidden
    >
      {inner}
    </div>
  );

  switch (id) {
    case "dashboards":
      return wrap(
        <WatermarkSvg accent={accent}>
          <path d="M8 38V26M20 38V14M32 38v-8M44 38V20" />
          <path d="M6 40h40" opacity={0.5} />
        </WatermarkSvg>,
      );
    case "consulting":
      return wrap(
        <WatermarkSvg accent={accent}>
          <path d="M14 20h20a2 2 0 012 2v12a2 2 0 01-2 2H14a2 2 0 01-2-2V22a2 2 0 012-2z" />
          <path d="M18 20v-3a6 6 0 0112 0v3" />
          <path d="M16 28h16M16 32h10" />
        </WatermarkSvg>,
      );
    case "applications":
      return wrap(
        <WatermarkSvg accent={accent}>
          <rect x="11" y="9" width="26" height="30" rx="2" />
          <path d="M17 17h14M17 23h14M17 29h10" />
          <rect x="29" y="31" width="8" height="8" rx="1" />
          <path d="M31 34l1.5 1.5L36 32" />
        </WatermarkSvg>,
      );
    case "learning":
      return wrap(
        <WatermarkSvg accent={accent}>
          <path d="M10 12c8-4 20-4 28 0v22c-8 4-20 4-28 0V12z" />
          <path d="M24 12v22" />
          <path d="M14 34c4 2 10 2 14 0" />
        </WatermarkSvg>,
      );
    case "excel":
      return wrap(
        <WatermarkSvg accent={accent}>
          <rect x="10" y="10" width="28" height="28" rx="2" />
          <path
            d="M10 18h28M10 26h28M10 34h28M18 10v28M26 10v28M34 10v28"
            opacity={0.85}
          />
        </WatermarkSvg>,
      );
    case "testimonials":
      return wrap(
        <WatermarkSvg accent={accent}>
          <path d="M14 18c-4 0-6 3-6 6v10h10V26h-6c0-2 1-3 2-4v-4z" />
          <path d="M30 18c-4 0-6 3-6 6v10h10V26h-6c0-2 1-3 2-4v-4z" />
        </WatermarkSvg>,
      );
    case "marketing":
      return wrap(
        <WatermarkSvg accent={accent}>
          <path d="M10 28c6-9 15-14 26-15" />
          <path d="M12 34h22" opacity={0.35} />
          <path d="M14 18h10l12-4v20l-12-4H14a2 2 0 01-2-2v-8a2 2 0 012-2z" />
          <path d="M34 20v8" />
        </WatermarkSvg>,
      );
    case "website":
      return wrap(
        <WatermarkSvg accent={accent}>
          <rect x="8" y="12" width="32" height="26" rx="2" />
          <path d="M8 18h32" opacity={0.5} />
          <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
          <circle cx="16" cy="15" r="1" fill="currentColor" stroke="none" />
          <path d="M18 28l4 4 8-10" />
        </WatermarkSvg>,
      );
    default:
      return null;
  }
}

/** @deprecated Use ServiceTileBackground — kept for any stray imports */
export const ServiceTileGraphic = ServiceTileBackground;
