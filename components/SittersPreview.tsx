/* Miniature recreation of sittersoverfl.com's homepage hero.
   Design tokens pulled from the live site's own stylesheet. */

export default function SittersPreview() {
  return (
    <a
      href="https://sittersoverfl.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-[#cfe5ef] shadow-[0_20px_50px_-25px_rgba(201,54,118,0.35)] transition-transform duration-300 hover:-translate-y-1"
      style={{ fontFamily: "'Nunito Sans', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-[#cfe5ef] bg-[#fff9fc]/90 px-4 py-2.5 backdrop-blur">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ed5d9a]/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ed5d9a]/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ed5d9a]/30" />
        </span>
        <span className="ml-2 truncate text-xs font-semibold text-[#626b7d]">sittersoverfl.com</span>
        <span className="ml-auto text-[11px] font-bold uppercase tracking-widest text-[#ed5d9a] opacity-0 transition-opacity group-hover:opacity-100">
          Visit live site ↗
        </span>
      </div>

      {/* Hero recreation */}
      <div className="relative overflow-hidden bg-[#fff6fb] px-6 py-8 sm:px-8">
        {/* soft blobs */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#ffc2dc]/50 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-[#9eddf5]/40 blur-2xl" />

        {/* mini nav */}
        <div className="relative mb-6 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ed5d9a] text-[11px] text-white">♥</span>
            <span className="text-sm font-extrabold text-[#28304a]" style={{ fontFamily: "Corben, Georgia, serif" }}>
              Sitters Over FL
            </span>
          </div>
          <span className="rounded-full bg-gradient-to-br from-[#ed5d9a] to-[#db4387] px-3.5 py-1.5 text-[11px] font-bold text-white shadow-[0_8px_20px_#c9367642]">
            Book Now
          </span>
        </div>

        <div className="relative grid items-center gap-6 sm:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ed5d9a29] bg-[#ffffffbd] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#c93676]">
              ✦ Local care, one text away
            </span>
            <p
              className="mt-3 text-[26px] font-semibold leading-[1.12] tracking-tight text-[#28304a]"
              style={{ fontFamily: "Fraunces, Georgia, serif", letterSpacing: "-0.02em" }}
            >
              Find the perfect babysitter{" "}
              <em className="text-[#ed5d9a]" style={{ textShadow: "2px 3px 0 #9eddf580" }}>
                in minutes.
              </em>
            </p>
            <p className="mt-2.5 text-[13px] leading-relaxed text-[#626b7d]">
              Sitters Over FL connects families with dependable local babysitters through one simple,
              personal WhatsApp conversation.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="rounded-full bg-gradient-to-br from-[#ed5d9a] to-[#db4387] px-4 py-2 text-xs font-bold text-white shadow-[0_10px_24px_#c9367642]">
                💬 Text Us Now
              </span>
              <span className="text-xs font-semibold text-[#c93676] underline underline-offset-2">
                See how it works →
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex -space-x-1.5">
                {["AM", "JL", "KS"].map((ini, i) => (
                  <span
                    key={ini}
                    className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[8px] font-bold text-white"
                    style={{ backgroundColor: ["#ed5d9a", "#347fa5", "#c93676"][i] }}
                  >
                    {ini}
                  </span>
                ))}
              </span>
              <span className="text-[11px] font-semibold text-[#28304a]">Real people. Local care.</span>
            </div>
          </div>

          {/* iPhone mockup with WhatsApp chat */}
          <div className="relative mx-auto w-full max-w-[210px] rotate-2">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#ffc2dc]/60 to-[#9eddf5]/50 blur-xl" />
            <div className="relative rounded-[1.8rem] border-[6px] border-[#28304a] bg-[#eaf9fc] p-2.5 shadow-xl">
              <div className="mb-2 flex items-center gap-1.5 border-b border-[#cfe5ef] pb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#178a58] text-[9px] font-bold text-white">S</span>
                <div>
                  <p className="text-[10px] font-bold leading-none text-[#28304a]">Sitters Over FL</p>
                  <p className="text-[8px] text-[#178a58]">online</p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 text-[9px] leading-snug">
                <div className="max-w-[90%] self-end rounded-xl rounded-br-sm bg-[#d9fdd3] px-2 py-1 text-[#28304a]">
                  Hi! I need a sitter tonight at 7:30 PM in Miami Beach 🏖️
                </div>
                <div className="max-w-[90%] rounded-xl rounded-bl-sm bg-white px-2 py-1 text-[#28304a] shadow-sm">
                  Got it! Checking with our available sitters now 💗
                </div>
                <div className="max-w-[90%] self-end rounded-xl rounded-br-sm bg-[#d9fdd3] px-2 py-1 text-[#28304a]">
                  Perfect, thank you!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* steps strip */}
        <div className="relative mt-6 grid grid-cols-4 gap-2">
          {["Text us", "We match", "You choose", "Confirmed"].map((step, i) => (
            <div key={step} className="rounded-xl bg-white/80 px-2 py-2 text-center shadow-sm">
              <p className="text-[10px] font-extrabold text-[#ed5d9a]">0{i + 1}</p>
              <p className="mt-0.5 text-[9px] font-bold leading-tight text-[#28304a]">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}
