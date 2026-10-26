import Link from "next/link";
import { AnimatedLink } from "./animated-link";

export const Header = () => (
  <header className="fixed left-[6vw] right-[6vw] top-7 z-30 flex items-center justify-between text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
    <Link href="/" className="text-2xl font-black tracking-[-.09em]">
      IH<span className="text-[var(--ink)]">.</span>
    </Link>

    <nav className="flex items-center gap-4 sm:gap-7">
      <AnimatedLink href="/">Home</AnimatedLink>
      <AnimatedLink href="/selected-work">Selected Work</AnimatedLink>
      <AnimatedLink href="/about">About</AnimatedLink>
    </nav>
  </header>
);
