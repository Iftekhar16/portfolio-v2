import { motion } from "framer-motion";

export const Hero = ({ ready }: { ready: boolean }) => (
  <div className="mx-auto max-w-5xl">
    <p className="mb-5 text-[10px] uppercase tracking-[.25em] text-[var(--deep)]">
      Portfolio
    </p>
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="text-[clamp(3.8rem,12vw,9.5rem)] font-black leading-[.82] tracking-[-.09em] text-[var(--ink)]"
    >
      IFTEKHAR
      <br />
      <em className="not-italic text-[var(--deep)]">HOSSAIN</em>
    </motion.h1>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ delay: 0.2, duration: 0.55 }}
      className="mt-9 flex max-w-2xl flex-col justify-between gap-5 text-[11px] uppercase tracking-[.14em] text-[var(--deep)] sm:flex-row sm:items-end"
    >
      <span>Software engineer</span>
      <span className="normal-case tracking-[.1em]">
        building intuitive user experiences
      </span>
    </motion.div>
  </div>
);
