import React from "react";
import ZProcessStep from "./ZProcessStep";
import { processSteps } from "./data";

const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 animate-slide-in">
            Our Proven Path to Success
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in animate-delay-1">
            Transparency and collaboration define our development workflow. Know
            exactly what to expect at every stage.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto space-y-12 md:space-y-16 animate-slide-in animate-delay-2">
          {/* Animated Glowing Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-200 via-blue-500 to-blue-200 animate-flow blur-[1px]"></div>

          {processSteps.map((step) => (
            <ZProcessStep key={step.id} {...step} />
          ))}
        </div>
      </div>

      {/* Glowing Animation */}
      <style>
        {`
          @keyframes flow {
            0% { background-position: 0 0; }
            100% { background-position: 0 200%; }
          }
          .animate-flow {
            background-size: 100% 200%;
            animation: flow 5s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Process;
