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
      @keyframes ticker-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      /* Wrapper to constrain overflow */
      .ticker-wrapper {
        width: 100vw;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
      }
      
      /* Scrolling inner content */
      .ticker-animation {
        display: flex;
        align-items: center;
        white-space: nowrap;
        animation: ticker-scroll 30s linear infinite;
        will-change: transform;
      }
      
      /* ✅ Pause on hover */
      .ticker-wrapper:hover .ticker-animation {
        animation-play-state: paused;
      }
      
      .ticker-animation > * {
        flex-shrink: 0;
      }
      
      /* Responsive animation speeds */
      @media (max-width: 1024px) {
        .ticker-animation {
          animation-duration: 20s;
        }
      }
      
      @media (max-width: 768px) {
        .ticker-animation {
          animation-duration: 15s;
        }
      }
      
      @media (max-width: 480px) {
        .ticker-animation {
          animation-duration: 12s;
        }
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
