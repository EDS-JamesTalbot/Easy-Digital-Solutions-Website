import type { ReactNode } from "react";
import {
  portfolioSectionDividerClass,
  portfolioSectionHeadingClass,
  portfolioSectionIntroClass,
} from "@/lib/service-page-classes";

type PortfolioSectionProps = {
  title: string;
  intro: ReactNode;
  children: ReactNode;
  divided?: boolean;
};

export function PortfolioSection({
  title,
  intro,
  children,
  divided = false,
}: PortfolioSectionProps) {
  return (
    <section className={divided ? portfolioSectionDividerClass : "mt-7 sm:mt-16"}>
      <h2 className={portfolioSectionHeadingClass}>{title}</h2>
      <p className={portfolioSectionIntroClass}>{intro}</p>
      {children}
    </section>
  );
}
