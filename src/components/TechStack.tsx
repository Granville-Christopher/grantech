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
          className={`text-2xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 animate-slide-in`}
        >
          Modern Tech Stack. Proven Expertise.
        </h2>
        <p className="text-center text-base md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto animate-slide-in animate-delay-1">
          We build on robust, secure, and current technologies that
          guarantee longevity and best-in-class performance.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-6 max-w-4xl md:max-w-5xl mx-auto animate-slide-in animate-delay-2">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className={`flex items-center space-x-3 px-6  py-3 rounded-full bg-blue-300 text-blue-900 shadow-xl font-semibold text-sm md:text-lg transition duration-300 ease-in-out hover:bg-blue-400 transform hover:scale-105`}
            >
              <span className="text-2xl">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
