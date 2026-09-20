"use client";

import { useEffect, useState } from "react";

export default function RotatingWord({
  words,
  interval = 2400,
}: {
  words: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <span className="relative inline-grid overflow-hidden pb-1 align-bottom text-gold-300">
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden={i !== index}
          className={`col-start-1 row-start-1 inline-block transition-all duration-500 ease-out will-change-transform ${
            i === index
              ? "translate-y-0 opacity-100 blur-none"
              : "pointer-events-none translate-y-full opacity-0 blur-sm"
          }`}
        >
          {word}
        </span>
      ))}
      <span className="sr-only">{words[index]}</span>
    </span>
  );
}
