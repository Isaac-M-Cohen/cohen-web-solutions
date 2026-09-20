type BrowserMockProps = {
  url: string;
  kicker: string;
  headline: string;
  sub: string;
  cta: string;
  className?: string;
};

/**
 * A stylized, pure-CSS "browser window" showing an abstract homepage concept.
 * Used for concept redesigns — never a screenshot of a real site.
 */
export default function BrowserMock({ url, kicker, headline, sub, cta, className = "" }: BrowserMockProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ${className}`}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-ink-800/80 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 truncate rounded-md bg-ink-950/70 px-3 py-1 text-center text-[11px] text-cream-50/50">
          {url}
        </div>
        <div className="w-10" />
      </div>

      {/* Mock page */}
      <div className="bg-gradient-to-b from-ink-800 via-ink-900 to-ink-950 px-6 py-7 sm:px-8">
        {/* Mini nav */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-md bg-gold-400" />
            <span className="h-2 w-16 rounded-full bg-white/25" />
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="h-2 w-10 rounded-full bg-white/15" />
            <span className="h-2 w-10 rounded-full bg-white/15" />
            <span className="h-2 w-10 rounded-full bg-white/15" />
          </div>
          <span className="h-6 w-20 rounded-full bg-gold-400/90" />
        </div>

        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-300">{kicker}</p>
        <p className="font-display text-2xl font-semibold leading-tight text-cream-50 sm:text-3xl">{headline}</p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream-50/60">{sub}</p>

        <div className="mt-5 flex gap-3">
          <span className="rounded-full bg-gold-400 px-5 py-2.5 text-xs font-bold text-ink-950">{cta}</span>
          <span className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-cream-50/70">
            View menu
          </span>
        </div>

        {/* Image tiles */}
        <div className="mt-7 grid grid-cols-3 gap-3">
          <div className="h-20 rounded-xl bg-gradient-to-br from-gold-600/60 via-gold-500/30 to-transparent sm:h-24" />
          <div className="h-20 rounded-xl bg-gradient-to-br from-ink-600/80 via-ink-700/40 to-transparent sm:h-24" />
          <div className="h-20 rounded-xl bg-gradient-to-br from-gold-400/50 via-cream-200/20 to-transparent sm:h-24" />
        </div>
      </div>
    </div>
  );
}
