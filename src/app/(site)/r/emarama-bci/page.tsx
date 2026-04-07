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

export default function EmaramaBciHiddenPage() {
  return (
    <iframe
      title="Introducing eMarama — BCI (PDF)"
      src={PDF_PATH}
      className="h-[calc(100dvh-8rem)] w-full min-h-[500px] border-0 bg-white"
    />
  );
}
