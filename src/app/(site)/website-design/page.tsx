import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicePageShell } from "@/components/ServicePageShell";
import { websiteDesignExampleImage } from "@/lib/wix-images";

export const metadata: Metadata = {
  title: "Website design",
  description:
    "Secure Next.js sites—HTTPS, modern hosting, and optional Clerk auth for sign-in and protected areas — Easy Digital Solutions, Cook Islands.",
};

export default function WebsiteDesignPage() {
  const { src, alt, width, height } = websiteDesignExampleImage;

  return (
    <ServicePageShell
      eyebrow="Website design"
      title="Websites that work as hard as you do"
      ctaLabel="Talk to us about your site"
    >
      <p className="!mt-0 text-lg font-medium text-eds-charcoal">
        Built here, by us
      </p>
      <p>
        The site you&apos;re browsing now—Easy Digital Solutions&apos; own
        marketing site—was designed and developed in-house. We build with{" "}
        <strong>Next.js</strong> (React, App Router),{" "}
        <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, so pages
        are fast, responsive, and
        straightforward to extend. Day-to-day development runs in{" "}
        <strong>Cursor AI</strong>, an AI-assisted editor that speeds up
        delivery while we stay focused on structure, accessibility, and
        performance. That same stack and workflow is what we bring to client
        sites: clear information design, solid engineering, and a look that
        matches your brand.
      </p>
      <p>
        Whether you need a brochure-style presence, a booking flow, or a
        full online shop with products and cart, we can plan the information
        architecture, implement the UI, and help you keep content up to date.
        If you already work with us on training, consulting, or applications,
        your website can sit alongside those services as a consistent digital
        front door.
      </p>

      <h2>Security and authentication</h2>
      <p>
        Every site should be served over <strong>HTTPS</strong>
        {" "}
        with modern TLS, hosted on infrastructure that keeps patches and certificates
        current. In Next.js we follow secure defaults—sane routing, careful
        handling of environment variables, and server-side work where it belongs
        so sensitive logic isn&apos;t exposed in the browser.
      </p>
      <p>
        When a project needs <strong>sign-in</strong>, member areas, or
        role-based access, we integrate established authentication platforms
        rather than inventing fragile password systems. For example,{" "}
        <strong>Clerk</strong> (and similar providers) can handle user
        accounts, social logins, session management, and multi-factor
        authentication—so your users get a smooth experience and you get
        security maintained by specialists. We wire those services into your
        Next.js app and tailor what each role can see and do.
      </p>

      <h2>Example: e-commerce shop layout</h2>
      <p>
        Below is a screenshot from another site we built—an E-Commerce shop experience with product grid, filters, cart, and
        navigation. It illustrates the kind of clean, product-led layout we can
        deliver when you want customers to browse, compare, and purchase
        online.
      </p>

      <figure className="mx-auto mt-8 w-full max-w-5xl">
        <div className="overflow-hidden rounded-xl border border-eds-charcoal/10 bg-eds-blue-soft/20 shadow-md">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-auto w-full object-contain object-top"
            sizes="(max-width: 1024px) 100vw, 1024px"
            quality={95}
          />
        </div>
        <figcaption className="mt-3 text-center text-sm text-eds-muted">
          Example shop page—product cards, filters, and cart (Easy Digital
          Solutions).
        </figcaption>
      </figure>

      <p className="!mt-10">
        Ready to refresh an old site or launch something new?{" "}
        <Link
          href="/contact"
          className="font-semibold text-eds-green underline-offset-4 hover:underline"
        >
          Contact us
        </Link>{" "}
        with your goals and we&apos;ll outline options that fit your budget and
        timeline.
      </p>
    </ServicePageShell>
  );
}
