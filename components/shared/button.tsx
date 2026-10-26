import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const Button = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <div className="group/button relative inline-block">
    <Link
      href={href}
      className="group relative z-10 inline-flex h-12 w-44 cursor-pointer touch-manipulation outline-none transition-transform hover:-translate-y-1"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 block rounded-full bg-[var(--ink)] transition-[clip-path] duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] [clip-path:inset(0_0_0_calc(100%_-_3rem)_round_1.5rem)] group-hover:[clip-path:inset(0_0_0_0_round_1.5rem)] group-focus-visible:[clip-path:inset(0_0_0_0_round_1.5rem)]"
      >
        <span className="absolute inset-y-0 right-[1.1rem] my-auto block h-0.5 w-4 bg-[var(--bg)]">
          <span className="absolute -top-[.27rem] right-0 block h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-[var(--bg)]" />
        </span>
      </span>

      <span className="absolute inset-0 flex items-center justify-start pl-5 text-sm font-medium uppercase tracking-[.12em] text-[var(--ink)] transition-colors duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-[var(--bg)] group-focus-visible:text-[var(--bg)]">
        {children}
      </span>
    </Link>

    <div className="pointer-events-none flex items-center gap-1 absolute left-1/2 -translate-x-1/2 top-full translate-y-2 text-[9px] uppercase tracking-[.16em] text-[var(--deep)] opacity-0 transition-all duration-300 ease-out group-hover/button:translate-y-0 group-hover/button:opacity-100">
      <p className="whitespace-nowrap">open mail</p>
      <ExternalLink size={15} strokeWidth={1.3} className="mb-1" />
    </div>
  </div>
);
