import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    title: "Direct",
    text: "You always talk to me — no account managers, no telephone game. Your feedback goes straight into the build.",
  },
  {
    title: "Fast",
    text: "Most sites go live in one to three weeks. I use modern tooling and AI-assisted workflows to ship at a pace agencies can't match.",
  },
  {
    title: "Yours",
    text: "You own the domain, the code, and every asset. No lock-in, no ransom notes if we ever part ways.",
  },
  {
    title: "Local",
    text: "I'm in Miami and part of the community I build for. I know why Friday takeout ordering matters and why your site has to be perfect on a phone.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-cream-50 py-24 text-ink-950 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="overflow-hidden rounded-3xl bg-ink-950 p-10 text-center shadow-[0_30px_60px_-20px_rgba(5,12,24,0.45)]">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-2 border-gold-400/60 bg-ink-800">
                <span className="font-display text-5xl font-semibold text-gold-300">I.</span>
              </div>
              <p className="mt-6 font-display text-2xl font-semibold text-cream-50">Isaac</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cream-50/50">
                Full-stack developer
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gold-300/80">Miami, Florida</p>
              <div className="mx-auto mt-6 h-px w-16 bg-gold-400/40" />
              <p className="mt-6 text-sm italic leading-relaxed text-cream-50/60">
                &ldquo;Young, hungry, and shipping.&rdquo;
              </p>
            </div>
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-gold-500/40"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-600">About</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Young, hungry, and shipping.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-ink-950/70">
              I&rsquo;m Isaac, an 18-year-old full-stack developer based in Miami. I build websites and
              backend systems for real clients — and I do it fast. No agency overhead, no six-week
              timelines, no junior-varsity output.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-950/70">
              I grew up in Miami&rsquo;s Jewish community, so I don&rsquo;t just build for your customers —
              I understand them. I know why the phone has to ring, why everything has to work perfectly on
              mobile, and why trust is everything.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-ink-950/10 bg-white p-6">
                  <h3 className="font-display text-lg font-semibold text-gold-600">{principle.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-950/60">{principle.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
