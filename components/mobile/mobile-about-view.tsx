"use client";

import { motion } from "framer-motion";
import { Contact } from "../about/contact";
import { Education } from "../about/education";
import { Experience } from "../about/experience";
import { Intro } from "../about/intro";
import { Header } from "../shared/header";
import { ThemeCanvas } from "../shared/theme-canvas";

const sectionClass =
  "relative flex min-h-[calc(100svh-4rem)] items-center px-6 py-24 sm:px-10 sm:py-28";

export const MobileAboutView = () => (
  <ThemeCanvas>
    <Header />
    <main className="relative z-10 divide-y divide-[var(--ink)]/20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
        className={sectionClass}
      >
        <Intro />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
        className={sectionClass}
      >
        <Experience />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
        className={sectionClass}
      >
        <Education />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
        className={sectionClass}
      >
        <Contact />
      </motion.section>
    </main>
  </ThemeCanvas>
);
