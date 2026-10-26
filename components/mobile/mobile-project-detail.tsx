import Link from "next/link";
import type { Project } from "../../lib/data";

export const MobileProjectDetail = ({ project }: { project: Project }) => (
  <article className="w-full py-10 first:pt-0 last:pb-0">
    <div className="relative mb-8 h-[45svh] min-h-72 overflow-hidden rounded-xl bg-[var(--deep)]">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-[var(--glow)]" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-[var(--bg)]" />
      <span className="absolute bottom-5 left-5 text-[clamp(7rem,32vw,11rem)] font-black leading-none tracking-[-.12em] text-[var(--bg)]">
        {project.number}
      </span>
      <span className="absolute right-5 top-5 text-[10px] uppercase tracking-[.2em] text-[var(--bg)]">
        Selected work
      </span>
    </div>
    <p className="mb-4 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
      {project.number} / 04 — {project.type}
    </p>
    <h2 className="mb-5 text-6xl font-black tracking-[-.1em] text-[var(--ink)] sm:text-8xl">
      {project.name}
    </h2>
    <p className="mb-5 max-w-lg text-xl leading-tight text-[var(--ink)]">
      {project.description}
    </p>
    <p className="mb-7 max-w-lg text-sm leading-relaxed text-[var(--deep)]">
      {project.details}
    </p>
    <Link
      href="#"
      className="inline-flex items-center gap-4 border-b border-[var(--ink)] pb-3 text-[10px] uppercase tracking-[.18em] text-[var(--deep)]"
    >
      View project <span className="text-lg">→</span>
    </Link>
  </article>
);
