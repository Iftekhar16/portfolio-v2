"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "../../lib/data";
import { Header } from "../shared/header";
import { ThemeCanvas } from "../shared/theme-canvas";
import { ProjectDetail } from "./project-detail";

export const SelectedWorkView = () => {
  const [active, setActive] = useState(() => {
    const queryIndex =
      typeof window === "undefined"
        ? -1
        : Number(new URLSearchParams(window.location.search).get("project"));
    return Number.isInteger(queryIndex) && queryIndex >= 0 && queryIndex < projects.length
      ? queryIndex
      : 0;
  });
  const activeRef = useRef(active);
  const lock = useRef(false);
  const unlockTimer = useRef<number | null>(null);

  const goTo = useCallback((next: number) => {
    const target = Math.max(0, Math.min(projects.length - 1, next));
    if (target === activeRef.current || lock.current) return;

    lock.current = true;
    activeRef.current = target;
    setActive(target);
    if (unlockTimer.current !== null) window.clearTimeout(unlockTimer.current);
    unlockTimer.current = window.setTimeout(() => {
      lock.current = false;
      unlockTimer.current = null;
    }, 420);
  }, []);

  useEffect(() => {
    const wheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= 8) return;
      const next = activeRef.current + (event.deltaY > 0 ? 1 : -1);
      if (next < 0 || next >= projects.length) return;
      event.preventDefault();
      goTo(next);
    };
    const touch = { y: 0 };
    const begin = (event: TouchEvent) => {
      touch.y = event.touches[0].clientY;
    };
    const end = (event: TouchEvent) => {
      const distance = touch.y - event.changedTouches[0].clientY;
      if (Math.abs(distance) > 30)
        goTo(activeRef.current + (distance > 0 ? 1 : -1));
    };
    const key = (event: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        goTo(activeRef.current + 1);
      }
      if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        goTo(activeRef.current - 1);
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
      if (unlockTimer.current !== null) window.clearTimeout(unlockTimer.current);
    };
  }, [goTo]);

  const project = projects[active];
  return (
    <ThemeCanvas>
      <Header />
      <nav className="fixed right-[6vw] top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex">
        {projects.map((item, index) => (
          <button
            key={item.slug}
            onClick={() => goTo(index)}
            className={`group relative flex gap-2 uppercase tracking-[.16em] transition-[font-size,font-weight,color] duration-200 ease-out ${active === index ? "text-[10px] font-semibold text-[var(--deep)]" : "text-[9px] font-normal text-[var(--ink)]"}`}
          >
            <span>0{index + 1}</span>
            <span>{item.name}</span>
            <span aria-hidden="true" className={`absolute -bottom-1 right-0 h-px w-full origin-right bg-current transition-transform duration-500 ease-out ${active === index ? "scale-x-100" : "scale-x-0"}`} />
          </button>
        ))}
      </nav>
      <main className="flex min-h-screen items-center justify-center px-6 py-24 sm:px-[6vw]">
        <AnimatePresence mode="wait">
          <ProjectDetail key={project.slug} project={project} />
        </AnimatePresence>
      </main>
    </ThemeCanvas>
  );
};
