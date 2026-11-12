import React from "react";
import type { Testimonial } from "./data";

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, title }) => (
  <div className="h-52 flex-shrink-0 p-6 rounded-xl bg-white shadow-lg border-l-4 border-electric flex flex-col justify-between mb-8 hover:scale-105 transition-transform duration-300">
    <p className="italic text-primary/80 text-base leading-relaxed">"{quote}"</p>
    <div>
      <p className="font-bold text-navy mt-2">{name}</p>
      <p className="text-sm text-electric">{title}</p>
    </div>
  </div>
);

export default TestimonialCard;
