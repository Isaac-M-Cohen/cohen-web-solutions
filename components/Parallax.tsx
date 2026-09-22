"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Subtle scroll parallax: translates children vertically based on how far the
 * element is from the viewport center. Disabled for reduced-motion users.
 */
export default function Parallax({
  children,
  speed = 0.06,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const offset = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.transform = `translateY(${(-offset * speed * vh).toFixed(1)}px)`;
    };
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
