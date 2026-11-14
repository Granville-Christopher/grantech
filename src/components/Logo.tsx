import React from "react";

const Logo: React.FC<{ tone?: "dark" | "light" }> = ({ tone = "dark" }) => {
  const color = tone === "light" ? "#ffffff" : "#06142f";
  return (
    <span
      className="text-[13px] font-bold uppercase leading-none tracking-[0.18em] sm:text-[22px] sm:tracking-[0.34em]"
      style={{ color }}
    >
      grantech
    </span>
  );
};

export default Logo;
