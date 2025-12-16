import React from "react";
import { techStack } from "./data";
import { 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiGo, 
  SiAmazon, 
  SiGooglecloud, 
  SiTailwindcss, 
  SiNextdotjs
} from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

const TechStack: React.FC = () => {
  // Icon mapping function
  const getIcon = (iconKey: string) => {
    switch (iconKey) {
      case "typescript-react":
        return (
          <div className="flex items-center justify-center gap-1">
            <SiTypescript className="text-[#3178C6]" />
            <SiReact className="text-[#61DAFB]" />
          </div>
        );
      case "nodejs-go":
        return (
          <div className="flex items-center justify-center gap-1">
            <SiNodedotjs className="text-[#339933]" />
            <SiGo className="text-[#00ADD8]" />
          </div>
        );
      case "aws-gcp":
        return (
          <div className="flex items-center justify-center gap-1">
            <SiAmazon className="text-[#FF9900]" />
            <SiGooglecloud className="text-[#4285F4]" />
          </div>
        );
      case "tailwind":
        return <SiTailwindcss className="text-[#06B6D4]" />;
      case "nextjs":
        return <SiNextdotjs className="text-black" />;
      case "shield":
        return <FaShieldAlt className="text-black" />;
      default:
        return null;
    }
  };
  return (
    <section
      id="tech-stack"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, black 2px, black 4px)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs md:text-sm font-semibold text-black/60 uppercase tracking-wider">
              Technology Excellence
            </span>
          </div>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-black">
            Modern Tech Stack.<br className="hidden md:block" /> Proven Expertise.
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
            We build on robust, secure, and current technologies that guarantee
            longevity and best-in-class performance.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={tech.id}
              className="group relative bg-white border-2 border-black/10 rounded-2xl p-6 md:p-8 transition-all duration-500 ease-out hover:border-black hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon Container */}
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <div className="text-2xl md:text-5xl mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center">
                  {getIcon(tech.icon)}
                </div>
                <div className="w-full h-[1px] bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                <h3 className="text-[10px] md:text-xs font-bold text-black uppercase tracking-wider leading-tight">
                  {tech.name}
                </h3>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 rounded-2xl bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
