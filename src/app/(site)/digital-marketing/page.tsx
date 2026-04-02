import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageShell } from "@/components/ServicePageShell";
import { WixImageGallery } from "@/components/WixImageGallery";
import { digitalMarketingImages } from "@/lib/wix-images";

export const metadata: Metadata = {
  title: "Digital marketing",
  description:
    "Social media, content, marketing strategy, and performance insight — Easy Digital Solutions.",
};

export default function DigitalMarketingPage() {
  const marketingGallery = digitalMarketingImages;
  return (
    <ServicePageShell
      eyebrow="Digital marketing"
      title="Digital marketing & content"
      ctaLabel="Talk to us about your channels"
    >
      <p>
        We help organisations show up clearly online—whether you&apos;re
        launching a presence, growing engagement, or aligning content with
        business goals. Our work spans social media setup and content,
        campaign planning, and practical reporting so you can see what resonates.
      </p>

      {marketingGallery.length > 0 ? (
        <WixImageGallery items={marketingGallery} className="my-10" />
      ) : null}

      <h2>What we support</h2>
      <ul>
        <li>
          Social media strategy and day-to-day content (e.g. Facebook and other
          channels)
        </li>
        <li>Graphic and visual assets that match your brand</li>
        <li>Simple performance tracking and recommendations</li>
        <li>Coordination with your wider training or project initiatives</li>
      </ul>

      <p>
        Every engagement starts with understanding your audience and objectives.
        We then propose a realistic plan—creative where it needs to be,
        measurable where it counts.
      </p>

      <p>
        Pair digital marketing with our{" "}
        <Link
          href="/learning-solutions"
          className="font-semibold text-eds-green underline-offset-4 hover:underline"
        >
          learning solutions
        </Link>{" "}
        or{" "}
        <Link
          href="/consulting"
          className="font-semibold text-eds-green underline-offset-4 hover:underline"
        >
          consulting
        </Link>{" "}
        when you need campaigns plus capability building in-house.
      </p>
    </ServicePageShell>
  );
}
