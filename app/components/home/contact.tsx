import { Button } from "../shared/button";

export const Contact = () => (
  <div className="max-w-4xl">
    <p className="mb-5 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
      Have an idea?
    </p>
    <h2 className="mb-9 text-6xl font-black leading-[.85] tracking-[-.09em] text-[var(--ink)] sm:text-8xl">
      LET&apos;S MAKE
      <br />
      <em className="not-italic text-[var(--deep)]">SOMETHING.</em>
    </h2>
    <Button href="mailto:iftekharhossain16@gmail.com">Say Hello!</Button>
  </div>
);
