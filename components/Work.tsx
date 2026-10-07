import Reveal from "./Reveal";
import Parallax from "./Parallax";

type Project = {
  id: string;
  number: string;
  name: string;
  url?: string;
  tagline: string;
  role: string;
  stack: string[];
  description: string;
  builtOut?: string[];
  highlights: string[];
  stats: { label: string; value: string }[];
  sitePreview?: {
    url: string;
    headline: string;
    sub: string;
  };
};

const PROJECTS: Project[] = [
  {
    id: "work-sitters",
    number: "01",
    name: "Sitters Over FL",
    url: "https://sittersoverfl.com",
    tagline: "A WhatsApp-first babysitter marketplace and operations platform for South Florida.",
    role: "Sole developer — design, backend, frontend, database, integrations",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "WhatsApp Business API", "OpenAI", "Stripe"],
    description:
      "I built the entire platform end to end. The public website — designed and built by me — explains the service, the founder's story, pricing, FAQs, and sitter opportunities. Behind it sits a full operations system: parents start on WhatsApp and either chat conversationally or open a private, expiring booking form; the backend collects children, location, schedule, rate, and care needs, then deterministically matches sitters by availability, service area, language, and driving ability. The WhatsApp bot sends private job offers, builds an immutable parent shortlist with sitter photos, and confirms bookings with fee-link delivery. A protected owner dashboard — effectively a lightweight CRM — handles bookings, sitters, escalations, conversations, and dispatch.",
    builtOut: [
      "Database — PostgreSQL via Supabase: booking state machine enforced in both TypeScript and SQL, RPCs with expected-state checks and row locks against concurrent updates, 18 migrations",
      "Website — custom responsive design in CSS Modules (no UI framework), public pages plus protected owner dashboard",
      "Backend — idempotent, resumable webhook processing; encrypted expiring booking links; signed HttpOnly admin sessions",
      "WhatsApp bot — Meta Business Cloud API; AI extracts booking details from natural language (EN/FR/ES) with schema-validated outputs barred from authoritative decisions",
    ],
    highlights: [
      "Formal booking state machine enforced in TypeScript and PostgreSQL",
      "Idempotent, resumable webhook processing — duplicate WhatsApp/Stripe events never repeat side effects",
      "AI extracts booking details from natural language but is schema-validated and barred from authoritative decisions",
      "Encrypted, expiring booking links; signed HttpOnly admin sessions; RLS with no browser-facing policies",
    ],
    sitePreview: {
      url: "sittersoverfl.com",
      headline: "Find the perfect babysitter in minutes.",
      sub: "Sitters Over FL connects families with dependable local babysitters through one simple WhatsApp conversation.",
    },
    stats: [
      { label: "Lines of code", value: "~21k" },
      { label: "Source files", value: "140" },
      { label: "Tests passing", value: "177" },
      { label: "DB migrations", value: "18" },
    ],
  },
  {
    id: "work-automatrade",
    number: "02",
    name: "Automatrade",
    url: "https://automatrade.app",
    tagline: "Automated copy-trading platform for sports prediction markets.",
    role: "Founder & sole engineer — architecture, backend, bots, billing, DevOps",
    stack: ["Python", "Kalshi API", "Docker", "SQLite", "Stripe", "Discord.py", "GitHub Actions"],
    description:
      "I founded and built Automatrade from scratch. It's a copy-trading platform: algorithmic trading bots publish their picks, and subscribers' accounts automatically mirror those trades on Kalshi, a regulated prediction-market exchange. Everything runs through Discord — subscribers join the server, pick their bots with slash commands, connect their Kalshi API keys, set risk limits (unit sizes, stop losses, max orders), and receive every trade as a real-time Discord message with a one-click link to the market. A web dashboard at automatrade.app shows live P&L, bot lineups, and account controls. Billing runs on Stripe subscriptions with weekly itemized statements. The whole system — signal ingestion, order placement, Discord delivery, billing, health monitoring — runs on a DigitalOcean server I manage, deployed through an automated CI/CD pipeline.",
    sitePreview: {
      url: "automatrade.app",
      headline: "Your bots. Your limits. One clear dashboard.",
      sub: "Manage your trading bot lineup, unit sizes, stop losses, and profit — without returning to Discord.",
    },
    highlights: [
      "11 live bots, single-digit-second signal-to-order latency",
      "Stream-only signal ingestion with automatic polling fallback",
      "Kalshi circuit breaker, SQLite busy-retry, durable fan-out queue",
      "Owner-alert watchdog: Discord DM within 5 minutes on sustained degradation",
    ],
    stats: [
      { label: "Live bots", value: "11" },
      { label: "Discord commands", value: "30+" },
      { label: "Signal-to-order", value: "<10s" },
      { label: "Subscribers", value: "Paying" },
    ],
  },
  {
    id: "work-sat",
    number: "03",
    name: "SAT Practice App",
    tagline: "Tinder-style SAT Math practice for iOS and Android.",
    role: "Sole developer — app, question engine, UI",
    stack: ["React Native", "Expo 57", "TypeScript", "AsyncStorage"],
    description:
      "A mobile SAT Math practice app with a swipe-based interface: a question appears, the student reveals the answer, swipes right for the next one. Covers 1,925 practice questions across Algebra, Advanced Math, Problem Solving & Data Analysis, and Geometry — 1,461 multiple-choice and 464 numeric entry, tiered easy/medium/hard, with 397 visual assets. Free with ads plus paid ad-removal. All 33 tests passing; simulator debug build working.",
    highlights: [
      "Swipe-based UX: question → answer → swipe for next",
      "1,925 questions across 4 domains, 3 difficulty tiers",
      "397 visual assets for diagram-based questions",
      "Offline-first with AsyncStorage; no backend required",
    ],
    stats: [
      { label: "Questions", value: "1,925" },
      { label: "Visual assets", value: "397" },
      { label: "Tests passing", value: "33/33" },
      { label: "Platforms", value: "iOS + Android" },
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-600">
            Projects
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-5xl">
            Things I&rsquo;ve built and shipped.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-950/65">
            Real systems, not tutorials. Each one was designed, built, tested, and deployed by me —
            backend, frontend, database, and integrations.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              id={project.id}
              className="grid scroll-mt-24 items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14"
            >
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Parallax speed={0.03}>
                  <div className="rounded-3xl border border-ink-950/10 bg-white p-8 shadow-[0_24px_60px_-30px_rgba(5,12,24,0.25)] sm:p-10">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-sm font-semibold text-gold-600">
                        Project {project.number}
                      </span>
                      <span className="h-px w-10 bg-gold-500/60" />
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-gold-600"
                        >
                          {project.name}
                          <span className="ml-2 inline-block align-middle text-xl">↗</span>
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                    <p className="mt-3 text-base font-medium text-ink-950/70">{project.tagline}</p>
                    <p className="mt-2 text-sm italic text-ink-950/50">{project.role}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-ink-950/[0.06] px-3.5 py-1.5 text-xs font-semibold text-ink-950/75"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="rounded-xl bg-cream-50 p-4 text-center">
                          <p className="font-display text-xl font-bold text-ink-950">{stat.value}</p>
                          <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-950/50">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Parallax>
              </Reveal>

              <Reveal delay={150} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="leading-relaxed text-ink-950/70">{project.description}</p>

                {project.builtOut && (
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                      What I built
                    </p>
                    <ul className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-ink-950/75">
                      {project.builtOut.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-0.5 font-bold text-gold-600">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.sitePreview && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 block overflow-hidden rounded-2xl border border-ink-950/10 bg-white shadow-[0_10px_30px_-18px_rgba(5,12,24,0.25)] transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-2 border-b border-ink-950/10 bg-cream-50 px-4 py-2.5">
                      <span className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-ink-950/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-ink-950/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-ink-950/15" />
                      </span>
                      <span className="ml-2 truncate text-xs font-medium text-ink-950/50">
                        {project.sitePreview.url}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="font-display text-xl font-semibold leading-snug text-ink-950">
                        {project.sitePreview.headline}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-950/60">
                        {project.sitePreview.sub}
                      </p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                        Visit live site ↗
                      </p>
                    </div>
                  </a>
                )}

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                    Engineering highlights
                  </p>
                  <ul className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-ink-950/75">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-0.5 font-bold text-gold-600">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
