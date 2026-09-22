"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "../lib/site";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Free audit",
    text: "A 15-minute call. I walk through your current site and show you exactly what's costing you customers.",
  },
  {
    n: "02",
    title: "Fixed-price proposal",
    text: "You get a clear price and timeline before anything starts. No hourly meters, no surprises.",
  },
  {
    n: "03",
    title: "Launch in weeks",
    text: "Design, build, and launch — most projects go live in one to three weeks, then I keep it running.",
  },
];

const AUDIT_POINTS = [
  "A recorded video teardown of your current site",
  "Three specific fixes — yours to keep, whether you hire me or not",
  "Honest, fixed pricing if you want me to do the work",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const business = String(data.get("business") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `Free site audit request — ${name}${business ? ` (${business})` : ""}`;
    const body = `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const inputClass =
    "w-full rounded-xl border border-ink-950/15 bg-white px-4 py-3.5 text-[15px] text-ink-950 placeholder:text-ink-950/35 outline-none transition-colors focus:border-gold-600";

  return (
    <section id="contact" className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-600">Contact</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-5xl">
            Get your free site audit.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-950/65">
            A 15-minute call where I walk through your current site — or your idea — and show you exactly
            what&rsquo;s costing you customers and how I&rsquo;d fix it. No pitch, no pressure, no obligation.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="h-full rounded-2xl border border-ink-950/10 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(5,12,24,0.25)]">
                <p className="font-display text-sm font-semibold text-gold-600">{step.n}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink-950">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-950/60">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="rounded-2xl border border-gold-600/30 bg-white p-8 shadow-[0_10px_30px_-18px_rgba(5,12,24,0.25)]">
              <h3 className="font-display text-2xl font-semibold text-ink-950">What the audit covers</h3>
              <ul className="mt-5 flex flex-col gap-3.5 text-[15px] leading-relaxed text-ink-950/75">
                {AUDIT_POINTS.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-0.5 font-bold text-gold-600">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-ink-950/10 pt-6 text-sm text-ink-950/55">
                <p>
                  Prefer email?{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-semibold text-gold-600 underline-offset-4 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p className="mt-3 leading-relaxed">
                  Serving Miami Beach, Surfside, Bal Harbour, Aventura, Sunny Isles &amp; North Miami
                  Beach — and remote clients everywhere.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-ink-950/10 bg-white p-8 shadow-[0_10px_30px_-18px_rgba(5,12,24,0.25)]"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-950/70">
                    Your name
                  </label>
                  <input id="name" name="name" required placeholder="David Cohen" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-950/70">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="david@business.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="business" className="mb-2 block text-sm font-medium text-ink-950/70">
                  Business name <span className="text-ink-950/40">(optional)</span>
                </label>
                <input
                  id="business"
                  name="business"
                  placeholder="Cohen's Market"
                  className={inputClass}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-950/70">
                  What does your business need?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your current site — or the one you wish you had."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-ink-950 px-8 py-4 text-base font-bold text-cream-50 transition-all hover:-translate-y-0.5 hover:bg-ink-800"
              >
                Request my free audit
              </button>
              {sent && (
                <p className="mt-4 text-center text-sm text-gold-600">
                  Opening your email app — I&rsquo;ll reply within one business day.
                </p>
              )}
              <p className="mt-4 text-center text-xs text-ink-950/40">
                This opens your email app with everything pre-filled. Nothing is stored.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
