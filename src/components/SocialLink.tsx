// import React from "react";

// // --- Social Media Link Placeholder Component (UPDATED ICONS/COLORS) ---
// const SocialLink: React.FC<{ name: string; icon: string; color: string }> = ({
//   name,
//   icon,
//   color,
// }) => (
//   // Using generic placeholder links as actual URLs are unknown
//   <a
//     href="#"
//     aria-label={name}
//     className={`w-10 h-10 flex items-center justify-center rounded-full text-white shadow-lg font-bold transition duration-300 hover:scale-110`}
//     style={{ backgroundColor: color }}
//   >
//     <span className="text-xl">{icon}</span>
//     <span className="sr-only">{name}</span>
//   </a>
// );

// export default SocialLink;

import React from "react";
import type { SocialLinkProps } from "./data"; // ✅ adjust this import path

const SocialLink: React.FC<SocialLinkProps> = ({ name, icon, color, href }) => (
  <a
    href={href || "#"}
    aria-label={name}
    className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold shadow-md transition-all duration-300 hover:scale-110 no-underline"
    style={{
      backgroundColor: color,
      boxShadow: `0 0 0px ${color}`,
      color: "white",
      textDecoration: "none",
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget;
      el.style.boxShadow = `0 0 5px ${color}`;
      el.style.filter = "brightness(1.2)";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget;
      el.style.boxShadow = `0 0 0px ${color}`;
      el.style.filter = "brightness(1)";
    }}
  >
    <span className="text-xl">{icon}</span>
    <span className="sr-only">{name}</span>
  </a>
);

export default SocialLink;

