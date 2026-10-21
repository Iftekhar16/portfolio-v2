"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const Cursor = () => {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const x = useSpring(ringX, { stiffness: 120, damping: 20, mass: 0.45 });
  const y = useSpring(ringY, { stiffness: 120, damping: 20, mass: 0.45 });
  useEffect(() => {
    const move = (event: PointerEvent) => {
      dotX.set(event.clientX - 5);
      dotY.set(event.clientY - 5);
      ringX.set(event.clientX - 14);
      ringY.set(event.clientY - 14);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [dotX, dotY, ringX, ringY]);
  return (
    <>
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-2.5 w-2.5 rounded-full bg-[var(--ink)] lg:block"
      />
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[89] hidden h-7 w-7 rounded-full border border-[var(--deep)] lg:block"
      />
    </>
  );
};
