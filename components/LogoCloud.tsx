import { clients } from "@/lib/site";

const marks = ["◆", "●", "▲", "✦", "◉", "■", "✺", "⬢", "◐", "✧"];

export default function LogoCloud() {
  const row = [...clients, ...clients];
  return (
    <section aria-label="Clients" className="border-y border-line/70 bg-white/60 py-10">
      <div className="container-x">
        <p className="text-center text-sm font-medium text-muted">
          Trusted by startups and scale-ups across fintech, health, commerce &amp; SaaS
        </p>
      </div>
      <div className="mask-fade-x relative mt-7 overflow-hidden">
        <ul className="animate-marquee flex w-max items-center gap-14 pr-14 hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= clients.length}
              className="flex items-center gap-2 whitespace-nowrap text-xl font-bold tracking-tight text-slate-400 transition-colors hover:text-ink"
            >
              <span className="text-brand-400">{marks[i % marks.length]}</span>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
