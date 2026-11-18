"use client";

import { useEffect, useState } from "react";
import { Contact } from "../home/contact";
import { Hero } from "../home/hero";
import { SelectedWork } from "../home/selected-work";
import { MobileShowcase } from "./mobile-showcase";
import { StackSection } from "../home/stack-section";
import { Summary } from "../home/summary";
import { Header } from "../shared/header";
import { ThemeCanvas } from "../shared/theme-canvas";
import { LenisScroll } from "../shared/lenis-scroll";

const sectionClass =
  "relative flex min-h-[calc(100svh-4rem)] items-center px-6 py-24 sm:px-10 sm:py-28";

export const MobileHomeView = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(true);
    window.addEventListener("scroll", handleScroll, {
      once: true,
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeCanvas>
      <LenisScroll />
      <Header />
      <main className="relative z-10 divide-y divide-[var(--ink)]/20">
        <section className={`${sectionClass}`}>
          <Hero ready />
        </section>
        <section className={sectionClass}>
          <Summary />
        </section>
        <section className={sectionClass}>
          <StackSection />
        </section>
        <section className={sectionClass}>
          <SelectedWork />
        </section>
        <section className={`${sectionClass} overflow-hidden`}>
          <MobileShowcase />
        </section>
        <section className={sectionClass}>
          <Contact />
        </section>
      </main>
      {!scrolled && (
        <div className="fixed bottom-8 left-1/2 z-30 -translate-x-1/2 text-[9px] uppercase tracking-[.2em] text-[var(--deep)]">
          Scroll to explore <span className="ml-2 text-sm">↓</span>
        </div>
      )}
    </ThemeCanvas>
  );
};
