import React from "react";
import type { Service } from "./data";

const ServiceSectionCard: React.FC<Service & { delay: number }> = ({
  icon,
  title,
  description,
  delay,
}) => (
  <div
    className="group relative bg-white border-2 border-black/10 rounded-3xl p-6 md:p-8 transition-all duration-500 ease-out hover:border-black hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:-translate-y-3"
    style={{
      animationDelay: `${delay * 0.1}s`,
    }}
  >
    {/* Icon Section */}
    <div className="mb-6">
      <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-black/5 border-2 border-black/10 group-hover:bg-black group-hover:border-black transition-all duration-500">
        <span className="text-2xl md:text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </span>
      </div>
    </div>

    {/* Content Section */}
    <div className="space-y-4">
      <h3 className="text-lg md:text-xl font-bold text-black leading-tight">
        {title}
      </h3>
      <div className="w-12 h-[2px] bg-black/20 group-hover:bg-black group-hover:w-16 transition-all duration-500"></div>
      <p className="text-sm md:text-base text-black/70 leading-relaxed">
        {description}
      </p>
    </div>

    {/* Decorative corner element */}
    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-black/5 rounded-bl-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-black/10 transition-colors duration-500"></div>
    </div>
  </div>
);

export default ServiceSectionCard;
