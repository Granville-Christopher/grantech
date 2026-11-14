import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ProjectLink from "./ProjectLink";

const links = [
  ["Services", "#services"],
  ["Why Us", "#why-us"],
  ["Work", "#proof"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <a
        href="#contact"
        className="group flex items-center justify-center gap-1.5 bg-navy px-4 py-2 text-center text-[12px] font-medium text-white"
      >
        Now booking new projects
        <svg
          viewBox="0 0 18 18"
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-[3px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          aria-hidden="true"
        >
          <path d="M3.75 9h9M9 14.25 14.25 9 9 3.75" />
        </svg>
      </a>
      <header className="border-b border-navy/10 bg-[#f4f5f7]/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-[18px] md:h-16 md:px-6">
          <a href="#home" className="text-navy" aria-label="GranTech home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[13px] font-medium text-navy/55 transition-colors duration-500 hover:text-navy"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#proof"
              className="hidden rounded-full px-4 py-2 text-[13px] font-medium text-navy/55 transition-colors duration-500 hover:text-navy md:inline-flex"
            >
              See the work
            </a>
            <ProjectLink
              href="#contact"
              className="hidden bg-navy px-4 py-2 text-[13px] font-semibold text-white hover:bg-primary md:inline-flex"
            />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-[color,background-color,border-color,transform] duration-300 hover:border-navy hover:bg-navy hover:text-white active:scale-[0.98] md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-navy/10 bg-[#f4f5f7] px-3 py-3 md:hidden">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-navy/70 transition-[color,background-color,transform] duration-300 hover:bg-navy hover:text-white active:scale-[0.99] active:bg-navy active:text-white"
              >
                {label}
                <svg
                  viewBox="0 0 18 18"
                  className="h-4 w-4 -translate-x-1.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-active:translate-x-0 group-active:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  aria-hidden="true"
                >
                  <path d="M3.75 9h9M9 14.25 14.25 9 9 3.75" />
                </svg>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full justify-center rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-300 hover:bg-primary active:scale-[0.98]"
            >
              Start a project
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
