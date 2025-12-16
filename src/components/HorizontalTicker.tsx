import React from "react";
import { COMPETENCIES } from "./data";
// import "./ticker.css"; // make sure to import the CSS below

const HorizontalTicker: React.FC = () => {
  // Duplicate content to enable seamless infinite scroll
  const content = [...COMPETENCIES, ...COMPETENCIES].map((phrase, index) => (
    <span key={index} className="ticker-item">
      • {phrase} •
    </span>
  ));

  return (
    <section className="py-3 md:py-5 bg-white border-y border-black backdrop-blur-sm">
      <div className="ticker-wrapper">
        <div className="ticker-animation">{content}</div>
      </div>
    </section>
  );
};

export default HorizontalTicker;
