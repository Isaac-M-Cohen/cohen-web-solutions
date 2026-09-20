import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Business Websites",
    outcome: "Look established. Turn visitors into calls.",
    description:
      "A complete, mobile-first website built around one goal: making the phone ring. Menu, hours, directions, and click-to-call — everything a customer needs, nothing they don't.",
    tags: ["Design + build", "Mobile-first", "Google Maps & SEO basics"],
  },
  {
    title: "Landing Pages",
    outcome: "One page. One job: more leads.",
    description:
      "A focused page for a promotion, a new location, or a seasonal push — Passover catering, High Holiday seats, summer specials — engineered to capture inquiries.",
    tags: ["Fast turnaround", "Lead capture", "A/B-ready"],
  },
  {
    title: "Speed Optimization",
    outcome: "Stop losing customers to a slow site.",
    description:
      "If your site takes more than three seconds to load, visitors leave — most of them on their phones. I find the bottlenecks and get you loading in under two seconds.",
    tags: ["Performance audit", "Core Web Vitals", "Mobile speed"],
  },
  {
    title: "Backend & API Work",
    outcome: "Systems that run quietly in the background.",
    description:
      "Online ordering, booking systems, contact forms that actually reach you, and integrations with the tools you already use. The unglamorous plumbing that makes everything work.",
    tags: ["Online ordering", "Booking systems", "Integrations"],
  },
  {
    title: "Monthly Maintenance",
    outcome: "Never think about your website again.",
    description:
      "Updates, backups, security checks, and small changes handled every month. Your site stays fast, secure, and current while you run your business.",
    tags: ["Updates & backups", "Security", "Priority support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream-50 py-24 text-ink-950 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-600">Services</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Everything your business needs to win online.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-950/65">
            No jargon, no bloated packages. Each service is priced fixed and upfront, and built to do one
            thing: bring you more business.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-ink-950/10 bg-white p-8 shadow-[0_2px_20px_-8px_rgba(5,12,24,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-16px_rgba(5,12,24,0.25)]">
                <span className="font-display text-sm font-semibold text-gold-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-2 text-[15px] font-semibold text-ink-800">{service.outcome}</p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-950/60">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cream-100 px-3 py-1 text-xs font-medium text-ink-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-ink-950 p-8 text-cream-50">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  Not sure what you need?
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cream-50/65">
                  Start with a free 15-minute site audit. I&rsquo;ll show you exactly what&rsquo;s costing
                  you customers — whether you hire me or not.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-8 rounded-full bg-gold-400 px-6 py-3.5 text-center text-sm font-bold text-ink-950 transition-colors hover:bg-gold-300"
              >
                Claim your free audit
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
