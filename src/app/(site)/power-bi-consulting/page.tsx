import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DashboardSectionFigure } from "@/components/DashboardSectionFigure";
import { ServicePageShell } from "@/components/ServicePageShell";
import { edsPrimaryButtonClass } from "@/lib/eds-button";

export const metadata: Metadata = {
  title: "Power BI Consulting",
  description:
    "Power BI dashboards, publishing to Power BI Service, and analytics for marketing and sales — Easy Digital Solutions, Cook Islands.",
};

const img1 = {
  src: "/portfolio/market-mindz-1-campaign-performance.png",
  alt: "Market Mindz Power BI dashboard: campaign performance, purchases by campaign, and revenue by product",
};

const img2 = {
  src: "/portfolio/market-mindz-2-buyer-composition.png",
  alt: "Market Mindz Power BI dashboard: buyer demographics, education, marital status, and spend by age",
};

const img3 = {
  src: "/portfolio/market-mindz-3-purchasing-drivers.png",
  alt: "Market Mindz Power BI dashboard: Key Influencers for campaign acceptance and total sales drivers",
};

const mobileRow = [
  {
    src: "/portfolio/market-mindz-mobile-1-campaign.png",
    alt: "Market Mindz Power BI mobile layout: campaign performance (1 of 3)",
    title: "Campaign",
  },
  {
    src: "/portfolio/market-mindz-mobile-2-buyer.png",
    alt: "Market Mindz Power BI mobile layout: buyer composition (2 of 3)",
    title: "Buyer",
  },
  {
    src: "/portfolio/market-mindz-mobile-3-drivers.png",
    alt: "Market Mindz Power BI mobile layout: purchasing drivers and Key influencers (3 of 3)",
    title: "Drivers",
  },
] as const;

export default function PowerBiConsultingPage() {
  return (
    <ServicePageShell
      eyebrow="Services"
      title="Power BI Consulting"
      showFooterCta={false}
      compactMobile
    >
      <p className="!mt-0 text-base leading-relaxed text-eds-charcoal sm:text-lg">
        With well-designed <strong>Power BI dashboards</strong>, everyone sees
        the same truth—just at the depth that matches their job. Your{" "}
        <strong>Board</strong> gains a calm, high-level view of financial health,
        risk, and progress against strategy without wading through spreadsheets.
        Your <strong>CEO</strong> gets a single pane across the whole business:
        revenue, operations, customers, and exceptions in one place, so
        priorities stay aligned. <strong>Senior managers</strong> move faster
        with the right slice of performance—enough to steer a division or
        region, without noise. <strong>Managers</strong> drill into the detail
        they need day to day: trends, variances, and line-level drivers, so
        decisions are grounded in evidence instead of anecdotes.
      </p>

      <p className="text-base leading-relaxed text-eds-charcoal sm:text-lg">
        That experience carries across{" "}
        <strong>Power BI Desktop</strong> for analysis and rich exploration,{" "}
        <strong>Power BI Service</strong> for secure sharing, collaboration, and
        always-current numbers the organisation can trust, and{" "}
        <strong>Power BI Mobile</strong> so leaders and frontline teams can check
        KPIs between meetings or on the road. The outcome is fewer ad hoc
        reports, less time reconciling figures, and more confident conversations
        from the boardroom to the shop floor—backed by dashboards people
        actually use.
      </p>

      <p className="text-base leading-relaxed text-eds-charcoal sm:text-lg">
        The following example uses a fictitious marketing company,{" "}
        <strong>Market Mindz</strong>, to show how Power BI can bring marketing
        and sales data to life. The suite of dashboards covers{" "}
        <strong>Individual Campaign Insights</strong>,{" "}
        <strong>Buyer Composition and Profile</strong>, and{" "}
        <strong>Purchasing Drivers</strong>—so teams can see what is working,
        who they are reaching, and what behaviours lift results.
      </p>

      <section className="mt-7 sm:mt-16">
        <h2 className="font-display text-xl font-bold text-eds-charcoal sm:text-2xl">
          1. Campaign insights
        </h2>
        <p className="mt-3 text-base leading-relaxed text-eds-charcoal sm:mt-4">
          Campaign performance compares attributed purchases and sales revenue
          across campaigns, product mix by campaign, channel mix, and where
          buyers spend the most—ideal for prioritising creative, offers, and
          channel investment.
        </p>
        <DashboardSectionFigure
          label="Campaign Performance — Market Mindz (sample)"
          src={img1.src}
          alt={img1.alt}
        />
      </section>

      <section className="mt-8 border-t border-eds-charcoal/10 pt-7 sm:mt-16 sm:pt-16">
        <h2 className="font-display text-xl font-bold text-eds-charcoal sm:text-2xl">
          2. Buyer composition and profile
        </h2>
        <p className="mt-3 text-base leading-relaxed text-eds-charcoal sm:mt-4">
          Buyer composition summarises who is in the base: age, income,
          education, household structure, engagement signals, and how category
          preferences shift with age—helping marketers tailor segments and
          messaging with confidence.
        </p>
        <DashboardSectionFigure
          label="Buyer Composition — Market Mindz (sample)"
          src={img2.src}
          alt={img2.alt}
        />
      </section>

      <section className="mt-8 border-t border-eds-charcoal/10 pt-7 sm:mt-16 sm:pt-16">
        <h2 className="font-display text-xl font-bold text-eds-charcoal sm:text-2xl">
          3. Purchasing drivers
        </h2>
        <p className="mt-3 text-base leading-relaxed text-eds-charcoal sm:mt-4">
          Purchasing drivers uses Power BI&apos;s Key Influencers analysis to
          highlight factors that increase the likelihood of accepting a campaign
          or lifting average sales—paired with supporting visuals so insights
          are easy to explain to stakeholders.
        </p>
        <DashboardSectionFigure
          label="Purchasing Drivers — Market Mindz (sample)"
          src={img3.src}
          alt={img3.alt}
        />
      </section>

      <section
        className="mt-8 rounded-2xl border border-eds-charcoal/10 bg-eds-blue-soft/25 p-4 sm:mt-16 sm:p-6"
        aria-labelledby="mobile-published-heading"
      >
        <h2
          id="mobile-published-heading"
          className="font-display text-lg font-bold text-eds-charcoal sm:text-xl"
        >
          Mobile layout — published to Power BI Service
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-eds-charcoal sm:mt-3 sm:text-base">
          The three screenshots below are the{" "}
          <strong>Mobile View</strong> of the same Market Mindz report, in
          sequence: <strong>Campaign</strong>, <strong>Buyer</strong>, and{" "}
          <strong>Drivers</strong>. They illustrate how the experience looks once
          the report is <strong>published to Power BI Service</strong> and opened
          on a phone (including the standard mobile chrome such as page tabs and
          filters).
        </p>

        <div className="mt-4 grid grid-cols-1 gap-5 md:mt-6 md:grid-cols-3 md:gap-4 lg:gap-6">
          {mobileRow.map((item) => (
            <figure
              key={item.src}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full max-w-[280px] overflow-hidden rounded-xl border border-eds-charcoal/10 bg-white shadow-sm sm:max-w-none">
                <div className="flex justify-center bg-eds-blue-soft/30 px-2 py-3 sm:px-3 sm:py-4">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={390}
                    height={844}
                    className="h-auto max-h-[min(78vh,620px)] w-full object-contain object-top"
                    sizes="(max-width: 768px) 280px, 33vw"
                  />
                </div>
              </div>
              <figcaption className="mt-2 font-display text-sm font-semibold text-eds-green sm:mt-3">
                {item.title}
                <span className="mt-1 block font-sans text-xs font-normal text-eds-charcoal/80">
                  Mobile Layout · Power BI Service (published)
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="mt-8 border-t border-eds-charcoal/10 pt-7 text-center sm:mt-16 sm:pt-12">
        <p className="text-base font-medium text-eds-charcoal">
          Thinking about Dashboards like these for your own organisation? We
          can help bring your underlying data together so it stays dependable,
          tailor the visuals to match your branding and audiences, tighten the
          summaries and key numbers behind each chart, and see you through to
          shared
          live reporting your teams trust.
        </p>
        <Link
          href="/contact"
          className={`${edsPrimaryButtonClass} mt-4 uppercase tracking-wide sm:mt-6`}
        >
          Discuss Power BI
        </Link>
      </div>
    </ServicePageShell>
  );
}
