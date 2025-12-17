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
              {/* Microsoft Logo */}
              <div className="w-8 h-8 rounded-full bg-white border-2 border-white/30 flex items-center justify-center overflow-hidden p-1.5">
                <svg viewBox="0 0 23 23" className="w-full h-full">
                  <rect fill="#F25022" x="0" y="0" width="11" height="11" />
                  <rect fill="#7FBA00" x="12" y="0" width="11" height="11" />
                  <rect fill="#00A4EF" x="0" y="12" width="11" height="11" />
                  <rect fill="#FFB900" x="12" y="12" width="11" height="11" />
                </svg>
              </div>
              {/* Google Logo */}
              <div className="w-8 h-8 rounded-full bg-white border-2 border-white/30 flex items-center justify-center overflow-hidden p-1.5">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
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
