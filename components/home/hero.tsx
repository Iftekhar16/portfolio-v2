import { motion } from "framer-motion";

const titleLines = ["IFTEKHAR", "HOSSAIN"];

export const Hero = ({ ready }: { ready: boolean }) => (
  <div className="mx-auto max-w-5xl">
    <p className="mb-5 text-[10px] uppercase tracking-[.25em] text-[var(--deep)]">
      Portfolio
    </p>
    <motion.h1 className="text-[clamp(3.8rem,12vw,9.5rem)] font-black leading-[.82] tracking-[-.09em] text-[var(--ink)]">
      {titleLines.map((line, lineIndex) => (
        <span
          key={line}
          className="-my-[0.08em] block overflow-hidden py-[0.08em]"
        >
          {line.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${line}-${letterIndex}`}
              initial={{ opacity: 0, y: "110%" }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: "110%" }}
              transition={{
                delay: (lineIndex * 8 + letterIndex) * 0.045,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block ${lineIndex === 1 ? "text-[var(--deep)]" : ""}`}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
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
