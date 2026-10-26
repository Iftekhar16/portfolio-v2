"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type AnimatedLinkProps = ComponentProps<typeof Link>;

export const AnimatedLink = ({
  children,
  className = "",
  ...props
}: AnimatedLinkProps) => (
  <Link
    {...props}
    className={`group relative inline-block transition hover:text-[var(--ink)] ${className}`}
  >
    {children}

    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -bottom-1 h-[3px]"
    >
      {/* <span className="absolute left-0 top-0 h-px w-full translate-y-2 opacity-0 bg-current transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100" />
      <span className="absolute left-0 top-[2px] h-px w-10/12 translate-y-2 left-1/2 -translate-x-1/2 opacity-0 bg-current transition-all duration-300 delay-75 ease-out group-hover:translate-y-0 group-hover:opacity-100" /> */}

      <span className="absolute left-0 top-0 h-px w-full translate-y-2 opacity-0 bg-current transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100" />
      <span className="absolute left-1/2 top-[3px] h-px w-10/12 -translate-x-1/2 translate-y-2 opacity-0 bg-current transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:duration-300 group-hover:delay-75" />
    </span>
  </Link>
);
