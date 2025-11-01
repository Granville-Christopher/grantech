import React from "react";
import { motion } from "framer-motion";

const Achievements: React.FC = () => {
  const stats = [
    {
      id: 1,
      label: "Years of Expertise",
      value: "5+",
      desc: "Delivering excellence across industries.",
    },
    {
      id: 2,
      label: "Projects Completed",
      value: "120+",
      desc: "From startups to enterprise solutions.",
    },
    {
      id: 3,
      label: "Problems Solved",
      value: "300+",
      desc: "Complex challenges turned into success stories.",
    },
    {
      id: 4,
      label: "Global Clients",
      value: "25+",
      desc: "Across 3 continents and multiple industries.",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 md:py-28 bg-gradient-to-t from-white to-blue-50 text-center relative overflow-hidden"
    >
      {/* Soft radial background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold mb-12 text-gray-900"
        >
          Our Impact in Numbers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.id * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/20 backdrop-blur-xl border border-white/30 
                         rounded-2xl shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),_inset_-2px_-2px_6px_rgba(0,0,0,0.1)]
                         p-8 
                         transition-all duration-500 ease-in-out"
            >
              {/* Subtle inner light reflection */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-2xl pointer-events-none"></div> */}

              {/* Pulsing glow animation on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] rounded-2xl"></div>
              </div>

              <h3 className="text-3xl md:text-5xl font-extrabold text-blue-600 mb-2 relative z-10">
                {item.value}
              </h3>
              <p className="text-base md:text-lg font-semibold text-gray-900 relative z-10">
                {item.label}
              </p>
              <p className="text-gray-700 mt-2 relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
