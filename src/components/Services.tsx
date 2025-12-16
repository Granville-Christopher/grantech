import React from "react";
import ServiceSectionCard from "./ServiceSectionCard";
import { services } from "./data";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-white relative z-10 section-fold-top -mt-20 md:-mt-24 pt-32 md:pt-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs md:text-sm font-semibold text-black/60 uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-black">
            Full-Spectrum Digital Solutions
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
            Our service model covers the entire product lifecycle, from
            initial strategy to ongoing maintenance and optimization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceSectionCard
              key={service.id}
              {...service}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
