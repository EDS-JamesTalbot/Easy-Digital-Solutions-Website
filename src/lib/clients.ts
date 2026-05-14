export type ClientEngagement = {
  name: string;
  /** Shown on the testimonials highlights list. */
  highlight?: string;
  /** Listed on the consulting page client roster. */
  onConsultingPage?: boolean;
};

export const clientEngagements: readonly ClientEngagement[] = [
  {
    name: "Ezebuild Construction",
    highlight: "April 2026 to Current",
    onConsultingPage: true,
  },
  {
    name: "OTB Manuia Beach",
    highlight: "Oct 2025 to Current",
    onConsultingPage: true,
  },
  {
    name: "Honest Skin Care International Ltd",
    highlight: "April 2025 to Current",
    onConsultingPage: true,
  },
  {
    name: "Turama House",
    highlight: "Jan to Oct 2025",
    onConsultingPage: true,
  },
  {
    name: "Porter Group/Apex Holdings",
    highlight: "Oct 2024 to Current",
    onConsultingPage: true,
  },
  {
    name: "Ministry of Health",
    highlight: "July 2024",
    onConsultingPage: true,
  },
  { name: "CITC", highlight: "June to Sept 2024", onConsultingPage: true },
  {
    name: "Island Craft",
    highlight: "May to Dec 2024",
    onConsultingPage: true,
  },
  {
    name: "Prime Foods",
    highlight: "6 Pillars of Customer Services – March to May 2024",
    onConsultingPage: true,
  },
  { name: "NES Strategy Day", highlight: "October 2023" },
  {
    name: "Development Coordination Division",
    highlight: "October 2023",
    onConsultingPage: true,
  },
  {
    name: "CIPS",
    highlight: "All Staff Training – June to July 2023",
    onConsultingPage: true,
  },
  {
    name: "Prime Foods",
    highlight: "Effective Supervisory Management – May to July 2023",
    onConsultingPage: true,
  },
  { name: "Raromart", highlight: "2020", onConsultingPage: true },
  {
    name: "The Bond Store",
    highlight: "2019 to 2025 (various dates)",
    onConsultingPage: true,
  },
  { name: "Vonnias", highlight: "2019", onConsultingPage: true },
  {
    name: "Prime Foods",
    highlight: "Leadership Training, Logistics & Operational Consulting – Jan to Dec 2018",
    onConsultingPage: true,
  },
  { name: "CITTI Tutor", highlight: "2017 – 2018" },
  {
    name: "National Environment Service",
    onConsultingPage: true,
  },
] as const;

export const consultingClients = [
  ...new Set(
    clientEngagements
      .filter((entry) => entry.onConsultingPage)
      .map((entry) => entry.name),
  ),
];

export const clientProjectHighlights = clientEngagements
  .filter((entry) => entry.highlight)
  .map((entry) => `${entry.name}: ${entry.highlight}`);
