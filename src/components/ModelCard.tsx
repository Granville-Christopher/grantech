import React from "react";
import type { EngagementModel } from "./data";

const ModelCard: React.FC<EngagementModel & { delay: number }> = ({
  title,
  description,
  priceAnchor,
}) => (
  <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7">
    <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{description}</p>
    <p className="mt-6 border-t border-white/10 pt-4 text-sm font-semibold text-cyan">
      {priceAnchor}
    </p>
  </article>
);

export default ModelCard;
