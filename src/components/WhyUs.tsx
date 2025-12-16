import React from "react";
import { differentiators } from "./data";

const WhyUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="py-24 md:py-32 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs md:text-sm font-semibold text-black/60 uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-black max-w-4xl">
            The GranTech Difference
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-3xl leading-relaxed">
            We've moved beyond simple development. Our process is centered
            on <span className="font-bold text-black">Security, Scalability, and Adaptive Design</span>.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((diff, index) => (
            <div
              key={diff.id}
              className="group relative bg-white border-2 border-black/10 rounded-3xl p-8 md:p-10 transition-all duration-500 ease-out hover:border-black hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:-translate-y-3"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Icon Section */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black/5 border-2 border-black/10 group-hover:bg-black group-hover:border-black transition-all duration-500">
                  <span className="text-2xl md:text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {diff.icon}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-4">
                <h3 className="text-lg md:text-2xl font-bold text-black leading-tight">
                  {diff.title}
                </h3>
                <div className="w-12 h-[2px] bg-black/20 group-hover:bg-black group-hover:w-16 transition-all duration-500"></div>
                <p className="text-sm md:text-base text-black/70 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-black/5 rounded-bl-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
