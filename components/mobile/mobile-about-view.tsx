"use client";

import { Contact } from "../about/contact";
import { Education } from "../about/education";
import { Experience } from "../about/experience";
import { Intro } from "../about/intro";
import { Header } from "../shared/header";
import { LenisScroll } from "../shared/lenis-scroll";
import { ThemeCanvas } from "../shared/theme-canvas";

const sectionClass =
  "flex min-h-[calc(100svh-4rem)] items-center px-6 py-24 sm:px-10 sm:py-28";

export const MobileAboutView = () => (
  <ThemeCanvas>
    <LenisScroll />
    <Header />
    <main className="relative z-10 divide-y divide-[var(--ink)]/20">
      <section className={sectionClass}>
        <Intro />
      </section>
      <section className={sectionClass}>
        <Experience />
      </section>
      <section className={sectionClass}>
        <Education />
      </section>
      <section className={sectionClass}>
        <Contact />
      </section>
    </main>
  </ThemeCanvas>
);
