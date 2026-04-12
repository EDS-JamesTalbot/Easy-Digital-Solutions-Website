import Link from "next/link";
import { serviceLinks } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-eds-charcoal/10 bg-eds-charcoal text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold text-eds-gold-soft">
              Easy Digital Solutions Ltd
            </p>
            <p className="mt-2 max-w-sm text-sm text-white/75">
              Solution-focused technology and training for businesses in the Cook
              Islands.
            </p>
          </div>

          <div id="contact" aria-label="Contact details">
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="mailto:eds.raro@gmail.com"
                  className="transition hover:text-eds-gold-soft"
                >
                  eds.raro@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+68271099" className="transition hover:text-eds-gold-soft">
                  M: +682 71099 — James
                </a>
              </li>
              <li>
                <a href="tel:+68275398" className="transition hover:text-eds-gold-soft">
                  M: +682 75398 — Mereani
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <p className="text-sm font-semibold text-white">Services</p>
            <ul className="mt-3 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="transition hover:text-eds-gold-soft"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/55">
          © {new Date().getFullYear()} Easy Digital Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
