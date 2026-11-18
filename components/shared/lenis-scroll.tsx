"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export const LenisScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      autoRaf: false,
      lerp: 0.08,
      wheelMultiplier: 0.8,
      prevent: (node) => Boolean(node.closest("[data-lenis-prevent]")),
    });
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);
    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
};
