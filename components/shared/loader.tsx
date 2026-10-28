"use client";

import { motion } from "framer-motion";

export const Loader = () => (
  <div
    className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[var(--bg,#e7e5e3)]"
    aria-label="Loading"
  >
    <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_42%,var(--glow,#e4c9c7),transparent_34%)]" />

    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="relative grid h-36 w-36 place-items-center rounded-full border border-[var(--ink,#c45850)]/30"
    >
      <motion.div
        animate={{ scale: [1, 0.88, 1] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-3 rounded-full border border-[var(--ink,#c45850)]/60"
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-16 w-16 rounded-full bg-[var(--ink,#c45850)] shadow-[0_0_70px_var(--glow,#e4c9c7)]"
      />

      <span className="absolute -bottom-9 text-[9px] uppercase tracking-[.4em] text-[var(--deep,#a9443f)]">
        Loading
      </span>
    </motion.div>

    <div className="grain pointer-events-none fixed inset-[-50%] opacity-[.1]" />
  </div>
);
