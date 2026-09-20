import BrowserMock from "./BrowserMock";
import Reveal from "./Reveal";

type CaseStudy = {
  business: string;
  category: string;
  location: string;
  mock: { url: string; kicker: string; headline: string; sub: string; cta: string };
  beforeSummary: string;
  problems: string[];
  concepts: string[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    business: "Pita Loca",
    category: "Israeli restaurant",
    location: "Miami Beach · serving since 1997",
    mock: {
      url: "pitaloca.miami",
      kicker: "Miami Beach · Since 1997",
      headline: "Serving Miami Beach since 1997 — with a website to match.",
      sub: "Real photos, a real menu, and takeout ordering built for the Friday rush.",
      cta: "Order takeout",
    },
    beforeSummary:
      "A bare-bones template page: a wall of text, no photos, no menu, no online ordering, and no clear hours or location. A 25-year institution that looks like a pop-up online.",
    problems: [
      "No photos of the food or restaurant — customers can't see what they're getting",
      "No menu on the site; nothing to browse before visiting",
      "No online ordering or takeout flow, despite Friday takeout being a core offering",
      "A generic domain name that doesn't match the business — hard to find, hard to remember",
    ],
    concepts: [
      "Warm, modern one-pager with real photography and the full menu",
      "Takeout pre-ordering with Friday cutoff times built in",
      "Click-to-call, hours, and map front and center for tourists and locals",
      "Engineered to load in under two seconds on a phone",
    ],
  },
  {
    business: "Mozart Cafe",
    category: "Restaurant",
    location: "Sunny Isles Beach",
    mock: {
      url: "mozartcafe.miami",
      kicker: "Sunny Isles Beach",
      headline: "Sunny Isles' beloved kitchen, finally with a front door.",
      sub: "A real brand site — story, menu, catering — with ordering woven in, not bolted on.",
      cta: "Explore the menu",
    },
    beforeSummary:
      "No real website at all. The entire web presence is an ordering page hosted on a third-party platform's subdomain — zero brand story, zero search visibility, and every order reinforces someone else's brand.",
    problems: [
      "Lives on a subdomain they don't own or control",
      "No story, no photos — nothing to convince a first-time visitor to choose them",
      "Invisible in Google for local searches; all discovery flows through delivery apps",
      "Customers order through a platform's brand instead of theirs",
    ],
    concepts: [
      "A proper flagship site on their own domain, with ordering embedded",
      "The kitchen's story, full menu, and private-event and catering pages",
      "Local SEO so tourists and new residents find them first",
      "Reviews and social proof woven into every page",
    ],
  },
  {
    business: "Bagel Time Cafe",
    category: "Bagel cafe",
    location: "Miami Beach · a local morning institution",
    mock: {
      url: "bageltime.miami",
      kicker: "Miami Beach",
      headline: "Miami Beach's morning institution, rebuilt for the rush.",
      sub: "Order-ahead for the breakfast line, catering platters for offices and events.",
      cta: "Order ahead",
    },
    beforeSummary:
      "A beloved local cafe whose web presence is scattered across delivery apps and directory listings. There's no owned flagship experience — nothing online that reflects the institution regulars know.",
    problems: [
      "Web presence split across delivery apps and directories — no single home base",
      "No order-ahead experience for the morning rush, when speed matters most",
      "Catering platters for offices and events are buried or missing",
      "The brand regulars love doesn't come through online",
    ],
    concepts: [
      "Flagship site with order-ahead designed for the breakfast rush",
      "Dedicated catering page: platters, office lunches, and event orders",
      "Loyalty and reviews front and center to turn regulars into evangelists",
      "Fast, phone-first design — most orders happen on mobile",
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-400">Selected work</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Concept redesigns for real Miami businesses.
          </h2>
          <div className="mt-6 max-w-3xl rounded-2xl border border-gold-400/25 bg-gold-400/5 p-5 text-[15px] leading-relaxed text-cream-50/70">
            <span className="font-semibold text-gold-300">A note on honesty: </span>
            these are unsolicited concept redesigns of real local businesses —{" "}
            <span className="font-semibold text-cream-50">not client work</span>. I build them to show
            exactly how I&rsquo;d approach your project, before you spend a dollar.
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 sm:gap-28">
          {CASE_STUDIES.map((study, i) => (
            <div
              key={study.business}
              id={`work-${study.business.toLowerCase().replace(/\s+/g, "-")}`}
              className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-14"
            >
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="animate-float-slow">
                  <BrowserMock
                    url={study.mock.url}
                    kicker={study.mock.kicker}
                    headline={study.mock.headline}
                    sub={study.mock.sub}
                    cta={study.mock.cta}
                  />
                </div>
              </Reveal>

              <Reveal delay={150} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="inline-block rounded-full border border-gold-400/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold-300">
                  Concept redesign
                </span>
                <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  {study.business}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-cream-50/50">
                  {study.category} · {study.location}
                </p>
                <p className="mt-5 leading-relaxed text-cream-50/70">{study.beforeSummary}</p>

                <div className="mt-7 grid gap-7 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream-50/40">
                      What&rsquo;s wrong now
                    </p>
                    <ul className="mt-3 flex flex-col gap-2.5 text-[14px] leading-relaxed text-cream-50/65">
                      {study.problems.map((problem) => (
                        <li key={problem} className="flex gap-2.5">
                          <span className="mt-0.5 font-bold text-red-400/80">✕</span>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300/80">
                      The concept
                    </p>
                    <ul className="mt-3 flex flex-col gap-2.5 text-[14px] leading-relaxed text-cream-50/80">
                      {study.concepts.map((concept) => (
                        <li key={concept} className="flex gap-2.5">
                          <span className="mt-0.5 font-bold text-gold-400">✓</span>
                          <span>{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 rounded-2xl border border-white/10 bg-ink-900/60 p-8 text-center sm:p-10">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              Your business could be next.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-cream-50/65">
              I&rsquo;m taking on a small number of Miami businesses this quarter. The first step is a free
              audit — I&rsquo;ll show you what your site is costing you.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-block rounded-full bg-gold-400 px-8 py-4 text-base font-bold text-ink-950 transition-all hover:-translate-y-0.5 hover:bg-gold-300"
            >
              Get a free site audit
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
