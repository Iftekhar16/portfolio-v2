"use client";

import { Check } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./button";

const EMAIL = "iftekharhossain16@gmail.com";

export const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const copyEmail = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <Button
        href={`mailto:${EMAIL}`}
        onClick={copyEmail}
        helperText="copy email"
      >
        Say Hello!
      </Button>
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-7 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-[var(--ink)] px-4 py-3 text-[10px] uppercase tracking-[.14em] text-[var(--bg)] transition-all duration-300 ${copied ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
      >
        <Check size={14} strokeWidth={2.5} aria-hidden="true" />
        Email copied
      </div>
    </>
  );
};
