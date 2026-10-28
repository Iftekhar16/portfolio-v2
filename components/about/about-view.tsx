"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Header } from "../shared/header";
import { ThemeCanvas } from "../shared/theme-canvas";
import { Contact } from "./contact";
import { Education } from "./education";
import { Experience } from "./experience";
import { Intro } from "./intro";

const labels = ["about", "experience", "education", "contact"];

export const AboutView = () => {
  const [active, setActive] = useState(0);
  const lock = useRef(false);
  const goTo = useCallback(
    (next: number) => {
      const target = Math.max(0, Math.min(3, next));
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

  return (
    <ThemeCanvas>
      <Header />
      <nav className="fixed right-[6vw] top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex">
        {labels.map((label, index) => (
          <button
            key={label}
            onClick={() => goTo(index)}
            className={`flex gap-2 uppercase tracking-[.16em] transition-[font-size,font-weight,color] duration-200 ease-out ${active === index ? "text-[10px] font-semibold text-[var(--deep)]" : "text-[9px] font-normal text-[var(--ink)]"}`}
          >
            <span>0{index + 1}</span>
            <span>{label}</span>
          </button>
        ))}
      </nav>
      <main className="flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 sm:px-[6vw]">
        <AnimatePresence mode="wait">
          <motion.section
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-6xl"
          >
            {active === 0 && <Intro />}
            {active === 1 && <Experience />}
            {active === 2 && <Education />}
            {active === 3 && <Contact />}
          </motion.section>
        </AnimatePresence>
      </main>
    </ThemeCanvas>
  );
};
