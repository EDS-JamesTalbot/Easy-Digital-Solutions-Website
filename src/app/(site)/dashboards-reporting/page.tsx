import type { Metadata } from "next";
import { DashboardSectionFigure } from "@/components/DashboardSectionFigure";
import { PageEndCta } from "@/components/PageEndCta";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicePageShell } from "@/components/ServicePageShell";
import { dashboardsImages } from "@/lib/wix-images";

export const metadata: Metadata = {
  title: "Dashboards & Reporting",
  description:
    "Custom dashboards, reporting, and data analytics for the Cook Islands — Easy Digital Solutions.",
};

export default function DashboardsReportingPage() {
  const [kpi1, kpi2, kpi3] = dashboardsImages;

  return (
    <ServicePageShell
      title="Dashboard | Reporting | Data Analytics"
      showFooterCta={false}
      compactMobile
    >
      <p className="!mt-0 text-base leading-relaxed text-eds-charcoal sm:text-lg">
        At EDS, we design and build custom dashboards and reports that make it
        easy to track and understand business performance. By integrating your
        data sources and applying real-time analytics, we create visually
        engaging, automated solutions from the ground up. Our tools deliver
        accurate, actionable insights and are designed for ease of use—giving
        you full confidence to manage, monitor, and make sense of your data.
      </p>

      <PortfolioSection
        title="Dashboard Reporting"
        intro="Dashboard reporting presents key information clearly and efficiently—often on a single, easy-to-read page—saving your team valuable time. The example shown here is an interactive dashboard displaying individual baseball player performance over time, with dynamic stats and graphs that update automatically. This is just one example of what we can create. Dashboards can be fully customised to suit your business needs, whether you want to track financial performance, sales data, inventory levels, or other key metrics—all in one place."
      >
        <DashboardSectionFigure
          label="KPI Dashboard_1"
          src={kpi1.src}
          alt={kpi1.alt}
          width={kpi1.width}
          height={kpi1.height}
        />
      </PortfolioSection>

      <PortfolioSection
        divided
        title="Dashboard Reporting — Analysis"
        intro="The following dashboard is where all the analysis is done for the end user. Key messaging using color codes with summarized analysis and recommendations."
      >
        <DashboardSectionFigure
          label="KPI Dashboard_2"
          src={kpi2.src}
          alt={kpi2.alt}
          width={kpi2.width}
          height={kpi2.height}
        />
      </PortfolioSection>

      <PortfolioSection
        divided
        title="Dashboard Reporting — HR | KPI's"
        intro="HR managers need fast, clear access to critical KPIs all in one place. Below sample dashboard highlights wage and employee trends alongside average annual wages. Additional metrics can be easily added, such as employee breakdowns by role, division, or location, as well as key ratios like gender distribution and training data—giving HR teams a comprehensive, real-time view of their workforce."
      >
        <DashboardSectionFigure
          label="KPI Dashboard_3"
          src={kpi3.src}
          alt={kpi3.alt}
          width={kpi3.width}
          height={kpi3.height}
        />
      </PortfolioSection>

      <PageEndCta label="Request a demo">
        Contact us for more information and to discuss your specific requirements.
      </PageEndCta>
    </ServicePageShell>
  );
}
