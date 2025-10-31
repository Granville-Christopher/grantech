import React from "react";
import type { Testimonial } from "./data";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel: React.FC<{ testimonials: Testimonial[] }> = ({
  testimonials,
}) => {
  const scrollingList = [...testimonials, ...testimonials];
  return (
    <div className="relative mx-auto w-full max-w-lg md:max-w-xl overflow-hidden h-[629px] md:h-[768px] carousel-mask">
      <div
        className="carousel-inner"
        style={{ height: `${scrollingList.length * 280}px` }}
      >
        {scrollingList.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
