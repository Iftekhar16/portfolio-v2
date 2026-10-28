import { motion } from "framer-motion";
import type { Project } from "../../lib/data";
import { Archive } from "lucide-react";

export const ProjectDetail = ({ project }: { project: Project }) => (
  <motion.section
    key={project.slug}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -24 }}
    transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
    className="w-full max-w-4xl"
  >
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-4 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]"
    >
      {project.number} / 04 {project.type}
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-fit"
    >
      <p className="text-7xl font-black tracking-[-.1em] text-[var(--ink)] sm:text-9xl">
        {project.name}
      </p>
      {project.isArchived && (
        <p className="absolute flex items-center gap-1 -top-2 -right-20 text-[10px] font-medium bg-[var(--deep)] text-white rounded-full px-3 py-2">
          <Archive size={15} strokeWidth={2.5} />
          Archived
        </p>
      )}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 flex flex-wrap gap-1"
    >
      {project.stack.map((tag, index) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.18 + index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-full border border-[var(--deep)]/30 px-3 py-1.5 text-[9px] uppercase tracking-[.1em] text-[var(--deep)]"
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.76, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 max-w-2xl text-xl leading-tight text-[var(--ink)]"
    >
      {project.description}
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.76, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="mb-7 max-w-2xl"
    >
      <p className="mb-2 text-sm font-semibold text-[var(--deep)]">
        Key highlights
      </p>
      <ul className="space-y-2">
        {project.highlights.map((highlight, index) => (
          <motion.li
            key={highlight}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.5 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-3 text-sm leading-relaxed text-[var(--ink)]"
          >
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rotate-45 bg-[var(--deep)]"
            />
            <span>{highlight}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 max-w-2xl text-sm leading-relaxed text-[var(--deep)]"
    >
      {project.details}
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.94, ease: [0.22, 1, 0.36, 1] }}
    >
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 border-b border-[var(--ink)] pb-2 text-[10px] uppercase tracking-[.18em] text-[var(--deep)]"
        >
          View project
          <span className="transition-transform text-lg duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      ) : (
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--deep)]/70">
          {project.status}
        </p>
      )}
    </motion.div>
  </motion.section>
);
