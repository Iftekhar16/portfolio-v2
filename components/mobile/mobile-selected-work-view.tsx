"use client";

import { projects } from "../../lib/data";
import { Header } from "../shared/header";
import { ThemeCanvas } from "../shared/theme-canvas";
import { MobileProjectDetail } from "./mobile-project-detail";

export const MobileSelectedWorkView = () => (
  <ThemeCanvas>
    <Header />
    <main className="relative z-10 px-6 pb-20 pt-32 sm:px-10 sm:pt-40">
      <header className="mb-8">
        <p className="mb-4 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
          Selected work
        </p>
        <h1 className="text-6xl font-black tracking-[-.09em] text-[var(--ink)] sm:text-8xl">
          SELECTED WORK
        </h1>
      </header>
      <div className="divide-y divide-[var(--ink)]/20">
        {projects.map((project) => (
          <MobileProjectDetail key={project.slug} project={project} />
        ))}
      </div>
    </main>
  </ThemeCanvas>
);
