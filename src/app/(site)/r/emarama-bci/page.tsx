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
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col bg-eds-charcoal/5">
      <div className="border-b border-eds-charcoal/10 bg-white px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-eds-charcoal/80">
            Introducing eMarama — BCI (shared link; not listed in site navigation).
          </p>
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-eds-green underline-offset-2 hover:underline"
          >
            Open or download PDF
          </a>
        </div>
      </div>
      <iframe
        title="Introducing eMarama — BCI (PDF)"
        src={PDF_PATH}
        className="min-h-[75dvh] w-full flex-1 border-0 bg-white"
      />
    </div>
  );
}
