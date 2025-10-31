import React from "react";
import type { Service } from "./data";

// --- Other Reusable Components ---
const ServiceSectionCard: React.FC<Service & { delay: number }> = ({
  icon,
  title,
  description,
  delay,
}) => (
  <div
    className={`md:p-8 p-2 rounded-xl bg-white shadow-xl transition-all duration-300 ease-in-out hover:shadow-blue-300/50 hover:translate-y-[-8px] md:border-t-8 border-t-4 border-blue-400 animate-slide-in animate-delay-${delay}`}
  >
    <div className="md:text-4xl text-2xl mb-4 text-blue-600">{icon}</div>
    <h3 className="md:text-xl text-base font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default ServiceSectionCard;
