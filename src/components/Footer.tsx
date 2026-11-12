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
      ["+234 705 196 2741", "tel:+2347051962741"],
      ["WhatsApp", "https://wa.me/+2347051962741"],
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
        <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-6 py-16 md:px-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-start gap-5">
            <Logo tone="light" />
            <p className="text-sm text-white/45">© {new Date().getFullYear()}. GranTech IT Solutions</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3.5">
                <p className="text-sm font-semibold text-white">{column.title}</p>
                <ul className="flex flex-col gap-3">
                  {column.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
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
        <div className="relative mt-6 h-[16vw] min-h-[8.5rem] overflow-hidden sm:h-[16rem]">
          <p
            aria-hidden="true"
            className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap text-center font-bold uppercase leading-none tracking-[0.2em] text-transparent"
            style={{
              fontSize: "clamp(6.2rem, 16.5vw, 14.5rem)",
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 46%, rgba(186,220,236,0.03) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextStroke: "1px rgba(255,255,255,0.1)",
              filter: "drop-shadow(0 10px 24px rgba(255,255,255,0.03))",
            }}
          >
            grantech
          </p>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%]"
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
