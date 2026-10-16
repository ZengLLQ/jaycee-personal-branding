import Reveal from "./Reveal";

const STACK = [
  "Python", "Swift", "Julia", "Java", "C++", "HTML5", "CSS3", "JavaScript",
  "TypeScript", "GraphQL", "Kotlin", "PHP", "R", "Ruby", "Rust", "Unreal Engine",
];

export default function TechStack() {
  return (
    <section aria-labelledby="stack-title" className="bg-ink text-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 id="stack-title" className="label text-vermilion">
            ( Tech stack — {STACK.length} tools )
          </h2>
          <p className="label text-cream/40">Languages, frameworks &amp; engines</p>
        </Reveal>
        <ul className="flex flex-wrap gap-3">
          {STACK.map((s, i) => (
            <Reveal as="li" key={s} delay={i * 0.03} y={16}>
              <span className="inline-block rounded-full border border-white/25 px-5 py-3 text-lg font-bold tracking-tighter transition-colors hover:border-vermilion hover:bg-vermilion hover:text-ink md:text-2xl">
                {s}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
