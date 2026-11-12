import React from "react";
import { techStack } from "./data";

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="bg-[#f4f5f7] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy/40">Stack</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
          Tools we ship with
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <span
              key={tech.id}
              className="rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-medium text-navy"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
