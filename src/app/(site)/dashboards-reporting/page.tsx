import type { Metadata } from "next";
import Link from "next/link";
import { DashboardSectionFigure } from "@/components/DashboardSectionFigure";
import { ServicePageShell } from "@/components/ServicePageShell";
import { edsPrimaryButtonClass } from "@/lib/eds-button";
import { dashboardsImages } from "@/lib/wix-images";

export const metadata: Metadata = {
  title: "Dashboards & reporting",
  description:
    "Custom dashboards, reporting, and data analytics for the Cook Islands — Easy Digital Solutions.",
};

export default function DashboardsReportingPage() {
  const [kpi1, kpi2, kpi3] = dashboardsImages;

  return (
    <ServicePageShell
      title="Dashboard | Reporting | Data Analytics"
      showFooterCta={false}
    >
      <p className="!mt-0 text-base leading-relaxed text-eds-charcoal sm:text-lg">
        At EDS, we design and build custom dashboards and reports that make it
        easy to track and understand business performance. By integrating your
        data sources and applying real-time analytics, we create visually
        engaging, automated solutions from the ground up. Our tools deliver
        accurate, actionable insights and are designed for ease of use—giving
        you full confidence to manage, monitor, and make sense of your data.
      </p>

      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-xl font-bold text-eds-charcoal sm:text-2xl">
          Dashboard Reporting
        </h2>
        <p className="mt-4 text-base leading-relaxed text-eds-charcoal">
          Dashboard reporting presents key information clearly and
          efficiently—often on a single, easy-to-read page—saving your team
          valuable time. The example shown here is an interactive dashboard
          displaying individual baseball player performance over time, with
          dynamic stats and graphs that update automatically. This is just one
          example of what we can create. Dashboards can be fully customised to
          suit your business needs, whether you want to track financial
          performance, sales data, inventory levels, or other key
          metrics—all in one place.
        </p>
        <DashboardSectionFigure
          label="KPI Dashboard_1"
          src={kpi1.src}
          alt={kpi1.alt}
        />
      </section>

      <section className="mt-14 border-t border-eds-charcoal/10 pt-12 sm:mt-16 sm:pt-16">
        <h2 className="font-display text-xl font-bold text-eds-charcoal sm:text-2xl">
          Dashboard Reporting — Analysis
        </h2>
        <p className="mt-4 text-base leading-relaxed text-eds-charcoal">
          The following dashboard is where all the analysis is done for the end
          user. Key messaging using color codes with summarized analysis and
          recommendations.
        </p>
        <DashboardSectionFigure
          label="KPI Dashboard_2"
          src={kpi2.src}
          alt={kpi2.alt}
        />
      </section>

      <section className="mt-14 border-t border-eds-charcoal/10 pt-12 sm:mt-16 sm:pt-16">
        <h2 className="font-display text-xl font-bold text-eds-charcoal sm:text-2xl">
          Dashboard Reporting — HR | KPI&apos;s
        </h2>
        <p className="mt-4 text-base leading-relaxed text-eds-charcoal">
          HR managers need fast, clear access to critical KPIs all in one place.
          Below sample dashboard highlights wage and employee trends alongside
          average annual wages. Additional metrics can be easily added, such as
          employee breakdowns by role, division, or location, as well as key
          ratios like gender distribution and training data—giving HR teams a
          comprehensive, real-time view of their workforce.
        </p>
        <DashboardSectionFigure
          label="KPI Dashboard_3"
          src={kpi3.src}
          alt={kpi3.alt}
        />
      </section>

      <div className="mt-14 border-t border-eds-charcoal/10 pt-10 text-center sm:mt-16 sm:pt-12">
        <p className="text-base font-medium text-eds-charcoal">
          Contact us for more information and to discuss your specific
          requirements.
        </p>
        <Link
          href="/contact"
          className={`${edsPrimaryButtonClass} mt-6 uppercase tracking-wide`}
        >
          Request a demo
        </Link>
      </div>
    </ServicePageShell>
  );
}
