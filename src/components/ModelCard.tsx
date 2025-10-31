import React from "react";
import type { EngagementModel } from "./data";

const ModelCard: React.FC<EngagementModel & { delay: number }> = ({
  title,
  description,
  priceAnchor,
  delay,
}) => (
  <div
    className={`p-8 rounded-xl bg-blue-700 shadow-2xl flex flex-col items-start h-full transition-all duration-300 ease-in-out hover:bg-blue-800 hover:scale-[1.01] border-t-2 border-blue-400 animate-slide-in animate-delay-${delay}`}
  >
    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">{title}</h3>
    <p className="text-blue-200 mb-4 flex-grow text-sm">{description}</p>
    <p className="font-bold text-blue-100 text-base md:text-lg border-t pt-3 w-full border-blue-600/50">
      {priceAnchor}
    </p>
  </div>
);

export default ModelCard;
