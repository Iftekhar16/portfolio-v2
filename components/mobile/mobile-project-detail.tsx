import { motion } from "framer-motion";
import type { Project } from "../../lib/data";

export const MobileProjectDetail = ({ project }: { project: Project }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
    className="w-full py-10 first:pt-0 last:pb-0"
  >
    <p className="hidden mb-4 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
      {project.number} / 04 — {project.type}
    </p>
    <p className="hidden mb-3 text-[10px] uppercase tracking-[.16em] text-[var(--deep)]">
      {project.period}
    </p>
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.56, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      className="mb-4 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]"
    >
      {project.number} / 04 {project.type}
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.78, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
      className="mb-5 text-6xl font-black tracking-[-.1em] text-[var(--ink)] sm:text-8xl"
    >
      {project.name}
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="mb-6 flex flex-wrap gap-2"
    >
      {project.stack.map((tag, index) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.42 + index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-full border border-[var(--deep)]/30 px-2.5 py-1 text-[9px] uppercase tracking-[.08em] text-[var(--deep)]"
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.76, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
      className="mb-5 max-w-lg text-xl leading-tight text-[var(--ink)]"
    >
      {project.description}
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="mb-7"
    >
      <h3 className="mb-3 text-[10px] uppercase tracking-[.18em] text-[var(--deep)]">
        Key highlights
      </h3>
      <ul className="space-y-2.5">
        {project.highlights.map((highlight, index) => (
          <motion.li
            key={highlight}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: 0.48 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex gap-3 text-sm leading-relaxed text-[var(--ink)]"
          >
            <span
              aria-hidden="true"
              className="mt-[.45rem] h-2 w-2 shrink-0 rotate-45 bg-[var(--deep)]"
            />
            <span>{highlight}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.58, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="mb-7 max-w-lg text-sm leading-relaxed text-[var(--deep)]"
    >
      {project.details}
    </motion.p>
    {project.url ? (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 border-b border-[var(--ink)] pb-3 text-[10px] uppercase tracking-[.18em] text-[var(--deep)]"
      >
        View project <span className="text-lg">→</span>
      </a>
    ) : (
      <p className="max-w-lg text-sm leading-relaxed text-[var(--deep)]">
        {project.status}
      </p>
    )}
  </motion.article>
);
