import { ArrowUpRight, GitFork, Lock, Star } from "lucide-react";
import Reveal from "./Reveal";

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Match a featured project to a repo by (fuzzy) name, if one exists. */
export function matchRepo(repos, key) {
  const k = norm(key);
  return repos.find((r) => norm(r.name).includes(k)) ?? null;
}

function Watermark({ children, className = "" }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute select-none font-black uppercase leading-none tracking-ultra text-white/[0.06] ${className}`}
    >
      {children}
    </span>
  );
}

function CardLink({ repo, children, className }) {
  if (repo && !repo.isPrivate) {
    return (
      <a href={repo.url} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return <div className={className}>{children}</div>;
}

function Featured({ eyebrow, title, fallback, repo, className, gradient, watermark, wmClass, big }) {
  return (
    <CardLink
      repo={repo}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-7 transition-transform duration-500 hover:-translate-y-1 md:p-10 ${gradient} ${className}`}
    >
      <Watermark className={wmClass}>{watermark}</Watermark>
      <div className="relative flex items-start justify-between gap-4">
        <span className="label rounded-full bg-vermilion px-3 py-1.5 text-ink">{eyebrow}</span>
        {repo && !repo.isPrivate && (
          <span className="grid h-12 w-12 place-items-center rounded-full border border-white/30 transition-all duration-500 group-hover:rotate-45 group-hover:border-vermilion group-hover:bg-vermilion group-hover:text-ink">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        )}
      </div>
      <div className="relative mt-24">
        <h3
          className={`font-black uppercase tracking-tightest ${
            big ? "text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.88]" : "text-[clamp(2rem,4.2vw,3.75rem)] leading-[0.92]"
          }`}
        >
          {title}
        </h3>
        <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70">
          {repo?.description || fallback}
        </p>
        {repo?.language && <p className="label mt-5 text-cream/50">{repo.language}</p>}
      </div>
    </CardLink>
  );
}

export default function Projects({ repos }) {
  const whiz = matchRepo(repos, "whizreveal");
  const michelle = matchRepo(repos, "michellefarewell");

  return (
    <section id="projects" className="relative bg-ink text-cream">
      <div className="mx-auto max-w-[1600px] px-5 pb-24 pt-8 md:px-10 md:pb-36">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="label text-vermilion">( Selected work )</p>
            <h2 className="mt-4 text-display-sm font-black uppercase tracking-tightest">
              Featured <span className="italic text-cream/50">projects</span>
            </h2>
          </div>
          <p className="label text-cream/40">{String(repos.length).padStart(2, "0")} public &amp; private repos</p>
        </Reveal>

        {/* Bento grid */}
        <div className="grid auto-rows-[minmax(14rem,auto)] grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          <Reveal className="md:col-span-7 md:row-span-2">
            <Featured
              eyebrow="Featured — 01"
              title="WhizReveal"
              fallback="A featured project. Source and details live on GitHub."
              repo={whiz}
              watermark="PROJECT"
              wmClass="-bottom-4 -right-4 text-[clamp(6rem,18vw,17rem)]"
              gradient="bg-gradient-to-br from-[#262a3f] via-night to-ink"
              className="h-full min-h-[30rem]"
              big
            />
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5">
            <Featured
              eyebrow="Featured — 02"
              title="Michelle Farewell"
              fallback="A personal project made with care. Source and details live on GitHub."
              repo={michelle}
              watermark="DEV"
              wmClass="-right-2 -top-6 text-[clamp(6rem,14vw,12rem)]"
              gradient="bg-gradient-to-br from-[#312b52] via-night to-ink"
              className="h-full min-h-[18rem]"
            />
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-5">
            <div className="relative flex h-full min-h-[14rem] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-vermilion to-[#6764B5] p-7 text-ink md:p-8">
              <Watermark className="-bottom-3 -left-2 text-[clamp(5rem,11vw,9rem)] !text-ink/10">SECURITY</Watermark>
              <p className="label relative">Offensive security</p>
              <p className="relative text-3xl font-black italic leading-none tracking-tighter md:text-4xl">
                Break it first, so no one else can.
              </p>
            </div>
          </Reveal>
        </div>

        {/* All other repos */}
        <ReposGrid repos={repos.filter((r) => r !== whiz && r !== michelle)} />
      </div>
    </section>
  );
}

function ReposGrid({ repos }) {
  return (
    <div className="mt-24 md:mt-32">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b-2 border-cream pb-4">
        <h3 className="text-3xl font-black uppercase tracking-tightest md:text-5xl">
          All repositories
        </h3>
        <p className="label text-cream/50">github.com/ZengLLQ — {String(repos.length).padStart(2, "0")}</p>
      </Reveal>

      {repos.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-white/20 p-8 text-cream/60">
          Repositories are unavailable right now. Please check back soon, or visit{" "}
          <a className="underline underline-offset-4" href="https://github.com/ZengLLQ" target="_blank" rel="noopener noreferrer">
            github.com/ZengLLQ
          </a>
          .
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((r, i) => (
            <Reveal as="li" key={r.id} delay={(i % 3) * 0.06} y={24}>
              <CardLink
                repo={r}
                className={`group relative flex h-full min-h-[13rem] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-night to-ink p-6 transition-all duration-300 ${
                  r.isPrivate ? "" : "hover:-translate-y-1 hover:border-vermilion"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="label text-cream/40">{String(i + 1).padStart(2, "0")}</span>
                  {r.isPrivate ? (
                    <span className="label inline-flex items-center gap-1.5 rounded-full border border-white/20 px-2.5 py-1 text-cream/60">
                      <Lock className="h-3 w-3" aria-hidden /> Private
                    </span>
                  ) : (
                    <ArrowUpRight
                      aria-hidden
                      className="h-5 w-5 text-cream/50 transition-all group-hover:rotate-45 group-hover:text-vermilion"
                    />
                  )}
                </div>
                <div className="mt-8">
                  <h4 className="break-words text-2xl font-black tracking-tighter">{r.name}</h4>
                  {r.description && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-cream/60">{r.description}</p>
                  )}
                  <div className="label mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-cream/45">
                    {r.language && <span>{r.language}</span>}
                    {r.stars > 0 && (
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3 w-3" aria-hidden /> {r.stars}
                      </span>
                    )}
                    {r.forks > 0 && (
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="h-3 w-3" aria-hidden /> {r.forks}
                      </span>
                    )}
                  </div>
                </div>
              </CardLink>
            </Reveal>
          ))}
        </ul>
      )}
    </div>
  );
}
