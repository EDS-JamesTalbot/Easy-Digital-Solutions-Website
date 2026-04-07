import type { Metadata } from "next";
import Image from "next/image";
import { ServicePageShell } from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Payroll processing",
  description:
    "SmoothPay payroll processing for Cook Islands businesses — setup, weekly runs, PAYE, CINSF, payslips, and reporting. Easy Digital Solutions.",
};

export default function PayrollProcessingPage() {
  return (
    <ServicePageShell
      eyebrow="Payroll processing"
      title="Payroll processing with SmoothPay"
      titleAside={
        <Image
          src="/brands/smoothpay-logo.png"
          alt="SmoothPay"
          width={240}
          height={64}
          className="h-10 w-auto max-w-[200px] object-contain object-right sm:h-12 sm:max-w-[240px]"
          priority
        />
      }
      ctaLabel="Discuss payroll support"
      ctaHref="mailto:eds.raro@gmail.com"
      ctaSubject="Payroll processing enquiry"
    >
      <p>
        We provide outsourced payroll processing on{" "}
        <strong>SmoothPay</strong>, with hands-on experience supporting
        multi-site operators in the Cook Islands — including ongoing payroll for
        hospitality (20+ staff) and grouped retail and services (around 30
        staff across fuel, laundry, transport, and related operations).
      </p>

      <h2>Getting started</h2>
      <p>
        If you&apos;re not already on SmoothPay, simply sign up and subscribe.
        You then share login access with us so we can complete configuration if
        required. We load employee records (including{" "}
        <strong>RMD</strong> and <strong>CINSF</strong> numbers, contact details
        for emailed payslips, and other role and pay data) and work through
        business settings with you — for example <strong>RMD</strong>, Bank
        account, <strong>VAT</strong>, and other related options.
      </p>

      <h2>Timesheets and timeclock</h2>
      <p>
        Payroll is typically run from manual timesheets you send each pay
        period. If you use a timeclock or file import instead, tell us upfront
        so we can align on the workflow.
      </p>

      <h2>Each pay run</h2>
      <p>
        Payslips are emailed to staff; SmoothPay updates{" "}
        <strong>PAYE</strong>, <strong>CINSF</strong>, leave accruals, and
        payroll records.
      </p>
      <p>
        After processing you will receive a <strong>Direct Credit</strong>{" "}
        report for bank payments and a <strong>Leave Entitlements</strong>{" "}
        report for Leave accrual/balance tracking. We can also produce tax
        certificates, historical payslips, CINSF summaries, and other reports
        from the system. Monthly coordination with your accountant for
        reporting is included.
      </p>
    </ServicePageShell>
  );
}
