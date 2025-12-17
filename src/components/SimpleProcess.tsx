import React from "react";
import { motion } from "framer-motion";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Plan",
    description: "We start by understanding your vision, goals, and requirements. Through strategic consultation, we create a detailed blueprint that maps out every aspect of your project, ensuring clarity and alignment before development begins.",
  },
  {
    id: 2,
    title: "Build",
    description: "Our expert team transforms your blueprint into reality using cutting-edge technologies and best practices. We maintain transparent communication throughout development, delivering high-quality code that's secure, scalable, and performant.",
  },
  {
    id: 3,
    title: "Deploy",
    description: "We ensure a smooth launch with rigorous testing, security audits, and performance optimization. Post-deployment, we provide ongoing support and monitoring to guarantee your digital product continues to excel and grow with your business.",
  },
];

const SimpleProcess: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs md:text-sm font-semibold text-black/60 uppercase tracking-wider">
              Our Process
            </span>
          </div>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-black max-w-4xl mx-auto">
            Simple Structured Process That Turns Ideas Into Exceptional Digital Products
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
            From initial concept to successful launch, we follow a proven methodology
            that ensures your vision becomes a reality.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border-2 border-black/10 rounded-3xl p-8 md:p-10 transition-all duration-500 ease-out hover:border-black hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg">
                  {step.id}
                </div>
              </div>

              {/* Content */}
              <div className="pt-6 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-black mb-4">
                    {step.title}
                  </h3>
                  <div className="w-16 h-[2px] bg-black/20 group-hover:bg-black group-hover:w-20 transition-all duration-500"></div>
                </div>
                <p className="text-sm md:text-base text-black/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-black/5 rounded-bl-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 rounded-3xl bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Connecting Line (Desktop only) */}
        <div className="hidden md:block max-w-4xl mx-auto mt-8">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black/10 transform -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleProcess;

