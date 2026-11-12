import React from "react";

const ProjectLink: React.FC<{ href: string; className?: string }> = ({ href, className = "" }) => (
    <a
    href={href}
    className={`group items-center justify-center rounded-full transition-[color,background-color,transform,opacity] duration-300 active:scale-[0.98] ${className}`}
  >
    <span className="inline-flex items-center gap-[0.2em]">
      <span>Start</span>
      <span className="relative inline-flex h-[1em] w-[1.1em] items-center justify-center">
        <span className="transition-opacity duration-300 group-hover:opacity-0">a</span>
        <svg
          viewBox="0 0 18 18"
          className="absolute h-[1.05em] w-[1.05em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="square"
          aria-hidden="true"
        >
          <path d="M3.75 9h9M9 14.25 14.25 9 9 3.75" />
        </svg>
      </span>
      <span>project</span>
    </span>
  </a>
);

export default ProjectLink;
