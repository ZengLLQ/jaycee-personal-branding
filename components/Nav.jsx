"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

/**
 * Fixed bar. Transparent with dark text over the light hero; once the page is
 * scrolled it becomes a solid dark panel with light text.
 */
export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/90 text-cream shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-ink"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 transition-all duration-300 md:px-10 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="#top" className="text-lg font-black tracking-tightest">
          JC<span className={`align-super text-[0.6em] ${scrolled ? "text-vermilion" : "text-vermilion-dark"}`}>®</span>
        </a>
        <nav aria-label="Primary" className="hidden gap-6 lg:flex xl:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`label underline-offset-4 hover:underline ${
                scrolled ? "hover:text-vermilion" : "hover:text-vermilion-dark"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/6282232554674"
          target="_blank"
          rel="noopener noreferrer"
          className={`label border px-4 py-2 transition-colors ${
            scrolled
              ? "border-cream/60 hover:border-vermilion hover:bg-vermilion hover:text-ink"
              : "border-ink hover:bg-ink hover:text-cream"
          }`}
        >
          Say hello
        </a>
      </div>
    </motion.header>
  );
}
