import type { Metadata } from "next";
import Image from "next/image";
import { ServicePageShell } from "@/components/ServicePageShell";
import { WixImageGallery } from "@/components/WixImageGallery";
import { testimonialPageGallery } from "@/lib/wix-images";

export const metadata: Metadata = {
  title: "Client testimonials",
  description:
    "Feedback from government, private sector, and community clients — Easy Digital Solutions.",
};

const highlights = [
  "Ezebuild Construction: April 2026 to Current",
  "OTB Manuia Beach: Oct 2025 to Current",
  "Honest Skin Care International Ltd: April 2025 to Current",
  "Turama House: Jan to Oct 2025",
  "Porter Group/Apex Holdings: Oct 2024 to Current",
  "Ministry of Health: July 2024",
  "CITC: June to Sept 2024",
  "Island Craft: May to Dec 2024",
  "Prime Foods: 6 Pillars of Customer Services – March to May 2024",
  "NES Strategy Day: October 2023",
  "Development Coordination Division: October 2023",
  "CIPS: All Staff Training – June to July 2023",
  "Prime Foods: Effective Supervisory Management – May to July 2023",
  "Raromart: 2020",
  "The Bond Store: 2019 to 2025 (various dates)",
  "Vonnias: 2019",
  "Prime Foods: Leadership Training, Logistics & Operational Consulting – Jan to Dec 2018",
  "CITTI Tutor: 2017 – 2018",
] as const;

const primeFoodsTestimonialIndex = testimonialPageGallery.findIndex(
  (item) => item.caption === "Dan Forsyth",
);
const testimonialGalleryBeforeAirRarotonga =
  primeFoodsTestimonialIndex === -1
    ? testimonialPageGallery
    : testimonialPageGallery.slice(0, primeFoodsTestimonialIndex + 1);
const testimonialGalleryAfterAirRarotonga =
  primeFoodsTestimonialIndex === -1
    ? []
    : testimonialPageGallery.slice(primeFoodsTestimonialIndex + 1);

const porterGroupLogos = [
  {
    src: "/testimonials/porter-group/toa-petroleum.png",
    alt: "TOA Petroleum logo",
    width: 740,
    height: 516,
  },
  {
    src: "/testimonials/porter-group/toa-gas.png",
    alt: "TOA Gas logo",
    width: 225,
    height: 225,
  },
  {
    src: "/testimonials/porter-group/ride-rarotonga.png",
    alt: "Ride Rarotonga logo",
    width: 416,
    height: 416,
  },
  {
    src: "/testimonials/porter-group/rarotonga-laundromat.png",
    alt: "Rarotonga Laundromat logo",
    width: 1024,
    height: 464,
  },
  {
    src: "/testimonials/porter-group/blue-pacific-laundry.png",
    alt: "Blue Pacific Laundry Rarotonga logo",
    width: 404,
    height: 223,
  },
] as const;

export default function ClientTestimonialsPage() {
  return (
    <ServicePageShell
      title="Client testimonials"
      ctaLabel="Start a conversation"
    >
      <p>
        We believe the best way to understand the impact of our work is to hear
        directly from the people we&apos;ve worked with.
      </p>
      <p>
        Our clients come from a wide range of industries—government, private
        sector, and community organisations—and each has a unique story to
        tell. Whether it&apos;s solving complex challenges, streamlining
        systems, or building capacity through training and support, we take pride
        in delivering practical solutions that make a difference.
      </p>
      <p>
        Below, you&apos;ll find a collection of genuine feedback themes and
        project highlights that reflect the outcomes we&apos;ve helped
        create—measurable improvements, stronger teams, and trusted partnerships.
        We&apos;re grateful for the relationships we&apos;ve built, and we&apos;re
        proud to share their experiences with you.
      </p>

      <section
        aria-labelledby="honest-skincare-testimonial"
        className="my-10 overflow-hidden rounded-2xl border border-eds-charcoal/10 bg-white shadow-sm"
      >
        <div className="border-b border-eds-charcoal/10 bg-[#8fb88a] px-5 py-6 sm:px-8">
          <Image
            src="/testimonials/honest-skincare-logo.png"
            alt="Honest Skincare logo featuring a white leaf and serif text on a green background"
            width={320}
            height={120}
            className="h-auto max-w-[280px] w-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="space-y-4 px-5 py-6 sm:px-8 sm:py-8">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-eds-muted">
            May 2026
          </p>
          <h2
            id="honest-skincare-testimonial"
            className="!mt-0 font-display text-xl font-bold text-eds-charcoal"
          >
            Honest Skincare International Ltd
          </h2>
          <blockquote className="space-y-4 border-l-4 border-eds-green/35 pl-4 text-eds-charcoal not-italic">
            <p>
              We asked James to set up a complete organic management system for
              our company, Honest Skincare. Involved in this was a full set up
              of a stock management system (Unleashed). I am not very good when
              it comes to paperwork, and James is an incredibly organized
              person.
            </p>
            <p>
              Frankly, we would have never gotten around to it without his help.
              Our stock system has been a game changer for the
              company. We can now predict what is coming up and not run out of
              stock. Or worse, end up with hundreds of thousands of dollars of
              stock that isn&apos;t moving and terrible cashflow. With
              James&apos;s help we have been able to scale our business
              significantly.
            </p>
            <p>
              As well, he managed the implementation of the organic management
              system, which has allowed us to gain BioGro certification, which
              has lifted our profile in the skincare industry significantly.
              This was a lengthy and information heavy process with a lot of
              paperwork required. We passed with flying colours on our first
              audit; they actually told us they had never seen anyone come in
              with such a high level of organization on the very first try.
            </p>
            <p>
              To say we are thrilled with James&apos;s work is an
              understatement. He is easy to work with, completely unflappable,
              and a very nice person to have on our team. We continue to seek
              his help when needed, although that has become less and less as
              his training is so thorough.
            </p>
            <p>Cannot recommend highly enough.</p>
          </blockquote>
          <p className="font-display text-base font-semibold text-eds-charcoal">
            Janna Jansen - Owner
          </p>
        </div>
      </section>

      <section
        aria-labelledby="bci-literacy-programme-testimonial"
        className="my-10 overflow-hidden rounded-2xl border border-[#0097a7]/30 bg-white shadow-sm ring-1 ring-[#ffcc00]/20"
      >
        <div className="border-b border-[#0097a7]/20 bg-[linear-gradient(135deg,#e8f7f9_0%,#ffffff_55%,#fff8df_100%)] px-5 py-6 sm:px-8">
          <Image
            src="/testimonials/bci-logo.png"
            alt="Bank of the Cook Islands logo with teal lettering, waves, and yellow stars"
            width={318}
            height={159}
            className="h-[120px] w-auto object-contain"
          />
        </div>
        <div className="space-y-4 bg-[linear-gradient(180deg,#ffffff_0%,#f4fbfc_100%)] px-5 py-6 sm:px-8 sm:py-8">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0097a7]">
            17 March 2026
          </p>
          <h2
            id="bci-literacy-programme-testimonial"
            className="!mt-0 font-display text-xl font-bold text-eds-charcoal"
          >
            Bank of Cook Islands
          </h2>
          <blockquote className="space-y-4 border-l-4 border-[#0097a7]/45 pl-4 text-eds-charcoal not-italic">
            <p>
              I confirm that Mereani Talbot is playing a key role in supporting
              the Bank of Cook Islands in the design and development of our
              national digital financial literacy programme. This includes the
              Practical Money Skills, Practical Business Skills, and TakuEcom
              Platform Overview e-learning courses on the BCI eMarama platform,
              delivered in both English and Cook Islands Māori.
            </p>
            <p>
              Mereani worked closely with Iana Galai, the lead e-learning
              developer responsible for delivering three course sequences on the
              BCI eMarama platform in both English and Cook Islands Māori.
              Mereani served as the project lead for this initiative.
            </p>
            <p>
              Although the project is still in progress, Mereani has already
              achieved key milestones. She has demonstrated strong capability in
              e-learning design, animation, curriculum development, project
              management, and stakeholder coordination.
            </p>
            <p>
              Her work is contributing to the development of a robust and
              culturally relevant learning solution that integrates e-learning,
              facilitator training, and community-based support.
            </p>
          </blockquote>
          <p className="font-display text-base font-semibold text-eds-charcoal">
            Jennifer Henry - Chief Executive Officer
          </p>
        </div>
      </section>

      <section
        aria-labelledby="porter-group-testimonial"
        className="my-10 overflow-hidden rounded-2xl border border-eds-green/30 bg-white shadow-sm ring-1 ring-eds-green/15"
      >
        <div className="border-b border-eds-green/20 bg-[linear-gradient(135deg,#edf8f1_0%,#ffffff_55%,#f4fbf7_100%)] px-5 py-6 sm:px-8">
          <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3">
            {porterGroupLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-[120px] w-auto shrink-0 object-contain"
              />
            ))}
          </div>
        </div>
        <div className="space-y-4 bg-[linear-gradient(180deg,#ffffff_0%,#f4fbf7_100%)] px-5 py-6 sm:px-8 sm:py-8">
          <h2
            id="porter-group-testimonial"
            className="!mt-0 font-display text-xl font-bold text-eds-charcoal"
          >
            Porter Group / Apex Holdings
          </h2>
          <blockquote className="space-y-4 border-l-4 border-eds-green/45 pl-4 text-eds-charcoal not-italic">
            <p>
              I am pleased to provide this reference for James Talbot regarding
              his consulting and management services provided to Porter Group
              Holdings / Apex Agencies.
            </p>
            <p>
              James initially joined the business in October 2024 as an
              independent consultant following a word-of-mouth recommendation at
              a time when the organization required stronger operational
              controls, improved accountability, and tighter business
              procedures.
            </p>
            <p>
              During his initial consulting engagement, James quickly identified
              operational weaknesses and implemented practical systems and
              processes to improve structure, reporting, and day-to-day
              operational control across the business. Due to the quality of his
              work and leadership capability, James was asked after
              approximately five weeks to take on the role of General Manager,
              which he held from November 2024 through July 2025. He continues to
              provide consulting support to the business from time to time.
            </p>
            <div>
              <p>
                Key contributions during his time with the organization
                included:
              </p>
              <ul className="my-3 list-disc space-y-2 pl-5">
                <li>
                  Implementation of operational procedures and internal control
                  systems.
                </li>
                <li>
                  Development of organisational structures, task management
                  systems, and accountability processes.
                </li>
                <li>
                  Improvement of inventory, procurement, payroll, banking
                  reconciliation, and reporting procedures.
                </li>
                <li>
                  Introduction of stronger operational compliance and Health
                  &amp; Safety processes.
                </li>
                <li>
                  Staff leadership, mentoring, and support during a significant
                  period of operational restructuring.
                </li>
                <li>
                  Development of workflow documentation, role responsibilities,
                  and performance management systems.
                </li>
              </ul>
            </div>
            <p>
              James consistently demonstrated strong leadership, professionalism,
              integrity, and a practical hands-on approach to business
              improvement. He made a significant positive impact on the structure
              and operational performance of the organization and was highly
              respected by both management and staff.
            </p>
            <p>
              I would have no hesitation in recommending James for senior
              operational management, consulting, process improvement, or
              business systems roles.
            </p>
            <p>
              Should you require any further information, please feel free to
              contact me.
            </p>
          </blockquote>
          <p className="font-display text-base font-semibold text-eds-charcoal">
            Brett Porter
          </p>
        </div>
      </section>

      <WixImageGallery
        items={testimonialGalleryBeforeAirRarotonga}
        columns="single"
        className="my-10"
      />

      <section
        aria-labelledby="air-rarotonga-testimonial"
        className="my-10 overflow-hidden rounded-2xl border border-eds-charcoal/10 bg-white shadow-sm"
      >
        <div className="border-b border-eds-charcoal/10 bg-white px-5 py-6 sm:px-8">
          <Image
            src="/testimonials/air-rarotonga-logo.png"
            alt="Air Rarotonga logo with blue lettering and pink frangipani flowers"
            width={300}
            height={150}
            className="h-auto max-w-[300px] w-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="space-y-4 px-5 py-6 sm:px-8 sm:py-8">
          <h2
            id="air-rarotonga-testimonial"
            className="!mt-0 font-display text-xl font-bold text-eds-charcoal"
          >
            Air Rarotonga
          </h2>
          <blockquote className="space-y-4 border-l-4 border-eds-green/35 pl-4 text-eds-charcoal not-italic">
            <p>
              I came to hear of Mr James Talbot by word of mouth back in June
              2017. He was one of the tutors delivering the Effective
              Supervisory Management course (ESM) at the CITTI Arorangi campus.
              Hearing from his first and second various groups of private and Gov
              sector attendees I requested our HR Manager to see if we can be
              part of the ESM course intake. 7th of September 2017 was our turn.
            </p>
            <p>
              From the meet and greet to the end of that course James
              perseverance took my understanding of being a manager to another
              level. He immersed himself in his role as a tutor to ensure we
              understood every syllabus in the course. He gets the class involved
              as a team or as an individual in his deliverance. His experience
              and examples left voids in ourselves. Speaking for myself, I have a
              lot more to learn to improve myself for one and to make a better
              people manager in my career.
            </p>
            <p>
              In early Feb 2018 I was advised Mr James Talbot will be one of the
              tutors delivering the ILM Leadership &amp; Team Skills Level 2
              course. With no hesitation I enrolled for his class again. Mr James
              Talbot didn&apos;t disappoint; he delivered this course with real
              professionalism, passion throughout the year 2018. He invested a
              lot of his own time to assist and personally encourage his students
              to not give up. His perseverance saw most of us to the end.
            </p>
            <p>
              For the students who believed and trusted his mentorship, we were
              awarded with the World recognised City and Guilds Level 2
              Certificate in Leadership and Team Skills. I cannot express more in
              words of his Skills as a Tutor. He is Honest, Caring, Trustworthy
              and a great Person. In 2019 he walked the length of New Zealand
              3200km Creative Trail!!!!
            </p>
          </blockquote>
          <p className="font-display text-base font-semibold text-eds-charcoal">
            John Vano (GSE Workshop Manager / Air Rarotonga Ltd)
          </p>
        </div>
      </section>

      {testimonialGalleryAfterAirRarotonga.length > 0 ? (
        <WixImageGallery
          items={testimonialGalleryAfterAirRarotonga}
          columns="single"
          className="my-10"
        />
      ) : null}

      <h2>Customer / Project Highlights</h2>
      <ul>
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </ServicePageShell>
  );
}
