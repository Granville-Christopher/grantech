import React from "react";

const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "25+", label: "Clients worldwide" },
  { value: "5+", label: "Years delivering" },
  { value: "300+", label: "Problems solved" },
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="bg-[#f4f5f7] px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-[1.75rem] font-semibold tracking-tight text-navy md:text-6xl">{item.value}</p>
            <p className="mt-2 text-sm text-navy/50">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
