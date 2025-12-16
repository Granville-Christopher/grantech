import React from "react";
import type { EngagementModel } from "./data";

const ModelCard: React.FC<EngagementModel & { delay: number }> = ({
  title,
  description,
  priceAnchor,
  delay,
}) => (
  <div
    className={`p-8 rounded-xl bg-black shadow-2xl flex flex-col items-start h-full transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-[1.05] border-t-2 border-black animate-slide-in animate-delay-${delay} hover:rotate-1`}
  >
    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">{title}</h3>
    <p className="text-white/90 mb-4 flex-grow text-sm">{description}</p>
    <p className="font-bold text-white text-base md:text-lg border-t pt-3 w-full border-white/30">
      {priceAnchor}
    </p>
  </div>
);

export default ModelCard;
