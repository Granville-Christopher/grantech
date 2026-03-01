import React, { useState, useEffect } from "react";
import DiagonalIconTrain from "./DiagonalIconTrain";
import { MISSION_STATEMENT } from "./data";

const Hero: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "120+", label: "Projects Delivered" },
    { value: "25+", label: "Global Clients" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [stats.length]);
  return (
    <section
      id="home"
      className="relative overflow-visible bg-white pt-20 pb-32 md:pt-32 md:pb-48 shadow-inner fade-out-mask min-h-screen justify-center items-center flex flex-col"
    >
      {/* --- Animated Diagonal Icon Trains --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* ... (Your DiagonalIconTrain components) ... */}
        <DiagonalIconTrain
          duration="25s"
          offsetClass="bottom-0 left-0 sm:-left-10 w-32 sm:w-64 h-full opacity-5 fade-move"
          isReversed={true}
        />
        <DiagonalIconTrain
          duration="18s"
          offsetClass="top-1/4 right-0 w-32 sm:w-64 h-full opacity-5 fade-move"
          isReversed={false}
        />
        <DiagonalIconTrain
          duration="13s"
          offsetClass="top-0 left-1/2 -translate-x-1/2 w-32 sm:w-64 h-full opacity-5 fade-move"
          isReversed={true}
        />
      </div>

      <div
        className="absolute inset-y-0  w-full origin-bottom-rght transform opacity-30 md:opacity-20" // Skew for diagonal look
        style={{
          // Use a placeholder image URL for the background
          backgroundImage: "url('/ytyt.jpg')",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // The image needs to be large enough to handle the skew and still cover the area
        }}
      >
        <video
          className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto md:object-cover object-cover  origin-bottom-right"
          autoPlay
          loop
          muted
          playsInline
          poster="/ytyt.jpg"
        >
          <source src="/yyuuy.mp4" type="video/mp4" />
        </video>
      </div>

      {/* --- Foreground Content (z-10) --- */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-left lg:max-w-xl">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 text-sm font-semibold rounded-full bg-black text-white shadow-lg animate-pulse">
            {/* Company Logos */}
            <div className="flex -space-x-2">
              {/* Abstract Logo 1 */}
              <div className="w-8 h-8 rounded-full bg-white border-2 border-white/30 flex items-center justify-center overflow-hidden p-1.5">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <circle cx="12" cy="12" r="10" fill="#0F172A" />
                  <path d="M6 14L10.5 7.5L13.5 12L17.5 8.5L18 16H6Z" fill="#22D3EE" />
                </svg>
              </div>
              {/* Abstract Logo 2 */}
              <div className="w-8 h-8 rounded-full bg-white border-2 border-white/30 flex items-center justify-center overflow-hidden p-1.5">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <rect x="3" y="3" width="18" height="18" rx="4" fill="#111827" />
                  <circle cx="9" cy="9" r="2.5" fill="#F59E0B" />
                  <circle cx="15" cy="9" r="2.5" fill="#EF4444" />
                  <path d="M8 16C8.8 14.8 10.2 14 12 14C13.8 14 15.2 14.8 16 16" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              {/* Amazon/AWS Logo */}
              <div className="w-8 h-8 rounded-full bg-white border-2 border-white/30 flex items-center justify-center overflow-hidden p-1.5">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="#FF9900" d="M10.922 0c-1.97 0-3.57 1.6-3.57 3.57v7.15c0 .98.79 1.77 1.77 1.77h3.57V7.13h-1.77V3.57c0-.98.79-1.77 1.77-1.77s1.77.79 1.77 1.77v3.56h-1.77v5.36h3.57c.98 0 1.77-.79 1.77-1.77V3.57C14.492 1.6 12.892 0 10.922 0z"/>
                  <path fill="#232F3E" d="M17.492 7.13h-1.77v8.92c0 .98.79 1.77 1.77 1.77s1.77-.79 1.77-1.77V7.13zm-5.32 0H10.402v8.92c0 .98.79 1.77 1.77 1.77s1.77-.79 1.77-1.77V7.13z"/>
                </svg>
              </div>
            </div>
            <span>{MISSION_STATEMENT}</span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 text-black leading-tight animate-slide-in">
            Enterprise-Grade Software Development
            <br className="hidden lg:inline" /> That Drives Business Growth
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black/80 mb-10 max-w-3xl font-medium animate-slide-in animate-delay-1">
            Transform your vision into powerful, secure, and scalable digital solutions. 
            We specialize in custom software development, cloud architecture, and enterprise applications 
            that deliver measurable results and competitive advantage.
          </p>

          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold text-white bg-black hover:bg-[#1a1a1a] border-white/20 backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_inset_0_-2px_4px_rgba(0,0,0,0.25),_0_6px_20px_rgba(0,0,0,0.4)]  transition-all duration-700 ease-out transform hover:scale-[1.02] hover:shadow-[inset_0_1px_3px_rgba(255,255,255,0.6),_inset_0_-2px_5px_rgba(0,0,0,0.35),_0_8px_25px_rgba(0,0,0,0.6)] overflow-hidden animate-bounce-subtle"
          >
            {/* ✨ Light Reflection Overlay */}
            {/* <span className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50 rounded-full pointer-events-none"></span> */}

            {/* 💧 Text Layer */}
            <span className="relative z-10 text-white">
              Start My Project Blueprint
            </span>
          </a>
          </div>
        </div>

        {/* Stats Cards at Bottom - Glassmorphism with Staggered Animation */}
        <div className="absolute bottom-[-150px] right-0 w-full max-w-xs z-50">
          <div className="relative h-24 flex items-end justify-end">
            {stats.map((stat, index) => {
              const isActive = activeCard === index;
              const isNext = activeCard === (index + 1) % stats.length;
              
              return (
                <div
                  key={index}
                  className={`absolute w-full max-w-xs   rounded-2xl p-4 md:p-5  transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-y-0 scale-100 z-10"
                      : isNext
                      ? "opacity-0 translate-y-8 scale-95 z-0"
                      : "opacity-0 -translate-y-8 scale-95 z-0"
                  }`}
                >
                  <div className="text-right">
                    <div className="text-xl md:text-2xl font-black text-black">{stat.value}</div>
                    <div className="text-xs font-semibold text-black/80 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* --- Custom Fade Animation Styles --- */}
      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.4; }
          }
          .fade-move {
            animation: fadeInOut 8s ease-in-out infinite;
          }
          @keyframes bounce-subtle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-bounce-subtle {
            animation: bounce-subtle 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
