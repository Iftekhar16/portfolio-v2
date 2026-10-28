"use client";

import { Contact } from "../home/contact";
import { Hero } from "../home/hero";
import { SelectedWork } from "../home/selected-work";
import { MobileShowcase } from "./mobile-showcase";
import { StackSection } from "../home/stack-section";
import { Summary } from "../home/summary";
import { Header } from "../shared/header";
import { ThemeCanvas } from "../shared/theme-canvas";

const sectionClass =
  "flex min-h-[calc(100svh-4rem)] items-center px-6 py-24 sm:px-10 sm:py-28";

export const MobileHomeView = () => (
  <ThemeCanvas>
    <Header />
    <main className="relative z-10 divide-y divide-[var(--ink)]/20">
      <section className={sectionClass}>
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
  </ThemeCanvas>
);
