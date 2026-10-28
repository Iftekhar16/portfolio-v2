"use client";

import { Cursor } from "./cursor";

export const ThemeCanvas = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={
        {
          "--bg": "#e7e5e3",
          "--ink": "#c45850",
          "--deep": "#a9443f",
          "--glow": "#e4c9c7",
        } as React.CSSProperties
      }
      className="relative min-h-screen bg-[var(--bg)] font-sans text-[var(--ink)] transition-colors duration-500"
    >
      {children}
      <Cursor />
    </div>
  );
};
