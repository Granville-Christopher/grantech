import React, { useState } from "react";
import type { Differentiator } from "./data";

// --- Component 3: Spotlight Hover Effect Card ---
const IlluminatedCard: React.FC<Differentiator> = ({
  icon,
  title,
  description,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="group flex flex-col p-6 rounded-xl shadow-xl transition-all duration-300 ease-in-out hover:shadow-black/20 hover:scale-[1.05] border border-black/20 relative overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      style={{
        backgroundColor: "white",
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.1), transparent 40%)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-3xl mb-4 text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="absolute inset-0 border border-transparent group-hover:border-black/30 rounded-xl transition duration-300 pointer-events-none"></div>
    </div>
  );
};

export default IlluminatedCard;
