import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageShell } from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Business process improvement, project management, data analysis, and HR support — Easy Digital Solutions.",
};

const clients = [
  "Business Trade & Investment Board",
  "Cook Islands Investment Corporation — Asset Management",
  "Cook Islands Investment Corporation — Asset Development",
  "Cook Islands Parliamentary Services",
  "Turama House Ltd",
  "OTB Restaurant / Te Puka Estate",
  "TOA Petroleum",
  "Te Marae Ora — Ministry of Health",
  "Honest SkinCare",
  "Prime Foods",
  "Vonnia's",
  "Cook Islands Trade Corporation",
  "Raromart",
] as const;

export default function ConsultingPage() {
  return (
    <ServicePageShell
      eyebrow="Consulting"
      title="Consulting services"
      ctaLabel="Discuss your next project"
    >
      <p>
        Since 2017, we&apos;ve partnered with government agencies and private
        businesses, providing consulting built on trust, transparency, and
        collaboration. We focus on meaningful work that delivers real outcomes.
      </p>
      <p>
        Our services cover business process improvement, certified project
        management, data analysis, dashboards, HR support, procurement, and
        more. We take a personalised approach, listening first and designing
        solutions that fit each client&apos;s goals.
      </p>

      <h2>Clients we have worked with</h2>
      <ul>
        {clients.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <p>
        See our{" "}
        <Link href="/client-testimonials" className="font-semibold text-eds-green underline-offset-4 hover:underline">
          client testimonials
        </Link>{" "}
        or get in touch to discuss your next project.
      </p>
    </ServicePageShell>
  );
}
