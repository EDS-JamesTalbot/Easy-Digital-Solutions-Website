import type { Metadata } from "next";
import { EdsTextLink } from "@/components/EdsTextLink";
import { ServicePageShell } from "@/components/ServicePageShell";
import { consultingClients } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Business process improvement, project management, data analysis, and HR support — Easy Digital Solutions.",
};

const clients = consultingClients;

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
        <EdsTextLink href="/client-testimonials">client testimonials</EdsTextLink>{" "}
        or get in touch to discuss your next project.
      </p>
    </ServicePageShell>
  );
}
