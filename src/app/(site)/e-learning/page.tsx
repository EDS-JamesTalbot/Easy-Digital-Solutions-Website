import type { Metadata } from "next";
import { ServicePageShell } from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "E-Learning",
  description:
    "E-learning content development and digital training solutions — instructional design, multimedia, LMS setup, and AI-assisted content for Cook Islands businesses, government, NGOs, and communities.",
};

export default function ELearningPage() {
  return (
    <ServicePageShell
      eyebrow="E-Learning"
      title="Content development & digital training solutions"
      ctaLabel="Talk to us about e-learning"
      ctaSubject="Website Enquiry — E-Learning"
    >
      <p>
        Easy Digital Solutions delivers modern, engaging, and learner-focused
        digital training solutions tailored for businesses, government
        agencies, NGOs, and community organisations.
      </p>
      <p>
        We specialise in developing complete online learning experiences that
        combine instructional design, multimedia production, interactive
        learning, and AI-assisted content creation to improve learner
        engagement and knowledge retention.
      </p>

      <h2>Our e-learning capability includes</h2>
      <ul>
        <li>Custom online course development</li>
        <li>Learning Management System (LMS) setup and administration</li>
        <li>Interactive training modules and assessments</li>
        <li>Animated explainer and instructional videos</li>
        <li>Professional voice narration and audio production</li>
        <li>Digital learner workbooks and facilitator guides</li>
        <li>Infographics and visual learning materials</li>
        <li>Scenario-based and activity-driven learning design</li>
        <li>Microlearning content for mobile and low-bandwidth delivery</li>
        <li>Community awareness and public education campaigns</li>
        <li>Branding and visual consistency across all training materials</li>
        <li>Multimedia editing and content optimisation</li>
        <li>AI-assisted digital content production workflows</li>
      </ul>

      <h2>Training design approach</h2>
      <p>
        Our training solutions are designed using adult-learning principles and
        practical real-world application to ensure learners remain engaged and
        can immediately apply their knowledge in workplace and community
        settings.
      </p>
      <p>We develop training that is:</p>
      <ul>
        <li>Easy to understand</li>
        <li>Visually engaging</li>
        <li>Mobile-friendly</li>
        <li>Practical and interactive</li>
        <li>Suitable for blended, remote, or self-paced delivery</li>
        <li>Adaptable for diverse audiences and varying technical skill levels</li>
      </ul>

      <h2>Typical deliverables</h2>
      <ul>
        <li>Full online training programmes</li>
        <li>Compliance and policy training</li>
        <li>Staff induction modules</li>
        <li>Cybersecurity awareness training</li>
        <li>Public awareness campaigns</li>
        <li>Training presentations and facilitator resources</li>
        <li>Interactive quizzes and learner assessments</li>
        <li>Video-based learning content</li>
        <li>Digital certification pathways</li>
      </ul>
    </ServicePageShell>
  );
}
