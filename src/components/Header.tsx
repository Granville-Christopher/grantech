import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // 📞 call icon

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ACCENT_COLOR = "bg-blue-600 hover:bg-blue-700";

  const headerClasses = isScrolled
    ? "bg-white/90 shadow-xl backdrop-blur-md"
    : "backdrop-blur-md";

  return (
    <div className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-transparent transition-all duration-500">
      <header
        className={`max-w-7xl md:mx-auto my-2 mx-4 md:m-3 px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center rounded-full transition-all duration-500 ease-in-out ${headerClasses}`}
      >
        {/* 🔹 Logo */}
        <div className="text-xl md:text-3xl font-extrabold text-gray-900 tracking-tighter">
          <a
            href="#home"
            className="no-underline font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            Granville <span className="text-blue-600">Technologies</span>
          </a>
        </div>

        {/* 🔹 Mobile "Give us a call" button (only visible on small screens) */}
        <a
          href="tel:+2349133871053"
          className={`inline-flex items-center md:hidden px-4 py-2 text-sm font-semibold rounded-full text-white ${ACCENT_COLOR} transition duration-300 shadow-md transform hover:scale-105`}
        >
          <FaPhoneAlt className="mr-2 text-white" /> Call Us
        </a>

        {/* 🔹 Nav Links (hidden on small screens) */}
        <nav className="hidden md:flex space-x-8">
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
              className="text-gray-700 font-medium hover:text-blue-600 transition duration-200 p-2 rounded-lg hover:bg-blue-50"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* 🔹 CTA Button (hidden on small screens) */}
        <a
          href="#contact"
          className={`hidden md:inline-flex px-6 py-2 text-sm font-semibold rounded-full text-white ${ACCENT_COLOR} transition duration-300 shadow-md transform hover:scale-105`}
        >
          Get Quote
        </a>
      </header>
    </div>
  );
};

export default Header;
