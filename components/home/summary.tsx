export const Summary = () => (
  <div className="grid max-w-5xl gap-10 md:grid-cols-[1fr_220px]">
    <div>
      <p className="mb-4 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
        A little about me
      </p>
      <h2 className="mb-7 text-6xl font-black tracking-[-.08em] text-[var(--ink)] sm:text-8xl">
        SUMMARY
      </h2>
      <p className="max-w-2xl text-xl leading-tight text-[var(--ink)]">
        Frontend engineer with 2+ years of experience building interactive,
        performant, and visually refined web applications using Next.js, React,
        and TypeScript.
      </p>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--deep)]">
        I care about the space between an idea and the way it feels to use. I
        craft polished interfaces with Tailwind and shadcn/ui, connect them to
        clean APIs, and help teams move from rough thought to reliable product.
      </p>
    </div>
    <div className="self-end text-[var(--deep)]">
      <span className="text-7xl font-black tracking-[-.1em]">02+</span>
      <small className="block text-[10px] uppercase tracking-[.16em]">
        years of experience
      </small>
    </div>
  </div>
);
