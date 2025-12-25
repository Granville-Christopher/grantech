import React from "react";
import { motion } from "framer-motion";

const Snowflake: React.FC = () => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const duration = Math.random() * 5 + 5;
  const delay = Math.random() * 5;
  const scale = Math.random() * 0.5 + 0.5;
  const rotate = Math.random() * 360;

  return (
    <motion.div
      className="absolute text-white"
      style={{
        left: `${x}vw`,
        top: `${y}vh`,
        scale,
        rotate,
      }}
      animate={{
        y: [0, 100 + y],
        opacity: [1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      ❄️
    </motion.div>
  );
};

export default Snowflake;
