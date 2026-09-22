export type MockTheme = {
  /** Kicker text color class */
  kicker: string;
  /** Primary CTA button classes */
  cta: string;
  /** Logo tile bg class */
  logo: string;
  /** Three image-tile bg classes */
  tiles: [string, string, string];
};

type BrowserMockProps = {
  url: string;
  kicker: string;
  headline: string;
  sub: string;
  cta: string;
  className?: string;
  theme?: MockTheme;
};

const DEFAULT_THEME: MockTheme = {
  kicker: "text-gold-600",
  cta: "bg-ink-950 text-cream-50",
  logo: "bg-ink-950",
  tiles: ["bg-gold-200/70", "bg-cream-200", "bg-ink-950/[0.06]"],
};

/**
 * A stylized, pure-CSS "browser window" showing an abstract homepage concept.
 * Used for concept redesigns — never a screenshot of a real site.
 * Each template passes its own theme so the three previews look visibly different.
 */
export default function BrowserMock({
  url,
  kicker,
  headline,
  sub,
  cta,
  className = "",
  theme = DEFAULT_THEME,
}: BrowserMockProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-ink-950/10 bg-white shadow-[0_30px_70px_-28px_rgba(5,12,24,0.35)] ${className}`}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-ink-950/10 bg-cream-100 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-[11px] text-ink-950/50">
          {url}
        </div>
        <div className="w-10" />
      </div>

      {/* Mock page */}
      <div className="bg-white px-6 py-7 sm:px-8">
        {/* Mini nav */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`h-6 w-6 rounded-md ${theme.logo}`} />
            <span className="h-2 w-16 rounded-full bg-ink-950/20" />
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="h-2 w-10 rounded-full bg-ink-950/10" />
            <span className="h-2 w-10 rounded-full bg-ink-950/10" />
            <span className="h-2 w-10 rounded-full bg-ink-950/10" />
          </div>
          <span className={`h-6 w-20 rounded-full ${theme.logo}`} />
        </div>

        <p className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] ${theme.kicker}`}>
          {kicker}
        </p>
        <p className="font-display text-2xl font-semibold leading-tight text-ink-950 sm:text-3xl">
          {headline}
        </p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-950/60">{sub}</p>

        <div className="mt-5 flex gap-3">
          <span className={`rounded-full px-5 py-2.5 text-xs font-bold ${theme.cta}`}>{cta}</span>
          <span className="rounded-full border border-ink-950/20 px-5 py-2.5 text-xs font-semibold text-ink-950/70">
            View menu
          </span>
        </div>

        {/* Image tiles */}
        <div className="mt-7 grid grid-cols-3 gap-3">
          {theme.tiles.map((tile, i) => (
            <div key={i} className={`h-20 rounded-xl sm:h-24 ${tile}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
