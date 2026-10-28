import Link from "next/link";
import { AnimatedLink } from "./animated-link";
import { resetScrollPosition } from "./scroll-to-top";

export const Header = () => {
  const handleNavigation = () => {
    resetScrollPosition();
    window.requestAnimationFrame(resetScrollPosition);
  };

  return (
    <header className="fixed left-[6vw] right-[6vw] top-7 z-30 flex items-center justify-between text-[10px] uppercase tracking-[.2em] text-[var(--deep)] max-lg:left-0 max-lg:right-0 max-lg:top-0 max-lg:bg-[var(--bg)] max-lg:px-6 max-lg:py-5 sm:max-lg:px-10">
      <Link href="/" onClick={handleNavigation} className="text-2xl font-black tracking-[-.09em]">
        IH<span className="text-[var(--ink)]">.</span>
      </Link>

      <nav className="flex items-center gap-4 sm:gap-7">
        <AnimatedLink href="/" onClick={handleNavigation}>Home</AnimatedLink>
        <AnimatedLink href="/selected-work" onClick={handleNavigation}>Selected Work</AnimatedLink>
        <AnimatedLink href="/about" onClick={handleNavigation}>About</AnimatedLink>
      </nav>
    </header>
  );
};
