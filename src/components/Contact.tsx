import React, { useEffect, useRef, useState } from "react";
import { engagementModels } from "./data";

const slotOf = (index: number, active: number, count: number) => {
  const diff = (((index - active) % count) + count) % count;
  return diff === count - 1 ? -1 : diff;
};

const Contact: React.FC = () => {
  const count = engagementModels.length;
  const [active, setActive] = useState(0);
  const [wrap, setWrap] = useState<number | null>(null);
  const paused = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      if (paused.current) return;
      setActive((current) => {
        setWrap((current + 1) % count);
        return (current + count - 1) % count;
      });
    }, 4200);
    return () => window.clearInterval(id);
  }, [count]);

  useEffect(() => {
    if (wrap === null) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setWrap(null));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [wrap]);

  return (
    <section id="contact" className="bg-[#f4f5f7] px-3 py-6 md:px-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 pb-16 pt-16 text-center text-white md:px-10 md:pb-20 md:pt-20">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cyan">Engage</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Let’s build
          <br />
          something that lasts
        </h2>

        <div
          className="relative mx-auto mt-14 h-[430px] w-full max-w-6xl sm:h-[250px]"
          onMouseEnter={() => {
            paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = false;
          }}
        >
          {engagementModels.map((model, index) => {
            const slot = slotOf(index, active, count);
            const center = slot === 0;
            const snapping = wrap === index;
            const left = slot === -1 ? "0%" : slot === 0 ? "34%" : "68%";
            return (
              <article
                key={model.title}
                className="absolute top-0 w-[32%] rounded-3xl border border-white/10 bg-[#0c1730] p-4 text-left md:p-6"
                style={{
                  left,
                  transform: `translateY(${center ? 0 : 8}px) scale(${center ? 1.04 : 1})`,
                  transformOrigin: "center top",
                  zIndex: center ? 2 : 1,
                  opacity: 1,
                  transition: snapping ? "none" : "left 700ms ease, transform 700ms ease",
                }}
              >
                <h3 className="text-base font-semibold md:text-lg">{model.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/60 md:text-sm">{model.description}</p>
                <p className="mt-5 text-xs font-medium text-cyan md:text-sm">{model.priceAnchor}</p>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-white/55">contact@granvillebuchi.com</p>
        <a
          href="mailto:christophergranville0@gmail.com"
          className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-[color,background-color,transform] duration-300 hover:bg-cyan active:scale-[0.98]"
        >
          Book a consultation
        </a>
      </div>
    </section>
  );
};

export default Contact;
