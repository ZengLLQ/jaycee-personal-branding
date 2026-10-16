"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const line = {
  hidden: { y: "105%" },
  show: (i) => ({ y: 0, transition: { duration: 1.05, delay: 0.15 + i * 0.12, ease } }),
};

function Crosshair({ className = "" }) {
  return (
    <span aria-hidden className={`absolute h-4 w-4 ${className}`}>
      <span className="absolute left-1/2 top-0 h-full w-px bg-ink/60" />
      <span className="absolute left-0 top-1/2 h-px w-full bg-ink/60" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-cream bg-blueprint bg-grid"
    >
      {/* fine secondary grid for the technical / blueprint feel */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-blueprint-fine bg-grid-fine" />
      {/* fade grid toward bottom so the marquee seam stays crisp */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-cream/70"
      />

      <Crosshair className="left-5 top-24 md:left-10" />
      <Crosshair className="right-5 top-24 md:right-10" />

      <div className="mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-5 pb-10 pt-32 md:px-10 md:pb-14">
        {/* top meta row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="inline-flex items-center gap-3 rounded-full border-2 border-ink bg-paper px-4 py-2"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-dot absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-vermilion-dark" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-vermilion-dark" />
            </span>
            <span className="label">Freelance Back-end Developer &amp; Penetration Tester</span>
          </motion.div>
          <p className="label hidden text-ink/60 md:block">Index — 2026 / Portfolio</p>
        </div>

        {/* headline + rotated badge */}
        <div className="relative flex items-stretch gap-3 md:gap-6">
          <div className="min-w-0 flex-1">
            <h1 className="font-black uppercase text-ink">
              <span className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  custom={0}
                  variants={line}
                  initial="hidden"
                  animate="show"
                  className="block text-display tracking-ultra"
                >
                  Jaycee
                </motion.span>
              </span>
              <span className="-mt-[0.06em] block overflow-hidden py-[0.06em]">
                <motion.span
                  custom={1}
                  variants={line}
                  initial="hidden"
                  animate="show"
                  className="block text-display leading-[1.1] tracking-tightest"
                >
                  <span className="font-bold">曾令强</span>
                  <span className="text-vermilion-dark">.</span>
                </motion.span>
              </span>
            </h1>
          </div>

          {/* 90-degree rotated badge, a la the "WELCOME" treatment */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="flex shrink-0 flex-col items-center justify-between gap-4 self-stretch"
          >
            <span
              aria-hidden
              className="vertical-text rotate-180 whitespace-nowrap rounded-full bg-ink px-2 py-5 text-[clamp(0.7rem,1.6vw,1.35rem)] font-black uppercase tracking-wideish text-cream md:px-3 md:py-8"
            >
              Portfolio / Developer
            </span>
            <span className="sr-only">Portfolio / Developer</span>
            <ArrowDownRight aria-hidden className="h-6 w-6 text-vermilion-dark md:h-10 md:w-10" strokeWidth={2.5} />
          </motion.div>
        </div>

        {/* bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="mt-8 grid gap-6 border-t-2 border-ink pt-5 md:mt-12 md:grid-cols-12"
        >
          <p className="max-w-xl text-lg font-medium leading-snug tracking-tight md:col-span-6 md:text-2xl">
            Building secure, resilient back-ends — and breaking them first.{" "}
            <em className="font-semibold">Still believing a little magic belongs in every line of code.</em>
          </p>
          <dl className="grid grid-cols-2 gap-4 md:col-span-6 md:grid-cols-3">
            {[
              ["Role", "Freelance"],
              ["Focus", "Back-end / Security"],
              ["Exploring", "AI & ML"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="label text-ink/50">{k}</dt>
                <dd className="mt-1 text-sm font-bold uppercase tracking-tight">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
