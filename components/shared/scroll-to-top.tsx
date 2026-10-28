"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const resetScrollPosition = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  // Keep all possible document scroll containers in sync. This matters across
  // browsers and when a route is rendered before the browser finishes restoring
  // its previous scroll position.
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
};

export const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    resetScrollPosition();
    const frame = window.requestAnimationFrame(resetScrollPosition);
    const timeout = window.setTimeout(resetScrollPosition, 0);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
};
