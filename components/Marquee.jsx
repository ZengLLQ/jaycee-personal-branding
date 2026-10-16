const PHRASES = [
  "BACK-END ARCHITECTURE",
  "PENETRATION TESTING",
  "AI & MACHINE LEARNING",
];

function Group({ hidden = false }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="marquee-group flex shrink-0 animate-marquee items-center"
    >
      {/* repeat the set so one group is always wider than the viewport */}
      {[0, 1].map((r) =>
        PHRASES.map((p) => (
          <span key={`${r}-${p}`} className="flex items-center whitespace-nowrap">
            <span className="px-6 text-[clamp(1.5rem,3.4vw,3.25rem)] font-black uppercase tracking-tightest md:px-10">
              {p}
            </span>
            <span className="text-[clamp(1.5rem,3.4vw,3.25rem)] font-black text-ink">•</span>
          </span>
        ))
      )}
    </div>
  );
}

/** Full-width infinite ticker tape: two identical groups, each translating -100%. */
export default function Marquee() {
  return (
    <div
      role="marquee"
      aria-label="Back-end architecture, penetration testing, AI and machine learning"
      className="marquee-track relative z-10 overflow-hidden border-y-2 border-ink bg-vermilion py-4 text-ink md:py-5"
    >
      <div className="flex w-max">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
