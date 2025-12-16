import React from "react";
import DiagonalIconTrain from "./DiagonalIconTrain";
import { MISSION_STATEMENT } from "./data";

const Hero: React.FC = () => {
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
      <div className="w-full px-6 md:px-96 relative z-10">
        <div className="max-w-xl">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-semibold rounded-full bg-black text-white shadow-lg animate-pulse">
            {MISSION_STATEMENT}
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 text-black leading-tight animate-slide-in">
            Engineering <span className="text-black">Secure, Scalable</span>
            <br className="hidden lg:inline" /> & Future-Ready Software.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black/80 mb-10 max-w-3xl font-medium animate-slide-in animate-delay-1">
            We deliver digital excellence through security-driven architecture,
            seamless UX/UI, and resilient cloud-native solutions.
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
