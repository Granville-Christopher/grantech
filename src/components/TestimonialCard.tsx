import React from "react";
import type { Testimonial } from "./data";

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, title }) => (
  <div className="h-52 flex-shrink-0 p-6 rounded-xl bg-white shadow-lg border-l-4 border-black flex flex-col justify-between mb-8 hover:scale-105 transition-transform duration-300">
    <p className="italic text-gray-700 text-base leading-relaxed">"{quote}"</p>
    <div>
      <p className="font-bold text-black mt-2">{name}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  </div>
);

export default TestimonialCard;
