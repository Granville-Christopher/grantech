import React from "react";
import ServiceSectionCard from "./ServiceSectionCard";
import { services } from "./data";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50 relative z-10 section-fold-top -mt-20 md:-mt-24 pt-32 md:pt-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`md:text-4xl text-2xl font-extrabold text-center mb-4 text-gray-900 animate-slide-in`}
        >
          Full-Spectrum Digital Solutions
        </h2>
        <p className="text-center text-base md:text-lg text-gray-600 md:mb-16 mb-8 max-w-3xl mx-auto animate-slide-in animate-delay-1">
          Our service model covers the entire product lifecycle, from
          initial strategy to ongoing maintenance and optimization.
        </p>

        {/* UPDATED GRID LAYOUT to 3 columns for better balance with 6 services */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            // Delay updated for smooth animation start
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
