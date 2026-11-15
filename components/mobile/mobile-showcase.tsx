import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { showcase } from "../../lib/data";

export const MobileShowcase = () => (
  <div className="w-full">
    <div className="mb-8">
      <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--deep)]">
        Design archive
      </p>
      <h2 className="text-[length:clamp(3rem,14vw,4.5rem)] font-black leading-none tracking-[0.01rem] text-[var(--ink)]">
        SHOWCASE
      </h2>
    </div>

    <div className="grid grid-cols-1 gap-5">
      {showcase.map((item) => (
        <article
          key={item.title}
          className="relative overflow-hidden rounded-xl bg-[var(--deep)]"
        >
          <Image
            src={item.image}
            alt=""
            width={2000}
            height={2000}
            loading="lazy"
            // sizes="(max-width: 639px) 50vw, 33vw"
            sizes="100vw"
            className="block h-auto w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/70%),transparent)]" />
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${item.title} in a new tab`}
            className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 px-5 py-3 text-[var(--bg)] no-underline focus-visible:outline-offset-[-4px] focus-visible:[outline:2px_solid_white]"
          >
            <h3 className="m-0 text-3xl leading-none">{item.title}</h3>
            <ExternalLink className="shrink-0" size={13} aria-hidden="true" />
          </a>
        </article>
      ))}
    </div>
  </div>
);
