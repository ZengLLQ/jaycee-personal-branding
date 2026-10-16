import { ArrowUpRight, Github, Mail, Phone } from "lucide-react";
import Reveal from "./Reveal";

const CONTACTS = [
  { icon: Mail, label: "Email", value: "veneratesman@gmail.com", href: "mailto:veneratesman@gmail.com" },
  { icon: Phone, label: "Phone", value: "+62 822-3255-4674", href: "tel:+6282232554674" },
  { icon: Github, label: "GitHub", value: "github.com/ZengLLQ", href: "https://github.com/ZengLLQ", external: true },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-cream bg-blueprint bg-grid text-ink">
      <div className="mx-auto max-w-[1600px] px-5 pb-10 pt-24 md:px-10 md:pt-36">
        <Reveal>
          <p className="label text-vermilion-dark">( Contact )</p>
          <h2 className="mt-4 text-display-sm font-black uppercase tracking-ultra">
            Let&apos;s build
            <br />
            <span className="italic text-vermilion-dark">something.</span>
          </h2>
        </Reveal>

        <ul className="mt-16 border-t-2 border-ink">
          {CONTACTS.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label} className="border-b-2 border-ink">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-4 py-6 transition-colors hover:bg-ink hover:text-cream md:gap-8 md:px-4 md:py-8"
              >
                <Icon aria-hidden className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
                <span className="label w-16 shrink-0 md:w-24">{label}</span>
                <span className="min-w-0 flex-1 break-words text-xl font-black tracking-tighter md:text-5xl">{value}</span>
                <ArrowUpRight
                  aria-hidden
                  className="h-6 w-6 shrink-0 transition-transform group-hover:rotate-45 md:h-10 md:w-10"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4">
          <p className="label">© {new Date().getFullYear()} Jaycee 曾令强</p>
          <p className="label italic text-ink/60">Made with a little pixie dust 🪄</p>
        </div>
      </div>
    </footer>
  );
}
