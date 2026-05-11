import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { edsPrimaryButtonClass } from "@/lib/eds-button";

type ServicePageShellProps = {
  title: string;
  /** Renders to the right of the title (e.g. product icons). */
  titleAside?: ReactNode;
  /** Below `sm`, stack title then aside (aside full-width, centred); side-by-side from `sm`. */
  stackTitleAsideOnMobile?: boolean;
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
  /** Tighter vertical padding and prose gaps on small screens (less scroll). */
  compactMobile?: boolean;
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
  compactMobile = false,
  stackTitleAsideOnMobile = false,
}: ServicePageShellProps) {
  const titleClassName =
    "scroll-mt-[var(--header-scroll-offset)] font-display text-3xl font-bold tracking-tight text-eds-green sm:text-4xl";

  const innerShellClass = compactMobile
    ? "mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-14 lg:px-8"
    : "mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8";

  const proseClass = compactMobile
    ? "mt-5 space-y-4 text-base leading-relaxed sm:mt-8 sm:space-y-6 [&_p]:text-eds-charcoal [&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-eds-charcoal sm:[&_h2]:mt-10 [&_h3]:mt-5 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-eds-charcoal sm:[&_h3]:mt-8 [&_li]:text-eds-charcoal [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-eds-charcoal sm:[&_ul]:my-4 [&_p_a]:font-semibold [&_p_a]:text-eds-green [&_p_a]:underline-offset-4 hover:[&_p_a]:underline [&_li_a]:font-semibold [&_li_a]:text-eds-green [&_li_a]:underline-offset-4 hover:[&_li_a]:underline"
    : "mt-8 space-y-6 text-base leading-relaxed [&_p]:text-eds-charcoal [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-eds-charcoal [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-eds-charcoal [&_li]:text-eds-charcoal [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-eds-charcoal [&_p_a]:font-semibold [&_p_a]:text-eds-green [&_p_a]:underline-offset-4 hover:[&_p_a]:underline [&_li_a]:font-semibold [&_li_a]:text-eds-green [&_li_a]:underline-offset-4 hover:[&_li_a]:underline";

  const footerCtaClass = compactMobile
    ? "mt-8 flex flex-col items-center gap-3 rounded-2xl border border-eds-green/25 bg-eds-green/5 p-5 text-center sm:mt-12 sm:gap-4 sm:p-8"
    : "mt-12 flex flex-col items-center gap-3 rounded-2xl border border-eds-green/25 bg-eds-green/5 p-6 text-center sm:gap-4 sm:p-8";

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

      <div className={innerShellClass}>
        {eyebrow ? (
          <p className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-eds-green">
            {eyebrow}
          </p>
        ) : null}
        {titleAside ? (
          <div
            className={
              stackTitleAsideOnMobile
                ? `flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-4${eyebrow ? " mt-1 sm:mt-2" : ""}`
                : `flex flex-wrap items-center justify-between gap-x-6 gap-y-4${eyebrow ? " mt-2" : ""}`
            }
          >
            <h1
              className={
                stackTitleAsideOnMobile
                  ? `${titleClassName} w-full sm:min-w-0 sm:flex-1`
                  : `${titleClassName} min-w-0 flex-1`
              }
            >
              {title}
            </h1>
            <div
              className={
                stackTitleAsideOnMobile
                  ? "flex w-full shrink-0 flex-wrap items-center justify-center gap-3 sm:w-auto sm:justify-end sm:gap-4"
                  : "flex shrink-0 items-center justify-end gap-3 sm:gap-4"
              }
            >
              {titleAside}
            </div>
          </div>
        ) : (
          <h1 className={titleClassName}>{title}</h1>
        )}

        <div className={proseClass}>
          {children}
        </div>

        {showFooterCta ? (
          <div className={footerCtaClass}>
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
