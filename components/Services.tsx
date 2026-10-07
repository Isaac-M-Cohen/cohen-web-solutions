import Reveal from "./Reveal";

const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: ["TypeScript", "Python", "JavaScript", "SQL", "C++", "Java"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React", "React Native", "Next.js", "Expo", "Tailwind CSS", "CSS Modules"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "PostgreSQL", "Supabase", "SQLite", "Docker", "REST APIs"],
  },
  {
    title: "Integrations & Tools",
    skills: ["Stripe", "WhatsApp Business API", "OpenAI API", "Kalshi API", "Git", "Vercel"],
  },
];

export default function Services() {
  return (
    <section id="skills" className="bg-white py-24 text-ink-950 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-600">Skills</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Full-stack, from database to deploy.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-950/65">
            I build complete systems — not just interfaces. Databases, APIs, background workers,
            payment flows, and the frontend on top. Every project below runs in production or is
            production-ready.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-ink-950/10 bg-cream-50 p-6">
                <h3 className="font-display text-lg font-semibold text-gold-600">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-[15px] font-medium text-ink-950/75">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
