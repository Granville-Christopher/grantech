import React from "react";
import { COMPETENCIES } from "./data";

const HorizontalTicker: React.FC = () => {
  const content = [...COMPETENCIES, ...COMPETENCIES].map((phrase, index) => (
    <span
      key={index}
      className="text-sm md:text-xl font-extrabold text-blue-700 opacity-90 mx-6 md:mx-16 tracking-wider"
    >
      • {phrase} •
    </span>
  ));

  return (
    <section className="py-3 md:py-5 bg-blue-100/50 border-y border-blue-200">
      <div className="ticker-wrapper">
        <div className="ticker-animation">{content}</div>
      </div>
    </section>
  );
};

export default HorizontalTicker;
