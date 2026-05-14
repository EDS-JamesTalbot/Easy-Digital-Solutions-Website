import Image from "next/image";
import type { ReactNode } from "react";

type TeamMemberPanelProps = {
  name: string;
  portraitSrc: string;
  portraitAlt: string;
  bio: ReactNode;
  portraitClassName: string;
  bioClassName: string;
};

export function TeamMemberPanel({
  name,
  portraitSrc,
  portraitAlt,
  bio,
  portraitClassName,
  bioClassName,
}: TeamMemberPanelProps) {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center gap-4 bg-white px-6 py-10 ${portraitClassName}`}
      >
        <Image
          src={portraitSrc}
          alt={portraitAlt}
          width={192}
          height={192}
          className="h-40 w-40 rounded-full border-4 border-eds-green/20 object-cover object-top shadow-sm sm:h-48 sm:w-48"
        />
        <p className="font-display text-2xl font-bold text-eds-green sm:text-3xl">
          {name}
        </p>
      </div>
      <div
        className={`bg-eds-green px-6 py-8 text-eds-blue-soft [&_li]:!text-eds-blue-soft ${bioClassName}`}
      >
        {bio}
      </div>
    </>
  );
}
