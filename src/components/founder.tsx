import React from "react";
import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FounderSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-100 via-white to-blue-100 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* 🌟 Animated Title with reflective glow */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative text-2xl md:text-4xl font-extrabold mb-8 text-gray-800 inline-block"
        >
          <span className="relative z-10">Meet the Founder</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shine_4s_linear_infinite]" />
        </motion.h2>

        {/* Founder Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >
          {/* Founder Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden 
                       backdrop-blur-lg bg-white/30
                       shadow-[inset_2px_2px_6px_rgba(255,255,255,0.6),_inset_-2px_-2px_6px_rgba(0,0,0,0.1)]
                       ring-2 ring-white/40"
          >
            <img
              src="/ytyt.jpg"
              alt="Founder of Granville Technologies"
              className="w-full h-full object-cover opacity-95"
            />
            <span className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent opacity-40"></span>
          </motion.div>

          {/* Founder Info */}
          <div className="text-left md:w-3/5">
            <h3 className="text-2xl font-semibold text-gray-800">
              Granville B. Christopher
            </h3>
            <p className="text-blue-600 font-medium mb-3">
              Founder & Lead Developer, Granville Technologies (GranTech)
            </p>
            <p className="text-gray-600 leading-relaxed">
              Granville B. Christopher founded GranTech with a clear mission — to create
              secure, scalable, and high-performance digital solutions that
              drive innovation and business growth. With a strong background in
              backend development, cybersecurity, and software architecture, he
              ensures that every project meets the highest standards of
              reliability and excellence.
            </p>
          </div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="my-16 border-t border-gray-200 w-2/3 mx-auto"
        ></motion.div>

        {/* 🌟 Team Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="relative text-2xl md:text-3xl font-bold text-gray-800 mb-6 inline-block">
            <span className="relative z-10">Our Team</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shine_4s_linear_infinite]" />
          </h3>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Behind every successful project at GranTech is a collaborative team
            of designers, developers, and strategists who bring ideas to life.
            Our professionals combine technical expertise with creative vision
            to deliver impactful digital experiences.
          </p>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: "Amara Nwosu", role: "UI/UX Designer" },
              { name: "Tunde Ajayi", role: "Frontend Engineer" },
              { name: "Adaeze Okoro", role: "Project Strategist" },
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
                className="relative flex flex-col items-center text-center 
                           px-6 py-6 rounded-2xl backdrop-blur-xl bg-white/30 
                           shadow-[inset_2px_2px_6px_rgba(255,255,255,0.5),_inset_-2px_-2px_6px_rgba(0,0,0,0.15)]
                           ring-1 ring-white/40 transition-transform duration-300"
              >
                <div className="relative mb-4">
                  <img
                    src="/ytyt.jpg"
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover opacity-95"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-40 rounded-full"></span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-blue-600 text-sm font-medium">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ✨ Keyframes for reflective text sheen */}
      <style>{`
        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-[shine_4s_linear_infinite] {
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          mix-blend-mode: overlay;
        }
      `}</style>
    </section>
  );
};

export default FounderSection;
