import Image from "next/image";
import type { ReactNode } from "react";

export type TestimonialTheme = "default" | "honest" | "bci" | "porter" | "air";

const themeClasses: Record<
  TestimonialTheme,
  {
    section: string;
    header: string;
    body: string;
    date: string;
    quote: string;
  }
> = {
  default: {
    section: "my-10 overflow-hidden rounded-2xl border border-eds-charcoal/10 bg-white shadow-sm",
    header: "border-b border-eds-charcoal/10 bg-white px-5 py-6 sm:px-8",
    body: "space-y-4 px-5 py-6 sm:px-8 sm:py-8",
    date: "text-sm font-semibold uppercase tracking-[0.12em] text-eds-muted",
    quote: "space-y-4 border-l-4 border-eds-green/35 pl-4 text-eds-charcoal not-italic",
  },
  honest: {
    section: "my-10 overflow-hidden rounded-2xl border border-eds-charcoal/10 bg-white shadow-sm",
    header: "border-b border-eds-charcoal/10 bg-eds-honest px-5 py-6 sm:px-8",
    body: "space-y-4 px-5 py-6 sm:px-8 sm:py-8",
    date: "text-sm font-semibold uppercase tracking-[0.12em] text-eds-muted",
    quote: "space-y-4 border-l-4 border-eds-green/35 pl-4 text-eds-charcoal not-italic",
  },
  bci: {
    section:
      "my-10 overflow-hidden rounded-2xl border border-eds-bci-teal/30 bg-white shadow-sm ring-1 ring-eds-bci-gold/20",
    header:
      "border-b border-eds-bci-teal/20 bg-[linear-gradient(135deg,#e8f7f9_0%,#ffffff_55%,#fff8df_100%)] px-5 py-6 sm:px-8",
    body: "space-y-4 bg-[linear-gradient(180deg,#ffffff_0%,#f4fbfc_100%)] px-5 py-6 sm:px-8 sm:py-8",
    date: "text-sm font-semibold uppercase tracking-[0.12em] text-eds-bci-teal",
    quote: "space-y-4 border-l-4 border-eds-bci-teal/45 pl-4 text-eds-charcoal not-italic",
  },
  porter: {
    section:
      "my-10 overflow-hidden rounded-2xl border border-eds-green/30 bg-white shadow-sm ring-1 ring-eds-green/15",
    header:
      "border-b border-eds-green/20 bg-[linear-gradient(135deg,#edf8f1_0%,#ffffff_55%,#f4fbf7_100%)] px-5 py-6 sm:px-8",
    body: "space-y-4 bg-[linear-gradient(180deg,#ffffff_0%,#f4fbf7_100%)] px-5 py-6 sm:px-8 sm:py-8",
    date: "text-sm font-semibold uppercase tracking-[0.12em] text-eds-muted",
    quote: "space-y-4 border-l-4 border-eds-green/45 pl-4 text-eds-charcoal not-italic",
  },
  air: {
    section: "my-10 overflow-hidden rounded-2xl border border-eds-charcoal/10 bg-white shadow-sm",
    header: "border-b border-eds-charcoal/10 bg-white px-5 py-6 sm:px-8",
    body: "space-y-4 px-5 py-6 sm:px-8 sm:py-8",
    date: "text-sm font-semibold uppercase tracking-[0.12em] text-eds-muted",
    quote: "space-y-4 border-l-4 border-eds-green/35 pl-4 text-eds-charcoal not-italic",
  },
};

type TestimonialCardProps = {
  id: string;
  header: ReactNode;
  title: string;
  attribution: string;
  theme?: TestimonialTheme;
  date?: string;
  children: ReactNode;
};

export function TestimonialCard({
  id,
  header,
  title,
  attribution,
  theme = "default",
  date,
  children,
}: TestimonialCardProps) {
  const styles = themeClasses[theme];

  return (
    <section aria-labelledby={id} className={styles.section}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>
        {date ? <p className={styles.date}>{date}</p> : null}
        <h2 id={id} className="!mt-0 font-display text-xl font-bold text-eds-charcoal">
          {title}
        </h2>
        <blockquote className={styles.quote}>{children}</blockquote>
        <p className="font-display text-base font-semibold text-eds-charcoal">
          {attribution}
        </p>
      </div>
    </section>
  );
}

type TestimonialLogoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function TestimonialLogo({
  src,
  alt,
  width,
  height,
  className = "h-auto max-w-[280px] w-auto",
}: TestimonialLogoProps) {
  return (
    <Image src={src} alt={alt} width={width} height={height} className={className} />
  );
}

type PorterGroupLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function PorterGroupLogoBar({ logos }: { logos: readonly PorterGroupLogo[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2 sm:flex-nowrap sm:gap-3">
      {logos.map((logo) => (
        <div
          key={logo.src}
          className="flex min-w-0 basis-[31%] justify-center sm:basis-auto sm:shrink-0"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-12 w-auto max-w-full object-contain sm:h-[120px]"
          />
        </div>
      ))}
    </div>
  );
}
