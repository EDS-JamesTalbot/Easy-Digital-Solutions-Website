import type { Metadata } from "next";
import { ServicePageShell } from "@/components/ServicePageShell";
import { payrollServiceTileImage } from "@/lib/wix-images";

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
      heroImage={{
        src: payrollServiceTileImage.src,
        alt: payrollServiceTileImage.alt,
      }}
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
        Your organisation signs up and subscribes to SmoothPay. You then share
        login access with us so we can complete configuration. We load employee
        records (including <strong>RMD</strong> and <strong>CINSF</strong>{" "}
        numbers, contact details for emailed payslips, and other role and pay
        data) and work through business settings with you — for example{" "}
        <strong>RMD</strong>, bank account, <strong>VAT</strong>, and related
        options.
      </p>

      <h2>Timesheets and timeclock</h2>
      <p>
        Payroll is typically run from <strong>manual timesheets</strong> you
        send each pay period. If you use a <strong>timeclock</strong> or file
        import instead, tell us upfront so we can align on the workflow.
      </p>

      <h2>Each pay run</h2>
      <ol className="my-4 list-decimal space-y-2 pl-5 text-eds-charcoal">
        <li>We enter hours and send you a <strong>draft payroll summary (PDF)</strong> for review.</li>
        <li>You confirm or request changes.</li>
        <li>After approval, we finalise the pay run.</li>
        <li>
          <strong>Payslips</strong> are emailed to staff; SmoothPay updates{" "}
          <strong>PAYE</strong>, <strong>CINSF</strong>,{" "}
          <strong>leave accruals</strong>, and payroll records.
        </li>
      </ol>
      <p>
        After processing you receive a <strong>Direct Credit</strong> report for
        bank payments and a <strong>Leave Entitlements</strong> report for
        balance tracking. We can also produce tax certificates, historical
        payslips, CINSF summaries, and other reports from the system.{" "}
        <strong>Monthly coordination with your accountant</strong> for
        reporting is included.
      </p>

      <h2>Setup details we&apos;ll confirm with you</h2>
      <ul>
        <li>Whether <strong>leave</strong> should be backdated on setup.</li>
        <li>
          Any <strong>loans</strong> or <strong>additional deductions</strong>{" "}
          that need to be configured per employee.
        </li>
      </ul>
    </ServicePageShell>
  );
}
