import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { showcase } from "../../lib/data";

const showcaseColumns = [
  [showcase[0], showcase[2], showcase[3]],
  [showcase[1], showcase[4], showcase[5]],
];

export const MobileShowcase = () => (
  <section className="w-full">
    <div className="mb-8">
      <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--deep)]">
        Design archive
      </p>
      <h2 className="text-[length:clamp(3rem,14vw,4.5rem)] font-black leading-none tracking-[0.01rem] text-[var(--ink)]">
        SHOWCASE
      </h2>
    </div>

    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      {showcaseColumns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex min-w-0 flex-col gap-2 sm:gap-3">
          {column.map((item) => (
            <article key={item.title} className="relative overflow-hidden rounded-xl bg-[var(--deep)]">
              <Image
                src={item.image}
                alt=""
                width={1000}
                height={1000}
                loading="lazy"
                sizes="(max-width: 639px) 50vw, 33vw"
                className="block h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/70%),transparent)]" />
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.title} in a new tab`}
                className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-[var(--bg)] no-underline focus-visible:outline-offset-[-4px] focus-visible:[outline:2px_solid_white]"
              >
                <h3 className="m-0 text-lg leading-none">{item.title}</h3>
                <ExternalLink className="shrink-0" size={13} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      ))}
    </div>
  </section>
);
