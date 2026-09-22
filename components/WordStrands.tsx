"use client";

import { useEffect, useRef } from "react";

type StrandPoint = { x: number; y: number; px: number; py: number };
type Strand = {
  points: StrandPoint[];
  anchorX: number;
  rest: number;
  word: string;
  gold: boolean;
  phase: number;
};

const STRAND_WORDS = [
  { word: "more calls", gold: false },
  { word: "more bookings", gold: true },
  { word: "regulars", gold: false },
  { word: "under 2 seconds", gold: false },
  { word: "Miami-made", gold: true },
  { word: "no templates", gold: false },
];

const SEGMENTS = 16;
const GRAVITY = 0.45;
const DAMPING = 0.985;
const MOUSE_RADIUS = 150;

/**
 * Verlet-rope word strands. Each strand hangs from the top edge and carries a
 * word at its free end; the cursor pushes strands around with real momentum.
 * Pauses offscreen, freezes for reduced-motion users, touch-friendly.
 */
export default function WordStrands({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    let strands: Strand[] = [];
    let raf = 0;
    let visible = true;
    let t = 0;
    const mouse = { x: -9999, y: -9999, px: -9999, py: -9999, active: false };

    const LENGTH_FACTORS = [0.62, 0.82, 0.68, 0.88, 0.6, 0.76];

    function build() {
      const rect = container!.getBoundingClientRect();
      if (rect.width < 10 || rect.height < 10) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas!.width = Math.round(W * dpr);
      canvas!.height = Math.round(H * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const n = STRAND_WORDS.length;
      const margin = Math.max(46, Math.min(80, W * 0.09));
      strands = STRAND_WORDS.map((s, i) => {
        const anchorX = margin + ((W - margin * 2) * (i + 0.5)) / n;
        const len = H * LENGTH_FACTORS[i % LENGTH_FACTORS.length];
        const rest = len / SEGMENTS;
        const points: StrandPoint[] = [];
        for (let j = 0; j <= SEGMENTS; j++) {
          points.push({ x: anchorX, y: j * rest, px: anchorX, py: j * rest });
        }
        return { points, anchorX, rest, word: s.word, gold: s.gold, phase: i * 1.7 };
      });
    }

    function step() {
      t += 1;
      for (const s of strands) {
        const pts = s.points;
        const wind = Math.sin(t * 0.016 + s.phase) * 0.12;
        const mvx = mouse.x - mouse.px;
        const mvy = mouse.y - mouse.py;
        const punch = 5 + Math.min(26, Math.hypot(mvx, mvy) * 1.4);
        for (let i = 1; i < pts.length; i++) {
          const p = pts[i];
          const vx = (p.x - p.px) * DAMPING;
          const vy = (p.y - p.py) * DAMPING;
          p.px = p.x;
          p.py = p.y;
          p.x += vx + wind;
          p.y += vy + GRAVITY;
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < MOUSE_RADIUS * MOUSE_RADIUS && d2 > 0.01) {
              const d = Math.sqrt(d2);
              const f = (1 - d / MOUSE_RADIUS) * punch;
              p.x += (dx / d) * f;
              p.y += (dy / d) * f;
            }
          }
        }
        // Constraint relaxation
        for (let k = 0; k < 3; k++) {
          pts[0].x = s.anchorX;
          pts[0].y = 0;
          for (let i = 0; i < pts.length - 1; i++) {
            const a = pts[i];
            const b = pts[i + 1];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const d = Math.hypot(dx, dy) || 1e-6;
            const diff = (d - s.rest) / d;
            if (i === 0) {
              b.x -= dx * diff;
              b.y -= dy * diff;
            } else {
              a.x += dx * 0.5 * diff;
              a.y += dy * 0.5 * diff;
              b.x -= dx * 0.5 * diff;
              b.y -= dy * 0.5 * diff;
            }
          }
        }
      }
      mouse.px = mouse.x;
      mouse.py = mouse.y;
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      const fontSize = W < 560 ? 19 : 27;
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";

      for (const s of strands) {
        const pts = s.points;
        // Rope
        ctx!.beginPath();
        ctx!.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length - 1; i++) {
          const mx = (pts[i].x + pts[i + 1].x) / 2;
          const my = (pts[i].y + pts[i + 1].y) / 2;
          ctx!.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
        }
        const last = pts[pts.length - 1];
        ctx!.lineTo(last.x, last.y);
        ctx!.strokeStyle = "rgba(10, 21, 38, 0.38)";
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
        // Anchor pin
        ctx!.beginPath();
        ctx!.arc(s.anchorX, 2, 3.5, 0, Math.PI * 2);
        ctx!.fillStyle = "#c9973f";
        ctx!.fill();
      }

      // Words at the free ends
      ctx!.font = `italic 600 ${fontSize}px Fraunces, Georgia, serif`;
      for (const s of strands) {
        const pts = s.points;
        const end = pts[pts.length - 1];
        const prev = pts[pts.length - 2];
        const rawAngle = Math.atan2(end.y - prev.y, end.x - prev.x) - Math.PI / 2;
        const angle = Math.max(-0.6, Math.min(0.6, rawAngle));
        const w = ctx!.measureText(s.word).width;
        const drawX = Math.max(w / 2 + 8, Math.min(W - w / 2 - 8, end.x));
        ctx!.save();
        ctx!.translate(drawX, Math.min(H - fontSize, end.y + 6));
        ctx!.rotate(angle);
        ctx!.fillStyle = s.gold ? "#a1762b" : "#0a1526";
        ctx!.fillText(s.word, 0, 0);
        ctx!.restore();
      }
    }

    function loop() {
      if (visible) {
        step();
        draw();
      }
      raf = requestAnimationFrame(loop);
    }

    function onMove(e: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }
    function onLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }

    build();
    if (reducedMotion) {
      for (let i = 0; i < 220; i++) step();
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(build);
    ro.observe(container);
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    io.observe(container);
    container.addEventListener("pointermove", onMove);
    container.addEventListener("pointerdown", onMove);
    container.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerdown", onMove);
      container.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ touchAction: "pan-y" }}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full cursor-crosshair" aria-hidden />
    </div>
  );
}
