import Link from "next/link";
import { WaveDivider } from "@/components/WaveDivider";
import {
  ServiceTileGraphic,
  type ServiceTileGraphicId,
} from "@/components/ServiceTileGraphic";
import { edsPrimaryButtonClass } from "@/lib/eds-button";

const serviceCards: {
  title: string;
  href: string;
  blurb: string;
  points: readonly string[];
  accent: "green" | "blue" | "gold";
  graphicId: ServiceTileGraphicId;
}[] = [
  {
    title: "Dashboards & reporting",
    href: "/dashboards-reporting",
    graphicId: "dashboards",
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
    graphicId: "consulting",
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
    graphicId: "applications",
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
    graphicId: "learning",
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
    graphicId: "excel",
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
    graphicId: "testimonials",
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
    graphicId: "marketing",
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
    graphicId: "website",
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
    graphicId: "payroll",
    blurb:
      "SmoothPay payroll for Cook Islands businesses — weekly runs, PAYE, CINSF, payslips, and reporting.",
    points: [
      "System Setup, employee records, and business settings & configuration",
      "Payroll processing — email payslips and payroll reporting for business",
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((s) => (
              <article
                key={s.title}
                className={`flex flex-col rounded-2xl border border-eds-charcoal/10 bg-white p-6 shadow-sm ring-1 ${accentRing(s.accent)} transition hover:-translate-y-0.5 hover:shadow-md`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full ${accentDot(s.accent)}`}
                        aria-hidden
                      />
                      <h3 className="font-display text-lg font-bold capitalize text-eds-charcoal">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <ServiceTileGraphic id={s.graphicId} accent={s.accent} />
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
