import React from "react";
import IlluminatedCard from "./IlluminatedCard";
import { differentiators } from "./data";

const WhyUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className={`py-20 md:py-28 bg-gradient-to-b from-blue-100 to-white blueprint-bg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2
            className={`text-2xl md:text-4xl text-start font-extrabold mb-4 text-gray-900 animate-slide-in`}
          >
            The GranTech Difference
          </h2>
          <p className="text-base md:text-lg text-start text-gray-700 max-w-3xl mx-auto animate-slide-in animate-delay-1">
            We've moved beyond simple development. Our process is centered
            on <b>Security, Scalability, and Adaptive Design</b> .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in animate-delay-2">
          {/* Using the IlluminatedCard with the spotlight effect */}
          {differentiators.map((diff) => (
            <IlluminatedCard key={diff.id} {...diff} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
