import BrowserMock, { type MockTheme } from "./BrowserMock";
import Reveal from "./Reveal";
import Parallax from "./Parallax";

type Template = {
  /** Anchor id — kept stable so existing deep links keep working */
  id: string;
  number: string;
  name: string;
  tagline: string;
  bestFor: string;
  demo: string;
  beforeSummary: string;
  problems: string[];
  concepts: string[];
  signature: string[];
  theme: MockTheme;
  mock: { url: string; kicker: string; headline: string; sub: string; cta: string };
};

const TEMPLATES: Template[] = [
  {
    id: "work-pita-loca",
    number: "01",
    name: "The Takeout",
    tagline: "A warm one-pager built to turn hungry visitors into takeout orders.",
    bestFor: "Restaurants that live on takeout",
    demo: "Shown as a concept for Pita Loca · Israeli restaurant, Miami Beach",
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
    signature: ["Takeout pre-ordering", "Photo menu", "Friday-rush ready"],
    theme: {
      kicker: "text-[#c2410c]",
      cta: "bg-[#c2410c] text-white",
      logo: "bg-[#c2410c]",
      tiles: ["bg-orange-200/70", "bg-amber-100", "bg-[#c2410c]/10"],
    },
    mock: {
      url: "pitaloca.miami",
      kicker: "Miami Beach · Since 1997",
      headline: "Serving Miami Beach since 1997 — with a website to match.",
      sub: "Real photos, a real menu, and takeout ordering built for the Friday rush.",
      cta: "Order takeout",
    },
  },
  {
    id: "work-mozart-cafe",
    number: "02",
    name: "The Flagship",
    tagline: "A full brand site with room for your story, your menu, and your catering.",
    bestFor: "Restaurants building a brand",
    demo: "Shown as a concept for Mozart Cafe · restaurant, Sunny Isles Beach",
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
    signature: ["Story + catering pages", "Embedded ordering", "Local SEO"],
    theme: {
      kicker: "text-[#166534]",
      cta: "bg-[#166534] text-white",
      logo: "bg-[#166534]",
      tiles: ["bg-emerald-200/70", "bg-lime-100", "bg-[#166534]/10"],
    },
    mock: {
      url: "mozartcafe.miami",
      kicker: "Sunny Isles Beach",
      headline: "Sunny Isles' beloved kitchen, finally with a front door.",
      sub: "A real brand site — story, menu, catering — with ordering woven in, not bolted on.",
      cta: "Explore the menu",
    },
  },
  {
    id: "work-bagel-time-cafe",
    number: "03",
    name: "The Rush",
    tagline: "Order-ahead for the breakfast line, catering platters for the office crowd.",
    bestFor: "Cafes & breakfast spots",
    demo: "Shown as a concept for Bagel Time Cafe · bagel cafe, Miami Beach",
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
    signature: ["Order-ahead, skip the line", "Catering platters page", "Phone-first design"],
    theme: {
      kicker: "text-[#b45309]",
      cta: "bg-[#b45309] text-white",
      logo: "bg-[#b45309]",
      tiles: ["bg-amber-200/70", "bg-yellow-100", "bg-[#b45309]/10"],
    },
    mock: {
      url: "bageltime.miami",
      kicker: "Miami Beach",
      headline: "Miami Beach's morning institution, rebuilt for the rush.",
      sub: "Order-ahead for the breakfast line, catering platters for offices and events.",
      cta: "Order ahead",
    },
  },
];

type CellValue = boolean | string;
type CompareRow = { feature: string; values: [CellValue, CellValue, CellValue] };

const COMPARE_ROWS: CompareRow[] = [
  { feature: "Layout", values: ["One page", "Multi-page", "One page + order flow"] },
  { feature: "Takeout ordering", values: [true, "Embedded in site", true] },
  { feature: "Order-ahead (skip the line)", values: [false, false, true] },
  { feature: "Catering & events page", values: [false, true, true] },
  { feature: "Brand story page", values: [false, true, false] },
  { feature: "Photo menu", values: [true, true, true] },
  { feature: "Reviews & social proof", values: [false, true, true] },
  { feature: "Local SEO setup", values: [true, true, true] },
  { feature: "Click-to-call, hours & map", values: [true, true, true] },
];

function CompareCell({ value }: { value: CellValue }) {
  if (value === true) {
    return <span className="font-bold text-gold-600">✓</span>;
  }
  if (value === false) {
    return <span className="text-ink-950/25">—</span>;
  }
  return <span className="text-ink-950/70">{value}</span>;
}

export default function Work() {
  return (
    <section id="work" className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-600">
            Starter templates
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-5xl">
            Three templates. Pick your starting point.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-950/65">
            Each template is a complete, ready-to-customize website foundation — shown here dressed up as
            concepts for real Miami businesses. Pick the one closest to your business, and I rebuild it
            around you: your name, your menu, your photos, your colors. Every template is mobile-first,
            loads in under two seconds, and is built to turn visitors into calls and orders.
          </p>
          <div className="mt-6 max-w-3xl rounded-2xl border border-ink-950/10 bg-white p-5 text-[15px] leading-relaxed text-ink-950/70 shadow-[0_10px_30px_-18px_rgba(5,12,24,0.25)]">
            <span className="font-semibold text-gold-600">A note on honesty: </span>
            each template is shown as an unsolicited concept redesign of a real local business —{" "}
            <span className="font-semibold text-ink-950">not client work</span>. I build them to show
            exactly how I&rsquo;d approach your project, before you spend a dollar.
          </div>
        </Reveal>

        {/* Comparison table */}
        <Reveal delay={100}>
          <div className="relative mt-14">
            <div className="overflow-x-auto rounded-2xl border border-ink-950/10 bg-white shadow-[0_10px_30px_-18px_rgba(5,12,24,0.25)]">
              <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
              <thead>
                <tr className="border-b border-ink-950/10">
                  <th className="p-4 align-top font-medium text-ink-950/40 sm:p-5">
                    <span className="text-xs font-bold uppercase tracking-[0.18em]">Compare</span>
                  </th>
                  {TEMPLATES.map((t) => (
                    <th key={t.id} className="p-4 align-top sm:p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-950/40">
                        Template {t.number}
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold text-ink-950">{t.name}</p>
                      <p className="mt-1 text-xs font-medium leading-snug text-ink-950/50">
                        {t.bestFor}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-ink-950/5 last:border-0">
                    <th className="p-4 font-medium text-ink-950/60 sm:p-5">{row.feature}</th>
                    {row.values.map((value, i) => (
                      <td key={i} className="p-4 sm:p-5">
                        <CompareCell value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            {/* Scroll hint: table scrolls horizontally on phones */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-8 rounded-r-2xl bg-gradient-to-l from-white via-white/70 to-transparent sm:hidden"
            />
          </div>
        </Reveal>

        {/* Template cards */}
        <div className="mt-20 flex flex-col gap-20 sm:gap-28">
          {TEMPLATES.map((template, i) => (
            <div
              key={template.id}
              id={template.id}
              className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-14"
            >
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Parallax speed={0.05}>
                  <div className="animate-float-slow">
                    <BrowserMock
                      url={template.mock.url}
                      kicker={template.mock.kicker}
                      headline={template.mock.headline}
                      sub={template.mock.sub}
                      cta={template.mock.cta}
                      theme={template.theme}
                    />
                  </div>
                </Parallax>
              </Reveal>

              <Reveal delay={150} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm font-semibold text-gold-600">
                    Template {template.number}
                  </span>
                  <span className="h-px w-10 bg-gold-500/60" />
                  <span className="inline-block rounded-full border border-gold-600/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
                    Starter template
                  </span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                  {template.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-ink-950/70">{template.tagline}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-ink-950/45">
                  Best for: {template.bestFor}
                </p>
                <p className="mt-3 text-[13px] italic leading-relaxed text-ink-950/50">{template.demo}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {template.signature.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-ink-950/[0.05] px-3.5 py-1.5 text-xs font-semibold text-ink-950/75"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <p className="mt-6 leading-relaxed text-ink-950/70">{template.beforeSummary}</p>

                <div className="mt-7 grid gap-7 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-950/40">
                      What&rsquo;s wrong now
                    </p>
                    <ul className="mt-3 flex flex-col gap-2.5 text-[14px] leading-relaxed text-ink-950/65">
                      {template.problems.map((problem) => (
                        <li key={problem} className="flex gap-2.5">
                          <span className="mt-0.5 font-bold text-red-500/80">✕</span>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                      The concept
                    </p>
                    <ul className="mt-3 flex flex-col gap-2.5 text-[14px] leading-relaxed text-ink-950/80">
                      {template.concepts.map((concept) => (
                        <li key={concept} className="flex gap-2.5">
                          <span className="mt-0.5 font-bold text-gold-600">✓</span>
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
          <div className="mt-20 rounded-2xl bg-ink-950 p-8 text-center text-cream-50 sm:p-10">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              Like one of these? Make it yours.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-cream-50/65">
              I&rsquo;m taking on a small number of Miami businesses this quarter. Pick a template and
              I&rsquo;ll rebuild it around your business — or start with a free audit and I&rsquo;ll tell
              you what your current site is costing you.
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
