import React, { useEffect, useRef } from "react";

const line = "rgba(232,236,242,0.82)";
const faint = "rgba(232,236,242,0.38)";
const accent = "#00c8ff";

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg viewBox="0 0 280 180" className="h-full w-full" fill="none" aria-hidden="true">
    <g className="svc-float">{children}</g>
  </svg>
);

const Strategy = () => (
  <Frame>
    <path d="M48 128 C90 128 100 70 140 70 C180 70 190 128 232 128" stroke={faint} strokeWidth="1.4" />
    <path d="M48 128 C90 128 100 70 140 70 C180 70 190 128 232 128" stroke={accent} strokeWidth="1.6" className="svc-dash" />
    <circle cx="48" cy="128" r="5" stroke={line} />
    <circle cx="140" cy="70" r="5" fill={accent} className="svc-pulse" />
    <circle cx="232" cy="128" r="5" stroke={line} />
    <path d="M140 70 V48" stroke={line} />
    <path d="M140 48 h22 l-4 8 h-14 l-4-8z" stroke={accent} />
    <path d="M36 146 h28 M128 88 h24 M220 146 h28" stroke={faint} />
  </Frame>
);

const Build = () => (
  <div className="relative h-full w-full">
    <svg viewBox="0 0 80 140" className="web-phone" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="68" height="132" rx="12" stroke={line} strokeWidth="2.4" />
      <rect x="14" y="18" width="52" height="96" rx="3" stroke={faint} strokeWidth="1.6" />
      <path d="M20 30 h28" stroke={accent} strokeWidth="2" />
      <path d="M20 42 h40 M20 52 h34 M20 62 h38" stroke={line} strokeWidth="1.6" />
      <rect x="20" y="74" width="40" height="22" rx="2" stroke={accent} strokeWidth="1.6" />
      <circle cx="40" cy="124" r="3" fill={faint} />
    </svg>
    <svg viewBox="0 0 280 170" className="web-desk" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="264" height="154" rx="10" stroke={line} strokeWidth="1.6" />
      <path d="M8 32 h264" stroke={faint} />
      <circle cx="22" cy="20" r="3" fill={faint} />
      <circle cx="34" cy="20" r="3" fill={faint} />
      <circle cx="46" cy="20" r="3" fill={accent} />
      <rect x="70" y="14" width="90" height="12" rx="6" stroke={faint} />
      <g className="web-row web-row-a">
        <rect x="24" y="46" width="110" height="52" rx="4" stroke={accent} />
      </g>
      <g className="web-row web-row-b">
        <path d="M148 50 h108" stroke={line} />
        <path d="M148 64 h92" stroke={faint} />
        <path d="M148 78 h100" stroke={faint} />
      </g>
      <g className="web-row web-row-c">
        <rect x="24" y="112" width="70" height="32" rx="3" stroke={line} />
        <rect x="104" y="112" width="70" height="32" rx="3" stroke={faint} />
        <rect x="184" y="112" width="70" height="32" rx="3" stroke={accent} />
      </g>
    </svg>
  </div>
);

const Design = () => (
  <div className="relative h-full w-full overflow-hidden" style={{ perspective: "560px" }} aria-hidden="true">
    <div
      className="absolute left-1/2 top-[64%] h-44 w-56"
      style={{
        transform: "translate(-50%, -50%) rotateX(62deg) rotateZ(-40deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="design-rise d1 absolute left-16 top-0 flex h-[72px] w-[112px] flex-col justify-center gap-2 border border-white/35 px-3">
        <span className="h-px w-full bg-white/40" />
        <span className="h-px w-4/5 bg-white/25" />
        <span className="h-px w-11/12 bg-white/25" />
      </div>
      <div className="design-rise d2 absolute left-8 top-9 h-[80px] w-[124px] border border-white/75">
        <span className="absolute right-2 top-1 text-[9px] tracking-[0.18em] text-white/55">UX</span>
        <span className="absolute left-3 top-7 h-8 w-8 rounded-full border border-[#00c8ff]" />
        <span className="absolute left-14 right-3 top-8 h-px bg-white/45" />
        <span className="absolute left-14 right-6 top-12 h-px bg-white/25" />
        <span className="absolute left-14 right-4 top-16 h-px bg-white/25" />
      </div>
      <div className="design-rise d3 absolute left-0 top-[4.6rem] grid h-[92px] w-[104px] grid-cols-4 gap-1 border border-white/80 p-1.5">
        {Array.from({ length: 16 }, (_, index) => {
          const hot = index === 5 || index === 6 || index === 9;
          return (
            <span
              key={index}
              className="border"
              style={{
                borderColor: hot ? "#00c8ff" : "rgba(232,236,242,0.35)",
                background: hot ? "rgba(0,200,255,0.4)" : "transparent",
              }}
            />
          );
        })}
      </div>
    </div>
  </div>
);

const findings = [
  { angle: 0.5, ring: 0.55, score: "9.8" },
  { angle: 2.15, ring: 0.82, score: "7.4" },
  { angle: 3.55, ring: 0.42, score: "4.2" },
  { angle: 5.1, ring: 0.7, score: "8.6" },
];

const Security = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, rect.width * dpr);
      canvas.height = Math.max(1, rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const start = performance.now();

    const frame = (now: number) => {
      const t = (now - start) / 1000;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      const cx = w * 0.5;
      const cy = h * 0.5;
      const s = Math.min(w, h) / 180;
      const ink = "rgba(226,234,246,0.82)";
      const soft = "rgba(226,234,246,0.32)";

      ctx.beginPath();
      ctx.moveTo(cx, cy - 62 * s);
      ctx.lineTo(cx + 48 * s, cy - 42 * s);
      ctx.lineTo(cx + 48 * s, cy + 4 * s);
      ctx.quadraticCurveTo(cx + 48 * s, cy + 42 * s, cx, cy + 64 * s);
      ctx.quadraticCurveTo(cx - 48 * s, cy + 42 * s, cx - 48 * s, cy + 4 * s);
      ctx.lineTo(cx - 48 * s, cy - 42 * s);
      ctx.closePath();
      ctx.strokeStyle = ink;
      ctx.lineWidth = 1.4;
      ctx.stroke();

      const radar = 34 * s;
      ctx.strokeStyle = soft;
      ctx.lineWidth = 1;
      for (const ring of [0.38, 0.68, 1]) {
        ctx.beginPath();
        ctx.arc(cx, cy, radar * ring, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(cx - radar, cy);
      ctx.lineTo(cx + radar, cy);
      ctx.moveTo(cx, cy - radar);
      ctx.lineTo(cx, cy + radar);
      ctx.stroke();

      const sweep = reduced ? 0.9 : (t * 1.35) % (Math.PI * 2);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radar, sweep - 0.55, sweep);
      ctx.closePath();
      ctx.fillStyle = "rgba(0,200,255,0.14)";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(sweep) * radar, cy + Math.sin(sweep) * radar);
      ctx.strokeStyle = "#00c8ff";
      ctx.lineWidth = 1.4;
      ctx.stroke();

      ctx.font = `600 ${Math.max(9, 10 * s)}px Inter, sans-serif`;
      ctx.textBaseline = "middle";
      let found = 0;
      findings.forEach((item) => {
        const delta = (sweep - item.angle + Math.PI * 2) % (Math.PI * 2);
        const hit = reduced || (delta > 0.04 && delta < 4.4);
        if (hit) found += 1;
        const x = cx + Math.cos(item.angle) * radar * item.ring;
        const y = cy + Math.sin(item.angle) * radar * item.ring;
        ctx.beginPath();
        ctx.arc(x, y, hit ? 3.2 * s : 2 * s, 0, Math.PI * 2);
        ctx.fillStyle = hit ? "#ff3b3b" : "rgba(255,59,59,0.28)";
        ctx.fill();
        if (hit) {
          ctx.fillStyle = "rgba(255,210,210,0.95)";
          ctx.fillText(item.score, x + 6 * s, y - 1);
        }
      });

      ctx.fillStyle = "rgba(226,234,246,0.7)";
      ctx.font = `600 ${Math.max(10, 11 * s)}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(String(found).padStart(2, "0"), cx, cy + 52 * s);
      ctx.textAlign = "left";
      if (!reduced) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);
  return <canvas ref={ref} className="h-full w-full" aria-hidden="true" />;
};

const Data = () => (
  <Frame>
    <ellipse cx="78" cy="52" rx="26" ry="8" stroke={line} />
    <path d="M52 52 v26 c0 5 12 8 26 8 s26-3 26-8 V52" stroke={line} />
    <path d="M52 64 c0 5 12 8 26 8 s26-3 26-8" stroke={faint} />
    <ellipse cx="78" cy="104" rx="26" ry="8" stroke={accent} />
    <path d="M52 104 v36 c0 5 12 8 26 8 s26-3 26-8 v-36" stroke={accent} />
    <path d="M52 122 c0 5 12 8 26 8 s26-3 26-8" stroke={faint} />
    <path d="M118 148 H250" stroke={line} />
    <rect x="132" y="112" width="18" height="36" rx="2" stroke={line} className="svc-bar" />
    <rect x="160" y="78" width="18" height="70" rx="2" stroke={accent} className="svc-bar delay-2" />
    <rect x="188" y="94" width="18" height="54" rx="2" stroke={line} className="svc-bar delay-3" />
    <rect x="216" y="122" width="18" height="26" rx="2" stroke={faint} className="svc-bar" />
  </Frame>
);

const Cloud = () => (
  <svg viewBox="0 0 280 180" className="h-full w-full" fill="none" aria-hidden="true">
    <g className="svc-float">
      <path
        d="M118 78c-2-18 16-28 30-20 6-16 28-18 38-4 14-8 32 2 30 18 16 2 20 20 6 28H112c-14-2-16-16 6-22z"
        stroke={line}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M40 138 C82 138 96 96 140 92 C184 96 198 138 240 138" stroke={faint} strokeWidth="1.4" />
      <path
        d="M40 138 C82 138 96 96 140 92 C184 96 198 138 240 138"
        stroke={accent}
        strokeWidth="1.6"
        className="svc-dash"
      />
      <circle cx="40" cy="138" r="5" stroke={line} />
      <circle cx="140" cy="92" r="5" fill={accent} className="svc-pulse" />
      <circle cx="240" cy="138" r="5" stroke={line} />
      <path d="M140 92 V78" stroke={accent} />
    </g>
  </svg>
);

const arts: Record<string, React.FC> = {
  "IT Consultancy & Strategy": Strategy,
  "Web & App Development": Build,
  "Design-First UX/UI": Design,
  "Cybersecurity & Compliance": Security,
  "Data Strategy & AI Integration": Data,
  "Cloud Operations & DevOps": Cloud,
};

const ServiceArt: React.FC<{ title: string }> = ({ title }) => {
  const Art = arts[title] ?? Strategy;
  return <Art />;
};

export default ServiceArt;
