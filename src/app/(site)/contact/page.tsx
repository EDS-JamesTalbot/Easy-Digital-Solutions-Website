import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Easy Digital Solutions",
  description:
    "Send your details and requirements to Easy Digital Solutions — Cook Islands.",
};

export default function ContactPage() {
  return (
    <article className="border-b border-eds-charcoal/10 bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h1 className="scroll-mt-[var(--header-scroll-offset)] font-display text-3xl font-bold text-eds-green sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 text-base leading-relaxed text-eds-charcoal">
          To help us understand your requirements, please send us your details
          and some additional information.
        </p>
        <div className="mt-6 border-b border-eds-green" />
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </article>
  );
}
