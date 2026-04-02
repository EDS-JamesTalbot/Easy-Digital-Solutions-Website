import type { Metadata } from "next";
import Image from "next/image";
import { ServicePageShell } from "@/components/ServicePageShell";
import { WixImageGallery } from "@/components/WixImageGallery";
import { excelImages } from "@/lib/wix-images";

export const metadata: Metadata = {
  title: "Excel training",
  description:
    "Tailored Excel training from basics to Power Query and VBA — Microsoft Excel Expert, Cook Islands.",
};

/** Same square box for each tool so artwork renders at equal visual size. */
const toolIconClass =
  "h-12 w-12 shrink-0 object-contain object-center sm:h-14 sm:w-14";

export default function ExcelTrainingPage() {
  const excelGallery = excelImages;
  return (
    <ServicePageShell
      eyebrow="Excel training"
      title="Excel training services"
      titleAside={
        <>
          <Image
            src="/icons/excel.png"
            alt="Microsoft Excel"
            width={120}
            height={120}
            className={toolIconClass}
            priority
            sizes="(min-width: 640px) 3.5rem, 3rem"
          />
          <Image
            src="/icons/power-pivot.png"
            alt="Power Pivot"
            width={120}
            height={120}
            className={toolIconClass}
            priority
            sizes="(min-width: 640px) 3.5rem, 3rem"
          />
          <Image
            src="/icons/power-query.png"
            alt="Power Query"
            width={120}
            height={120}
            className={toolIconClass}
            priority
            sizes="(min-width: 640px) 3.5rem, 3rem"
          />
        </>
      }
      ctaLabel="Email James"
    >
      <p>
        Whether you&apos;re a beginner looking to build confidence or a seasoned
        professional aiming to master advanced functions, our Excel Training
        Services are designed to meet you where you are. We offer tailored
        one-on-one sessions and group workshops that cover everything from Excel
        basics to advanced data analysis, dashboards, formulas, and automation
        using tools like Power Query and VBA.
      </p>
      <p>
        Our approach is practical, hands-on, and customised to your industry or
        business needs. You&apos;ll learn how to apply Excel effectively in real
        work scenarios—saving time, reducing errors, and gaining insights
        through smarter spreadsheets.
      </p>
      <p>
        Whether it&apos;s in person or online, we&apos;ll work with your
        schedule to deliver flexible and impactful training that sticks. Perfect
        for individuals, corporate teams, or business owners ready to elevate
        their Excel skills and performance.
      </p>

      {excelGallery.length > 0 ? (
        <WixImageGallery items={excelGallery} columns="single" className="my-10" />
      ) : null}

      <h2>Microsoft Excel certified — your trainer</h2>
      <p>
        Hi, I&apos;m James — and I make Excel easier to learn (and actually
        useful).
      </p>
      <p>
        I&apos;ve been working with Excel for years, across government,
        corporate, and small business environments — and I know how overwhelming
        spreadsheets can feel when you&apos;re not sure where to start.
        That&apos;s why I focus on making my training sessions hands-on,
        practical, and easy to follow.
      </p>
      <p>
        I&apos;m a Certified Microsoft Excel Expert, but more than that, I love
        helping people feel more confident using tools like Excel in their
        day-to-day work. Whether you&apos;re brand new or diving into advanced
        dashboards, I&apos;ll meet you where you&apos;re at and guide you step
        by step — no jargon, no pressure. My sessions are built around real-life
        examples and interactive learning, so you&apos;re not just watching
        slides — you&apos;re solving problems, asking questions, and applying
        what you learn right away. People often tell me they walk away feeling
        like they finally get it — and that&apos;s what it&apos;s all about for
        me.
      </p>
      <p>
        If you&apos;re ready to build your skills in a way that actually sticks,
        I&apos;d love to work with you. Let&apos;s make Excel work for you, not
        the other way around.
      </p>

      <div className="mt-8 rounded-xl border border-eds-charcoal/10 bg-eds-blue-soft/40 p-6 [&_a]:no-underline">
        <p className="text-sm font-semibold uppercase tracking-wide text-eds-muted">
          Contact James
        </p>
        <p className="mt-2">
          <a
            href="tel:+68271099"
            className="font-semibold text-eds-green hover:underline"
          >
            +682 71099
          </a>
        </p>
        <p className="mt-1">
          <a
            href="mailto:eds.raro@gmail.com"
            className="font-semibold text-eds-green hover:underline"
          >
            eds.raro@gmail.com
          </a>
        </p>
      </div>
    </ServicePageShell>
  );
}
