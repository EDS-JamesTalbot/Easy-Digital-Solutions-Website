import type { Metadata } from "next";

const PDF_PATH = "/private/emarama-bci-intro.pdf";

export const metadata: Metadata = {
  title: "Introducing eMarama (BCI)",
  description: "Shared viewer for the BCI eMarama introduction deck.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function EmaramaBciPage() {
  return (
    <iframe
      title="Introducing eMarama — BCI (PDF)"
      src={PDF_PATH}
      className="h-full w-full border-0 bg-white"
    />
  );
}
