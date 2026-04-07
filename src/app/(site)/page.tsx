import Image from "next/image";
import Link from "next/link";
import { WaveDivider } from "@/components/WaveDivider";
import {
  consultingHeroImage,
  dashboardsImages,
  digitalMarketingImages,
  excelImages,
  homeServiceImages,
  payrollServiceTileImage,
  testimonialImages,
  websiteDesignExampleImage,
} from "@/lib/wix-images";
import { edsPrimaryButtonClass } from "@/lib/eds-button";
import { serviceLinks } from "@/lib/nav";

const homeServiceTileImages = [
  { src: dashboardsImages[0].src, alt: dashboardsImages[0].alt },
  { src: consultingHeroImage, alt: "Consulting services" },
  { src: homeServiceImages.forms, alt: "Application and data entry forms" },
  { src: homeServiceImages.training, alt: "Learning and training programmes" },
  { src: excelImages[0].src, alt: excelImages[0].alt },
  { src: testimonialImages[0].src, alt: testimonialImages[0].alt },
  { src: digitalMarketingImages[0].src, alt: digitalMarketingImages[0].alt },
  {
    src: websiteDesignExampleImage.src,
    alt: websiteDesignExampleImage.alt,
  },
  {
    src: payrollServiceTileImage.src,
    alt: payrollServiceTileImage.alt,
  },
] as const;

const serviceCards = [
  {
    title: "Dashboards & reporting",
    href: "/dashboards-reporting",
    blurb:
      "Interactive dashboards, Power BI, automated reporting, and data visualisation.",
    points: [
      "Power BI & custom reporting",
      "Data integration & visualisation",
      "KPI and HR dashboards",
    ],
    accent: "blue" as const,
  },
  {
    title: "Consulting",
    href: "/consulting",
    blurb:
      "Process improvement, project management, data analysis, and HR support.",
    points: [
      "Spreadsheets, WMS, procurement",
      "Government & private sector experience",
      "Trusted client references",
    ],
    accent: "gold" as const,
  },
  {
    title: "Application creation",
    href: "/application-creation",
    blurb:
      "Digital forms, automation, helpdesk, inventory, and custom Excel/VBA/Python tools.",
    points: [
      "CRM, HR, and inventory systems",
      "Purchase order automation",
      "Customs and SpeEdi workflows",
    ],
    accent: "green" as const,
  },
  {
    title: "Learning solutions",
    href: "/learning-solutions",
    blurb:
      "Activity-based training, retreats, facilitation, and custom e-learning.",
    points: [
      "Leadership & customer service",
      "Warehousing & logistics programmes",
      "E-learning development",
    ],
    accent: "blue" as const,
  },
  {
    title: "Excel training",
    href: "/excel-training",
    blurb:
      "One-on-one and group Excel training—with a Microsoft Excel Expert.",
    points: [
      "Basics through Power Query & VBA",
      "Dashboards and real workplace examples",
      "Flexible in-person or online sessions",
    ],
    accent: "green" as const,
  },
  {
    title: "Client testimonials",
    href: "/client-testimonials",
    blurb:
      "Feedback from health, retail, government, and community clients.",
    points: [
      "Training and supervisory programmes",
      "Strategy days and workshops",
      "Real quotes and project graphics",
    ],
    accent: "gold" as const,
  },
  {
    title: "Digital marketing",
    href: "/digital-marketing",
    blurb:
      "Social media, content, strategy, and performance monitoring.",
    points: [
      "Facebook start-up and social content",
      "Marketing strategy",
      "Engagement and reporting",
    ],
    accent: "green" as const,
  },
  {
    title: "Website design",
    href: "/website-design",
    blurb:
      "Next.js, TypeScript, Tailwind CSS, and Cursor AI—planning, build, and launch with your brand.",
    points: [
      "Marketing sites and e-commerce-style layouts",
      "HTTPS, secure hosting, and optional Clerk auth for sign-in / member areas",
      "This site is our own build (see the Website design page for our stack)",
    ],
    accent: "blue" as const,
  },
  {
    title: "Payroll processing",
    href: "/payroll-processing",
    blurb:
      "SmoothPay payroll for Cook Islands businesses — weekly runs, PAYE, CINSF, payslips, and reporting.",
    points: [
      "Setup, employee records, and business settings (RMD, bank, VAT)",
      "Draft summary for approval; Direct Credit and leave reports after pay",
      "Standard reporting, ad hoc requests, and monthly accountant liaison",
    ],
    accent: "gold" as const,
  },
];

function accentRing(accent: "green" | "blue" | "gold") {
  if (accent === "green") return "ring-eds-green/20 bg-eds-green/5";
  if (accent === "blue") return "ring-eds-blue/25 bg-eds-blue-soft";
  return "ring-eds-gold/30 bg-eds-gold-soft/40";
}

function accentDot(accent: "green" | "blue" | "gold") {
  if (accent === "green") return "bg-eds-green";
  if (accent === "blue") return "bg-eds-blue";
  return "bg-eds-gold";
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-eds-blue-soft/40 to-eds-gold-soft/30">
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-eds-green">
            Cook Islands · Since 2023
          </p>
          <h1 className="scroll-mt-[var(--header-scroll-offset)] font-display mt-4 text-4xl font-bold leading-tight tracking-tight text-eds-charcoal sm:text-5xl lg:text-[3.25rem]">
            Digital tools, training, and{" "}
            <span className="text-eds-green">clarity</span> for growing
            businesses.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-eds-muted">
            Easy Digital Solutions helps local organisations automate work,
            understand their data, and upskill teams.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className={edsPrimaryButtonClass}>
              Start a conversation
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-full border border-eds-charcoal/15 bg-white/80 px-6 py-3 text-sm font-semibold text-eds-charcoal transition hover:border-eds-green/40 hover:text-eds-green"
            >
              Explore services
            </Link>
          </div>
        </div>
        <WaveDivider />
      </section>

      <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-eds-green sm:text-4xl">
            Welcome to Easy Digital Solutions Ltd
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-eds-charcoal">
            <p>
              Since 2023, Easy Digital Solutions has been dedicated to supporting
              the Cook Islands business community. We evolve continuously,
              updating our knowledge in technology to stay ahead of client
              needs. With a solution-focused approach, our team brings valuable
              experience gained in New Zealand and Australia across sectors such
              as Logistics & Supply Chain, Business Improvement Systems, and
              Process Optimization.
            </p>
            <p>
              We specialize in activity-based training to foster independent
              thinking and offer services in business automation, applications,
              and process improvement. Our strong client references reflect the
              value we deliver.
            </p>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-eds-muted">
            Learn more about our team and how we support local businesses on
            our{" "}
            <Link
              href="/about"
              className="font-semibold text-eds-green underline-offset-4 hover:underline"
            >
              About us
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      <div className="bg-eds-blue-soft/50">
        <WaveDivider flip />
      </div>

      <section id="services" className="scroll-mt-24 bg-eds-blue-soft/30 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-eds-charcoal sm:text-4xl">
              Our services
            </h2>
            <p className="mt-4 text-lg text-eds-muted">
              From quick wins to longer-term transformation—pick what you need
              or ask us to recommend a path. Each area has more detail on its
              own page.
            </p>
          </div>

          <div className="mt-8 grid w-full min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
            {serviceLinks.map((link, i) => {
              const img = homeServiceTileImages[i];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-eds-charcoal/10 bg-white shadow-sm transition hover:border-eds-green/50 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eds-green"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 14vw"
                      className="object-cover transition group-hover:opacity-95"
                    />
                  </div>
                  <span className="flex min-h-[2.75rem] items-center justify-center px-1.5 py-2 text-center text-[0.65rem] font-medium capitalize leading-tight text-eds-charcoal sm:min-h-0 sm:px-2 sm:text-xs lg:text-[0.8rem]">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((s) => (
              <article
                key={s.title}
                className={`flex flex-col rounded-2xl border border-eds-charcoal/10 bg-white p-6 shadow-sm ring-1 ${accentRing(s.accent)} transition hover:-translate-y-0.5 hover:shadow-md`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${accentDot(s.accent)}`}
                    aria-hidden
                  />
                  <h3 className="font-display text-lg font-bold capitalize text-eds-charcoal">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-eds-muted">
                  {s.blurb}
                </p>
                <ul className="mt-5 space-y-2 border-t border-eds-charcoal/10 pt-5 text-sm text-eds-charcoal/90">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-eds-blue" aria-hidden>
                        ·
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  className="mt-4 inline-flex text-sm font-semibold text-eds-green hover:underline"
                >
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
