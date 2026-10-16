import Reveal from "./Reveal";

const SCHOOLS = [
  {
    years: "2026 — Present",
    name: "Integrated Institute of Science and Technology Surabaya (ISTTS)",
    place: "Surabaya",
    level: "University",
    current: true,
  },
  {
    years: "2023 — 2026",
    name: "Saint Paul Catholic Senior High School",
    place: "Jember",
    level: "Senior High School",
  },
  {
    years: "2020 — 2023",
    name: "Maria Fatima Catholic Junior High School",
    place: "Jember",
    level: "Junior High School",
  },
  {
    years: "2017 — 2020",
    name: "Maria Fatima Catholic Elementary School",
    place: "Jember",
    level: "Elementary School",
  },
  {
    years: "2014 — 2017",
    name: "Petra 5 Christian Elementary School",
    place: "Surabaya",
    level: "Elementary School",
  },
  {
    years: "2012 — 2014",
    name: "Petra 7 Christian Kindergarten School",
    place: "Surabaya",
    level: "Kindergarten",
  },
  {
    years: "2010 — 2012",
    name: "Whiz Kids Play School",
    place: null,
    level: "Play School",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-cream bg-blueprint bg-grid text-ink"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="mb-14 md:mb-20">
          <p className="label text-vermilion-dark">( Education )</p>
          <h2 className="mt-4 text-display-sm font-black uppercase tracking-ultra">
            The <span className="italic">long</span> way here
          </h2>
        </Reveal>

        <ol className="relative ml-3 border-l-2 border-ink md:ml-6">
          {SCHOOLS.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 0.04} y={24} className="relative pb-10 pl-8 last:pb-0 md:pb-14 md:pl-14">
              {/* timeline node */}
              <span
                aria-hidden
                className={`absolute -left-[0.6rem] top-2 h-[1.15rem] w-[1.15rem] rounded-full border-2 border-ink ${
                  s.current ? "bg-vermilion-dark" : "bg-cream"
                }`}
              />
              <div className="grid gap-2 md:grid-cols-12 md:gap-8">
                <p className="text-[clamp(1.75rem,4vw,3.5rem)] font-black leading-none tracking-tightest md:col-span-4">
                  {s.years}
                </p>
                <div className="md:col-span-8">
                  <h3 className="text-xl font-extrabold leading-tight tracking-tighter md:text-3xl">
                    {s.name}
                  </h3>
                  <p className="label mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-ink/60">
                    <span className="rounded-full border border-ink/40 px-3 py-1">{s.level}</span>
                    {s.place && <span>{s.place}</span>}
                    {s.current && (
                      <span className="rounded-full bg-vermilion-dark px-3 py-1 text-cream font-semibold">Currently studying</span>
                    )}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
