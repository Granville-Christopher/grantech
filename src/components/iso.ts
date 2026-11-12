export type Cam = { yaw: number; scale: number; ox: number; oy: number; tilt?: number; zScale?: number; lean?: number };

export function project(x: number, y: number, z: number, cam: Cam): [number, number] {
  const tilt = cam.tilt ?? 0.72;
  const zScale = cam.zScale ?? 0.7;
  const lean = cam.lean ?? 0.28;
  const c = Math.cos(cam.yaw);
  const s = Math.sin(cam.yaw);
  const xr = x * c - y * s;
  const yr = x * s + y * c;
  const sx = (xr - yr) * Math.cos(tilt) + z * lean;
  const sy = (xr + yr) * Math.sin(tilt) - z * zScale;
  return [cam.ox + sx * cam.scale, cam.oy + sy * cam.scale];
}

type Stroke = { color: string; width?: number; dash?: number[]; close?: boolean };

export function poly(
  ctx: CanvasRenderingContext2D,
  pts: Array<[number, number] | null>,
  stroke: Stroke,
) {
  ctx.beginPath();
  let moved = false;
  for (const p of pts) {
    if (!p) {
      moved = false;
      continue;
    }
    if (!moved) {
      ctx.moveTo(p[0], p[1]);
      moved = true;
    } else ctx.lineTo(p[0], p[1]);
  }
  if (stroke.close) ctx.closePath();
  ctx.strokeStyle = stroke.color;
  ctx.lineWidth = stroke.width ?? 1;
  ctx.setLineDash(stroke.dash ?? []);
  ctx.stroke();
}

export function line3(
  ctx: CanvasRenderingContext2D,
  a: [number, number, number],
  b: [number, number, number],
  cam: Cam,
  stroke: Stroke,
) {
  poly(ctx, [project(...a, cam), project(...b, cam)], stroke);
}

export function box(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  z: number,
  w: number,
  d: number,
  h: number,
  cam: Cam,
  stroke: Stroke,
) {
  const p = (px: number, py: number, pz: number) => project(px, py, pz, cam);
  const c = [
    p(x, y, z),
    p(x + w, y, z),
    p(x + w, y + d, z),
    p(x, y + d, z),
    p(x, y, z + h),
    p(x + w, y, z + h),
    p(x + w, y + d, z + h),
    p(x, y + d, z + h),
  ];
  poly(ctx, [c[0], c[1], c[2], c[3]], { ...stroke, close: true });
  poly(ctx, [c[4], c[5], c[6], c[7]], { ...stroke, close: true });
  poly(ctx, [c[0], c[4], null, c[1], c[5], null, c[2], c[6], null, c[3], c[7]], stroke);
}

export function cylinder(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  z: number,
  r: number,
  h: number,
  cam: Cam,
  stroke: Stroke,
  rings = 3,
) {
  const loop = (zz: number) => {
    const pts: [number, number][] = [];
    for (let i = 0; i <= 36; i++) {
      const a = (i / 36) * Math.PI * 2;
      pts.push(project(cx + Math.cos(a) * r, cy + Math.sin(a) * r, zz, cam));
    }
    return pts;
  };
  poly(ctx, loop(z), stroke);
  poly(ctx, loop(z + h), stroke);
  for (let i = 1; i < rings; i++) poly(ctx, loop(z + (h * i) / rings), stroke);
  for (const a of [0.3, 1.6, 2.8, 4.2]) {
    line3(
      ctx,
      [cx + Math.cos(a) * r, cy + Math.sin(a) * r, z],
      [cx + Math.cos(a) * r, cy + Math.sin(a) * r, z + h],
      cam,
      stroke,
    );
  }
}

export function hemisphere(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  cam: Cam,
  stroke: Stroke,
) {
  for (let i = 1; i <= 7; i++) {
    const theta = (i / 8) * (Math.PI / 2);
    const z = Math.cos(theta) * radius;
    const r = Math.sin(theta) * radius;
    const pts: [number, number][] = [];
    for (let k = 0; k <= 48; k++) {
      const phi = (k / 48) * Math.PI * 2;
      pts.push(project(cx + Math.cos(phi) * r, cy + Math.sin(phi) * r, z, cam));
    }
    poly(ctx, pts, stroke);
  }
  for (let i = 0; i < 16; i++) {
    const phi = (i / 16) * Math.PI * 2;
    const pts: [number, number][] = [];
    for (let k = 0; k <= 18; k++) {
      const theta = (k / 18) * (Math.PI / 2);
      pts.push(
        project(
          cx + Math.cos(phi) * Math.sin(theta) * radius,
          cy + Math.sin(phi) * Math.sin(theta) * radius,
          Math.cos(theta) * radius,
          cam,
        ),
      );
    }
    poly(ctx, pts, stroke);
  }
}
