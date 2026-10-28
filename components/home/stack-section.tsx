"use client";

import { motion } from "framer-motion";
import { skillGroups } from "../../lib/data";
import { skillIcons } from "../svg/skill-icons";

export const StackSection = () => (
  <div className="mx-auto max-w-5xl">
    <p className="mb-4 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
      Tools of the trade
    </p>

    <h2 className="mb-7 text-5xl font-black tracking-[-.08em] text-[var(--ink)] sm:text-7xl">
      TOOLS I USE
    </h2>

    <div className="space-y-3">
      {skillGroups.map((group, groupIndex) => (
        <div
          key={group.name}
          className="grid gap-3 border-x-0 border-t-0 py-0 sm:grid-cols-[190px_1fr] sm:items-center"
        >
          <h3 className="mb-4 text-lg uppercase tracking-[.12em] text-[var(--deep)]">
            {group.name}
          </h3>

          <div className="flex flex-wrap gap-x-3 gap-y-3 sm:gap-x-5">
            {group.items.map(([name, slug], index) => {
              const icon = skillIcons[slug];

              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  // transition={{
                  //   delay: (groupIndex * 5 + index) * 0.025,
                  //   duration: 0.45,
                  //   ease: [0.22, 1, 0.36, 1],
                  // }}
                  transition={{
                    delay: (groupIndex * 5 + index) * 0.03,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex min-w-[56px] flex-col items-center gap-2 text-center max-lg:cursor-default"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-transparent p-3 transition-colors duration-300 group-hover:bg-[var(--glow)] max-lg:bg-[var(--glow)] max-lg:transition-none">
                    {icon && (
                      <span
                        role="img"
                        aria-label={`${name} icon`}
                        className="h-full w-full bg-[var(--deep)] transition-transform duration-300 group-hover:scale-110 max-lg:scale-100 max-lg:transition-none [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
                        style={{
                          WebkitMaskImage: `url(${icon})`,
                          maskImage: `url(${icon})`,
                        }}
                      />
                    )}
                  </span>

                  <span className="translate-y-1 text-[10px] text-[var(--deep)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-lg:translate-y-0 max-lg:opacity-100 max-lg:transition-none">
                    {name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
);
