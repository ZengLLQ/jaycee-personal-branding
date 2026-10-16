"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    n: "01",
    title: "Back-end Architecture",
    blurb:
      "APIs, services and data layers designed to stay fast, observable and easy to change, with security considered from the first diagram.",
    tags: ["Python", "Java", "PHP", "TypeScript", "GraphQL"],
    pos: "30% 35%",
  },
  {
    n: "02",
    title: "Penetration Testing",
    blurb:
      "Thinking like an attacker to find weaknesses before someone else does: recon, exploitation, and clear, actionable write-ups.",
    tags: ["Web & API", "Recon", "Reporting"],
    pos: "70% 25%",
  },
  {
    n: "03",
    title: "AI & Machine Learning",
    blurb:
      "Studying and building with machine learning, from data and models to getting them into real, useful software.",
    tags: ["Python", "R", "Julia"],
    pos: "25% 70%",
  },
  {
    n: "04",
    title: "Games & Imagination",
    blurb:
      "Interactive worlds and stories that spark wonder, because even code needs a little pixie dust.",
    tags: ["Unreal Engine", "C++", "Kotlin", "Swift"],
    pos: "60% 60%",
  },
];

export default function Skills() {
  const [open, setOpen] = useState(0);
  const active = SERVICES[open];

  return (
    <section id="work" className="relative bg-ink bg-blueprint-dark bg-grid text-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-20">
          <div>
            <p className="label text-vermilion">( What I do )</p>
            <h2 className="mt-4 text-display-xs font-black uppercase tracking-tightest">
              Build it. <span className="italic text-cream/50">Break it.</span>
              <br />
              Make it better.
            </h2>
          </div>
          <p className="label max-w-[16rem] text-cream/50">Hover or tap a discipline to explore</p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* accordion */}
          <ul className="border-t border-white/20 lg:col-span-7">
            {SERVICES.map((s, i) => {
              const isOpen = open === i;
              return (
                <li key={s.n} className="border-b border-white/20">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${s.n}`}
                    onClick={() => setOpen(i)}
                    onMouseEnter={() => setOpen(i)}
                    onFocus={() => setOpen(i)}
                    className="group flex w-full items-center gap-4 py-6 text-left md:gap-8 md:py-8"
                  >
                    <span
                      className={`label w-8 shrink-0 transition-colors md:w-12 ${
                        isOpen ? "text-vermilion" : "text-cream/40"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`flex-1 text-[clamp(1.6rem,3.6vw,3.5rem)] font-black uppercase leading-none tracking-tightest transition-all duration-500 ${
                        isOpen ? "translate-x-2 text-cream" : "text-cream/45 group-hover:translate-x-2 group-hover:text-cream"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span
                      aria-hidden
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500 md:h-12 md:w-12 ${
                        isOpen
                          ? "rotate-45 border-vermilion bg-vermilion text-ink"
                          : "border-white/30 text-cream group-hover:border-cream"
                      }`}
                    >
                      {isOpen ? <Plus className="h-5 w-5" /> : <ArrowUpRight className="h-5 w-5" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`panel-${s.n}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-12 pr-2 md:pl-20">
                          <p className="max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">{s.blurb}</p>
                          <ul className="mt-5 flex flex-wrap gap-2">
                            {s.tags.map((t) => (
                              <li
                                key={t}
                                className="label rounded-full border border-white/25 px-3 py-1.5 text-cream/80"
                              >
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* contextual image preview */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-night lg:sticky lg:top-24">
              <motion.div
                className="absolute inset-0"
                key={active.n}
                initial={{ scale: 1.3, opacity: 0.4 }}
                animate={{ scale: 1.08, opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/390f19eb4cf09b2662d18a0456e8846d.jpg"
                  alt="Jaycee's desk at night: a plush toy resting on a backlit laptop keyboard beside a wireless mouse"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: active.pos }}
                />
              </motion.div>
              {/* atmospheric dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/50 mix-blend-multiply" />
              <div className="absolute inset-0 bg-ink/25" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.n}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="label text-vermilion">{active.n} / 04</p>
                    <p className="mt-2 text-2xl font-black uppercase leading-none tracking-tightest md:text-3xl">
                      {active.title}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <span className="label hidden text-cream/60 sm:block">Fig. {active.n}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
