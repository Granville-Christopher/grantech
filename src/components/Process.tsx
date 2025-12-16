import React from "react";
import ZProcessStep from "./ZProcessStep";
import { processSteps } from "./data";

const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 animate-slide-in">
            Our Proven Path to Success
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in animate-delay-1">
            Transparency and collaboration define our development workflow. Know
            exactly what to expect at every stage.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto space-y-12 md:space-y-16 animate-slide-in animate-delay-2">
          {/* Animated Vertical Line with moving dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-black/30">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full animate-flow-dot"></div>
          </div>

          {processSteps.map((step) => (
            <ZProcessStep key={step.id} {...step} />
          ))}
        </div>
      </div>

      {/* Moving Dot Animation */}
      <style>
        {`
          @keyframes flow-dot {
            0% { top: 0%; opacity: 1; }
            50% { opacity: 0.7; }
            100% { top: 100%; opacity: 1; }
          }
          .animate-flow-dot {
            animation: flow-dot 3s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Process;
