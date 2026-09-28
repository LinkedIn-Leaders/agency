import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const gradients = [
  "from-rose-400 to-orange-300",
  "from-sky-400 to-indigo-400",
  "from-emerald-400 to-teal-300",
  "from-violet-400 to-fuchsia-400",
  "from-amber-400 to-rose-400",
  "from-indigo-400 to-cyan-400",
];

function Card({ t, i }: { t: (typeof testimonials)[number]; i: number }) {
  const initials = t.name
    .split(" ")
    .map((p) => p[0])
    .join("");
  return (
    <figure className="card relative w-[20rem] shrink-0 p-7 sm:w-[26rem]">
      <Quote aria-hidden className="absolute right-6 top-6 h-8 w-8 text-brand-100" />
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, k) => (
          <Star key={k} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <blockquote className="mt-4 text-[15px] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} text-sm font-bold text-white`}
        >
          {initials}
        </span>
        <div>
          <p className="text-sm font-bold text-ink">{t.name}</p>
          <p className="text-xs text-muted">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const rows = [testimonials.slice(0, half), testimonials.slice(half)];

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client love"
          title={
            <>
              Founders <span className="font-serif font-normal italic text-gradient">recommend</span> us
            </>
          }
          body="Most of our work comes from referrals. Here's what partners say after launch."
        />
      </div>

      <div className="mask-fade-x mt-14 space-y-6">
        {rows.map((row, r) => {
          const loop = [...row, ...row, ...row, ...row];
          return (
            <div key={r} className="overflow-hidden">
              <div
                className={`flex w-max gap-6 pr-6 hover:[animation-play-state:paused] ${
                  r === 0 ? "animate-marquee" : "animate-marquee-reverse"
                } [animation-duration:60s]`}
              >
                {loop.map((t, i) => (
                  <div key={`${t.name}-${i}`} aria-hidden={i >= row.length}>
                    <Card t={t} i={r * half + (i % row.length)} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
