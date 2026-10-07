/* Miniature recreation of automatrade.app's homepage hero.
   Design tokens pulled from the live site's own stylesheet. */

const LEDGER = [
  { label: "Active bots", value: "3 of 5" },
  { label: "Today", value: "+$186.40", up: true },
  { label: "7 days", value: "+$821.10", up: true },
  { label: "Daily stop", value: "$750" },
  { label: "Venue", value: "Kalshi ✓" },
  { label: "Last reconcile", value: "8 sec ago" },
];

const BARS = [38, 52, 44, 63, 58, 74, 69, 85, 92];

export default function AutomatradePreview() {
  return (
    <a
      href="https://automatrade.app"
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-[#dedbd1] shadow-[0_20px_50px_-25px_rgba(23,22,19,0.3)] transition-transform duration-300 hover:-translate-y-1"
      style={{ fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-[#dedbd1] bg-[#fffdf8] px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#dedbd1]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#dedbd1]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#dedbd1]" />
        </span>
        <span className="ml-2 truncate text-xs font-semibold text-[#6f6c64]">automatrade.app</span>
        <span className="ml-auto text-[11px] font-bold uppercase tracking-widest text-[#b66b00] opacity-0 transition-opacity group-hover:opacity-100">
          Visit live site ↗
        </span>
      </div>

      {/* Hero recreation */}
      <div className="bg-[#f7f5ef]">
        {/* mini nav */}
        <div className="flex items-center justify-between border-b border-[#dedbd1] bg-[#fffdf8] px-6 py-3">
          <span className="text-sm font-semibold text-[#11100e]">Automatrade</span>
          <div className="flex items-center gap-4">
            <span className="hidden text-[11px] font-medium text-[#6f6c64] sm:inline">How it works</span>
            <span className="hidden text-[11px] font-medium text-[#6f6c64] sm:inline">Bot API</span>
            <span className="rounded bg-[#b66b00] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
              Open dashboard ↗
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2">
          {/* left */}
          <div className="border-b border-[#dedbd1] px-6 py-8 sm:border-b-0 sm:border-r">
            <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#b66b00]">
              CLT Box Account Dashboard
            </p>
            <p className="mt-3 text-[26px] font-extrabold leading-[1.1] tracking-tight text-[#11100e]">
              Your bots. Your limits.
              <br />
              <span className="font-medium text-[#b66b00]">One clear dashboard.</span>
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-[#6f6c64]">
              Manage your CLT Box lineup, unit sizes, stop losses, Kalshi history, and profit — without
              returning to Discord.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <span className="rounded bg-[#b66b00] px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white">
                Open your dashboard ↗
              </span>
              <span className="text-xs font-semibold text-[#b66b00] underline underline-offset-4">
                Manage CLT Box
              </span>
            </div>
          </div>

          {/* right — execution plane */}
          <div
            className="relative px-6 py-8"
            style={{
              backgroundColor: "#f3f0e8",
              backgroundImage:
                "linear-gradient(#dedbd1 1px, transparent 1px), linear-gradient(90deg, #dedbd1 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          >
            <div className="relative rounded border border-[#dedbd1] bg-[#fffdf8] p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#6f6c64]">
                  CLT Box // Account Overview
                </p>
                <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-[#b66b00]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b66b00] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b66b00]" />
                  </span>
                  Active
                </span>
              </div>
              <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9b978d]">
                Automatrade Profit
              </p>
              <p className="text-[30px] font-extrabold tracking-tight text-[#11100e]">+$2,481</p>

              {/* bar chart */}
              <div className="mt-2 flex h-16 items-end gap-1.5">
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-[#b66b00]/70 to-[#b66b00]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              {/* ledger grid */}
              <div className="mt-3 grid grid-cols-3 gap-px overflow-hidden rounded border border-[#dedbd1] bg-[#dedbd1]">
                {LEDGER.map((cell) => (
                  <div key={cell.label} className="bg-[#fffdf8] px-2 py-1.5">
                    <p className="text-[8px] uppercase tracking-wider text-[#9b978d]">{cell.label}</p>
                    <p
                      className={`text-[11px] font-bold ${
                        cell.up ? "text-[#23643a]" : "text-[#11100e]"
                      }`}
                    >
                      {cell.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
