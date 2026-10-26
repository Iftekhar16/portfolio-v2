const education = [
  ["B.Sc in C.S.E", "East West University", "2020 - 2024"],
  ["H.S.C", "Dr. Mahbubur Rahman Mollah College", "2019"],
  ["S.S.C", "Dolairpar High School", "2017"],
];

export const Education = () => (
  <div className="max-w-5xl">
    <p className="mb-5 text-[10px] uppercase tracking-[.2em] text-[var(--deep)]">
      03 / 04 Education
    </p>
    <h2 className="mb-10 text-6xl font-black tracking-[-.09em] text-[var(--ink)] sm:text-8xl">
      EDUCATION
    </h2>
    <div className="border-t border-[var(--ink)]">
      {education.map(([degree, school, years], index) => (
        <div
          key={degree}
          className="grid gap-3 border-b border-[var(--ink)] py-6 transition-transform hover:translate-x-3 sm:grid-cols-[90px_1fr_120px]"
        >
          <span className="text-xs text-[var(--deep)]">0{index + 1}</span>
          <div>
            <p className="text-lg font-semibold text-[var(--ink)]">{degree}</p>
            <p className="text-sm text-[var(--deep)]">{school}</p>
          </div>
          <span className="text-xs uppercase tracking-[.12em] text-[var(--deep)] sm:text-right">
            {years}
          </span>
        </div>
      ))}
    </div>
  </div>
);
