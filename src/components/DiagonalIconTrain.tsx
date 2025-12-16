import React from "react";
import { backgroundIcons } from "./data";

// --- Component 1: Diagonal Icon Train ---
const DiagonalIconTrain: React.FC<{
  duration: string;
  offsetClass: string;
  isReversed: boolean;
}> = ({ duration, offsetClass, isReversed }) => {
  let icons = [
    ...backgroundIcons,
    ...backgroundIcons,
    ...backgroundIcons,
    ...backgroundIcons,
    ...backgroundIcons,
  ];
  if (isReversed) {
    icons = icons.reverse();
  }

  return (
    <div
      className={`absolute h-full w-64 md:w-96 pointer-events-none opacity-10 hidden md:block ${offsetClass}`}
    >
      <div
        className={`flex flex-col space-y-12`}
        style={{
          animation: `diagonal-slide-down ${duration} linear infinite`,
          transform: `translateY(-50%)`,
          height: "200%",
        }}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="text-5xl md:text-6xl text-black p-3 rounded-xl bg-white/50 shadow-2xl transform skew-y-[-10deg] opacity-20"
            style={{
              marginLeft: `${(index % 4) * 20}px`,
              opacity: index % 5 === 0 ? 0.2 : 0.2,
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagonalIconTrain;
