import type { ServiceTileGraphicId } from "@/components/ServiceTileGraphic";
import { serviceLinks } from "@/lib/nav";

type ServiceCardAccent = "green" | "blue" | "gold";

type ServiceCardContent = {
  blurb: string;
  points: readonly string[];
  accent: ServiceCardAccent;
  graphicId: ServiceTileGraphicId;
};

const serviceCardContent: Record<string, ServiceCardContent> = {
  "/power-bi-consulting": {
    graphicId: "powerBi",
    blurb:
      "See how the business is really performing—from headline metrics for your Board and CEO to the operational detail your Managers need—with dashboards that stay current on desktop, online, and mobile.",
    points: [
      "One trusted view of the numbers—fewer competing spreadsheets to reconcile",
      "Publish online with automatic refresh so invited people always see up-to-date results",
      "Executive summaries and manager-ready detail, still readable on a phone",
    ],
    accent: "blue",
  },
  "/dashboards-reporting": {
    graphicId: "dashboards",
    blurb:
      "Excel-based dashboards and reporting—clear visuals and recurring numbers your team can refresh and own.",
    points: [
      "Tables, pivots, charts, and slicers for at-a-glance KPIs",
      "Power Query and structured imports for repeatable refresh",
      "Management-ready layouts for operations, finance, and HR views",
    ],
    accent: "blue",
  },
  "/e-learning": {
    graphicId: "eLearning",
    blurb:
      "Custom e-learning modules, animated explainers, interactive lessons, and quizzes — designed for staff induction, skills development, and technical training.",
    points: [
      "Storyboarding and content design",
      "Animation videos and interactive modules",
      "LMS-ready packages (SCORM / xAPI on request)",
    ],
    accent: "gold",
  },
  "/learning-solutions": {
    graphicId: "learning",
    blurb:
      "Activity-based training, retreats, and facilitation for teams and leaders.",
    points: [
      "Leadership & customer service",
      "Warehousing & logistics programmes",
      "Retreats & team development",
    ],
    accent: "blue",
  },
  "/consulting": {
    graphicId: "consulting",
    blurb:
      "Process improvement, project management, data analysis, and HR support.",
    points: [
      "Spreadsheets, WMS, procurement",
      "Government & private sector experience",
      "Trusted client references",
    ],
    accent: "gold",
  },
  "/application-creation": {
    graphicId: "applications",
    blurb:
      "Digital forms, automation, helpdesk, inventory, and custom Excel/VBA/Python tools.",
    points: [
      "CRM, HR, and inventory systems",
      "Purchase order automation",
      "Customs and SpeEdi workflows",
    ],
    accent: "green",
  },
  "/website-design": {
    graphicId: "website",
    blurb:
      "Next.js, TypeScript, Tailwind CSS, and Cursor AI—planning, build, and launch with your brand.",
    points: [
      "Marketing sites and e-commerce-style layouts",
      "HTTPS, secure hosting, and optional Clerk auth for sign-in / member areas",
      "This site is our own build (see the Website Design page for our stack)",
    ],
    accent: "blue",
  },
  "/excel-training": {
    graphicId: "excel",
    blurb: "One-on-one and group Excel training—with a Microsoft Excel Expert.",
    points: [
      "Basics through Power Query & VBA",
      "Dashboards and real workplace examples",
      "Flexible in-person or online sessions",
    ],
    accent: "green",
  },
  "/digital-marketing": {
    graphicId: "marketing",
    blurb: "Social media, content, strategy, and performance monitoring.",
    points: [
      "Facebook start-up and social content",
      "Marketing strategy",
      "Engagement and reporting",
    ],
    accent: "green",
  },
  "/payroll-processing": {
    graphicId: "payroll",
    blurb:
      "SmoothPay payroll for Cook Islands businesses — weekly runs, PAYE, CINSF, payslips, and reporting.",
    points: [
      "System Setup, employee records, and business settings & configuration",
      "Payroll processing — email payslips and payroll reporting for business",
      "Standard reporting, ad hoc requests, and monthly accountant liaison",
    ],
    accent: "gold",
  },
};

export const homeServiceCards = serviceLinks.map((link) => {
  const content = serviceCardContent[link.href];
  if (!content) {
    throw new Error(`Missing home service card content for ${link.href}`);
  }

  return {
    title: link.label,
    href: link.href,
    ...content,
  };
});

export type HomeServiceCard = (typeof homeServiceCards)[number];
