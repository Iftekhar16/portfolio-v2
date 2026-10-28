"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../../lib/data";

export const SelectedWork = () => (
  <div>
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 flex items-end justify-between"
    >
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
        className="hidden text-[10px] uppercase tracking-[.18em] text-[var(--deep)] underline-offset-4 underline hover:no-underline sm:block"
      >
        View all
      </Link>
    </motion.div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {projects.map((project, index) => (
        <Link href={`/selected-work?project=${index}`} key={project.slug}>
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex h-full min-h-80 flex-col justify-between overflow-hidden rounded-2xl border border-[var(--deep)]/25 bg-[var(--bg)] p-5 text-[var(--ink)] shadow-[0_12px_30px_rgb(0_0_0/6%)] transition-colors duration-300 hover:border-[var(--deep)]"
          >
            <div className="z-10">
              <div className="mb-12 flex justify-between text-[9px] uppercase tracking-[.15em] text-[var(--deep)]">
                <span>{project.number}</span>
                <span className="text-right">
                  {project.type}
                  <br />
                  {/* {project.period} */}
                </span>
              </div>
              <h3 className="mb-3 text-4xl font-black tracking-[-.06em] text-[var(--ink)]">
                {project.name}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--deep)]">
                {project.description}
              </p>
            </div>

            <div className="mt-5 z-10">
              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--deep)]/25 px-2 py-1 text-[9px] uppercase tracking-[.08em] text-[var(--deep)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-[var(--deep)]/20 pt-3 text-[9px] uppercase tracking-[.15em] text-[var(--deep)]">
                <span>View project</span>
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-40 -left-20 blur-2xl size-72 rounded-full bg-[var(--glow)]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.article>
        </Link>
      ))}
    </div>
  </div>
);
