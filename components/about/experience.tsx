import { motion } from "framer-motion";

const experience = [
  {
    role: "Software Engineer II",
    company: "Nexulyze",
    period: "June 2026 - Present",
    description:
      "Developing Pawslyf across web, mobile, and backend systems, with a focus on appointment booking, staff and role management, and service management.",
  },
  {
    role: "Junior Software Engineer",
    company: "ExamBinary (formerly NeovoTech)",
    period: "November 2024 - June 2026",
    description:
      "Developed ExamBinary modules for exam creation, automated grading, lesson planning, classroom management, and parent progress tracking. Also developed Playr Padel's booking and management portal.",
  },
  {
    role: "Intern",
    company: "NeovoTech",
    period: "August 2024 - November 2024",
    description:
      "Developed and debugged modules with senior engineers, collaborated with the team using Git, and adapted to project structures and coding standards.",
  },
];

export const Experience = () => (
  <div className="w-full max-w-5xl">
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-5 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]"
    >
      02 / 04 Experience
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 text-6xl font-black tracking-[-.09em] text-[var(--ink)] sm:text-8xl"
    >
      EXPERIENCE
    </motion.h2>
    <div className="relative">
      {experience.map((item, index) => (
        <motion.article
          key={item.role}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2 + index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex first:pt-0 last:border-0"
        >
          <div className="relative w-8 shrink-0 self-stretch">
            <div
              className={`w-[1px] bg-[var(--ink)] ${
                index === experience.length - 1
                  ? "h-[calc(100%-1.75rem)]"
                  : "h-full"
              }`}
            />
            {/* <div className="absolute top-0 -left-1/2"> */}
            <div className="size-3 bg-[var(--ink)] rounded-full aspect-square absolute top-2.5 -left-1.5" />
            {index === 0 && (
              <div className="size-6 border border-[var(--ink)] rounded-full aspect-square absolute top-1 -left-3" />
            )}
          </div>
          {/* </div> */}

          <div
            className={`w-full pb-7 mb-7 ${index !== experience.length - 1 ? "border-b border-[var(--ink)]/20" : ""}`}
          >
            <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
              <h3 className="text-3xl font-black tracking-[-.04em] text-[var(--ink)]">
                {item.role}
              </h3>
              <span className="text-[10px] uppercase tracking-[.14em] text-[var(--deep)]">
                {item.period}
              </span>
            </div>
            <p className="mb-5 text-xs tracking-[.10em] text-[var(--deep)]">
              {item.company}
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--ink)]">
              {item.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
);
