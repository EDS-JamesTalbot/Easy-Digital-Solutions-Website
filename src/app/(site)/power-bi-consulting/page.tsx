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
    >
      <p className="!mt-0 text-base leading-relaxed text-eds-charcoal sm:text-lg">
        <strong>Easy Digital Solutions</strong> offers end-to-end{" "}
        <strong>Power BI consulting</strong>: discovery and requirements, data
        modelling and relationships, measures in DAX, performance tuning, and
        report design that matches how your people actually make decisions. We
        can own the full analysis workflow—defining KPIs, validating numbers
        with subject-matter experts, surfacing variance and drivers, and writing
        the on-page narrative so charts read as a story, not a puzzle. Our{" "}
        <strong>content creation</strong> covers titles, section layout,
        conditional formatting, tooltips, and executive-ready callouts so
        stakeholders get clarity without needing a technical middle layer.
      </p>

      <p className="text-base leading-relaxed text-eds-charcoal sm:text-lg">
        We also support <strong>publishing to Power BI Service</strong>{" "}
        (Microsoft Fabric): workspace setup, semantic model deployment,{" "}
        <strong>Power BI Service</strong> permissions and sharing, gateways and
        scheduled refresh where needed, and handover so your team can sustain
        releases. That includes{" "}
        <strong>phone layouts and the Power BI mobile experience</strong>—so
        the same insights remain readable when the report is consumed on a
        handset after publish.
      </p>

      <p className="text-base leading-relaxed text-eds-charcoal sm:text-lg">
        The following example uses a fictitious marketing company,{" "}
        <strong>Market Mindz</strong>, to show how Power BI can bring marketing
        and sales data to life. The suite of dashboards covers{" "}
        <strong>individual campaign insights</strong>,{" "}
        <strong>buyer composition and profile</strong>, and{" "}
        <strong>purchasing drivers</strong>—so teams can see what is working,
        who they are reaching, and what behaviours lift results.
      </p>

      <section className="mt-12 sm:mt-16">
        <h2 className="font-display text-xl font-bold text-eds-charcoal sm:text-2xl">
          1. Campaign insights
        </h2>
        <p className="mt-4 text-base leading-relaxed text-eds-charcoal">
          Campaign performance compares attributed purchases and sales revenue
          across campaigns, product mix by campaign, channel mix, and where
          buyers spend the most—ideal for prioritising creative, offers, and
          channel investment.
        </p>
        <DashboardSectionFigure
          label="Campaign performance — Market Mindz (sample)"
          src={img1.src}
          alt={img1.alt}
        />
      </section>

      <section className="mt-14 border-t border-eds-charcoal/10 pt-12 sm:mt-16 sm:pt-16">
        <h2 className="font-display text-xl font-bold text-eds-charcoal sm:text-2xl">
          2. Buyer composition and profile
        </h2>
        <p className="mt-4 text-base leading-relaxed text-eds-charcoal">
          Buyer composition summarises who is in the base: age, income,
          education, household structure, engagement signals, and how category
          preferences shift with age—helping marketers tailor segments and
          messaging with confidence.
        </p>
        <DashboardSectionFigure
          label="Buyer composition — Market Mindz (sample)"
          src={img2.src}
          alt={img2.alt}
        />
      </section>

      <section className="mt-14 border-t border-eds-charcoal/10 pt-12 sm:mt-16 sm:pt-16">
        <h2 className="font-display text-xl font-bold text-eds-charcoal sm:text-2xl">
          3. Purchasing drivers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-eds-charcoal">
          Purchasing drivers uses Power BI&apos;s Key Influencers analysis to
          highlight factors that increase the likelihood of accepting a campaign
          or lifting average sales—paired with supporting visuals so insights
          are easy to explain to stakeholders.
        </p>
        <DashboardSectionFigure
          label="Purchasing drivers — Market Mindz (sample)"
          src={img3.src}
          alt={img3.alt}
        />
      </section>

      <section
        className="mt-14 rounded-2xl border border-eds-charcoal/10 bg-eds-blue-soft/25 p-5 sm:mt-16 sm:p-6"
        aria-labelledby="mobile-published-heading"
      >
        <h2
          id="mobile-published-heading"
          className="font-display text-lg font-bold text-eds-charcoal sm:text-xl"
        >
          Mobile layout — published to Power BI Service
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-eds-charcoal sm:text-base">
          The three captures below are the{" "}
          <strong>mobile view</strong> of the same Market Mindz report, in
          sequence: <strong>Campaign</strong>, <strong>Buyer</strong>, and{" "}
          <strong>Drivers</strong>. They illustrate how the experience looks once
          the report is <strong>published to Power BI Service</strong> and opened
          on a phone (including the standard mobile chrome such as page tabs and
          filters).
        </p>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 lg:gap-6">
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
              <figcaption className="mt-3 font-display text-sm font-semibold text-eds-green">
                {item.title}
                <span className="mt-1 block font-sans text-xs font-normal text-eds-charcoal/80">
                  Mobile layout · Power BI Service (published)
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="mt-14 border-t border-eds-charcoal/10 pt-10 text-center sm:mt-16 sm:pt-12">
        <p className="text-base font-medium text-eds-charcoal">
          Want a similar setup for your data model, branding, and publishing
          workflow? We can help with design, DAX, and rollout.
        </p>
        <Link
          href="/contact"
          className={`${edsPrimaryButtonClass} mt-6 uppercase tracking-wide`}
        >
          Discuss Power BI
        </Link>
      </div>
    </ServicePageShell>
  );
}
