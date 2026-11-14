import React, { useEffect, useRef, useState } from "react";
import { engagementModels } from "./data";

type Role = "offLeft" | "left" | "center" | "right" | "offRight";

const count = engagementModels.length;

const mod = (value: number) => ((value % count) + count) % count;

type Spot = { left: string; top: string; width: string; scale: number; origin: string };

const row: Record<Role, Spot> = {
  offLeft: { left: "-34%", top: "0%", width: "30%", scale: 0.82, origin: "left top" },
  left: { left: "0%", top: "0%", width: "30%", scale: 0.82, origin: "left top" },
  center: { left: "32%", top: "0%", width: "36%", scale: 1.18, origin: "center top" },
  right: { left: "70%", top: "0%", width: "30%", scale: 0.82, origin: "right top" },
  offRight: { left: "104%", top: "0%", width: "30%", scale: 0.82, origin: "right top" },
};

const stack: Record<Role, Spot> = {
  offLeft: { left: "0%", top: "-196px", width: "100%", scale: 0.94, origin: "center center" },
  left: { left: "0%", top: "0px", width: "100%", scale: 0.94, origin: "center center" },
  center: { left: "0%", top: "196px", width: "100%", scale: 1, origin: "center center" },
  right: { left: "0%", top: "392px", width: "100%", scale: 0.94, origin: "center center" },
  offRight: { left: "0%", top: "588px", width: "100%", scale: 0.94, origin: "center center" },
};

const Contact: React.FC = () => {
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"idle" | "prep" | "go">("idle");
  const [jump, setJump] = useState(false);
  const [stacked, setStacked] = useState(false);
  const paused = useRef(false);

  const leftIndex = mod(active - 1);
  const rightIndex = mod(active + 1);
  const moving = phase === "go";

  const cards = [
    { key: `enter-${rightIndex}-${active}`, index: rightIndex, from: "offLeft" as Role, to: "left" as Role, clone: true },
    { key: `card-${leftIndex}`, index: leftIndex, from: "left" as Role, to: "center" as Role, clone: false },
    { key: `card-${active}`, index: active, from: "center" as Role, to: "right" as Role, clone: false },
    { key: `card-${rightIndex}`, index: rightIndex, from: "right" as Role, to: "offRight" as Role, clone: false },
  ].filter((card) => phase !== "idle" || !card.clone);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      if (paused.current || phase !== "idle") return;
      setPhase("prep");
    }, 4200);
    return () => window.clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "prep") return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setPhase("go"));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "go") return;
    const id = window.setTimeout(() => {
      setJump(true);
      setActive((current) => mod(current - 1));
      setPhase("idle");
    }, 720);
    return () => window.clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const apply = () => setStacked(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!jump) return;
    const id = requestAnimationFrame(() => setJump(false));
    return () => cancelAnimationFrame(id);
  }, [jump]);

  return (
    <section id="contact" className="bg-[#f4f5f7] px-3 py-6 md:px-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy px-[30px] pb-8 pt-8 text-center text-white md:px-16 md:pb-20 md:pt-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan md:text-[12px]">Engage</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-[1.65rem] font-semibold leading-tight tracking-tight md:mt-4 md:text-6xl">
          Let’s build
          <br />
          something that lasts
        </h2>

        <div
          className="relative mx-auto mt-6 h-[530px] w-full max-w-5xl overflow-hidden md:mt-14 md:h-[280px]"
          onMouseEnter={() => {
            paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = false;
          }}
        >
          {cards.map((card) => {
            const role = moving ? card.to : card.from;
            const spot = (stacked ? stack : row)[role];
            const center = role === "center";
            const line = "rgba(255,255,255,0.14)";
            return (
              <article
                key={card.key}
                className="absolute p-4 text-left md:p-6"
                style={{
                  left: spot.left,
                  top: spot.top,
                  width: spot.width,
                  transform: `scale(${spot.scale})`,
                  transformOrigin: spot.origin,
                  zIndex: center ? 3 : 1,
                  borderRadius: stacked ? "1.25rem" : role === "left" || role === "offLeft" ? "0 1.5rem 1.5rem 0" : role === "right" || role === "offRight" ? "1.5rem 0 0 1.5rem" : "1.5rem",
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderTopColor: center && stacked ? "rgba(255,255,255,0.28)" : line,
                  borderBottomColor: center && stacked ? "rgba(255,255,255,0.28)" : line,
                  borderLeftColor: center && stacked ? "rgba(255,255,255,0.28)" : line,
                  borderRightColor: center && stacked ? "rgba(255,255,255,0.28)" : line,
                  borderLeftWidth: !stacked && (role === "left" || role === "offLeft") ? 0 : 1,
                  borderRightWidth: !stacked && (role === "right" || role === "offRight") ? 0 : 1,
                  background: "#0c1730",
                  WebkitMaskImage: stacked
                    ? "none"
                    : role === "left" || role === "offLeft"
                      ? "linear-gradient(90deg, transparent 0%, #000 12%, #000 100%)"
                      : role === "right" || role === "offRight"
                        ? "linear-gradient(270deg, transparent 0%, #000 12%, #000 100%)"
                        : "none",
                  maskImage: stacked
                    ? "none"
                    : role === "left" || role === "offLeft"
                      ? "linear-gradient(90deg, transparent 0%, #000 12%, #000 100%)"
                      : role === "right" || role === "offRight"
                        ? "linear-gradient(270deg, transparent 0%, #000 12%, #000 100%)"
                        : "none",
                  transition: jump ? "none" : "left 700ms ease, top 700ms ease, width 700ms ease, transform 700ms ease",
                }}
              >
                <h3 className={`font-semibold ${stacked ? "text-sm" : "text-base md:text-lg"}`}>{engagementModels[card.index].title}</h3>
                <p className={`mt-2 text-xs leading-relaxed text-white/60 md:mt-3 md:text-sm ${stacked ? "line-clamp-3" : ""}`}>{engagementModels[card.index].description}</p>
                <p className="mt-3 text-xs font-medium text-cyan md:mt-5 md:text-sm">{engagementModels[card.index].priceAnchor}</p>
              </article>
            );
          })}
        </div>

        <p className="mt-8 break-words text-xs text-white/55 md:mt-10 md:text-sm">contact@granvillebuchi.com</p>
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
