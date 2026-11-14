import React from "react";
import ServiceSectionCard from "./ServiceSectionCard";
import { services } from "./data";

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-[#f4f5f7] px-3 pb-6 md:px-4">
      <div className="rounded-[2rem] bg-navy px-6 py-20 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-5xl">Services</h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Strategy, product, and engineering for companies where quality is not optional.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceSectionCard key={service.id} {...service} delay={0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
