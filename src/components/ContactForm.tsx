"use client";

import { useState } from "react";

const fields = [
  {
    id: "contact-name",
    name: "name",
    type: "text",
    autoComplete: "name",
    placeholder: "YOUR NAME",
    label: "Your name",
    required: false,
    multiline: false,
  },
  {
    id: "contact-email",
    name: "email",
    type: "email",
    autoComplete: "email",
    placeholder: "Email",
    label: "Email",
    required: true,
    multiline: false,
  },
  {
    id: "contact-mobile",
    name: "mobile",
    type: "tel",
    autoComplete: "tel",
    placeholder: "MOBILE",
    label: "Mobile",
    required: false,
    multiline: false,
  },
  {
    id: "contact-company",
    name: "company",
    type: "text",
    autoComplete: "organization",
    placeholder: "Company",
    label: "Company",
    required: false,
    multiline: false,
  },
  {
    id: "contact-message",
    name: "message",
    type: "text",
    autoComplete: "off",
    placeholder: "MESSAGE HERE:",
    label: "Message",
    required: false,
    multiline: true,
  },
] as const;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const values = { name, email, mobile, company, message };
  const setters = {
    name: setName,
    email: setEmail,
    mobile: setMobile,
    company: setCompany,
    message: setMessage,
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      [
        `YOUR NAME: ${name}`,
        `Email: ${email}`,
        `MOBILE: ${mobile}`,
        `Company: ${company}`,
        "",
        "MESSAGE:",
        message,
      ].join("\n"),
    );
    window.location.href = `mailto:eds.raro@gmail.com?subject=${subject}&body=${body}`;
  }

  const fieldClass =
    "w-full rounded border border-eds-charcoal/25 bg-white px-3 py-2.5 text-eds-charcoal placeholder:font-serif placeholder:italic placeholder:text-eds-muted/90 focus:border-eds-green focus:outline-none focus:ring-2 focus:ring-eds-green/25";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-eds-charcoal">Send us your details.</p>

      {fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} className="sr-only">
            {field.label}
          </label>
          {field.multiline ? (
            <textarea
              id={field.id}
              name={field.name}
              rows={6}
              value={values[field.name]}
              onChange={(e) => setters[field.name](e.target.value)}
              placeholder={field.placeholder}
              className={`${fieldClass} resize-y min-h-[140px]`}
            />
          ) : (
            <input
              id={field.id}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.required}
              value={values[field.name]}
              onChange={(e) => setters[field.name](e.target.value)}
              placeholder={field.placeholder}
              className={fieldClass}
            />
          )}
        </div>
      ))}

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
