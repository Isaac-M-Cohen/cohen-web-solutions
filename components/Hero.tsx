"use client";

import BrowserMock from "./BrowserMock";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import RotatingWord from "./RotatingWord";
import WordStrands from "./WordStrands";

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
    <section id="top" className="relative overflow-hidden bg-cream-50 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-950/15 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-800">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                Miami-based full-stack developer
              </span>
            </Reveal>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink-950 sm:text-6xl lg:text-[4.2rem]">
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
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-950/65">
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
                    className="inline-block rounded-full bg-ink-950 px-8 py-4 text-center text-base font-bold text-cream-50 transition-colors hover:bg-ink-800"
                  >
                    Get a free site audit
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="#work"
                    className="inline-block rounded-full border border-ink-950/20 px-8 py-4 text-center text-base font-semibold text-ink-950 transition-colors hover:border-ink-950/60"
                  >
                    See concept work
                  </a>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-950/55">
                {TRUST_POINTS.map((point) => (
                  <span key={point} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gold-600">
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
            <div className="animate-float-slow absolute -left-3 top-16 hidden rounded-xl border border-ink-950/10 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:block">
              <p className="text-[11px] uppercase tracking-wider text-ink-950/50">Load time</p>
              <p className="font-display text-lg font-semibold text-ink-950">Under 2 seconds</p>
            </div>
            <div className="animate-float-slow absolute -right-3 bottom-16 hidden rounded-xl border border-ink-950/10 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:block">
              <p className="text-[11px] uppercase tracking-wider text-ink-950/50">Built in</p>
              <p className="font-display text-lg font-semibold text-ink-950">Online ordering</p>
            </div>
          </Reveal>
        </div>

        {/* Interactive physics playground */}
        <Reveal delay={150} className="mt-16 sm:mt-20">
          <div className="overflow-hidden rounded-3xl border border-ink-950/10 bg-white shadow-[0_24px_60px_-30px_rgba(5,12,24,0.25)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-950/10 px-6 py-4 sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-600">
                Live physics — go ahead, touch it
              </p>
              <p className="text-sm text-ink-950/50">
                Every strand is simulated in real time. This is the kind of thing I build.
              </p>
            </div>
            <WordStrands className="h-[340px] sm:h-[420px]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
