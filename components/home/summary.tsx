import { getExperience } from "@/lib/hooks/getExperience";
import { motion } from "framer-motion";

export const Summary = () => {
  const experience = getExperience();
  return (
    <div className="grid max-w-5xl gap-10 md:grid-cols-[1fr_220px]">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.61, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]"
        >
          A little about me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.71, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 text-6xl font-black tracking-[-.08em] text-[var(--ink)] sm:text-8xl"
        >
          SUMMARY
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-xl leading-tight text-[var(--ink)]"
        >
          Software engineer with over {experience}+ years of experience building
          production-ready web and mobile applications using Next.js, React,
          React Native, TypeScript, and Express.js.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--deep)]"
        >
          From building intuitive interfaces to developing APIs and managing
          data, I enjoy turning complex requirements into reliable products. My
          experience spans veterinary platforms, educational technology, and
          management systems, with a focus on thoughtful user experiences,
          maintainable code, and effective team collaboration.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="self-end text-[var(--deep)]"
      >
        <span className="text-7xl font-black tracking-[-.1em]">
          {experience.toString().padStart(2, "0")}+
        </span>
        <small className="block text-[10px] uppercase tracking-[.16em]">
          years of experience
        </small>
      </motion.div>
    </div>
  );
};
