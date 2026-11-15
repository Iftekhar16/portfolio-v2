"use client";

import { motion } from "framer-motion";
import { socialIcons } from "../svg/social-icons";

const links = [
  {
    name: "GitHub",
    slug: "github",
    href: "https://github.com/Iftekhar16",
  },
  {
    name: "LinkedIn",
    slug: "linkedin",
    href: "https://linkedin.com/in/iftekhar16/",
  },
  {
    name: "Behance",
    slug: "behance",
    href: "https://behance.net/iftekharhossain9",
  },
];

export const SocialLinks = () => (
  <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex justify-center gap-3 sm:gap-3"
    >
      {links.map(({ name, slug, href }, index) => (
        <motion.a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6 + index * 0.1,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group flex min-w-[56px] flex-col items-center gap-2 text-center"
          aria-label={`Visit ${name}`}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--deep)] p-2.5 transition-transform duration-300">
            <span
              role="img"
              aria-label={`${name} icon`}
              className="h-full w-full bg-[var(--bg)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
              style={{
                WebkitMaskImage: `url(${socialIcons[slug]})`,
                maskImage: `url(${socialIcons[slug]})`,
              }}
            />
          </span>
          <span className="translate-y-1 text-[10px] text-[var(--deep)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-lg:translate-y-0 max-lg:opacity-100 max-lg:transition-none">
            {name}
          </span>
        </motion.a>
      ))}
    </motion.div>
  </div>
);
