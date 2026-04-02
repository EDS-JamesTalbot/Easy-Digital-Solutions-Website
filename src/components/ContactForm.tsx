"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website enquiry from ${name || "visitor"}`
    );
    const body = encodeURIComponent(
      [
        `YOUR NAME: ${name}`,
        `Email: ${email}`,
        `MOBILE: ${mobile}`,
        `Company: ${company}`,
        "",
        "MESSAGE:",
        message,
      ].join("\n")
    );
    window.location.href = `mailto:eds.raro@gmail.com?subject=${subject}&body=${body}`;
  }

  const fieldClass =
    "w-full rounded border border-eds-charcoal/25 bg-white px-3 py-2.5 text-eds-charcoal placeholder:font-serif placeholder:italic placeholder:text-eds-muted/90 focus:border-eds-green focus:outline-none focus:ring-2 focus:ring-eds-green/25";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-eds-charcoal">Send us your details.</p>

      <div>
        <label htmlFor="contact-name" className="sr-only">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="YOUR NAME"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-mobile" className="sr-only">
          Mobile
        </label>
        <input
          id="contact-mobile"
          name="mobile"
          type="tel"
          autoComplete="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="MOBILE"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-company" className="sr-only">
          Company
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="MESSAGE HERE:"
          className={`${fieldClass} resize-y min-h-[140px]`}
        />
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="rounded bg-eds-charcoal px-8 py-2.5 text-sm font-semibold uppercase tracking-wide text-white underline decoration-white/80 underline-offset-2 transition hover:bg-eds-charcoal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eds-green"
        >
          Send
        </button>
      </div>
    </form>
  );
}
