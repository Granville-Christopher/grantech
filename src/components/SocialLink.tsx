import React from "react";
import type { SocialLinkProps } from "./data"; // ✅ adjust this import path

const SocialLink: React.FC<SocialLinkProps> = ({ name, icon, color, href }) => (
  <a
    href={href || "#"}
    aria-label={name}
    target="_blank"
    rel="noopener noreferrer"
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

