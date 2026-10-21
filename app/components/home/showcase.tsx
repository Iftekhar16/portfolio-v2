import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { showcase } from "../../lib/data";

/**
 * State helpers.
 * Tailwind only picks up full literal class names, so each state's classes are
 * written out in full instead of being built up from fragments.
 *
 * "Expanded" = the item is hovered/focused.
 * "Initial"  = the list is idle, so the first item shows as expanded.
 */

// Vertical (collapsed) title: hidden when expanded
const verticalTitleHidden =
  "group-[:is(:hover,:focus-within)]/item:invisible group-[:is(:hover,:focus-within)]/item:opacity-0";
const verticalTitleHiddenInitial =
  "group-[:not(:hover):not(:focus-within)]/list:invisible group-[:not(:hover):not(:focus-within)]/list:opacity-0";

// Expanded content: revealed after the width animation
const contentExpanded = [
  "group-[:is(:hover,:focus-within)]/item:visible",
  "group-[:is(:hover,:focus-within)]/item:translate-y-0",
  "group-[:is(:hover,:focus-within)]/item:opacity-100",
  "group-[:is(:hover,:focus-within)]/item:transition-[opacity,transform,visibility]",
  "group-[:is(:hover,:focus-within)]/item:duration-[350ms]",
  "group-[:is(:hover,:focus-within)]/item:delay-500",
  "max-sm:group-[:is(:hover,:focus-within)]/item:delay-0",
  "motion-reduce:group-[:is(:hover,:focus-within)]/item:transition-none",
].join(" ");

const contentExpandedInitial = [
  "group-[:not(:hover):not(:focus-within)]/list:visible",
  "group-[:not(:hover):not(:focus-within)]/list:translate-y-0",
  "group-[:not(:hover):not(:focus-within)]/list:opacity-100",
  "group-[:not(:hover):not(:focus-within)]/list:transition-[opacity,transform,visibility]",
  "group-[:not(:hover):not(:focus-within)]/list:duration-[350ms]",
  "group-[:not(:hover):not(:focus-within)]/list:delay-500",
  "max-sm:group-[:not(:hover):not(:focus-within)]/list:delay-0",
  "motion-reduce:group-[:not(:hover):not(:focus-within)]/list:transition-none",
].join(" ");

export const Showcase = () => (
  <section className="w-full">
    {/* Header */}
    <div className="mb-8 flex items-end justify-between gap-4 sm:gap-0">
      <div>
        <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--deep)]">
          Design archive
        </p>
        <h2 className="text-[length:clamp(3rem,7vw,4.5rem)] font-black leading-none tracking-[0.01rem] text-[var(--ink)]">
          SHOWCASE
        </h2>
      </div>

      <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--deep)] max-sm:max-w-20 max-sm:text-right">
        Hover to expand
      </span>
    </div>

    {/* List */}
    <div className="group/list flex w-full snap-x snap-mandatory items-start gap-2 overflow-x-auto pb-2 sm:snap-none sm:overflow-visible sm:pb-0 lg:gap-3">
      {showcase.map((item, index) => {
        const isInitial = index === 0;

        return (
          <div
            key={item.title}
            className={[
              "group/item block min-w-0 flex-[0_0_13rem] snap-start overflow-hidden transition-[flex] duration-500 ease-[ease] motion-reduce:transition-none",
              // Desktop / tablet flex behavior
              "sm:flex-[3_1_0]",
              "sm:group-[:is(:hover,:focus-within)]/list:flex-[1_1_0]",
              "sm:hover:flex-[5_1_0]! sm:focus-within:flex-[5_1_0]!",
              // First item is expanded by default
              isInitial
                ? "sm:group-[:not(:hover):not(:focus-within)]/list:flex-[15_1_0]"
                : "",
            ].join(" ")}
          >
            {/* Image */}
            <div className="relative h-[30rem] w-full overflow-hidden rounded-xl bg-[var(--deep)] sm:h-[26rem] lg:h-[35rem]">
              <Image
                src={item.image}
                alt=""
                width={1000}
                height={1000}
                sizes="(max-width: 639px) 13rem, 25vw"
                className="block h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/70%),transparent)]" />

              {/* Collapsed vertical title */}
              <h3
                className={[
                  "absolute bottom-4 right-[0.1rem] m-0 origin-center rotate-180 visible opacity-100",
                  "text-[2.25rem] font-bold tracking-[0.01rem] text-[var(--bg)] sm:text-[2rem] lg:text-[3rem]",
                  "[writing-mode:vertical-rl]",
                  "transition-[opacity,visibility] duration-150 ease-[ease] motion-reduce:transition-none",
                  verticalTitleHidden,
                  isInitial ? verticalTitleHiddenInitial : "",
                ].join(" ")}
              >
                {item.title}
              </h3>

              {/* Expanded content */}
              <div
                className={[
                  "absolute inset-x-0 bottom-0 invisible translate-y-4 p-5 opacity-0",
                  contentExpanded,
                  isInitial ? contentExpandedInitial : "",
                ].join(" ")}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.title} in a new tab`}
                  className="group/link inline-flex w-fit max-w-full items-center gap-2 text-[var(--bg)] no-underline hover:underline hover:underline-offset-4 focus-visible:outline-offset-4 focus-visible:[outline:2px_solid_white]"
                >
                  <h3 className="m-0 text-[1.5rem] font-normal leading-[1.1] tracking-[normal] text-inherit [font-family:inherit] sm:text-[2rem] lg:text-[1.5rem]">
                    {item.title}
                  </h3>

                  <ExternalLink
                    className="shrink-0 transition-transform duration-200 ease-[ease] group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
                    size={15}
                    aria-hidden="true"
                  />
                </a>

                <p className="mt-1.5 text-sm font-normal leading-[1.625] text-[var(--bg)]/[90%]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
