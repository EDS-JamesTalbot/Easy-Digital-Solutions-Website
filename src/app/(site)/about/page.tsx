import type { Metadata } from "next";
import Link from "next/link";
import { edsPrimaryButtonClass } from "@/lib/eds-button";

export const metadata: Metadata = {
  title: "About us — Behind EDS",
  description:
    "Meet the Easy Digital Solutions team — experience, training, and practical support for Cook Islands businesses.",
};

export default function AboutPage() {
  return (
    <div className="border-b border-eds-charcoal/10 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="scroll-mt-[var(--header-scroll-offset)] text-center font-display text-3xl font-bold text-eds-green sm:text-4xl">
          Behind EDS
        </h1>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-eds-charcoal">
          <p>
            At the heart of our work, we are a team driven by a shared passion
            for helping local businesses thrive. Since 2023, we&apos;ve supported
            the business community with over 30 years of combined experience in
            technology, training, and strategy.
          </p>
          <p>
            We believe in delivering practical, creative solutions—custom-fit for
            your goals. Whether you&apos;re looking to grow, streamline, or
            adapt, we bring fresh ideas and a collaborative mindset to every
            project.
          </p>
          <div>
            <p className="font-semibold text-eds-charcoal">Our approach is simple:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>We listen.</li>
              <li>We build a plan around your needs.</li>
              <li>
                We measure, reflect, and adapt—staying agile as your business
                evolves.
              </li>
            </ul>
          </div>
          <p>
            Confidentiality is a non-negotiable. We take your trust seriously,
            and every engagement starts with a mutual non-disclosure agreement
            to protect your ideas and ensure peace of mind. We&apos;re proud of
            our reputation in the business community, and we&apos;re always happy
            to share{" "}
            <Link
              href="/client-testimonials"
              className="font-semibold text-eds-green underline-offset-4 hover:underline"
            >
              client testimonials
            </Link>{" "}
            and references. We&apos;d love the opportunity to support your next
            step.
          </p>
        </div>

        <section
          className="mt-16 overflow-hidden rounded-2xl border border-eds-green/25 shadow-sm"
          aria-labelledby="team-heading"
        >
          <h2 id="team-heading" className="sr-only">
            Our team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex min-h-[12rem] items-center justify-center bg-white px-6 py-10 md:min-h-[14rem]">
              <p className="font-display text-2xl font-bold text-eds-green sm:text-3xl">
                James Talbot
              </p>
            </div>
            <div className="bg-eds-green px-6 py-8 text-white md:min-h-[14rem]">
              <ul className="space-y-3 text-sm leading-relaxed sm:text-base">
                <li>
                  James brings over 40 years of experience in logistics, retail
                  operations, warehousing, and transport. He holds globally
                  recognised certifications, including PMP® (ID# 8105874) and
                  Microsoft Excel Expert (ID# 993652768), showcasing his
                  strengths in project leadership, data analysis, and process
                  automation.
                </li>
                <li>
                  Highly technical, James works with Visual Basic, Python, Power
                  BI, Power Query, Power Pivot, and advanced Excel dashboards,
                  creating custom tools that improve efficiency and user
                  experience.
                </li>
                <li>
                  He has written ISO-standard procedures across Health &amp;
                  Safety, HR, and operations, and has led large-scale teams of
                  150+ staff with P&amp;L responsibility up to $20M.
                </li>
                <li>
                  James has also overseen the rollout of major systems such as
                  WMS, EDI, and POS, with a strong focus on optimising workflows,
                  improving warehouse performance, and integrating best-practice
                  operational standards.
                </li>
              </ul>
            </div>
            <div className="bg-eds-green px-6 py-8 text-white md:min-h-[14rem]">
              <ul className="space-y-3 text-sm leading-relaxed sm:text-base">
                <li>
                  With over 20 years&apos; experience in IT software and
                  hardware sales, Mereani Talbot brings expertise in channel
                  management, business development, social media, marketing, and
                  content creation across New Zealand, Australia, and the Cook
                  Islands.
                </li>
                <li>
                  An experienced facilitator and trainer, she designs engaging,
                  activity-based learning programmes, develops induction
                  frameworks, and supports HR processes. She also leads team
                  retreats and strategy workshops to help organisations reconnect
                  and align.
                </li>
                <li>
                  Over the past six years, Mereani has consulted for government
                  and private sector clients in the Cook Islands, contributing to
                  strategic planning, sponsorship and media management,
                  marketing, and project delivery.
                </li>
                <li>
                  She holds an NZQA 4098 Tutor Assessment qualification and a
                  Degree in Applied Management (2021), with proficiency across
                  tools including WordPress (Elementor), Asana, Trello,
                  LucidPress, MailerLite, Photoshop, InDesign, Zoho, and CRM
                  systems.
                </li>
                <li>
                  With a strong foundation in technology, sales, and modern
                  marketing, Mereani brings practical, creative, and up-to-date
                  solutions, including website content creation and e-commerce
                  setup via third-party services.
                </li>
              </ul>
            </div>
            <div className="flex min-h-[12rem] items-center justify-center bg-white px-6 py-10 md:min-h-[14rem]">
              <p className="font-display text-2xl font-bold text-eds-green sm:text-3xl">
                Mereani Talbot
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Link href="/contact" className={edsPrimaryButtonClass}>
            Contact us today
          </Link>
          <Link href="/#services" className={edsPrimaryButtonClass}>
            View our services
          </Link>
        </div>
      </div>
    </div>
  );
}
