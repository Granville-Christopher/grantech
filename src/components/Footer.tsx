import React from "react";
import Logo from "./Logo";

const columns = [
  {
    title: "Pages",
    links: [
      ["Services", "#services"],
      ["Why Us", "#why-us"],
      ["Work", "#proof"],
      ["Process", "#process"],
      ["Contact", "#contact"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["contact@granvillebuchi.com", "mailto:christophergranville0@gmail.com"],
      ["+234 913 387 1053", "tel:+2349133871053"],
      ["WhatsApp", "https://wa.me/+2349133871053"],
    ],
  },
  {
    title: "Social",
    links: [
      ["Instagram", "https://instagram.com/grantech_it_solutions"],
      ["X", "https://x.com/GranTech_?s=09"],
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f4f5f7] px-3 pt-6">
      <div className="rounded-t-[36px] bg-navy text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-[30px] py-10 md:px-12 md:py-16 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-start gap-4">
            <Logo tone="light" />
            <p className="text-xs text-white/45 sm:text-sm">© {new Date().getFullYear()}. GranTech IT Solutions</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-[max-content_max-content_max-content] sm:gap-x-12 lg:gap-x-16">
            {columns.map((column) => (
              <div
                key={column.title}
                className={`flex flex-col gap-3 ${
                  column.title === "Social"
                    ? "col-start-2 row-start-1 sm:col-start-3"
                    : column.title === "Contact"
                      ? "col-span-2 row-start-2 sm:col-span-1 sm:col-start-2 sm:row-start-1"
                      : "col-start-1 row-start-1"
                }`}
              >
                <p className="text-xs font-semibold text-white sm:text-sm">{column.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="whitespace-nowrap text-xs text-white/50 transition-colors duration-300 hover:text-white sm:text-sm"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="relative px-[30px] pb-8 pt-2 sm:mt-6 sm:h-[16rem] sm:overflow-hidden sm:px-4 sm:pb-0">
          <svg
            aria-hidden="true"
            viewBox="0 0 940 150"
            className="footer-word relative z-[1] mx-auto max-w-[1080px] sm:absolute sm:left-1/2 sm:top-3 sm:w-[min(92%,1120px)] sm:-translate-x-1/2"
          >
            <defs>
              <linearGradient id="footer-glass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.42)" />
                <stop offset="46%" stopColor="rgba(255,255,255,0.16)" />
                <stop offset="100%" stopColor="rgba(186,220,236,0.05)" />
              </linearGradient>
            </defs>
            <g
              fill="none"
              stroke="url(#footer-glass)"
              strokeWidth="26"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M92 40C68 18 24 30 22 76c-2 46 40 62 74 40V84H52" />
              <path d="M132 22v108" />
              <path d="M132 34h46c30 0 30 46 0 46h-46" />
              <path d="M156 80l52 50" />
              <path d="M250 130L292 24l42 106" />
              <path d="M372 130V24l78 106V24" />
              <path d="M490 24h78M529 24v108" />
              <path d="M608 24h74M608 24v108M608 76h56M608 132h74" />
              <path d="M804 42c-28-24-78-18-84 34s48 64 86 40" />
              <path d="M844 24v108M916 24v108M844 76h72" />
            </g>
          </svg>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[70%] sm:block"
            style={{
              background:
                "radial-gradient(130% 90% at 50% 120%, rgba(214,230,244,0.38) 0%, rgba(6,20,47,0.15) 46%, transparent 72%), linear-gradient(to bottom, transparent 0%, rgba(6,20,47,0.35) 28%, #06142f 78%)",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
