import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { X, Gift } from "lucide-react";
import Snowflake from "./Snowflake";
import Aurora from "./Aurora";

const ChristmasFlier: React.FC = () => {
  const [show, setShow] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 25000); // Even longer duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gray-900"
          style={{
            backgroundImage: `
              linear-gradient(rgba(10, 0, 0, 0.7), rgba(10, 0, 0, 0.7)),
              url('/santa2.jpg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Snowflakes */}
          {Array.from({ length: 100 }).map((_, i) => (
            <Snowflake key={i} />
          ))}

          {/* Close Button */}
          <motion.button
            onClick={() => setShow(false)}
            className="absolute top-5 right-5 text-white/70 hover:text-white hover:scale-110 transition-all z-50"
            whileHover={{ rotate: 180, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={32} />
          </motion.button>

          {/* Main Card */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.7, ease: "easeOut" },
            }}
            exit={{
              scale: 0.7,
              opacity: 0,
              transition: { duration: 0.5, ease: "easeIn" },
            }}
            className="relative max-w-sm w-[90%] md:max-w-md text-center rounded-2xl 
                       bg-black/30 backdrop-blur-xl
                       border-t-2 border-l-2 border-white/20
                       p-8 overflow-hidden"
          >
            {/* Aurora Effect */}
            <Aurora />

            {/* Ribbon */}
            <div className="absolute top-0 right-0 w-32 h-32" style={{ transform: "translateZ(60px)" }}>
                <div className="absolute top-[40px] right-[-40px] w-[200px] text-center bg-green-600 text-white text-sm font-bold py-1.5 shadow-lg"
                    style={{
                        transform: "rotate(45deg)"
                    }}
                >
                    Merry Christmas!
                </div>
            </div>

            {/* Card Content */}
            <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
              {/* Image */}
              <motion.div
                style={{ transform: "translateZ(100px)" }}
                className="mx-auto mb-6 w-36 h-36 rounded-full bg-white/20 shadow-2xl flex items-center justify-center border-2 border-white/50"
              >
                <img
                  src="/santa1.jpg"
                  alt="Santa Claus"
                  className="w-[130px] h-[130px] object-cover rounded-full"
                />
              </motion.div>

              {/* Title */}
              <motion.h1
                style={{ transform: "translateZ(80px)" }}
                className="text-5xl font-['Mountains_of_Christmas',_cursive] text-white mb-4"
                animate={{
                    textShadow: [
                        "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6",
                        "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6",
                        "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6"
                    ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Season's Greetings
              </motion.h1>

              {/* Subtext */}
              <motion.p
                style={{ transform: "translateZ(50px)" }}
                className="text-white/80 font-medium mb-8 text-lg"
              >
                From all of us at <span className="font-bold text-white">GranTech</span>
              </motion.p>

              {/* Gift Icon and final message */}
              <motion.div
                style={{ transform: "translateZ(30px)" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center justify-center space-x-3 text-white/70"
              >
                <motion.div
                    animate={{ rotate: [-10, 10, -10] }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Gift size={24} className="text-green-300" />
                </motion.div>
                <p>Wishing you a prosperous New Year!</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChristmasFlier;
