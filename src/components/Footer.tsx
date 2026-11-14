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
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-[30px] py-10 md:px-12 md:py-16 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-start gap-4">
            <Logo tone="light" />
            <p className="text-xs text-white/45 sm:text-sm">© {new Date().getFullYear()}. GranTech IT Solutions</p>
          </div>
          <nav className="grid grid-cols-1 gap-8 min-[400px]:grid-cols-2 min-[400px]:gap-x-8 sm:grid-cols-3 sm:gap-x-16">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3">
                <p className="text-xs font-semibold text-white sm:text-sm">{column.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="break-words text-xs text-white/50 transition-colors duration-300 hover:text-white sm:text-sm"
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
          <p
            aria-hidden="true"
            className="footer-word mx-auto block w-full whitespace-nowrap text-center uppercase leading-none text-transparent sm:absolute sm:left-1/2 sm:top-0 sm:w-max sm:-translate-x-1/2"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 46%, rgba(186,220,236,0.03) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextStroke: "1px rgba(255,255,255,0.1)",
            }}
          >
            grantech
          </p>
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
