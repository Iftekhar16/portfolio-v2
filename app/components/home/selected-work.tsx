"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../../lib/data";

export const SelectedWork = () => (
  <div>
    <div className="mb-8 flex items-end justify-between">
      <div>
        <p className="mb-4 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
          Selected work
        </p>
        <h2 className="text-5xl font-black tracking-[-.08em] text-[var(--ink)] sm:text-7xl">
          SELECTED WORK
        </h2>
      </div>
      <Link
        href="/selected-work?project=0"
        className="hidden text-[10px] uppercase tracking-[.18em] text-[var(--deep)] underline-offset-4 hover:underline sm:block"
      >
        View all â†—
      </Link>
    </div>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {projects.map((project, index) => (
        <Link href={`/selected-work?project=${index}`} key={project.slug}>
          <motion.article
            whileHover={{ y: -8, rotate: index % 2 ? 1 : -1 }}
            className="group relative flex min-h-72 flex-col justify-between overflow-hidden rounded-xl bg-[var(--deep)] p-5 text-[var(--bg)] shadow-xl shadow-[var(--deep)]/20"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-[20px] border-[var(--glow)] transition-transform duration-500 group-hover:scale-150" />
            <div className="relative z-10 flex justify-between text-[9px] uppercase tracking-[.15em] text-[var(--bg)]">
              <span>{project.number}</span>
              <span>{project.type}</span>
            </div>
            <div className="relative z-10 text-8xl font-black tracking-[-.15em] text-[var(--bg)]">
              {project.name[0]}
            </div>
            <div className="relative z-10 flex items-end justify-between">
              <h3 className="text-lg text-[var(--bg)]">{project.name}</h3>
              <span>â†—</span>
            </div>
          </motion.article>
        </Link>
      ))}
    </div>
  </div>
);
