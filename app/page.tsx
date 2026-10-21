"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Contact } from "./components/home/contact";
import { Hero } from "./components/home/hero";
import { SelectedWork } from "./components/home/selected-work";
import { StackSection } from "./components/home/stack-section";
import { Summary } from "./components/home/summary";
import { Showcase } from "./components/home/showcase";
import { Header } from "./components/shared/header";
import { Loader } from "./components/shared/loader";
import { ThemeCanvas } from "./components/shared/theme-canvas";

const sections = [
  "home",
  "about",
  "stack",
  "selected work",
  "showcase",
  "contact",
];

const HomeView = () => {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lock = useRef(false);

  const goTo = useCallback(
    (next: number) => {
      const target = Math.max(0, Math.min(sections.length - 1, next));
      if (target === active || lock.current) return;

      lock.current = true;
      setActive(target);
      setScrolled(true);
      window.setTimeout(() => {
        lock.current = false;
      }, 560);
    },
    [active],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1150);
    const wheel = (event: WheelEvent) => {
      event.preventDefault();
      if (Math.abs(event.deltaY) > 8)
        goTo(active + (event.deltaY > 0 ? 1 : -1));
    };
    const touch = { y: 0 };
    const touchBegin = (event: TouchEvent) => {
      touch.y = event.touches[0].clientY;
    };
    const touchEnd = (event: TouchEvent) => {
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
    window.addEventListener("touchstart", touchBegin, { passive: true });
    window.addEventListener("touchend", touchEnd, { passive: true });
    window.addEventListener("keydown", key);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("touchstart", touchBegin);
      window.removeEventListener("touchend", touchEnd);
      window.removeEventListener("keydown", key);
    };
  }, [active, goTo]);

  return (
    <ThemeCanvas>
      <Header />
      {!ready && <Loader />}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,#fff8f6_0%,transparent_48%)]" />
      <div className="pointer-events-none fixed -bottom-32 left-0 z-0 h-96 w-1/2 rounded-full bg-[var(--glow)] blur-[90px] motion-safe:animate-pulse" />
      <nav className="fixed right-[6vw] top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex">
        {sections.map((name, index) => (
          <button
            key={name}
            onClick={() => goTo(index)}
            className={`flex gap-2 uppercase tracking-[.16em] transition-[font-size,font-weight,color] duration-200 ease-out ${active === index ? "text-[12px] font-semibold text-[var(--deep)]" : "text-[9px] font-normal text-[var(--deep)]"}`}
          >
            <span>0{index + 1}</span>
            <span>{name}</span>
          </button>
        ))}
      </nav>
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <AnimatePresence mode="wait">
          <motion.section
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            className="w-full max-w-6xl"
          >
            {active === 0 && <Hero ready={ready} />}
            {active === 1 && <Summary />}
            {active === 2 && <StackSection />}
            {active === 3 && <SelectedWork />}
            {active === 4 && <Showcase />}
            {active === 5 && <Contact />}
          </motion.section>
        </AnimatePresence>
      </div>
      {!scrolled && (
        <div className="fixed bottom-8 left-1/2 z-30 -translate-x-1/2 text-[9px] uppercase tracking-[.2em] text-[var(--deep)]">
          Scroll to explore <span className="ml-2 text-sm">↓</span>
        </div>
      )}
    </ThemeCanvas>
  );
};

const page = () => {
  return <HomeView />;
};

export default page;
