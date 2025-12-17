import React from "react";
import SocialLink from "./SocialLink";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white relative z-20 border-t-2 border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          {/* Brand Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-black mb-3">
              GranTech IT Solutions
            </h3>
            <p className="text-sm md:text-base text-black/70 font-medium">
              Engineered in {new Date().getFullYear()}. Securely built for the future.
            </p>
          </div>

          {/* Social Links Section */}
          <div className="border-t border-b border-black/10 py-8 mb-8">
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center">
                <p className="text-xs md:text-sm font-semibold text-black/60 uppercase tracking-wider mb-4">
                  Connect With Us
                </p>
              </div>
              <div className="flex justify-center items-center gap-4 md:gap-6">
                <SocialLink
                  name="Instagram"
                  icon={<FaInstagram />}
                  color="#E1306C"
                  href="https://instagram.com/grantech_it_solutions"
                />
                <SocialLink
                  name="Threads"
                  icon="@"
                  href="https://www.threads.com/@grantech_it_solutions"
                  color="#333333"
                />
                <SocialLink
                  name="WhatsApp"
                  icon={<FaWhatsapp />}
                  color="#25D366"
                  href="https://wa.me/+2347051962741"
                />
                <SocialLink
                  name="X (Twitter)"
                  icon={<FaXTwitter />}
                  color="#000000"
                  href="https://x.com/GranTech_?s=09"
                />
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8">
            <a
              href="#"
              className="text-sm md:text-base text-black/70 hover:text-black font-medium transition-colors duration-300 relative group"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
            <span className="hidden md:inline text-black/30">•</span>
            <a
              href="#"
              className="text-sm md:text-base text-black/70 hover:text-black font-medium transition-colors duration-300 relative group"
            >
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
            <span className="hidden md:inline text-black/30">•</span>
            <a
              href="mailto:contactgrantech@gmail.com"
              className="text-sm md:text-base text-black/70 hover:text-black font-medium transition-colors duration-300 relative group"
            >
              contactgrantech@gmail.com
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-black/10 py-6">
          <div className="text-center">
            <p className="text-xs md:text-sm text-black/60 font-medium">
              &copy; {new Date().getFullYear()} GranTech IT Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
