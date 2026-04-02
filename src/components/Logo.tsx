"use client";

import Image from "next/image";
import { useState } from "react";

/** Same asset as the original Wix site header. */
const LOGO_REMOTE =
  "https://static.wixstatic.com/media/be63cf_e40e8bed300a4375ab6d6eac44a801da~mv2.png/v1/crop/x_0,y_0,w_785,h_356/fill/w_400,h_180,al_c,q_85,enc_avif,quality_auto/EDS%20Logo2.png";

export function Logo({ className = "" }: { className?: string }) {
  const [mode, setMode] = useState<"local" | "remote" | "text">("local");

  if (mode === "text") {
    return <LogoTextFallback className={className} />;
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        key={mode}
        src={mode === "local" ? "/logo-eds.png" : LOGO_REMOTE}
        alt="Easy Digital Solutions"
        width={400}
        height={180}
        className="h-[52px] w-auto max-w-[min(100%,340px)] object-contain object-left"
        priority
        sizes="(max-width: 640px) 220px, 340px"
        onError={() =>
          setMode((m) => (m === "local" ? "remote" : "text"))
        }
      />
    </span>
  );
}

function LogoTextFallback({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-eds-green text-[0.65rem] font-bold tracking-widest text-white shadow-sm"
        aria-hidden
      >
        EDS
      </div>
      <div className="min-w-0 leading-tight">
        <span className="font-display block text-lg font-bold text-eds-green">
          Easy
        </span>
        <span className="font-display block text-lg font-bold text-eds-gold">
          Digital
        </span>
        <span className="font-display block text-sm font-semibold text-eds-charcoal">
          Solutions
        </span>
      </div>
    </div>
  );
}
