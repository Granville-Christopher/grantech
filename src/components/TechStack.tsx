import React from "react";
import { Shield } from "lucide-react";
import {
  SiAmazonwebservices,
  SiGo,
  SiGooglecloud,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { techStack } from "./data";

const marks: Record<string, { Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string }> = {
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  react: { Icon: SiReact, color: "#149ECA" },
  python: { Icon: SiPython, color: "#3776AB" },
  node: { Icon: SiNodedotjs, color: "#339933" },
  go: { Icon: SiGo, color: "#00ADD8" },
  aws: { Icon: SiAmazonwebservices, color: "#FF9900" },
  gcp: { Icon: SiGooglecloud, color: "#4285F4" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  next: { Icon: SiNextdotjs, color: "#111111" },
  shield: { Icon: Shield, color: "#006bff" },
};

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="overflow-hidden bg-[#f4f5f7] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy/40">Stack</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">Tools we ship with</h2>
      </div>
      <div className="stack-row mt-8">
        <div className="stack-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="stack-set">
              {techStack.map((tech, index) => {
                const mark = marks[tech.icon];
                const Icon = mark.Icon;
                return (
                  <span key={`${copy}-${tech.id}`} className="stack-chip">
                    <Icon className="stack-icon h-5 w-5" style={{ color: mark.color, animationDelay: `${index * 0.28}s` }} />
                    {tech.name}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
