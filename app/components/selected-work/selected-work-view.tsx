"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "../../lib/data";
import { Header } from "../shared/header";
import { ThemeCanvas } from "../shared/theme-canvas";
import { ProjectDetail } from "./project-detail";

export const SelectedWorkView = () => {
  const [active, setActive] = useState(0);
  const lock = useRef(false);
  const goTo = useCallback(
    (next: number) => {
      const target = Math.max(0, Math.min(projects.length - 1, next));
      if (target === active || lock.current) return;
      lock.current = true;
      setActive(target);
      window.setTimeout(() => {
        lock.current = false;
      }, 560);
    },
    [active],
  );

  useEffect(() => {
    const queryIndex = new URLSearchParams(window.location.search).get(
      "project",
    );
    const index = queryIndex === null ? -1 : Number(queryIndex);
    if (Number.isInteger(index) && index >= 0 && index < projects.length)
      window.setTimeout(() => setActive(index), 0);
    const wheel = (event: WheelEvent) => {
      event.preventDefault();
      if (Math.abs(event.deltaY) > 8)
        goTo(active + (event.deltaY > 0 ? 1 : -1));
    };
    const touch = { y: 0 };
    const begin = (event: TouchEvent) => {
      touch.y = event.touches[0].clientY;
    };
    const end = (event: TouchEvent) => {
      const distance = touch.y - event.changedTouches[0].clientY;
      if (Math.abs(distance) > 30) goTo(active + (distance > 0 ? 1 : -1));
    };
    const key = (event: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        goTo(active + 1);
      }
      if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        goTo(active - 1);
      }
    };
    window.addEventListener("wheel", wheel, { passive: false });
    window.addEventListener("touchstart", begin, { passive: true });
    window.addEventListener("touchend", end, { passive: true });
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("touchstart", begin);
      window.removeEventListener("touchend", end);
      window.removeEventListener("keydown", key);
    };
  }, [active, goTo]);

  const project = projects[active];
  return (
    <ThemeCanvas>
      <Header />
      <nav className="fixed right-[6vw] top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex">
        {projects.map((item, index) => (
          <button
            key={item.slug}
            onClick={() => goTo(index)}
            className={`flex gap-2 uppercase tracking-[.16em] transition-[font-size,font-weight,color] duration-200 ease-out ${active === index ? "text-[10px] font-semibold text-[var(--deep)]" : "text-[9px] font-normal text-[var(--ink)]"}`}
          >
            <span>0{index + 1}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
      <div className="fixed bottom-8 left-[6vw] z-30 text-[9px] uppercase tracking-[.2em] text-[var(--deep)]">
        {active + 1} / {projects.length}{" "}
        <span className="ml-3">Scroll to explore â†“</span>
      </div>
      <main className="flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 sm:px-[6vw]">
        <AnimatePresence mode="wait">
          <ProjectDetail key={project.slug} project={project} />
        </AnimatePresence>
      </main>
    </ThemeCanvas>
  );
};
