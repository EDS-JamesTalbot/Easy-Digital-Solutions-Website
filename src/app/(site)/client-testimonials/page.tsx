import type { Metadata } from "next";
import { ServicePageShell } from "@/components/ServicePageShell";
import { WixImageGallery } from "@/components/WixImageGallery";
import { testimonialPageGallery } from "@/lib/wix-images";

export const metadata: Metadata = {
  title: "Client testimonials",
  description:
    "Feedback from government, private sector, and community clients — Easy Digital Solutions.",
};

const highlights = [
  "Ezebuild Construction – April 2026 to Current",
  "OTB – Manuia Beach – Oct 2025 to Current",
  "Honest Skin Care International Ltd – April 2025 to Current",
  "Turama House – Jan to Oct 2025",
  "Porter Group/Apex Holdings – Oct 2024 to Current",
  "Ministry of Health – July 2024",
  "CITC – June to Sept 2024",
  "Island Craft – May to Dec 2024",
  "Prime Foods — 6 Pillars of Customer Services – March to May 2024",
  "NES Strategy Day – October 2023",
  "Government Dept: Avarua – October 2023",
  "CIPS All Staff Training – June to July 2023",
  "Prime Foods — Effective Supervisory Management – May to July 2023",
  "Raromart – 2020",
  "The Bond Store – 2019 to 2025 (various dates)",
  "Vonnias – 2019",
  "Prime Foods Leadership Training, Logistics & Operational Consulting – Jan to Dec 2018",
] as const;

export default function ClientTestimonialsPage() {
  return (
    <ServicePageShell
      eyebrow="Social proof"
      title="Client testimonials"
      ctaLabel="Start a conversation"
    >
      <p>
        We believe the best way to understand the impact of our work is to hear
        directly from the people we&apos;ve worked with.
      </p>
      <p>
        Our clients come from a wide range of industries—government, private
        sector, and community organisations—and each has a unique story to
        tell. Whether it&apos;s solving complex challenges, streamlining
        systems, or building capacity through training and support, we take pride
        in delivering practical solutions that make a difference.
      </p>
      <p>
        Below, you&apos;ll find a collection of genuine feedback themes and
        project highlights that reflect the outcomes we&apos;ve helped
        create—measurable improvements, stronger teams, and trusted partnerships.
        We&apos;re grateful for the relationships we&apos;ve built, and we&apos;re
        proud to share their experiences with you.
      </p>

      <WixImageGallery
        items={testimonialPageGallery}
        columns="single"
        className="my-10"
      />

      <h2>Customer / Project Highlights</h2>
      <ul>
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </ServicePageShell>
  );
}
