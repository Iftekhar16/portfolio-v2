"use client";

import { useState } from "react";
import { themes } from "../../lib/data";
import { Cursor } from "./cursor";

export const ThemeCanvas = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(0);
  return (
    <div
      style={
        {
          "--bg": themes[theme].bg,
          "--ink": themes[theme].ink,
          "--deep": themes[theme].deep,
          "--glow": themes[theme].glow,
        } as React.CSSProperties
      }
      className="relative min-h-screen bg-[var(--bg)] font-sans text-[var(--ink)] transition-colors duration-500"
    >
      <div className="grain pointer-events-none fixed inset-[-50%] z-20 opacity-[.16] mix-blend-multiply" />
      {children}
      <Cursor />
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-[var(--ink)] bg-[var(--bg)] p-2 shadow-lg shadow-black/5">
        {themes.map((item, index) => (
          <button
            key={item.name}
            onClick={() => setTheme(index)}
            className={`h-4 w-4 rounded-full border-2 transition ${theme === index ? "scale-125 border-[var(--deep)]" : "border-transparent"}`}
            style={{ backgroundColor: item.ink }}
            aria-label={`${item.name} theme`}
          />
        ))}
      </div>
    </div>
  );
};
