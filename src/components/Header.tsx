import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apple Liquid Glass header
  const headerClasses = isScrolled
    ? "bg-white/80 backdrop-blur-[10px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_inset_0_-1px_3px_rgba(0,0,0,0.3),_0_4px_12px_rgba(0,0,0,0.3)] py-2"
    : "bg-transparent backdrop-blur-[2px] py-4";

  return (
    <div className="fixed top-0 left-0 w-full z-40 transition-all duration-700 ease-in-out">
      <header
        className={`relative max-w-7xl md:mx-auto my-2 mx-4 md:m-3 px-4 sm:px-6 lg:px-8 flex justify-between items-center rounded-full overflow-hidden transition-all duration-700 ease-in-out ${headerClasses}`}
      >
        {/* ✨ Glass reflection overlay */}
        {isScrolled && (
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        )}

        {/* 🔹 Logo */}
        <div
          className={`flex items-center transition-all duration-700 ease-in-out ${
            isScrolled
              ? "scale-[1] md:scale-[0.95] opacity-95"
              : "scale-[1.25] md:scale-[1.25] opacity-100"
          }`}
        >
          <a
            href="#home"
            className="no-underline font-bold text-black hover:text-gray-600 transition-colors duration-300"
          >
            <img
              src="/Gemini_Generated_Image_v1vh0ev1vh0ev1vh-removebg-preview.png"
              alt="Logo"
              className="w-28 md:w-40 transition-all duration-700 ease-in-out"
            />
          </a>
        </div>

        {/* 🔹 Right Side: Nav Links + CTA Button */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* 🔹 Mobile "Call Us" button (Liquid Glass Blue Style) */}
          <a
            href="tel:+2347051962741"
            className="inline-flex md:hidden relative overflow-hidden px-5 py-2 text-sm font-semibold rounded-full backdrop-blur-lg bg-black text-white hover:bg-[#1a1a1a] shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),_0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-500 transform hover:scale-95 hover:shadow-[inset_0_1px_3px_rgba(255,255,255,0.7),_0_6px_18px_rgba(0,0,0,0.25)]"
          >
            <div className=" flex items-center text-white space-x-2">
              <FaPhoneAlt className="mr-2 relative z-10 " />
              <span className="relative z-10 ">
                Call Us
              </span>
            </div>
          </a>

          {/* 🔹 Nav Links */}
          <nav className="hidden md:flex space-x-6 relative z-10">
            {[
              "Services",
              "Tech Stack",
              "Why Us",
              "Proof",
              "Process",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="group relative text-black font-medium px-3 py-2 rounded-xl transition-all duration-500 ease-out transform hover:scale-95"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-gray-600">
                  {item}
                </span>

                {/* 🍏 Apple Glass Hover */}
                <span className="absolute inset-0 rounded-xl backdrop-blur-[4px] bg-white/35 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-[1.05] shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_3px_rgba(0,0,0,0.05),_0_4px_12px_rgba(255,255,255,0.2)]"></span>
              </a>
            ))}
          </nav>

          {/* 🔹 CTA Button (Liquid Blue Glass) */}
          <a
            href="#contact"
            className="hidden md:inline-flex relative overflow-hidden px-6 py-2 text-sm font-sans rounded-full text-white backdrop-blur-lg bg-black border border-white/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),_inset_0_-2px_4px_rgba(0,0,0,0.15)] transition-all duration-500 ease-in-out transform hover:scale-95 hover:bg-[#1a1a1a] hover:shadow-[inset_0_3px_5px_rgba(255,255,255,0.5),_inset_0_-3px_6px_rgba(0,0,0,0.2)]"
          >
            <span className="relative z-10 text-white">Get Quote</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
