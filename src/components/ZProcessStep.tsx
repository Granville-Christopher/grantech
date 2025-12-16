import React from "react";
import type { ProcessStep } from "./data";

const ZProcessStep: React.FC<ProcessStep> = ({ id, title, description }) => {
  const isEven = id % 2 === 0;

  return (
    <div
      className={`relative flex flex-col md:flex-row w-full items-center md:items-start ${
        isEven ? "md:justify-end" : "md:justify-start"
      }`}
    >
      {/* Step Number */}
      <div className="absolute left-1/2 -translate-x-1/2 top-3 md:top-8 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black text-white font-extrabold text-sm md:text-lg shadow-xl z-20 animate-pulse-subtle">
        {id}
      </div>

      {/* Card */}
      <div
        className={`relative w-[92%] sm:w-[85%] md:w-5/12 bg-white shadow-xl rounded-lg border-t-4 border-black px-5 py-6 md:py-8 transition-all duration-300 ease-in-out hover:shadow-black/20 hover:scale-[1.02] z-10
    ${
      isEven
        ? "md:self-end text-left md:text-right ml-6 sm:ml-10 md:ml-0"
        : "md:self-start text-left mr-6 sm:mr-10 md:mr-0"
    }
    ${
      isEven
        ? "translate-x-6 sm:translate-x-4 md:translate-x-0"
        : "-translate-x-6 sm:-translate-x-4 md:translate-x-0"
    }`}
      >
        <h4 className="text-lg sm:text-xl md:text-2xl pt-4 md:pt-0 font-semibold text-gray-900">
          {title}
        </h4>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ZProcessStep;
