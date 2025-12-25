import React from "react";
import { motion } from "framer-motion";

const Aurora: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 rounded-full"
        style={{
          filter: "blur(100px)",
        }}
        animate={{
          x: [-200, 200, -200],
          y: [-200, 200, -200],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 rounded-full"
        style={{
          filter: "blur(100px)",
        }}
        animate={{
          x: [200, -200, 200],
          y: [200, -200, 200],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />
    </div>
  );
};

export default Aurora;
