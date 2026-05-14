import Link from "next/link";
import type { ReactNode } from "react";
import { edsPrimaryButtonClass } from "@/lib/eds-button";
import { pageEndCtaClass } from "@/lib/service-page-classes";

type PageEndCtaProps = {
  children: ReactNode;
  href?: string;
  label: string;
};

export function PageEndCta({
  children,
  href = "/contact",
  label,
}: PageEndCtaProps) {
  return (
    <div className={pageEndCtaClass}>
      <p className="text-base font-medium text-eds-charcoal">{children}</p>
      <Link
        href={href}
        className={`${edsPrimaryButtonClass} mt-4 uppercase tracking-wide sm:mt-6`}
      >
        {label}
      </Link>
    </div>
  );
}
