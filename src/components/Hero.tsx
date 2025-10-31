import React from "react";
import DiagonalIconTrain from "./DiagonalIconTrain";
import { MISSION_STATEMENT } from "./data";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-visible bg-gradient-to-b from-blue-200 to-white pt-20 pb-32 md:pt-32 md:pb-48 shadow-inner fade-out-mask min-h-screen justify-center items-center flex flex-col"
    >
      {/* --- Animated Diagonal Icon Trains --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* ... (Your DiagonalIconTrain components) ... */}
        <DiagonalIconTrain
          duration="25s"
          offsetClass="bottom-0 left-0 sm:-left-10 w-32 sm:w-64 h-full opacity-30 fade-move"
          isReversed={true}
        />
        <DiagonalIconTrain
          duration="18s"
          offsetClass="top-1/4 right-0 w-32 sm:w-64 h-full opacity-30 fade-move"
          isReversed={false}
        />
        <DiagonalIconTrain
          duration="13s"
          offsetClass="top-0 left-1/2 -translate-x-1/2 w-32 sm:w-64 h-full opacity-30 fade-move"
          isReversed={true}
        />
      </div>

      {/* --- CUSTOM DIAGONAL IMAGE BACKGROUND --- */}
      {/* This element is positioned behind the main text (z-10) and has the visual image/effect. */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-3/5 lg:w-1/2 z-1 transform skew-x-[-15deg] origin-top-rght opacity-30 md:opacity-0" // Skew for diagonal look
        style={{
          // Use a placeholder image URL for the background
          backgroundImage: "url('/src/assets/ytyt.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // The image needs to be large enough to handle the skew and still cover the area
        }}
      >
        {/* A simple placeholder color if you don't have an image yet */}
        <div className="absolute inset-0 bg-blue-100/10"></div>
      </div>
      {/* Tailwind Classes Explained:
        - absolute inset-y-0 right-0: Positions it to fill the height on the right side.
        - w-full md:w-3/5 lg:w-1/2: Controls the width, making it start roughly from the center-right.
        - z-1: Positions it *behind* the main content (z-10) but *above* the icon trains (z-0).
        - transform skew-x-[-15deg]: Creates the diagonal/parallel effect.
        - origin-bottom-right: Ensures the skew pivots from the bottom right corner, aligning the top edge.
        - opacity-10: Keeps it subtle, as a background element.
      */}

      {/* --- Foreground Content (z-10) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block px-4 py-1 mb-6 text-sm font-semibold rounded-full bg-blue-600 text-white shadow-lg animate-pulse">
          {MISSION_STATEMENT}
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900 leading-tight text-start animate-slide-in">
          Engineering <span className="text-blue-700">Secure, Scalable</span>
          <br className="hidden lg:inline" /> & Future-Ready Software.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 max-w-4xl font-medium text-start animate-slide-in animate-delay-1">
          We deliver digital excellence through security-driven architecture,
          seamless UX/UI, and resilient cloud-native solutions.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-2xl transition duration-500 ease-in-out transform hover:scale-[1.05] hover:shadow-blue-400/50"
        >
          Start My Project Blueprint
        </a>
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
        `}
      </style>
    </section>
  );
};

export default Hero;
