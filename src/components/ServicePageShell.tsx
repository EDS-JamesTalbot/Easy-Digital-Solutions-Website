import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { edsPrimaryButtonClass } from "@/lib/eds-button";

type ServicePageShellProps = {
  title: string;
  /** Renders to the right of the title (e.g. product icons). */
  titleAside?: ReactNode;
  eyebrow?: string;
  heroImage?: { src: string; alt: string };
  children: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  ctaSubject?: string;
  /** When false, omit the bottom CTA card (use custom CTA in children). */
  showFooterCta?: boolean;
  ctaIntro?: string;
  ctaButtonClassName?: string;
};

export function ServicePageShell({
  title,
  titleAside,
  eyebrow,
  heroImage,
  children,
  ctaLabel = "Contact us",
  ctaHref = "/contact",
  ctaSubject,
  showFooterCta = true,
  ctaIntro = "Ready to talk about your requirements?",
  ctaButtonClassName = edsPrimaryButtonClass,
}: ServicePageShellProps) {
  const titleClassName =
    "scroll-mt-[var(--header-scroll-offset)] font-display text-3xl font-bold tracking-tight text-eds-green sm:text-4xl";

  const mailHref =
    ctaHref.startsWith("mailto:") && ctaSubject
      ? `${ctaHref}?subject=${encodeURIComponent(ctaSubject)}`
      : ctaHref;

  return (
    <article className="border-b border-eds-charcoal/10 bg-white">
      {heroImage ? (
        <div className="relative h-44 w-full overflow-hidden bg-eds-blue-soft/40 sm:h-56 md:h-64">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
        </div>
      ) : null}

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {eyebrow ? (
          <p className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-eds-green">
            {eyebrow}
          </p>
        ) : null}
        {titleAside ? (
          <div
            className={`flex flex-wrap items-end justify-between gap-x-6 gap-y-4${eyebrow ? " mt-2" : ""}`}
          >
            <h1 className={`${titleClassName} min-w-0 flex-1`}>{title}</h1>
            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              {titleAside}
            </div>
          </div>
        ) : (
          <h1 className={titleClassName}>{title}</h1>
        )}

        <div className="mt-8 space-y-6 text-base leading-relaxed [&_p]:text-eds-charcoal [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-eds-charcoal [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-eds-charcoal [&_li]:text-eds-charcoal [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-eds-charcoal [&_p_a]:font-semibold [&_p_a]:text-eds-green [&_p_a]:underline-offset-4 hover:[&_p_a]:underline [&_li_a]:font-semibold [&_li_a]:text-eds-green [&_li_a]:underline-offset-4 hover:[&_li_a]:underline">
          {children}
        </div>

        {showFooterCta ? (
          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-eds-green/25 bg-eds-green/5 p-6 text-center sm:gap-4 sm:p-8">
            <p className="text-sm font-medium text-eds-charcoal">{ctaIntro}</p>
            <Link href={mailHref} className={ctaButtonClassName}>
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  );
}
