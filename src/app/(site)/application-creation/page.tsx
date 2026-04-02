import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicePageShell } from "@/components/ServicePageShell";
import {
  applicationForm1ExcelVBAImage,
  applicationForm2DataEntryImage,
  applicationForm5SpeEdiImage,
  applicationForm6DataReportingImage,
  applicationPageImages,
} from "@/lib/wix-images";

export const metadata: Metadata = {
  title: "Application creation",
  description:
    "Digital forms, automation, CRM, helpdesk, and custom business applications — Easy Digital Solutions.",
};

const sectionHeading =
  "!mt-10 font-display text-xl font-bold !text-eds-teal-label sm:text-2xl";

type ExampleImage = {
  src: string;
  alt: string;
  /** Native dimensions for Next/Image (improves sharpness for wide assets). */
  width?: number;
  height?: number;
  figureClassName?: string;
  sizes?: string;
};

const applicationExamples: {
  title: string;
  body: string;
  /** One or more screenshots (empty when no visuals for that example). */
  images: ExampleImage[];
}[] = [
  {
    title: "Application Form_1: Basic Using Excel / VBA",
    body: `We create simple data entry forms that capture information in an
organised table format, with easy-to-use reporting features. These
applications require very little coding to set up.`,
    images: [
      {
        ...applicationForm1ExcelVBAImage,
        figureClassName: "max-w-5xl",
        sizes: "(max-width: 1024px) 100vw, min(602px, 100vw)",
      },
    ],
  },
  {
    title: "Application Form_2: Basic Using Python / Excel",
    body: `This is a CRM form that collects basic customer information and feedback.
The data is then compiled into a report for your review and analysis.`,
    images: [applicationForm2DataEntryImage],
  },
  {
    title: "Application Form_3: HR Form using Excel / VBA",
    body: `The HR form captures employee data in a detailed tabular format, with
reporting features and a dashboard for easy analysis.`,
    images: [applicationPageImages[3]],
  },
  {
    title: "Application Form_4: Client | Product | Payments",
    body: `These are advanced applications with multiple tables, enhanced by
sophisticated VBA coding for added functionality, event log management,
and integrated dashboards.`,
    images: [applicationPageImages[5]],
  },
  {
    title: "Application Form_5: Customs Automated SpeEdi System",
    body: `This tool combines 1–3 Freight Forwarder Cargo lists into one file (PDF
to Excel), including all relevant details. It also converts and saves
any Purchase Orders (in any format), extracting Currency, Total Value
FOB, and Converted Value (using NZ Customs FOREX rates). It then creates
a SpeEdi-friendly table for quick input into SpeEdi.`,
    images: [
      {
        ...applicationForm5SpeEdiImage,
        width: 1349,
        height: 591,
        figureClassName: "max-w-5xl",
        sizes: "(max-width: 1024px) 100vw, min(1024px, 100vw)",
      },
    ],
  },
  {
    title: "Application Form_6: Data Reporting",
    body: `By using an online SQL database connection, along with Power Query,
Power Pivot, Excel, and Visual Basic coding, you can generate data
reports and more.`,
    images: [
      {
        ...applicationForm6DataReportingImage,
        figureClassName: "max-w-5xl",
        sizes: "(max-width: 1024px) 100vw, min(969px, 100vw)",
      },
    ],
  },
];

export default function ApplicationCreationPage() {
  return (
    <ServicePageShell
      eyebrow="Application creation"
      title="Automating your business processes"
      ctaLabel="Contact us today"
      ctaSubject="Website Enquiry — Application Creation"
    >
      <p className="!mt-0 text-lg font-medium text-eds-charcoal">
        Data efficiency
      </p>
      <p>
        Whether you&apos;re a small or medium-sized business, improving your
        processes can often feel overwhelming. At EDS, we&apos;re here to make
        things easier. Our goal is simple: to help you work smarter, faster,
        and more efficiently. We start by asking, &quot;How can we help you do
        things better?&quot; If there&apos;s a way to automate tasks, streamline
        workflows, or build custom applications that save you time and
        money—we&apos;ll find it and implement it. We&apos;ve developed tailored
        solutions alongside our clients that deliver real results. Explore some
        of our application examples below.
      </p>

      <h2 className={sectionHeading}>Applications</h2>
      <p>
        Applications can be tailored to fit a wide variety of business
        needs—your imagination is the only limit. From Customer Relationship
        Management (CRM) and Inventory Management to HR systems, Customs Entry
        preparation, and Job Workflow tracking, we can build solutions that
        streamline and support your operations.
      </p>

      <h2 className={sectionHeading}>Digital forms</h2>
      <p>
        Tired of creating paper forms? Printing is costly and not eco-friendly.
        We can help convert your paper forms into digital templates, making data
        entry faster and easier. Benefits include:
      </p>
      <ul>
        <li>Streamlined, user-friendly data entry</li>
        <li>Reduced risk of manual entry errors</li>
        <li>Built-in validation to ensure accurate information</li>
      </ul>
      <p>
        Switching to digital forms saves time, resources, and helps the
        environment. Check out our application form samples below.
      </p>

      <h2 className={sectionHeading}>Helpdesk | inventory management database</h2>
      <p>
        Our Helpdesk Application Form helps staff quickly resolve client
        concerns and queries. By automating the complaint process with a ticket
        system, clients receive solutions fast. The best part? Everyone knows
        customer inquiries are being handled efficiently, and the entire
        process runs automatically.
      </p>

      <h2 className={sectionHeading}>Automated purchase order system</h2>
      <p>
        Still manually creating Purchase Orders from Excel reports, typing them
        into templates, and emailing them to suppliers? Or struggling to optimise
        container space for stock orders? We can automate these tasks for you.
      </p>
      <p>
        Our solution will consolidate orders by vessel/container, automatically
        generate PDF Purchase Orders, and email them directly to suppliers,
        saving you time and letting you focus on more important tasks.
      </p>

      <h2 className={sectionHeading}>Data reporting</h2>
      <p>
        Tired of manually compiling data reports and spending hours formatting
        spreadsheets? We can streamline your data reporting process. Our
        solution automates data collection, analysis, and report generation,
        allowing you to access real-time insights with just a few clicks. Say
        goodbye to manual work and hello to efficient, accurate, and timely
        reports. Let us handle the data, so you can focus on decision-making.
      </p>

      <section className="!mt-14 space-y-14 border-t border-eds-charcoal/10 pt-12">
        <h2 className="!mt-0 font-display text-2xl font-bold !text-eds-teal-label sm:text-3xl">
          Some examples:
        </h2>

        {applicationExamples.map((ex) => (
          <article key={ex.title} className="space-y-5">
            <h3 className="!mt-0 font-display text-lg font-bold !text-eds-teal-label sm:text-xl">
              {ex.title}
            </h3>
            <p>{ex.body}</p>
            {ex.images.length > 0 ? (
            <div className="space-y-6">
              {ex.images.map((img, i) => {
                const isLocal = img.src.startsWith("/");
                const w = img.width ?? 900;
                const h = img.height ?? 500;
                return (
                  <figure
                    key={`${ex.title}-${img.src}-${i}`}
                    className={`mx-auto w-full ${img.figureClassName ?? "max-w-3xl"}`}
                  >
                    <div className="rounded-lg border border-eds-charcoal/10 bg-eds-blue-soft/20 shadow-md">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={w}
                        height={h}
                        className={
                          isLocal
                            ? "mx-auto block h-auto max-h-none rounded-[inherit]"
                            : "mx-auto block h-auto w-full max-w-none object-contain object-top"
                        }
                        style={
                          isLocal
                            ? {
                                maxWidth: img.width
                                  ? `min(100%, ${img.width}px)`
                                  : "min(100%, 100vw)",
                                width: "auto",
                                height: "auto",
                              }
                            : undefined
                        }
                        sizes={
                          img.sizes ??
                          (isLocal
                            ? "(max-width: 768px) 100vw, 768px"
                            : "(max-width: 896px) 100vw, 896px")
                        }
                        quality={isLocal ? 88 : 100}
                      />
                    </div>
                  </figure>
                );
              })}
            </div>
            ) : null}
          </article>
        ))}
      </section>

      <p className="!mt-12 font-medium">Start automating some of your business processes today.</p>
      <p>
        For Excel training related to these tools, see{" "}
        <Link
          href="/excel-training"
          className="font-semibold text-eds-green underline-offset-4 hover:underline"
        >
          Excel training services
        </Link>
        .
      </p>
    </ServicePageShell>
  );
}
