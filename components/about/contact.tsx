import { Button } from "../shared/button";
import { motion } from "framer-motion";

export const Contact = () => (
  <div className="max-w-4xl">
    <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="mb-5 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
      04 / 04 Contact
    </motion.p>
    <h2 className="mb-9 text-6xl font-black leading-[.85] tracking-[-.09em] text-[var(--ink)] sm:text-8xl">
      <motion.span initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="inline-block">LET&apos;S MAKE SOMETHING</motion.span>
      <br />
      <motion.em initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }} className="inline-block not-italic text-[var(--deep)]">WORTH KEEPING.</motion.em>
    </h2>
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}><Button href="mailto:iftekharhossain16@gmail.com">Say Hello!</Button></motion.div>
  </div>
);
