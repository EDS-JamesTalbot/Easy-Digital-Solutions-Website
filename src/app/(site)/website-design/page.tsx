import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicePageShell } from "@/components/ServicePageShell";
import { websiteDesignExampleImage } from "@/lib/wix-images";

export const metadata: Metadata = {
  title: "Website Design",
  description:
    "Fast, secure websites for Cook Islands businesses—clear design, safe hosting, and optional log-in areas when you need them. Easy Digital Solutions.",
};

export default function WebsiteDesignPage() {
  const { src, alt, width, height } = websiteDesignExampleImage;

  return (
    <ServicePageShell
      eyebrow="Website Design"
      title="Websites that work as hard as you do"
      ctaLabel="Talk to us about your site"
    >
      <p className="!mt-0 text-lg font-medium text-eds-charcoal">
        Built here, by us
      </p>
      <p>
        The site you&apos;re browsing now—Easy Digital Solutions&apos; own
        marketing site—was designed and built in-house. We use modern tools so
        pages load quickly, look good on phones and desktops, and are easy to
        update as your business grows. We also use smart editing software that
        helps us work efficiently, while we still pay close attention to clear
        layout, ease of use for visitors, and overall speed. That same approach
        is what we bring to your site: information that&apos;s easy to find, a
        site that behaves reliably, and visuals that match your brand.
      </p>
      <p>
        Whether you need a simple &quot;who we are and how to reach us&quot;
        site, a way for people to book appointments, or a fuller online store
        with products and a shopping cart, we can plan the structure, build the
        pages, and show you how to keep wording and images fresh. If you already
        work with us on training, consulting, or custom tools, your website can
        sit alongside those services as one clear front door for customers and
        partners.
      </p>

      <h2>Security and sign-in</h2>
      <p>
        Every site should use a <strong>secure connection</strong>
        {" "}
        (the padlock in the browser) and live on hosting that stays up to date. We follow
        sensible practices—clear page structure, careful handling of private
        settings, and keeping sensitive work where it belongs so it isn&apos;t
        left out in the open where it shouldn&apos;t be.
      </p>
      <p>
        When you need <strong>log-in areas</strong>, member-only pages, or
        different access levels for staff versus the public, we hook into
        trusted sign-in services instead of home-grown password systems that
        are hard to keep safe. For example, <strong>Clerk</strong>
        {" "}
        (and similar providers) can look after accounts, &quot;sign in with Google&quot;
        style options, staying signed in safely, and extra security steps like
        two-step verification—so visitors get a smooth experience and the heavy
        lifting on security is handled by people who do it full time. We connect that to
        your site and set who can see what.
      </p>

      <h2>Example: online shop layout</h2>
      <p>
        Below is a screenshot from another site we built: an online shop with a
        product grid, filters, cart, and navigation. It shows the kind of
        clear, product-first layout we can deliver when you want customers to
        browse, compare, and buy online.
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
          Example shop page—products, filters, and cart (Easy Digital Solutions).
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
        with what you want to achieve and we&apos;ll suggest options that suit
        your budget and timeline.
      </p>
    </ServicePageShell>
  );
}
