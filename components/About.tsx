import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    title: "Production-minded",
    text: "I build systems that run in production — with tests, monitoring, error handling, and the operational discipline real users depend on.",
  },
  {
    title: "Full-stack",
    text: "Database to deploy. I design schemas, write APIs, build interfaces, and ship the infrastructure that holds it together.",
  },
  {
    title: "Fast learner",
    text: "I pick up new stacks quickly and go deep fast — from WhatsApp's Business API to Kalshi's trading API to React Native.",
  },
  {
    title: "Owner's mindset",
    text: "I've founded and run a real product with paying subscribers. I think about the business, not just the code.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 text-ink-950 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-ink-950/10 bg-cream-50 p-10 text-center shadow-[0_30px_60px_-30px_rgba(5,12,24,0.35)]">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-2 border-gold-500/50 bg-white">
                <span className="font-display text-5xl font-semibold text-gold-600">I.</span>
              </div>
              <p className="mt-6 font-display text-2xl font-semibold text-ink-950">Isaac</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-ink-950/50">
                Full-stack developer
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gold-600">Miami, Florida</p>
              <div className="mx-auto mt-6 h-px w-16 bg-gold-500/50" />
              <p className="mt-6 text-sm italic leading-relaxed text-ink-950/60">
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
              I&rsquo;m Isaac, an 18-year-old full-stack developer based in Miami Beach. I&rsquo;ve been
              building real software since I was 14 — from a WhatsApp-first marketplace with 21,000 lines
              of production code to a live algorithmic trading platform serving paying subscribers.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-950/70">
              I&rsquo;m looking for an entry-level engineering role where I can learn from strong
              professionals and contribute from day one. I ship fast, test my work, and take ownership
              of what I build.
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
