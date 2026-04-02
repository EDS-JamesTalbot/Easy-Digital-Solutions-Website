import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageShell } from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Learning solutions",
  description:
    "Activity-based training, retreats, facilitation, and custom e-learning — Easy Digital Solutions.",
};

const programmes = [
  "Effective Supervisory Management (Existing Supervisors/Managers)",
  "New Supervisors Training (New to management)",
  "6 Pillars to Great Customer Services",
  "Task & Priority Management (Time Management)",
  "Facing Challenges within the Workplace & Finding Solutions",
  "Work Ethics Induction Program",
  "Improving Communication Skills",
  "Team Building & Working Effectively as a Team",
  "Leadership Training Programs & More",
  "Staff Wellbeing & Stress Management Programs",
  "Logistics & Inventory Management Programs",
  "Warehousing Management Programs",
  "Procurement Training Programs",
  "My Attitude, Your Attitude",
  "Leading by Example",
  "My Purpose, My Goals, Adding Value to the Business",
] as const;

const retreatClients = [
  "Te Marae Ora",
  "Cook Islands Investment Corporation",
  "Turama House",
  "Prime Foods",
] as const;

export default function LearningSolutionsPage() {
  return (
    <ServicePageShell
      eyebrow="Learning solutions"
      title="Learning solutions"
      ctaLabel="Contact us about training"
    >
      <p>
        We believe the best learning happens when people are actively involved
        — not just sitting back and listening. That&apos;s why we deliver
        training that&apos;s hands-on, practical, and genuinely engaging. Our
        approach is centred on activity-based learning, moving away from
        traditional lecture-style sessions to get people thinking, doing, and
        collaborating. Through real-world problem-solving, small group
        discussions, role plays, simulations, and custom e-learning modules, we
        create experiences that help learners connect the dots and apply their
        knowledge immediately.
      </p>
      <p>
        This approach works across all types of teams — from technical crews to
        customer service staff and future leaders. It&apos;s particularly
        effective in areas like data analysis, warehouse systems, soft skills,
        and leadership development.
      </p>
      <p>
        Our clients often say the training is not only informative but also
        memorable and impactful. Whether delivered face-to-face or through
        tailored e-learning solutions, we design programs that empower teams and
        deliver real results.
      </p>
      <p>
        If you&apos;re looking for learning that engages your team and drives
        outcomes, we&apos;d love to talk.
      </p>

      <h2>Learning solutions we have delivered</h2>
      <ul>
        {programmes.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <p>
        <Link
          href="/client-testimonials"
          className="font-semibold text-eds-green underline-offset-4 hover:underline"
        >
          Client testimonials
        </Link>
        {" · "}
        <Link
          href="/excel-training"
          className="font-semibold text-eds-green underline-offset-4 hover:underline"
        >
          Excel training
        </Link>
      </p>

      <h2>Retreats & facilitation services</h2>
      <p className="font-display text-lg font-semibold text-eds-green">
        Space to reset. Time to connect. Clarity to move forward.
      </p>
      <p>
        We offer tailored retreats and facilitation services for teams,
        organisations, and groups looking to reconnect, realign, or refocus.
        Whether it&apos;s a leadership workshop, team-building session, or
        strategy retreat, we help design and guide experiences that are
        purposeful, engaging, and outcome-driven.
      </p>
      <p>Services include:</p>
      <ul>
        <li>Custom retreat planning</li>
        <li>Professional group facilitation</li>
        <li>Leadership & strategy workshops</li>
        <li>Team-building activities</li>
        <li>Integration of local culture and values</li>
        <li>Venue sourcing and logistics (on request)</li>
      </ul>
      <p>Our clients also include:</p>
      <ul>
        {retreatClients.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p>
        Sessions can be half-day to multi-day, hosted at your location or at a
        suitable venue. We offer follow-up documentation and support to help turn
        ideas into action. Let us help you create space for growth, connection,
        and meaningful change.
      </p>

      <h2>E-learning development & customisation</h2>
      <p>
        E-learning is a new and exciting service area for us, and one we&apos;ve
        genuinely loved developing. We&apos;ve invested significant time
        learning new software and tools to support our clients, and it&apos;s
        been incredibly rewarding to see courses come to life from concept to
        delivery.
      </p>
      <p>
        We create custom e-learning solutions, supporting everything from
        storyboarding and content design through to animation videos, interactive
        modules, and quizzes. Our content is tailored to suit different
        audiences, whether for staff induction, skills development, or technical
        training.
      </p>
      <p>
        We focus on making learning clear, engaging, and practical, ensuring it
        aligns with your objectives and integrates smoothly with your LMS. This
        is a service we are confident in delivering and excited to continue
        growing, combining creativity, technology, and real-world learning needs.
      </p>
      <p>
        For more information on any of the training programs mentioned above,
        contact us today. We will schedule a time to meet with you to get a
        better understanding of your training requirements.
      </p>
    </ServicePageShell>
  );
}
