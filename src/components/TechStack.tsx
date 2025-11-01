import React from "react";
import { techStack } from "./data";

const TechStack: React.FC = () => {
  return (
    <section
      id="tech-stack"
      className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 animate-slide-in`}
        >
          Modern Tech Stack. Proven Expertise.
        </h2>
        <p className="text-center text-sm md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto animate-slide-in animate-delay-1">
          We build on robust, secure, and current technologies that guarantee
          longevity and best-in-class performance.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-6 max-w-4xl md:max-w-5xl mx-auto animate-slide-in animate-delay-2">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className={`flex items-center space-x-2 px-3 py-3 rounded-full bg-blue-500 text-white font-semibold text-xs md:text-lg backdrop-blur-sm border border-blue-200/40 shadow-[inset_2px_2px_6px_rgba(255,255,255,0.5),_inset_-2px_-2px_6px_rgba(0,0,0,0.1)] transition duration-300 ease-in-out hover:bg-blue-400/50 transform hover:scale-105`}
            >
              <div className="px-4">
                <span className="text-2xl">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
