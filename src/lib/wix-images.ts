/**
 * Image URLs from the original Wix site (static.wixstatic.com).
 * Used with next/image — see next.config.ts remotePatterns.
 */

/**
 * Dashboards & reporting — KPI_1 baseball, KPI_2 resort analysis, KPI_3 HR (US industry).
 * Wix CDN (add files under /public/dashboards/ and switch src if you want local-only).
 */
export const dashboardsImages = [
  {
    src: "https://static.wixstatic.com/media/be63cf_ae49ade7cdd6482e83438ae976771be2~mv2.png/v1/fill/w_980,h_499,al_c,lg_1,q_90,enc_avif,quality_auto/image001.png",
    alt: "KPI Dashboard 1 — baseball player performance (Adam Lind), stats table and charts",
    caption: "KPI Dashboard_1",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_4cea448969d147b1882d73ef96d3bb93~mv2.png/v1/fill/w_720,h_394,al_c,lg_1,q_85,enc_avif,quality_auto/be63cf_4cea448969d147b1882d73ef96d3bb93~mv2.png",
    alt: "KPI Dashboard 2 — resort reservations analysis, cancellations, revenue and recommendations",
    caption: "KPI Dashboard_2",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_19c7337c3cff42fe829ea1113647c8c2~mv2.png/v1/fill/w_718,h_385,al_c,lg_1,q_85,enc_avif,quality_auto/be63cf_19c7337c3cff42fe829ea1113647c8c2~mv2.png",
    alt: "KPI Dashboard 3 — wages and employment by US industry, maps and donut chart",
    caption: "KPI Dashboard_3",
  },
] as const;

export const consultingHeroImage =
  "https://static.wixstatic.com/media/be63cf_1ea68c9d56fc44eebb66c8e5bb0a0b54~mv2.png/v1/fill/w_420,h_440,al_c,lg_1,q_85,enc_avif,quality_auto/consulting.png" as const;

/** Website design — example e-commerce shop layout (local asset). */
export const websiteDesignExampleImage = {
  src: "/services/website-design-shop-example.png",
  alt: "E-commerce shop page — product grid, filters, cart, and navigation (example site by Easy Digital Solutions).",
  width: 1024,
  height: 466,
} as const;

export const homeServiceImages = {
  forms: "https://static.wixstatic.com/media/be63cf_1eb3310aafab4f9ca572501663e2c379~mv2.jpg/v1/crop/x_155,y_0,w_353,h_362/fill/w_406,h_418,al_c,lg_1,q_80,enc_avif,quality_auto/forms.jpg",
  website12:
    "https://static.wixstatic.com/media/be63cf_07a7e4ef526e4762a9a8aa2bb46d73f9~mv2.png/v1/fill/w_427,h_388,al_c,lg_1,q_85,enc_avif,quality_auto/website12.png",
  consulting:
    "https://static.wixstatic.com/media/be63cf_1ea68c9d56fc44eebb66c8e5bb0a0b54~mv2.png/v1/fill/w_420,h_440,al_c,lg_1,q_85,enc_avif,quality_auto/consulting.png",
  training:
    "https://static.wixstatic.com/media/be63cf_3343baf4df234b0daef3a5d31c39197a~mv2.png/v1/fill/w_385,h_403,al_c,lg_1,q_85,enc_avif,quality_auto/training.png",
} as const;

/** Application Form 1 — Call Centre Form and Call Log Call Stats (Excel / VBA, single composite). */
export const applicationForm1ExcelVBAImage = {
  src: "/applications/application-form-1-excel-vba.png",
  alt: "Call Centre Form and Call Log Call Stats — Excel / VBA data entry and reporting (single screenshot).",
  width: 602,
  height: 552,
} as const;

/** Application Form 2 — CRM DATA ENTRY FORM (Python / Excel). */
export const applicationForm2DataEntryImage = {
  src: "/applications/application-form-2-data-entry.png",
  alt: "DATA ENTRY FORM — CRM customer information and feedback (Python / Excel).",
  width: 532,
  height: 383,
} as const;

/** Application Form 6 — Data reporting (Turama Group reporting analysis system). */
export const applicationForm6DataReportingImage = {
  src: "/applications/application-form-6-data-reporting.png",
  alt: "TURAMA GROUP REPORTING ANALYSIS SYSTEM — filters, slicers, and report actions (SQL, Power Query, Power Pivot, Excel / VBA).",
  width: 969,
  height: 481,
} as const;

/** Application creation — application-creator page graphics */
export const applicationPageImages = [
  {
    src: "https://static.wixstatic.com/media/be63cf_1a975bb9cdf7404da048a519ef0df5e2~mv2.png/v1/fill/w_712,h_341,al_c,lg_1,q_85,enc_avif,quality_auto/be63cf_1a975bb9cdf7404da048a519ef0df5e2~mv2.png",
    alt: "Application form sample — data entry interface",
    caption: "Application sample",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_2827acac7a244e8e8082e00658c1acf1~mv2.png/v1/fill/w_717,h_509,al_c,lg_1,q_90,enc_avif,quality_auto/be63cf_2827acac7a244e8e8082e00658c1acf1~mv2.png",
    alt: "Business application workflow screenshot",
    caption: "Workflow & forms",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_2b3e0492f50a44da87ac9e21b811af3e~mv2.png/v1/fill/w_720,h_320,al_c,lg_1,q_85,enc_avif,quality_auto/be63cf_2b3e0492f50a44da87ac9e21b811af3e~mv2.png",
    alt: "Digital form and reporting example",
    caption: "Digital forms",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_6f8c6c05b74743f1ac114d4734c18d1a~mv2.png/v1/fill/w_716,h_485,al_c,lg_1,q_85,enc_avif,quality_auto/HR%20System.png",
    alt: "HR system application interface",
    caption: "HR system",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_93bc7fb263a2409ebc987bf73adb5929~mv2.png/v1/fill/w_624,h_332,al_c,lg_1,q_85,enc_avif,quality_auto/Turama%20Group.png",
    alt: "Turama Group application example",
    caption: "Turama Group",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_a1ab72f9fa09480ea5fdbca45ba432b2~mv2.png/v1/fill/w_720,h_325,al_c,lg_1,q_85,enc_avif,quality_auto/be63cf_a1ab72f9fa09480ea5fdbca45ba432b2~mv2.png",
    alt: "Custom business application dashboard",
    caption: "Custom application",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_eaed0929fe1848c98a479dc4f56977d8~mv2.png/v1/fill/w_1349,h_591,al_c,q_90,enc_avif,quality_auto/image%20(3).png",
    alt: "Wide application overview graphic",
    caption: "End-to-end solution overview",
  },
] as const;

/** Application Form 5 — Customs Automated SpeEdi System (wide high-res gallery asset). */
export const applicationForm5SpeEdiImage = {
  src: applicationPageImages[6].src,
  alt: "Customs Automated SpeEdi System — vessel selection, freight cargo lists, and PO conversion workflow.",
} as const;

/** Excel training — excel page */
export const excelImages = [
  {
    src: "https://static.wixstatic.com/media/11062b_d482f7fb62b04ae5a56d4235b94dac77~mv2.jpeg/v1/fill/w_800,h_533,al_c,q_85,enc_avif,quality_auto/11062b_d482f7fb62b04ae5a56d4235b94dac77~mv2.jpeg",
    alt: "Excel training and business consultation",
    caption: "Excel in the workplace",
  },
  {
    src: "https://static.wixstatic.com/media/11062b_29153d68327e443b889640e85310e7ee~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,enc_avif,quality_auto/11062b_29153d68327e443b889640e85310e7ee~mv2.jpg",
    alt: "Microsoft Excel training session",
    caption: "Hands-on Excel training",
  },
] as const;

/** Client testimonials — training-testimonials page */
export const testimonialImages = [
  {
    src: "https://static.wixstatic.com/media/be63cf_e4aada3b1a0f4257b5ce3dd66a638acc~mv2.png/v1/crop/x_0,y_0,w_644,h_96/fill/w_887,h_134,al_c,lg_1,q_85,enc_avif,quality_auto/testimonials_PNG.png",
    alt: "Client testimonials banner",
    caption: "Testimonials",
  },
] as const;

export const testimonialPageGallery = [
  {
    src: "https://static.wixstatic.com/media/be63cf_7ca150dbaf2f4538b30a32c2395d5956~mv2.jpg/v1/fill/w_1286,h_633,al_c,q_85,enc_avif,quality_auto/Testimonial.jpg",
    alt: "Client testimonial graphic",
    caption: "Client feedback",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_7f88f28fd0c345d4a3992bb9903c2e58~mv2.png/v1/fill/w_705,h_675,al_c,q_90,enc_avif,quality_auto/Screenshot%202025-05-13%20192633.png",
    alt: "Testimonial screenshot",
    caption: "Project testimonial",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_806b67f6e49147a8b0dc2fa42fa7721c~mv2.jpg/v1/fill/w_1253,h_440,al_c,q_85,enc_avif,quality_auto/islandcraft.jpg",
    alt: "Island Craft testimonial",
    caption: "Island Craft",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_81ccec147cbe4769a84aa28fc7789b1a~mv2.png/v1/fill/w_824,h_571,al_c,lg_1,q_90,enc_avif,quality_auto/Dan%20Forsyth_PNG.png",
    alt: "Dan Forsyth testimonial",
    caption: "Dan Forsyth",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_be03e766a8c24f108a3fd2a20dfa0270~mv2.jpg/v1/fill/w_695,h_774,al_c,q_85,enc_avif,quality_auto/ANONYMOUS.jpg",
    alt: "Anonymous client testimonial",
    caption: "Anonymous feedback",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_c8a2ef3cdc04486690f70c8676781e70~mv2.jpg/v1/crop/x_189,y_0,w_911,h_565/fill/w_910,h_565,al_c,q_85,enc_avif,quality_auto/Patient%20Testimonial%20Share%20Template%20-%20Made%20with%20PosterMyWall.jpg",
    alt: "Health sector testimonial template",
    caption: "Ministry of Health — patient testimonial",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_d12496359e20490ca2eaca25f53f6300~mv2.jpg/v1/crop/x_0,y_16,w_690,h_825/fill/w_690,h_825,al_c,q_85,enc_avif,quality_auto/DCD%20References%20Learning%20Solutions_Sept2023.jpg",
    alt: "DCD references — Learning Solutions",
    caption: "DCD references — Learning Solutions",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_ec0b9efe208246dfac41019a7423a7e9~mv2.png/v1/fill/w_805,h_722,al_c,q_90,enc_avif,quality_auto/TMO.png",
    alt: "Te Marae Ora testimonial graphic",
    caption: "Te Marae Ora",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_f34269f5b4994531a7703c369af8f486~mv2.jpg/v1/fill/w_904,h_307,al_c,lg_1,q_80,enc_avif,quality_auto/Testimonial%20flyer%20template%20(1)%20-%20Made%20with%20PosterMyWall.jpg",
    alt: "Testimonial flyer template",
    caption: "Training testimonial flyer",
  },
] as const;

export const digitalMarketingImages = [
  {
    src: "https://static.wixstatic.com/media/be63cf_53a6108c1c9f468eaeac483c77388f59~mv2.jpg/v1/crop/x_40,y_47,w_437,h_419/fill/w_432,h_414,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/graphic-design-icon-png-16.jpg",
    alt: "Digital marketing and design services",
    caption: "Digital marketing",
  },
  {
    src: "https://static.wixstatic.com/media/be63cf_c3e15c4bc195470fa9b58b9a9e48ccbd~mv2.jpg/v1/crop/x_157,y_0,w_385,h_388/fill/w_450,h_440,al_c,lg_1,q_80,enc_avif,quality_auto/social%20media1.jpg",
    alt: "Social media marketing",
    caption: "Social media and content",
  },
] as const;
