import { motion } from "framer-motion";

export const Intro = () => (
  <div className="max-w-4xl">
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
      className="mb-5 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]"
    >
      01 / 04 About
    </motion.p>
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.66, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="mb-7 text-7xl font-black leading-[.82] tracking-[-.1em] text-[var(--ink)] sm:text-9xl"
    >
      ABOUT
      <br />
      <span className="text-[var(--deep)]">ME.</span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.66, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-xl text-2xl leading-tight text-[var(--ink)]"
    >
      I like making complex things feel simple, one step at a time.
    </motion.p>
  </div>
);
