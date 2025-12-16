import React from "react";
import ModelCard from "./ModelCard";
import { engagementModels } from "./data";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative z-10 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Text colors adjusted for contrast against the light gradient */}
        <h2 className="text-2xl md:text-4xl  font-extrabold text-gray-900 mb-4 animate-slide-in">
          Stop Waiting. Start Building.
        </h2>
        <p className="text-base md:text-xl text-gray-700 mb-10 animate-slide-in animate-delay-1">
          Select the engagement model that fits your business needs, or reach
          out to tailor a custom partnership.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
          {/* Card colors slightly adjusted to be visible against the new background */}
          {engagementModels.map((model, index) => (
            <ModelCard key={index} {...model} delay={index + 2} />
          ))}
        </div>

        <a
          href="mailto:inquire@granvilletechnologies.com"
          className="inline-flex items-center justify-center px-10 py-4 text-base md:text-lg font-bold rounded-full text-white bg-black hover:bg-gray-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.45),_inset_0_-3px_6px_rgba(0,0,0,0.25)] transition-all duration-500 ease-in-out transform hover:scale-[1.05] hover:shadow-[inset_0_3px_6px_rgba(255,255,255,0.6),_inset_0_-4px_8px_rgba(0,0,0,0.3)] animate-pulse-subtle"
        >
          Book Your Free Consultation Now
        </a>
      </div>
    </section>
  );
};

export default Contact;
