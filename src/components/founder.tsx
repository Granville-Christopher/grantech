import React from "react";
import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FounderSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-xs md:text-sm font-semibold text-black/60 uppercase tracking-wider">
              Leadership
            </span>
          </div>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-black">
            Meet the Founder
          </h2>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20 md:mb-24"
        >
          <div className="bg-white border-2 border-black/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] hover:border-black/20 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Founder Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative flex-shrink-0"
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-black/10 shadow-xl">
                  <img
                    src="/ytyt.jpg"
                    alt="Granville B. Christopher - Founder & Lead Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                {/* Decorative corner */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-black/5 rounded-bl-full"></div>
              </motion.div>

              {/* Founder Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                    Granville B. Christopher
                  </h3>
                  <div className="w-16 h-[2px] bg-black mx-auto md:mx-0 mb-4"></div>
                  <p className="text-base md:text-lg font-semibold text-black/80">
                    Founder & Lead Developer
                  </p>
                  <p className="text-sm md:text-base text-black/60 font-medium">
                    Granville Technologies (GranTech)
                  </p>
                </div>
                <p className="text-sm md:text-base text-black/70 leading-relaxed max-w-2xl mx-auto md:mx-0">
                  Granville B. Christopher founded GranTech with a clear mission — to create
                  secure, scalable, and high-performance digital solutions that
                  drive innovation and business growth. With a strong background in
                  backend development, cybersecurity, and software architecture, he
                  ensures that every project meets the highest standards of
                  reliability and excellence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs md:text-sm font-semibold text-black/60 uppercase tracking-wider">
                Our Team
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold mb-4 text-black">
              The Experts Behind the Excellence
            </h3>
            <p className="text-base md:text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
              Behind every successful project at GranTech is a collaborative team
              of designers, developers, and strategists who bring ideas to life.
              Our professionals combine technical expertise with creative vision
              to deliver impactful digital experiences.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
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
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white border-2 border-black/10 rounded-3xl p-8 transition-all duration-500 ease-out hover:border-black hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
              >
                {/* Team Member Image */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-black/10 group-hover:border-black transition-colors duration-500 shadow-lg">
                    <img
                      src="/ytyt.jpg"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-black/5 rounded-tl-full group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>

                {/* Team Member Info */}
                <div className="text-center space-y-2">
                  <h4 className="text-lg md:text-xl font-bold text-black">
                    {member.name}
                  </h4>
                  <div className="w-12 h-[2px] bg-black/20 group-hover:bg-black group-hover:w-16 transition-all duration-500 mx-auto"></div>
                  <p className="text-sm md:text-base font-semibold text-black/70">
                    {member.role}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-3xl bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
