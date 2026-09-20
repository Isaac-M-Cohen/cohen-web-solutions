"use client";

import BrowserMock from "./BrowserMock";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import RotatingWord from "./RotatingWord";

const TRUST_POINTS = ["Based in Miami", "You own everything I build", "Live in weeks, not months"];

const HEADLINE_WORDS = ["Websites", "that", "turn", "visitors", "into"];

function Word({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <span
        className="inline-block animate-rise-in will-change-transform"
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </span>
      <span aria-hidden>{"\u00A0"}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Miami-based full-stack developer
            </span>
          </Reveal>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            {HEADLINE_WORDS.map((word, i) => (
              <Word key={word} delay={0.1 + i * 0.09}>
                {word}
              </Word>
            ))}
            <span
              className="inline-block animate-rise-in overflow-hidden align-bottom"
              style={{ animationDelay: "0.6s" }}
            >
              <RotatingWord words={["customers.", "calls.", "bookings.", "regulars."]} />
            </span>
          </h1>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-50/70">
              I design and build fast, modern websites for Miami restaurants, real estate agents, med
              spas, and local businesses — sites engineered to turn searches into calls, bookings, and
              sales.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-gold-400 px-8 py-4 text-center text-base font-bold text-ink-950 transition-colors hover:bg-gold-300"
                >
                  Get a free site audit
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#work"
                  className="inline-block rounded-full border border-white/20 px-8 py-4 text-center text-base font-semibold text-cream-50 transition-colors hover:border-gold-400/60 hover:text-gold-300"
                >
                  See concept work
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream-50/50">
              {TRUST_POINTS.map((point) => (
                <span key={point} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gold-400">
                    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {point}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="relative">
          <div className="animate-float">
            <BrowserMock
              url="yourbusiness.miami"
              kicker="Miami Beach · Open late"
              headline="Miami Beach's favorite late-night spot — with a website to match."
              sub="Real photos, full menu, and order-ahead built for the dinner rush."
              cta="See the menu"
            />
          </div>
          {/* Floating chips */}
          <div className="animate-float-slow absolute -left-3 top-16 hidden rounded-xl border border-white/10 bg-ink-800/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <p className="text-[11px] uppercase tracking-wider text-cream-50/50">Load time</p>
            <p className="font-display text-lg font-semibold text-gold-300">Under 2 seconds</p>
          </div>
          <div className="animate-float-slow absolute -right-3 bottom-16 hidden rounded-xl border border-white/10 bg-ink-800/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <p className="text-[11px] uppercase tracking-wider text-cream-50/50">Built in</p>
            <p className="font-display text-lg font-semibold text-gold-300">Online ordering</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
