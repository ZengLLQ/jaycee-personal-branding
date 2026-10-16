import Reveal from "./Reveal";

const CHAPTERS = [
  {
    label: "Chapter 01 — Once upon a time",
    text: "Once upon a time (well, currently), a Computer Science student set off on a quest to make sense of Artificial Intelligence and Machine Learning. But deep down, I never really stopped being a Disney kid, the kind who grew up truly believing magic was real ✨, and that belief never quite faded. I'm utterly enchanted by the beauty of far-off lands, especially Europe, Australia, and North America 🌍, exploring their wonder mostly through blogs, vlogs, and movies. And somehow, that same 'anything's possible' spirit always finds its way into every project I build, because it turns out even code needs a little pixie dust and imagination to truly come to life 🪄.",
  },
  {
    label: "Chapter 02 — The quieter chapters",
    text: "There are quieter chapters behind that love of magic. I live with major depressive disorder, and there have been times when sleep was difficult, my body felt exhausted, and the things I usually enjoyed seemed far away. I could still look like myself to other people while struggling to answer a message or follow through on a plan. Sometimes, I buried myself in work because staying busy felt easier than explaining why I was pulling away from people I cared about. I had returned to a psychiatrist for help, but finding the words to tell my friends was its own difficult step 🌙.",
  },
  {
    label: "Chapter 03 — Room to speak",
    text: "In one of those chapters, Michelle gave me room to speak. What began as an ordinary late-night conversation became a chance to share things I had been keeping to myself. She listened, asked questions, and offered a choice I appreciated: whether I wanted her to respond or simply hear me out. I could talk without having to turn everything into a clear explanation. And in the days that followed, she kept including me in the ordinary plans I was so often tempted to avoid 🤍.",
  },
  {
    label: "Chapter 04 — The message I never sent",
    text: "One of those moments stayed with me. I was about to cancel an outing and had started writing the message. When I opened our conversation, I remembered her encouragement. I was still overthinking; leaving the house still felt difficult. For a while, I went back and forth in my head. Then I deleted the draft and went. Later, I thanked her, a little awkwardly, because something she had said in a conversation had helped me make a decision that felt much harder than it probably looked 🪴.",
  },
  {
    label: "Chapter 05 — Still here",
    text: "There is more to living with depression than I can fit into a few paragraphs, and that evening did not resolve everything I was facing. But I want this part of my story to have a place here, too: a friend who made room for what I was carrying, a message I never sent, and an evening I almost missed. Alongside my love of imagined worlds, I am grateful for moments like that in this one.",
  },
];

const CURIOUS = [
  "Artificial intelligence & machine learning",
  "Stories that spark imagination",
  "The beauty of far-off places",
];

const FACTS = [
  { k: "Born", v: "Surabaya", sub: "27th February 2008", emoji: "🎂" },
  { k: "Hobby", v: "K-drama & C-drama", sub: "Watching Korean & Chinese dramas", emoji: "📺" },
  { k: "Sport", v: "Badminton & Padel", sub: "Racket sports", emoji: "🏸" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-night text-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="mb-12 md:mb-16">
          <p className="label text-vermilion">( About me )</p>
          <h2 className="mt-4 text-display-sm font-black uppercase tracking-tightest">
            A <span className="italic font-extrabold text-cream/50">little</span> story
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* left column: pull quote + quick facts */}
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-6 lg:sticky lg:top-24">
              <aside className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl bg-vermilion p-8 text-ink md:p-12">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-16 select-none text-[22rem] font-black leading-none tracking-tightest text-ink/10"
                >
                  “
                </span>
                <p className="label relative">The creed</p>
                <blockquote className="relative mt-10">
                  <p className="text-3xl font-black italic leading-[1.05] tracking-tighter md:text-5xl">
                    “Even code needs a little pixie dust and imagination to truly come to life.”
                  </p>
                  <footer className="label mt-8">— Jaycee 曾令强</footer>
                </blockquote>
              </aside>

              {/* quick facts */}
              <dl className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#20243a] to-ink">
                {FACTS.map((f) => (
                  <div
                    key={f.k}
                    className="flex items-start gap-5 border-b border-white/10 p-6 last:border-0 md:p-7"
                  >
                    <span aria-hidden className="text-3xl leading-none">
                      {f.emoji}
                    </span>
                    <div className="min-w-0">
                      <dt className="label text-vermilion">{f.k}</dt>
                      <dd className="mt-2 text-2xl font-black leading-tight tracking-tighter md:text-3xl">
                        {f.v}
                      </dd>
                      <dd className="mt-1 text-sm text-cream/55">{f.sub}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* story card */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <article className="rounded-3xl bg-cream p-8 text-ink md:p-14">
              <div className="space-y-12">
                {CHAPTERS.map((c, i) => (
                  <section key={c.label}>
                    <h3 className="label mb-4 flex items-center gap-3 text-ink/50">
                      <span className="h-px w-8 bg-ink/40" />
                      {c.label}
                    </h3>
                    <p
                      className={`leading-[1.75] ${
                        i === 0
                          ? "text-lg font-medium md:text-xl first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-black first-letter:leading-[0.8] first-letter:tracking-tightest"
                          : "text-base md:text-lg"
                      }`}
                    >
                      {c.text}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-14 rounded-2xl border-2 border-ink bg-paper p-6 md:p-8">
                <p className="label">A few things that keep me curious</p>
                <ul className="mt-5 space-y-3">
                  {CURIOUS.map((c, i) => (
                    <li
                      key={c}
                      className="flex items-baseline gap-4 border-b border-ink/15 pb-3 text-xl font-black italic tracking-tighter last:border-0 last:pb-0 md:text-2xl"
                    >
                      <span className="label not-italic text-vermilion-dark">0{i + 1}</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
