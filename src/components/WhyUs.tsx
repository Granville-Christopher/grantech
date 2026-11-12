import React from "react";
import { differentiators } from "./data";

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy/40">Why GranTech</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            One senior team. Design and engineering together
          </h2>
        </div>
        <div className="lg:col-span-8">
          {differentiators.map((item, index) => (
            <article key={item.id} className="grid gap-2 border-t border-navy/10 py-6 sm:grid-cols-[4rem_1fr]">
              <p className="text-sm font-semibold text-electric">0{index + 1}</p>
              <div>
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy/60">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
