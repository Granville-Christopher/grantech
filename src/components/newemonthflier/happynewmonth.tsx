import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const HappyNewMonth: React.FC = () => {
  const [show, setShow] = useState(true);
  const confetti = ["🎉", "🎊"];

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 12000);
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
            className="absolute top-[calc(50%-320px)] text-black/80 bg-white/20 hover:text-red-500 transition-all"
          >
            <X size={28} />
          </button>

          {/* Floating Confetti */}
          {/* Floating Confetti - centered around the flier */}
          {confetti.map((icon, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl select-none pointer-events-none"
              initial={{
                x: Math.random() * 200 - 100,
                y: -150,
                opacity: 0.8,
              }}
              animate={{
                y: [0, 400],
                opacity: [1, 0.9, 0],
                x: [Math.random() * 120 - 60, Math.random() * 120 - 60],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 20,
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
            <h1 className="text-2xl mt-8 md:text-4xl font-extrabold text-blue-900 mb-3">
              Happy New Month! <br />
              🎊
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
              <b
                className="font-semibold text-blue-900 cursor-pointer"
              >
                Granville Technologies (GranTech)
              </b>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HappyNewMonth;
