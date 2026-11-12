import React from "react";
import { processSteps } from "./data";

const Process: React.FC = () => {
  return (
    <section id="process" className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy/40">Process</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            You always know what happens next
          </h2>
        </div>
        <ol className="mt-12">
          {processSteps.map((step) => (
            <li key={step.id} className="grid gap-2 border-t border-navy/10 py-6 md:grid-cols-[5rem_16rem_1fr] md:gap-8">
              <span className="text-sm font-semibold text-electric">0{step.id}</span>
              <h3 className="font-semibold text-navy">{step.title}</h3>
              <p className="text-sm leading-relaxed text-navy/60">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
