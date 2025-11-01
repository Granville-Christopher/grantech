import React from "react";

// --- Custom Animations CSS ---
const CustomStyles: React.FC = () => (
  <style>
    {`
      /* Slide-In Animation for section content */
      @keyframes slideInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-slide-in {
        animation: slideInUp 0.8s ease-out forwards;
        opacity: 0;
      }
      .animate-delay-1 { animation-delay: 0.1s; }
      .animate-delay-2 { animation-delay: 0.3s; }
      .animate-delay-3 { animation-delay: 0.5s; }
      .animate-delay-4 { animation-delay: 0.7s; }
      .animate-delay-5 { animation-delay: 0.9s; }
      .animate-delay-6 { animation-delay: 1.1s; }

      /* Infinite Vertical Scroll Animation for Testimonials */
      @keyframes testimonial-scroll {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
      }
      .carousel-inner {
          animation: testimonial-scroll 40s linear infinite;
      }
      /* Gradient mask for testimonial fade-out effect */
      .carousel-mask {
          mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
      }

      /* Diagonal Slide Down Animation for Hero Icons */
      @keyframes diagonal-slide-down {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
      }

      /* Mask for fading icons at the bottom of the Hero section */
      .fade-out-mask {
          mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
      }

      /* Blueprint Grid Background */
      .blueprint-bg {
          background-color: #f7fbff; /* Blue-50 equivalent */
          background-image: linear-gradient(to right, #e0f2ff 1px, transparent 1px),
                            linear-gradient(to bottom, #e0f2ff 1px, transparent 1px);
          background-size: 20px 20px; /* Size of each square in the grid */
      }

      /* Horizontal Ticker Animation */
      /* Horizontal Ticker Animation */
      :root {
        --ticker-duration: 40s; /* increase = slower, decrease = faster */
      }
      
      /* Safety: prevent page horizontal overflow */
      html, body {
        overflow-x: hidden !important;
      }
      
      /* wrapper */
      .ticker-wrapper {
        width: 100%;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 0.5rem 0;               /* vertical breathing room */
        background: rgba(239, 246, 255, 0.15); /* faint blue-ish band (optional) */
        border-radius: 9999px;
      }
      
      /* inner track - contents duplicated for perfect loop */
      .ticker-animation {
        display: flex;
        align-items: center;
        white-space: nowrap;
        width: max-content;              /* important for exact duplication */
        animation: ticker-scroll var(--ticker-duration) linear infinite;
        will-change: transform;
      }
      
      /* animation scrolls the full duplicate set by -50% */
      @keyframes ticker-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      /* pause on hover */
      .ticker-wrapper:hover .ticker-animation {
        animation-play-state: paused;
      }
      
      /* each item style */
      .ticker-item {
        display: inline-block;
        flex-shrink: 0;
        margin-right: 2.5rem;            /* spacing between items */
        font-weight: 700;
        font-size: 0.95rem;
        color: #1e40af;                  /* blue-800 (tailwind-ish) */
        text-transform: uppercase;
        letter-spacing: 0.06em;
        padding: 0.25rem 0.4rem;
        border-radius: 0.5rem;
        background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0));
      }
      
      /* responsive: slower on small screens if you want even more readable */
      @media (max-width: 1024px) {
        :root { --ticker-duration: 45s; }
        .ticker-item { font-size: 0.92rem; margin-right: 2rem; }
      }
      @media (max-width: 768px) {
        :root { --ticker-duration: 50s; }
        .ticker-item { font-size: 0.9rem; margin-right: 1.6rem; }
      }
      @media (max-width: 480px) {
        :root { --ticker-duration: 55s; }
        .ticker-item { font-size: 0.88rem; margin-right: 1.2rem; }
      }
      
      /* Safety: disable horizontal overflow globally */
      html, body {
        overflow-x: hidden !important;
      }
        

      /* Dynamic Section Divider (Final Concept) */
      .section-fold-top {
          clip-path: polygon(0 4vw, 100% 0, 100% 100%, 0% 100%);
          @media (max-width: 768px) {
              clip-path: polygon(0 15px, 100% 0, 100% 100%, 0% 100%);
          }
      }
    `}
  </style>
);

export default CustomStyles;
