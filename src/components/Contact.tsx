import React from "react";
import ModelCard from "./ModelCard";
import { engagementModels } from "./data";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative z-10 bg-gradient-to-b from-white to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Text colors adjusted for contrast against the light gradient */}
        <h2 className="text-3xl md:text-4xl  font-extrabold text-gray-900 mb-4 animate-slide-in">
          Stop Waiting. Start Building.
        </h2>
        <p className="text-base md:text-xl text-gray-700 mb-10 animate-slide-in animate-delay-1">
          Select the engagement model that fits your business needs, or
          reach out to tailor a custom partnership.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
          {/* Card colors slightly adjusted to be visible against the new background */}
          {engagementModels.map((model, index) => (
            <ModelCard key={index} {...model} delay={index + 2} />
          ))}
        </div>

        <a
          href="mailto:inquire@digitalarchitects.com"
          className={`inline-flex items-center justify-center px-10 py-4 border-2 border-transparent text-base md:text-lg font-bold rounded-full text-white transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-700 shadow-xl transform hover:scale-[1.05]`}
          style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))" }}
        >
          Book Your Free Consultation Now
        </a>
      </div>
    </section>
  );
};

export default Contact;
