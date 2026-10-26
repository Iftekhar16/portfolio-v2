"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const Cursor = () => {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const ringScaleX = useMotionValue(1);
  const ringScaleY = useMotionValue(1);
  const ringRotate = useMotionValue(0);
  const dotScaleTarget = useMotionValue(1);

  // const x = useSpring(ringX, { stiffness: 120, damping: 20, mass: 0.45 });
  // const y = useSpring(ringY, { stiffness: 120, damping: 20, mass: 0.45 });
  const x = useSpring(ringX, { stiffness: 500, damping: 25, mass: 0.3 });
  const y = useSpring(ringY, { stiffness: 500, damping: 25, mass: 0.3 });
  const scaleX = useSpring(ringScaleX, { stiffness: 260, damping: 24 });
  const scaleY = useSpring(ringScaleY, { stiffness: 260, damping: 24 });
  const dotScale = useSpring(dotScaleTarget, { stiffness: 300, damping: 22 });

  useEffect(() => {
    let previousX = 0;
    let previousY = 0;
    let previousTime = 0;
    let resetTimer: number | undefined;

    const updateHover = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return;
      const clickable = target.closest(
        "a, button, input, textarea, select, summary, [role='button'], [tabindex]:not([tabindex='-1']), [contenteditable='true']",
      );
      dotScaleTarget.set(clickable ? 1.7 : 1);
    };

    const move = (event: PointerEvent) => {
      dotX.set(event.clientX - 5);
      dotY.set(event.clientY - 5);
      ringX.set(event.clientX - 14);
      ringY.set(event.clientY - 14);

      const now = performance.now();
      const elapsed = Math.max(now - previousTime, 8);
      const dx = event.clientX - previousX;
      const dy = event.clientY - previousY;
      const distance = Math.hypot(dx, dy);

      if (previousTime && distance > 0) {
        const speed = distance / elapsed;
        // const intensity = Math.min(0.35, speed * 0.2);
        const intensity = Math.min(0.35, speed * 0);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Parent rotates so its local X axis points along the movement.
        ringRotate.set(angle);
        // Child scales in that rotated frame:
        // stretch along travel, squash perpendicular to it.
        ringScaleX.set(1 + intensity);
        ringScaleY.set(1 - intensity);
      }

      previousX = event.clientX;
      previousY = event.clientY;
      previousTime = now;
      updateHover(event.target);

      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => {
        ringScaleX.set(1);
        ringScaleY.set(1);
      }, 90);
    };

    const leave = () => {
      dotScaleTarget.set(1);
      ringScaleX.set(1);
      ringScaleY.set(1);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      window.clearTimeout(resetTimer);
    };
  }, [
    dotX,
    dotY,
    ringX,
    ringY,
    ringScaleX,
    ringScaleY,
    ringRotate,
    dotScaleTarget,
  ]);

  return (
    <>
      <motion.div
        style={{ x: dotX, y: dotY, scale: dotScale }}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-2.5 w-2.5 rounded-full bg-[var(--ink)] lg:block"
      />

      {/* Parent: position + rotation (aligns local X with movement direction) */}
      <motion.div
        style={{ x, y, rotate: ringRotate }}
        className="pointer-events-none fixed left-0 top-0 z-[89] hidden h-7 w-7 lg:block"
      >
        {/* Child: squash/stretch happens in the rotated frame */}
        <motion.div
          style={{ scaleX, scaleY }}
          className="h-full w-full rounded-full border border-[var(--deep)]"
        />
      </motion.div>
    </>
  );
};
