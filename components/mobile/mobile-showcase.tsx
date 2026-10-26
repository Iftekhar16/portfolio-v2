import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { showcase } from "../../lib/data";

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

    <div className="columns-2 gap-2">
      {showcase.map((item) => (
        <article key={item.title} className="mb-2 break-inside-avoid overflow-hidden rounded-xl bg-[var(--deep)]">
          <Image
            src={item.image}
            alt=""
            width={1000}
            height={1000}
            loading="eager"
            sizes="(max-width: 639px) 50vw"
            className="block h-auto w-full object-cover"
          />
          <div className="p-3">
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--bg)]">
              <h3 className="text-lg leading-none">{item.title}</h3>
              <ExternalLink size={12} aria-hidden="true" />
            </a>
            <p className="mt-1 text-xs leading-snug text-[var(--bg)]/[85%]">{item.subtitle}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
