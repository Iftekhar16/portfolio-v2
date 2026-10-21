"use client";

import { motion } from "framer-motion";
import { skillGroups } from "../../lib/data";
import { skillIcons } from "../svg/skill-icons";

export const StackSection = () => (
  <div className="mx-auto max-w-5xl">
    <p className="mb-4 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
      Tools of the trade
    </p>
    <h2 className="mb-9 text-5xl font-black tracking-[-.08em] text-[var(--ink)] sm:text-7xl">
      TOOLS I USE
    </h2>
    <div className="space-y-5">
      {skillGroups.map((group, groupIndex) => (
        <div
          key={group.name}
          className="grid gap-4 border-t border-[var(--ink)] py-4 sm:grid-cols-[190px_1fr] sm:items-center"
        >
          <h3 className="text-sm uppercase tracking-[.12em] text-[var(--deep)]">
            {group.name}
          </h3>
          <div className="flex flex-wrap gap-x-5 gap-y-4">
            {group.items.map(([name, slug], index) => {
              const icon = skillIcons[slug];
              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (groupIndex * 5 + index) * 0.025 }}
                  className="flex min-w-[76px] flex-col items-center gap-2 text-center text-[10px] text-[var(--deep)]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--glow)] p-2">
                    {icon && (
                      <span
                        role="img"
                        aria-label={`${name} icon`}
                        className="h-full w-full bg-[var(--deep)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
                        style={{
                          WebkitMaskImage: `url(${icon})`,
                          maskImage: `url(${icon})`,
                        }}
                      />
                    )}
                  </span>
                  <span>{name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
);
