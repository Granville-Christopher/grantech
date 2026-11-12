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
    const id = window.setTimeout(() => setWrap(null), 720);
    return () => window.clearTimeout(id);
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
          className="relative mx-auto mt-14 h-[300px] max-w-4xl sm:h-[280px]"
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
            return (
              <article
                key={model.title}
                className="absolute left-1/2 top-0 w-[min(78%,20rem)] rounded-3xl border border-white/10 bg-[#0c1730] p-6 text-left shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
                style={{
                  transform: `translateX(calc(-50% + ${slot * 12}vw)) translateY(${center ? 0 : 26}px) scale(${center ? 1.12 : 0.76})`,
                  zIndex: center ? 3 : 1,
                  opacity: snapping ? 0 : center ? 1 : 0.55,
                  transition: snapping
                    ? "none"
                    : "transform 700ms ease, opacity 700ms ease",
                }}
              >
                <h3 className="text-lg font-semibold">{model.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{model.description}</p>
                <p className="mt-5 text-sm font-medium text-cyan">{model.priceAnchor}</p>
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
