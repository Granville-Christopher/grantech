import React from "react";
import { testimonials } from "./data";

const Proof: React.FC = () => {
  const featured = testimonials.slice(0, 3);

  return (
    <section id="proof" className="bg-[#f4f5f7] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy/40">Client work</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-4xl">
              What clients say after launch
            </h2>
          </div>
          <a href="#contact" className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-primary">
            Discuss a project
          </a>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {featured.map((item) => (
            <figure key={item.name} className="flex h-full flex-col rounded-3xl bg-white p-7">
              <blockquote className="text-[15px] leading-relaxed text-navy">“{item.quote}”</blockquote>
              <figcaption className="mt-8">
                <p className="text-sm font-semibold text-navy">{item.name}</p>
                <p className="text-sm text-navy/50">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
