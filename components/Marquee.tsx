const STAR = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className="shrink-0 text-gold-400">
    <path
      d="M9 0l2.1 6.9L18 9l-6.9 2.1L9 18l-2.1-6.9L0 9l6.9-2.1L9 0z"
      fill="currentColor"
    />
  </svg>
);

export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink-900 py-5" aria-hidden>
      <div className="flex w-max animate-marquee [animation-play-state:running] hover:[animation-play-state:paused]">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span key={i} className="flex items-center">
                <span
                  className={`whitespace-nowrap px-7 font-display text-2xl font-semibold tracking-tight ${
                    i % 2 === 1 ? "text-outline" : "text-cream-50"
                  }`}
                >
                  {item}
                </span>
                {STAR}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
