import Reveal from "./Reveal";

const JOBS = [
  {
    role: "Smart Contract Back-End Engineer",
    company: "Phantom",
    type: null,
    period: "Jun 2026 — Present",
    location: null,
    current: true,
  },
  {
    role: "Penetration Tester",
    company: "MoonPay",
    type: null,
    period: "Dec 2025 — Present",
    location: "Surabaya, East Java, Indonesia · Remote",
    current: true,
  },
  {
    role: "Vulnerability Assessor",
    company: "Web3 Foundation",
    type: "Contract",
    period: "Mar 2023 — Present",
    location: "Surabaya, East Java, Indonesia · Remote",
    current: true,
  },
  {
    role: "Smart Contract Backend Engineer",
    company: "Serotonin",
    type: "Contract",
    period: "Aug 2025 — Jan 2026",
    location: null,
    current: false,
  },
  {
    role: "Back-End Golang Engineer",
    company: "WalletConnect",
    type: "Freelance",
    period: "Mar 2024 — Mar 2025",
    location: null,
    current: false,
  },
  {
    role: "Front-End Developer",
    company: "Zurich Insurance",
    type: "Freelance",
    period: "Sep 2022 — May 2023",
    location: null,
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-ink text-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="label text-vermilion">( Experience )</p>
            <h2 className="mt-4 text-display-sm font-black uppercase tracking-tightest">
              Where I&apos;ve <span className="italic text-cream/50">worked</span>
            </h2>
          </div>
          <p className="label text-cream/40">{String(JOBS.length).padStart(2, "0")} roles · newest first</p>
        </Reveal>

        <ol className="border-t-2 border-cream">
          {JOBS.map((j, i) => (
            <Reveal as="li" key={`${j.company}-${j.role}`} delay={i * 0.04} y={20}>
              <article className="group grid gap-x-8 gap-y-3 border-b border-white/20 py-7 transition-colors duration-300 hover:bg-cream hover:text-ink md:grid-cols-12 md:items-center md:px-4 md:py-9">
                <p className="label text-cream/50 transition-colors group-hover:text-ink/60 md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </p>

                <div className="md:col-span-6">
                  <h3 className="text-[clamp(1.5rem,3vw,2.75rem)] font-black leading-[1.02] tracking-tightest">
                    {j.role}
                  </h3>
                  <p className="mt-2 text-lg font-semibold tracking-tight md:text-xl">
                    {j.company}
                    {j.type && (
                      <span className="font-normal text-cream/50 transition-colors group-hover:text-ink/60">
                        {" "}
                        · {j.type}
                      </span>
                    )}
                  </p>
                </div>

                <div className="md:col-span-3">
                  <p className="label">{j.period}</p>
                  {j.location && (
                    <p className="mt-2 text-sm text-cream/55 transition-colors group-hover:text-ink/60">
                      {j.location}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2 md:text-right">
                  {j.current ? (
                    <span className="label inline-flex items-center gap-2 rounded-full bg-vermilion px-3 py-1.5 text-ink">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ink" /> Present
                    </span>
                  ) : (
                    <span className="label inline-block rounded-full border border-white/25 px-3 py-1.5 text-cream/50 transition-colors group-hover:border-ink/30 group-hover:text-ink/60">
                      Completed
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
