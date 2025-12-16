import React from "react";
import SocialLink from "./SocialLink";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer
      className={`py-12 md:py-16 bg-black relative z-20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className={`font-bold mb-2 text-white text-lg`}>
          GranTech IT Solutions
        </p>
        <p className="text-sm text-white/80">
          Engineered in {new Date().getFullYear()}. Securely built for the
          future.
        </p>

        <div className="border-t border-b mt-6 mb-8">
          <div className="flex justify-center pt-4">
            <i className="text-white/80 text-xs md:text-sm ">follow us on</i>
          </div>
          <div className="flex justify-center border-white/20 py-4 space-x-4">
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

        <div className="mt-4 space-x-6 text-sm text-white/80">
          <a href="#" className="hover:text-gray-400 transition">
            Privacy Policy
          </a>
          <span className="opacity-50">|</span>
          <a href="#" className="hover:text-gray-400 transition">
            Careers
          </a>
          <span className="opacity-50">|</span>
          <a
            href="mailto:contactgrantech@gmail.com"
            className="hover:text-gray-400 transition"
          >
            contactgrantech@gmail.com
          </a>
        </div>
        <div className="copyright">
          <p className="mt-4 text-sm text-white/80">
            &copy; {new Date().getFullYear()} GranTech IT Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
