import React from "react";
import type { Service } from "./data";
import ServiceArt from "./ServiceArt";

const tags: Record<string, string[]> = {
  "IT Consultancy & Strategy": ["Strategy", "Audits", "Roadmaps"],
  "Web & App Development": ["Web apps", "Performance", "Security"],
  "Design-First UX/UI": ["UX", "UI", "Accessibility"],
  "Cybersecurity & Compliance": ["Assessments", "Compliance"],
  "Data Strategy & AI Integration": ["Pipelines", "AI", "Analytics"],
  "Cloud Operations & DevOps": ["CI/CD", "Cloud", "Monitoring"],
};

const ServiceSectionCard: React.FC<Service & { delay: number }> = ({
  title,
  description,
}) => (
  <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0c1730] p-5 md:p-7">
    <div
      className="pointer-events-none absolute inset-0 opacity-50"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "linear-gradient(to bottom, black 0%, transparent 62%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 62%)",
      }}
    />
    <h3 className="relative text-base font-semibold tracking-tight text-white md:text-lg">{title}</h3>
    <div className="relative mt-1 h-44">
      <ServiceArt title={title} />
    </div>
    <p className="relative mt-2 flex-1 text-xs leading-relaxed text-white/60 md:text-sm">{description}</p>
    <div className="relative mt-6 flex flex-wrap gap-2">
      {(tags[title] ?? []).map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white/70"
        >
          {tag}
        </span>
      ))}
    </div>
  </article>
);

export default ServiceSectionCard;
