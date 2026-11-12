import React from "react";

const steps = [
  {
    id: "01",
    title: "Plan",
    description: "Outcome, constraints, and the technical path, agreed before the build starts.",
  },
  {
    id: "02",
    title: "Build",
    description: "Senior engineers ship in the open, with reviews and a product you can use early.",
  },
  {
    id: "03",
    title: "Deploy",
    description: "A supervised launch, then monitoring and the next release.",
  },
];

const SimpleProcess: React.FC = () => {
  return (
    <section className="bg-[#f4f5f7] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy/40">Method</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            A short path from brief to production
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.id} className="rounded-3xl bg-white p-7">
              <p className="text-sm font-semibold text-electric">{step.id}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleProcess;
