// --- TypeScript Interfaces ---
export interface Service {
  id: number;
  icon: string | React.ReactNode;
  title: string;
  description: string;
}
export interface SocialLinkProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  href?: string;
}
  
export interface Differentiator {
  id: number;
  icon: string;
  title: string;
  description: string;
}
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}
export interface TechStack {
  id: number;
  name: string;
  icon: string;
}
export interface EngagementModel {
  title: string;
  description: string;
  priceAnchor: string;
}

// --- Data Content ---
export const MISSION_STATEMENT = "Strategic. Scalable. Secure.";
export const services: Service[] = [
  {
    id: 1,
    icon: "💡",
    title: "IT Consultancy & Strategy",
    description:
      "High-level technology audits, strategic roadmapping, and digital transformation consulting to align tech with business goals.",
  },
  {
    id: 2,
    icon: "💻",
    title: "Web & App Development",
    description:
      "Bespoke development for high-traffic platforms. We prioritize performance, security, and immediate responsiveness on all devices.",
  },
  {
    id: 3,
    icon: "🎨",
    title: "Design-First UX/UI",
    description:
      "We start with the user. Our design process ensures your product is visually stunning, highly accessible, and strategically aligned with your business goals.",
  },
  {
    id: 4,
    icon: "🛡️",
    title: "Cybersecurity & Compliance",
    description:
      "Comprehensive security assessments, penetration testing, and compliance solutions to safeguard your digital infrastructure and data integrity.",
  },
  {
    id: 5,
    icon: "📊",
    title: "Data Strategy & AI Integration",
    description:
      "Building secure data pipelines, machine learning models, and real-time business intelligence solutions for competitive advantage.",
  },
  {
    id: 6,
    icon: "⚙️",
    title: "Cloud Operations & DevOps",
    description:
      "Continuous integration/delivery (CI/CD), infrastructure as code (IaC), 24/7 monitoring, and performance tuning for stability.",
  },
];
export const differentiators: Differentiator[] = [
  {
    id: 1,
    icon: "🔒",
    title: "Security-First Architecture",
    description:
      "Every application is designed with zero-trust principles. We integrate robust defenses against modern threats from the ground up.",
  },
  {
    id: 2,
    icon: "📈",
    title: "Guaranteed Scalability",
    description:
      "We engineer systems that flawlessly handle 10x growth, leveraging optimized databases and cost-effective cloud services.",
  },
  {
    id: 3,
    icon: "📐",
    title: "Pixel-Perfect Responsive Design",
    description:
      "Our commitment is to fluid, accessible interfaces. We guarantee an intuitive experience on desktop, tablet, and mobile devices.",
  },
];
export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Blueprint",
    description:
      "Deep dive into your business needs, audience, and technical requirements to create a detailed project blueprint.",
  },
  {
    id: 2,
    title: "Design & Development",
    description:
      "Rapid prototyping, iterative development, and continuous client feedback ensure we stay aligned with your vision.",
  },
  {
    id: 3,
    title: "Secure Launch & QA",
    description:
      "Rigorous quality assurance, security audits, and a smooth, supervised launch process to minimize downtime.",
  },
  {
    id: 4,
    title: "Maintain & Optimize",
    description:
      "Post-launch monitoring, performance tuning, and proactive maintenance to guarantee long-term success and adaptation.",
  },
];
export const testimonials: Testimonial[] = [
  {
    quote:
      "Their security architecture protected us during a major traffic spike. Flawless execution and deployment.",
    name: "Alex P.",
    title: "CTO, Global E-Commerce",
  },
  {
    quote:
      "The responsive design was pixel-perfect on every device. Our conversion rate increased by 25% after launch.",
    name: "Jamie L.",
    title: "Marketing Director, FinTech Startup",
  },
  {
    quote:
      "True partners, not just developers. The scaling strategy they implemented saved us thousands in cloud costs.",
    name: "Sarah K.",
    title: "CEO, Enterprise SaaS",
  },
  {
    quote:
      "The bespoke security solutions are robust. Highly recommend for enterprise-level projects.",
    name: "Mark C.",
    title: "Founder, Logistics Tech",
  },
  {
    quote:
      "Incredible focus on accessible and user-friendly UX. The team was agile and responsive.",
    name: "Linda T.",
    title: "Product Manager, HealthTech",
  },
  {
    quote:
      "They handled a complex cloud migration flawlessly, resulting in a 30% reduction in latency.",
    name: "Ben R.",
    title: "Head of Infrastructure, Telecom",
  },
  {
    quote:
      "Our platform scaled 5x during peak season without a single incident. Truly engineered for growth.",
    name: "Chloe F.",
    title: "COO, Education Platform",
  },
  {
    quote:
      "Integrated seamlessly with our existing dev team. Their code quality is unmatched.",
    name: "David M.",
    title: "Lead Developer, Gaming Studio",
  },
  {
    quote:
      "The redesign led directly to better lead generation. The visual impact is significant.",
    name: "Emily Z.",
    title: "VP of Sales, B2B SaaS",
  },
  {
    quote:
      "Transparent communication and delivered ahead of schedule. A rare find.",
    name: "George H.",
    title: "Director of Strategy, Non-Profit",
  },
];
export const techStack: TechStack[] = [
  { id: 1, name: "TypeScript/React", icon: "⚛️" },
  { id: 2, name: "Node.js/Go", icon: "🚀" },
  { id: 3, name: "AWS/GCP Cloud", icon: "☁️" },
  { id: 4, name: "Tailwind CSS", icon: "💅" },
  { id: 5, name: "Next.js/Serverless", icon: "⚡" },
  { id: 6, name: "DevSecOps", icon: "🛡️" },
];
export const engagementModels: EngagementModel[] = [
  {
    title: "Fixed-Scope Projects",
    description:
      "Ideal for MVPs or clearly defined, smaller projects. We provide a firm quote and timeline.",
    priceAnchor: "Predictable Cost & Delivery",
  },
  {
    title: "Dedicated Team Augmentation",
    description:
      "Integrate our senior engineers and architects directly into your existing team on a long-term retainer.",
    priceAnchor: "Monthly Retainer Model",
  },
  {
    title: "Discovery & Blueprint",
    description:
      "A dedicated 2-4 week strategic session to create a detailed, technical plan before committing to development.",
    priceAnchor: "Fixed Price Consultation",
  },
];

// --- Icon Data ---
export const backgroundIcons: string[] = [
  "⚛️",
  "⏭️",
  "🚀",
  "☁️",
  "💻",
  "⚡",
  "🛠️",
  "🖥️",
  "⚙️",
  "📊",
  "🔒",
  "🌐",
  "💾",
  "💡",
  "🧩",
  "✨",
  "📐",
  "🐍",
  "📦",
  "✔️",
];
export const COMPETENCIES = [
  "SECURITY AUDITS",
  "SCALABLE ARCHITECTURE",
  "CLOUD MIGRATION",
  "BESPOKE UX/UI",
  "DEVOPS AUTOMATION",
  "ENTERPRISE INTEGRATION",
];
