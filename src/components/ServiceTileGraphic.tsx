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

const accentTint = {
  blue: "from-eds-blue/12 to-eds-blue/0",
  green: "from-eds-green/12 to-eds-green/0",
  gold: "from-eds-gold/12 to-eds-gold/0",
} as const;

const accentText = {
  blue: "text-eds-blue",
  green: "text-eds-green",
  gold: "text-eds-gold",
} as const;

function SvgWrap({
  accent,
  children,
}: {
  accent: "green" | "blue" | "gold";
  children: ReactNode;
}) {
  return (
    <div
      className={`shrink-0 rounded-xl bg-gradient-to-br p-2.5 ${accentTint[accent]}`}
      aria-hidden
    >
      <svg
        className={`h-11 w-11 sm:h-12 sm:w-12 ${accentText[accent]}`}
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.65}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </div>
  );
}

export function ServiceTileGraphic({ id, accent }: Props) {
  if (id === "payroll") {
    return (
      <div className="shrink-0 rounded-xl bg-gradient-to-br from-eds-gold/12 to-eds-gold/0 p-2">
        <Image
          src={smoothPayLogo.src}
          alt={smoothPayLogo.alt}
          width={200}
          height={56}
          className="h-9 w-auto max-w-[140px] object-contain object-right opacity-[0.92] sm:h-10 sm:max-w-[160px]"
        />
      </div>
    );
  }

  switch (id) {
    case "dashboards":
      return (
        <SvgWrap accent={accent}>
          <path d="M8 38V26M20 38V14M32 38v-8M44 38V20" />
          <path d="M6 40h40" opacity={0.45} />
        </SvgWrap>
      );
    case "consulting":
      return (
        <SvgWrap accent={accent}>
          <path d="M14 20h20a2 2 0 012 2v12a2 2 0 01-2 2H14a2 2 0 01-2-2V22a2 2 0 012-2z" />
          <path d="M18 20v-3a6 6 0 0112 0v3" />
          <path d="M16 28h16M16 32h10" />
        </SvgWrap>
      );
    case "applications":
      return (
        <SvgWrap accent={accent}>
          <rect x="11" y="9" width="26" height="30" rx="2" />
          <path d="M17 17h14M17 23h14M17 29h10" />
          <rect x="29" y="31" width="8" height="8" rx="1" />
          <path d="M31 34l1.5 1.5L36 32" />
        </SvgWrap>
      );
    case "learning":
      return (
        <SvgWrap accent={accent}>
          <path d="M10 12c8-4 20-4 28 0v22c-8 4-20 4-28 0V12z" />
          <path d="M24 12v22" />
          <path d="M14 34c4 2 10 2 14 0" />
        </SvgWrap>
      );
    case "excel":
      return (
        <SvgWrap accent={accent}>
          <rect x="10" y="10" width="28" height="28" rx="2" />
          <path d="M10 18h28M10 26h28M10 34h28M18 10v28M26 10v28M34 10v28" opacity={0.85} />
        </SvgWrap>
      );
    case "testimonials":
      return (
        <SvgWrap accent={accent}>
          <path d="M14 18c-4 0-6 3-6 6v10h10V26h-6c0-2 1-3 2-4v-4z" />
          <path d="M30 18c-4 0-6 3-6 6v10h10V26h-6c0-2 1-3 2-4v-4z" />
        </SvgWrap>
      );
    case "marketing":
      return (
        <SvgWrap accent={accent}>
          <path d="M10 28c6-9 15-14 26-15" />
          <path d="M12 34h22" opacity={0.35} />
          <path d="M14 18h10l12-4v20l-12-4H14a2 2 0 01-2-2v-8a2 2 0 012-2z" />
          <path d="M34 20v8" />
        </SvgWrap>
      );
    case "website":
      return (
        <SvgWrap accent={accent}>
          <rect x="8" y="12" width="32" height="26" rx="2" />
          <path d="M8 18h32" opacity={0.5} />
          <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
          <circle cx="16" cy="15" r="1" fill="currentColor" stroke="none" />
          <path d="M18 28l4 4 8-10" />
        </SvgWrap>
      );
    default:
      return null;
  }
}
