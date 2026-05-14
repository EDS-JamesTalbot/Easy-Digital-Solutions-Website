import type { Metadata } from "next";
import { ServicePageShell } from "@/components/ServicePageShell";
import { WixImageGallery } from "@/components/WixImageGallery";
import { eLearningImages } from "@/lib/wix-images";

export const metadata: Metadata = {
  title: "E-Learning",
  description:
    "Content development and digital training solutions — instructional design, multimedia, animation, video, and AI-assisted learning for Cook Islands businesses, government, NGOs, and communities.",
};

export default function ELearningPage() {
  return (
    <ServicePageShell
      eyebrow="E-Learning"
      title="Content Development & Digital Training Solutions"
      ctaLabel="Talk to us about e-learning"
      ctaSubject="Website Enquiry — E-Learning"
    >
      <p>
        Learning Solutions Cook Islands delivers engaging, practical, and
        locally relevant digital learning solutions for businesses, government
        agencies, NGOs, and community organisations.
      </p>
      <p>
        We design and produce online learning experiences that combine
        instructional design, multimedia production, animation, video, and
        AI-assisted content creation.
      </p>

      <WixImageGallery items={eLearningImages} columns="triple" className="my-10" />

      <h2>Our services include</h2>
      <ul>
        <li>Custom online course development</li>
        <li>LMS setup and administration</li>
        <li>Interactive learning modules and assessments</li>
        <li>Animation and video production</li>
        <li>Voice narration and digital learning resources</li>
        <li>Infographics and visual content</li>
        <li>Mobile-friendly microlearning</li>
        <li>Community awareness campaigns</li>
        <li>AI-assisted digital content workflows</li>
      </ul>

      <h2>Our approach</h2>
      <p>We create learning that is:</p>
      <ul>
        <li>Easy to understand</li>
        <li>Visually engaging</li>
        <li>Practical and interactive</li>
        <li>Mobile-friendly and accessible</li>
        <li>Suitable for workplace, community, and remote learning</li>
      </ul>

      <h2>Typical projects</h2>
      <ul>
        <li>Online training programmes</li>
        <li>Staff induction and compliance training</li>
        <li>Cybersecurity awareness training</li>
        <li>Public education campaigns</li>
        <li>Facilitator guides and learner resources</li>
        <li>Video-based learning content</li>
      </ul>
    </ServicePageShell>
  );
}
