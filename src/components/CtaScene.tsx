import React, { useEffect, useRef } from "react";
import { box, cylinder, hemisphere, line3, poly, project, type Cam } from "./iso";

const ink = "rgba(226,234,246,0.78)";
const mid = "rgba(226,234,246,0.45)";
const faint = "rgba(226,234,246,0.22)";
const accent = "rgba(0,200,255,0.9)";

function drawScene(ctx: CanvasRenderingContext2D, w: number, h: number, yaw: number, t: number) {
  ctx.clearRect(0, 0, w, h);
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  const cam: Cam = {
    yaw,
    tilt: 0.66,
    zScale: 0.58,
    lean: 0.42,
    scale: Math.min(w, h) * 0.11,
    ox: w * 0.5,
    oy: h * 0.7,
  };

  for (let i = -8; i <= 8; i++) {
    const g = i * 0.72;
    const a: [number, number, number] = [g, -7.2, 0];
    const b: [number, number, number] = [g, 7.2, 0];
    const c: [number, number, number] = [-7.2, g, 0];
    const d: [number, number, number] = [7.2, g, 0];
    line3(ctx, a, b, cam, { color: faint, width: 1 });
    line3(ctx, c, d, cam, { color: faint, width: 1 });
  }

  const shell = (cx: number, cy: number, a0: number, a1: number, r: number, height: number) => {
    for (let i = 0; i <= 7; i++) {
      const a = a0 + ((a1 - a0) * i) / 7;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      line3(ctx, [x, y, 0], [x, y, height], cam, { color: ink, width: 1.15 });
    }
    for (let i = 0; i <= 8; i++) {
      const z = (height * i) / 8;
      const pts: [number, number][] = [];
      for (let k = 0; k <= 56; k++) {
        const a = a0 + ((a1 - a0) * k) / 56;
        pts.push(project(cx + Math.cos(a) * r, cy + Math.sin(a) * r, z, cam));
      }
      poly(ctx, pts, { color: ink, width: 1.2 });
    }
  };
  shell(-3.35, 0.2, 0.15, 2.05, 1.35, 1.45);

  hemisphere(ctx, 0, 0, 2.15, cam, { color: ink, width: 1.05 });
  const wedge: [number, number][] = [];
  for (let k = 0; k <= 14; k++) {
    const theta = (k / 14) * (Math.PI / 2);
    const phi = 0.55;
    wedge.push(
      project(Math.cos(phi) * Math.sin(theta) * 2.15, Math.sin(phi) * Math.sin(theta) * 2.15, Math.cos(theta) * 2.15, cam),
    );
  }
  const wedgeB: [number, number][] = [];
  for (let k = 0; k <= 14; k++) {
    const theta = (k / 14) * (Math.PI / 2);
    const phi = 1.15;
    wedgeB.push(
      project(Math.cos(phi) * Math.sin(theta) * 2.15, Math.sin(phi) * Math.sin(theta) * 2.15, Math.cos(theta) * 2.15, cam),
    );
  }
  poly(ctx, wedge, { color: accent, width: 1.15 });
  poly(ctx, wedgeB, { color: accent, width: 1.15 });

  const orbit: [number, number][] = [];
  for (let k = 0; k <= 40; k++) {
    const a = Math.PI * 0.08 + ((Math.PI * 0.84) * k) / 40;
    orbit.push(project(Math.cos(a) * 3.15, Math.sin(a) * 0.35, 1.15 + Math.sin(a) * 1.7, cam));
  }
  ctx.lineDashOffset = -t * 8;
  poly(ctx, orbit, { color: accent, width: 1.2, dash: [3, 7] });
  ctx.lineDashOffset = 0;

  const arrow: Array<[number, number]> = [
    [-0.15, -0.42],
    [0.85, -0.42],
    [0.85, -0.92],
    [1.85, 0],
    [0.85, 0.92],
    [0.85, 0.42],
    [-0.15, 0.42],
  ];
  const ax = 3.15;
  const ay = 0.35;
  const top = arrow.map(([x, y]) => project(ax + x, ay + y, 0.62, cam));
  const bot = arrow.map(([x, y]) => project(ax + x, ay + y, 0, cam));
  poly(ctx, top, { color: ink, width: 1.15, close: true });
  poly(ctx, bot, { color: mid, width: 1, close: true });
  arrow.forEach((_, i) => {
    line3(ctx, [ax + arrow[i][0], ay + arrow[i][1], 0], [ax + arrow[i][0], ay + arrow[i][1], 0.62], cam, {
      color: ink,
      width: 1,
    });
  });

  box(ctx, -1.55, -2.55, 0, 0.42, 0.42, 0.42, cam, { color: ink, width: 1.05 });
  box(ctx, 2.15, -2.35, 0, 0.34, 0.34, 0.55, cam, { color: mid, width: 1 });
  box(ctx, 4.7, -1.7, 0, 0.38, 0.38, 0.38, cam, { color: ink, width: 1 });
  cylinder(ctx, -2.55, -1.85, 0, 0.18, 0.7, cam, { color: mid, width: 1 }, 2);

  for (const [x, y, r] of [
    [-1.7, 2.15, 0.16],
    [-1.25, 2.35, 0.13],
    [-0.85, 2.15, 0.12],
  ] as Array<[number, number, number]>) {
    const pts: [number, number][] = [];
    for (let k = 0; k <= 24; k++) {
      const a = (k / 24) * Math.PI * 2;
      pts.push(project(x + Math.cos(a) * r, y + Math.sin(a) * r, 0.02, cam));
    }
    poly(ctx, pts, { color: mid, width: 1 });
  }

  const disc: [number, number][] = [];
  for (let k = 0; k <= 28; k++) {
    const a = (k / 28) * Math.PI * 2;
    disc.push(project(1.55 + Math.cos(a) * 0.38, 2.05 + Math.sin(a) * 0.38, 0.02, cam));
  }
  poly(ctx, disc, { color: mid, width: 1 });
  const spiral: [number, number][] = [];
  for (let k = 0; k <= 30; k++) {
    const a = (k / 30) * Math.PI * 3.2;
    const r = 0.08 + (k / 30) * 0.28;
    spiral.push(project(1.55 + Math.cos(a) * r, 2.05 + Math.sin(a) * r, 0.04, cam));
  }
  poly(ctx, spiral, { color: accent, width: 1 });

  const hex: [number, number][] = [];
  const hexTop: [number, number][] = [];
  for (let i = 0; i <= 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.3;
    hex.push(project(5.15 + Math.cos(a) * 0.28, -0.4 + Math.sin(a) * 0.28, 0, cam));
    hexTop.push(project(5.15 + Math.cos(a) * 0.28, -0.4 + Math.sin(a) * 0.28, 0.32, cam));
  }
  poly(ctx, hex, { color: ink, width: 1 });
  poly(ctx, hexTop, { color: ink, width: 1 });

  const wave: [number, number][] = [];
  const wave2: [number, number][] = [];
  for (let i = 0; i <= 16; i++) {
    const u = i / 16;
    const z = 1.15 + Math.sin(u * Math.PI * 2) * 0.28;
    wave.push(project(3.6 + u * 1.3, -2.4, z, cam));
    wave2.push(project(3.6 + u * 1.3, -2.15, z, cam));
  }
  poly(ctx, wave, { color: mid, width: 1.05 });
  poly(ctx, wave2, { color: mid, width: 1.05 });
}

const CtaScene: React.FC = () => {
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
      const yaw = reduced ? 0.95 : 0.95 + Math.sin(t * 0.22) * 0.12;
      drawScene(ctx, canvas.clientWidth, canvas.clientHeight, yaw, reduced ? 0 : t);
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

export default CtaScene;
