"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { edsPrimaryButtonClass } from "@/lib/eds-button";
import { mainNav, serviceLinks } from "@/lib/nav";

function linkClass(active: boolean) {
  return `text-sm font-medium transition ${
    active
      ? "text-eds-green"
      : "text-eds-charcoal/90 hover:text-eds-green"
  }`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const isServicePage = serviceLinks.some((s) => s.href === pathname);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative sticky top-0 z-50 border-b border-eds-charcoal/10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url(/header-circuit-bg.png)",
          }}
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 shrink items-center self-stretch">
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main"
        >
          <Link
            href="/"
            className={linkClass(pathname === "/")}
            onClick={() => setServicesOpen(false)}
          >
            Home
          </Link>

          <div className="relative px-2" ref={servicesRef}>
            <button
              type="button"
              className={`flex items-center gap-1 rounded-lg px-2 py-1.5 ${linkClass(isServicePage || servicesOpen)}`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <svg
                className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {servicesOpen ? (
              <div className="absolute left-0 top-full z-50 pt-1" role="menu">
                <div className="max-h-[min(70vh,22rem)] min-w-[16rem] overflow-y-auto rounded-xl border border-eds-charcoal/10 bg-white py-2 shadow-lg">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      role="menuitem"
                      className={`block px-4 py-2.5 text-sm ${
                        pathname === s.href
                          ? "bg-eds-green/10 font-semibold text-eds-green"
                          : "text-eds-charcoal hover:bg-eds-blue-soft"
                      }`}
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {mainNav
            .filter((n) => n.href !== "/")
            .map((item) => {
              const active =
                !item.href.startsWith("/#") && pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 py-1.5 ${linkClass(active)}`}
                  onClick={() => setServicesOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className={edsPrimaryButtonClass}
            onClick={() => setServicesOpen(false)}
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-eds-charcoal/15 p-2 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6 text-eds-charcoal"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="relative z-10 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-eds-charcoal/10 bg-white/95 px-4 py-4 backdrop-blur-sm lg:hidden"
        >
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="rounded-lg px-3 py-2.5 text-base font-medium text-eds-charcoal hover:bg-eds-blue-soft"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-eds-muted">
              Services
            </p>
            {serviceLinks.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`rounded-lg px-3 py-2.5 text-base ${
                  pathname === s.href
                    ? "bg-eds-green/10 font-semibold text-eds-green"
                    : "font-medium text-eds-charcoal hover:bg-eds-blue-soft"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <Link
              href="/about"
              className="rounded-lg px-3 py-2.5 text-base font-medium text-eds-charcoal hover:bg-eds-blue-soft"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-3 py-2.5 text-base font-medium text-eds-charcoal hover:bg-eds-blue-soft"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className={`${edsPrimaryButtonClass} mt-2 w-full justify-center`}
              onClick={() => setMobileOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
