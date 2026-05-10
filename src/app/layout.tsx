import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

/** Canonical URL for metadata, Open Graph, and social previews (set NEXT_PUBLIC_SITE_URL on your host). */
function siteMetadataBase(): URL {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) {
    try {
      return new URL(fromEnv);
    } catch {
      /* fall through */
    }
  }
  // Prefer production domain (works on previews too); avoids VERCEL_URL which breaks when
  // Deployment Protection (Standard) restricts generated deployment URLs — see Vercel docs.
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionHost) {
    return new URL(`https://${productionHost}`);
  }
  const branchHost = process.env.VERCEL_BRANCH_URL;
  if (branchHost) {
    return new URL(`https://${branchHost}`);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: siteMetadataBase(),
  title: "Easy Digital Solutions | Cook Islands",
  description:
    "Business automation, applications, dashboards, training, and digital marketing for the Cook Islands since 2023.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className={`${dmSans.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
