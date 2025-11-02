import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const HappyNewMonth: React.FC = () => {
  const [show, setShow] = useState(true);
  const confetti = ["🎉", "🎊"];

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 15000); // Hide after 10s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-lg overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-[calc(50%-260px)] md:top-[calc(50%-320px)] text-black/80 hover:text-red-500 transition-all"
          >
            <X size={28} />
          </button>

          {/* Floating Confetti */}
          {confetti.map((icon, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl select-none"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -50,
                opacity: 0.8,
              }}
              animate={{
                y: [0, window.innerHeight + 100],
                opacity: [1, 0.8, 0],
                x: [
                  Math.random() * window.innerWidth - 50,
                  Math.random() * window.innerWidth + 50,
                ],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            >
              {icon}
            </motion.div>
          ))}

          {/* Glassy Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative max-w-sm w-[90%] md:max-w-md text-center rounded-3xl 
                       bg-white/50 backdrop-blur-2xl border border-white/20 
                       shadow-[0_8px_32px_rgba(255,255,255,0.2)] p-8 overflow-hidden"
          >
            {/* Slanted Ribbon */}
            <div className="absolute top-9 right-[-33px] bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold px-6 py-1 shadow-lg rotate-45">
              🎀 Happy November!
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3">
              🎉 Happy New Month! 🎉
            </h1>

            {/* Subtext */}
            <p className="text-blue-700 font-medium mb-6">
              GranTech is wishing you a month filled with{" "}
              <span className="font-semibold">growth, creativity,</span> and
              amazing breakthroughs.
            </p>

            {/* Animated Gift Box */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner border border-white/40"
            >
              <span className="text-5xl">🎁</span>
            </motion.div>

            <p className="text-blue-900 text-base md:text-lg font-medium mb-4">
              Let’s keep pushing limits and building the future together.
            </p>

            <p className="text-blue-700 text-sm">
              With ❤️ from{" "}
              <a
                href="https://grantech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
              >
                Granville Technologies (GranTech)
              </a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HappyNewMonth;
