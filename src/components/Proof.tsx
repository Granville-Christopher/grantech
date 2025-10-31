import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import { testimonials } from "./data";

const Proof: React.FC = () => {
  return (
    <section
      id="proof"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start">
        {/* Left Content Area */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
          <h2
            className={`text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 animate-slide-in`}
          >
            Client Success. Real Results.
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 animate-slide-in animate-delay-1">
            Hear directly from the industry leaders who have achieved
            massive scale and bulletproof security with our partnership. We
            deliver on our promise of flawless execution.
          </p>
          <div className="text-center lg:text-left">
            <a
              href="#contact"
              className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-xl transition duration-500 ease-in-out transform hover:scale-[1.05]`}
            >
              Discuss Your Project
            </a>
          </div>
        </div>

        {/* Right Carousel Area */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Proof;
