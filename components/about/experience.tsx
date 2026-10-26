const experience = [
  [
    "Software Engineer II",
    "Owning polished product experiences, API-connected workflows, and the systems that help teams ship with confidence.",
  ],
  [
    "Junior Software Engineer",
    "Built and refined frontend features with React, Next.js, TypeScript, and a close eye on interaction quality.",
  ],
  [
    "Internship",
    "A hands-on start in product development, learning to turn design intent into responsive, useful interfaces.",
  ],
];

export const Experience = () => (
  <div className="w-full max-w-5xl">
    <p className="mb-5 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
      02 / 04 Experience
    </p>
    <h2 className="mb-10 text-6xl font-black tracking-[-.09em] text-[var(--ink)] sm:text-8xl">
      EXPERIENCE
    </h2>
    <div className="border-t border-[var(--ink)]">
      {experience.map(([role, description], index) => (
        <div
          key={role}
          className="group grid gap-3 border-b border-[var(--ink)] py-6 transition-transform hover:translate-x-3 sm:grid-cols-[240px_1fr]"
        >
          <div className="flex gap-5">
            <p className="text-[var(--ink)] text-xs">0{index + 1}</p>
            <p className="text-xs uppercase tracking-[.16em] text-[var(--deep)]">
              {role}
            </p>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--ink)]">
            {description}
          </p>
        </div>
      ))}
    </div>
  </div>
);
