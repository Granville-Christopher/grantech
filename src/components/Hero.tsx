import React from "react";
import { COMPETENCIES } from "./data";
import ProjectLink from "./ProjectLink";

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-[#f4f5f7] px-[30px] pb-8 pt-32 text-center md:px-6 md:pt-40">
      <div className="mx-auto max-w-4xl">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1 text-[12px] font-medium text-navy/70">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          Enterprise software studio
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl text-[1.65rem] font-semibold leading-tight tracking-tight text-navy sm:mt-6 sm:text-5xl md:text-6xl">
          Enterprise-grade software that drives growth
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy/60 sm:mt-5 sm:text-lg">
          We design, build, and run secure products for companies that need the software to hold up in production.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ProjectLink
            href="#contact"
            className="inline-flex bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-primary"
          />
          <a
            href="#services"
            className="inline-flex rounded-full border border-navy/15 bg-white px-5 py-3 text-sm font-semibold text-navy transition-[color,background-color,border-color,transform] duration-300 hover:border-navy/40 active:scale-[0.98]"
          >
            See services
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl border-y border-navy/10 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/40">
          What we are trusted for
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {COMPETENCIES.map((item) => (
            <span key={item} className="text-sm font-medium tracking-wide text-navy/45">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
