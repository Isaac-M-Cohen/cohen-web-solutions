import { NAV_LINKS } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight text-cream-50">
            Cohen <span className="font-normal text-cream-50/70">Web Solutions</span>
            <span className="text-gold-400">.</span>
          </p>
          <p className="mt-1 text-sm text-cream-50/45">Websites for Miami businesses.</p>
        </div>
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream-50/55 transition-colors hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-cream-50/35">© 2026 Cohen Web Solutions · Built with Next.js</p>
      </div>
    </footer>
  );
}
