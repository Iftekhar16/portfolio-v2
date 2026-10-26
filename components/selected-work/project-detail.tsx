import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "../../lib/data";

export const ProjectDetail = ({ project }: { project: Project }) => (
  <motion.section
    key={project.slug}
    initial={{ opacity: 0, y: 30, scale: 0.985 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -30, scale: 1.015 }}
    transition={{ duration: 0.38, ease: "easeOut" }}
    className="grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-20"
  >
    <motion.div
      initial={{ scale: 0.96 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-[46vh] overflow-hidden rounded-xl bg-[var(--deep)] lg:h-[68vh]"
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-[var(--glow)]" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-[var(--bg)]" />
      <span className="absolute bottom-6 left-6 text-[clamp(8rem,20vw,16rem)] font-black leading-none tracking-[-.12em] text-[var(--bg)]">
        {project.number}
      </span>
      <span className="absolute right-6 top-6 text-[10px] uppercase tracking-[.2em] text-[var(--bg)]">
        Selected work
      </span>
    </motion.div>
    <div>
      <p className="mb-4 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
        {project.number} / 04 {project.type}
      </p>
      <h1 className="mb-6 text-7xl font-black tracking-[-.1em] text-[var(--ink)] sm:text-9xl">
        {project.name}
      </h1>
      <p className="mb-5 max-w-lg text-2xl leading-tight text-[var(--ink)]">
        {project.description}
      </p>
      <p className="mb-8 max-w-lg text-sm leading-relaxed text-[var(--deep)]">
        {project.details}
      </p>
      <Link
        href="#"
        className="group inline-flex items-center gap-4 border-b border-[var(--ink)] pb-3 text-[10px] uppercase tracking-[.18em] text-[var(--deep)]"
      >
        View project
      </Link>
    </div>
  </motion.section>
);
