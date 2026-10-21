import Link from "next/link";

export const Header = () => (
  <header className="fixed left-[6vw] right-[6vw] top-7 z-30 flex items-center justify-between text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
    <Link href="/" className="text-2xl font-black tracking-[-.09em]">
      IH<span className="text-[var(--ink)]">.</span>
    </Link>
    <nav className="flex items-center gap-4 sm:gap-7">
      <Link href="/" className="transition hover:text-[var(--ink)]">
        Home
      </Link>
      <Link
        href="/selected-work"
        className="transition hover:text-[var(--ink)]"
      >
        Selected Work
      </Link>
      <Link href="/about" className="transition hover:text-[var(--ink)]">
        About
      </Link>
    </nav>
  </header>
);
