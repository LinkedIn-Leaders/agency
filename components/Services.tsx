import { ArrowUpRight, Bot, Cloud, Globe, LineChart, PenTool, Smartphone } from "lucide-react";
import { services } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = {
  web: Globe,
  mobile: Smartphone,
  design: PenTool,
  ai: Bot,
  cloud: Cloud,
  growth: LineChart,
} as const;

const tints = {
  web: "bg-brand-50 text-brand-600",
  mobile: "bg-sky-50 text-sky-600",
  design: "bg-fuchsia-50 text-fuchsia-600",
  ai: "bg-emerald-50 text-emerald-600",
  cloud: "bg-amber-50 text-amber-600",
  growth: "bg-orange-50 text-accent",
} as const;

// Bento layout: two wide cards, four regular.
const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4", "lg:col-span-3", "lg:col-span-3"];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Everything you need to <span className="font-serif font-normal italic text-gradient">launch</span> &amp;
              scale
            </>
          }
          body="One senior team for strategy, design, engineering and growth — so nothing gets lost between agencies."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => {
            const Icon = icons[s.id];
            return (
              <Reveal key={s.id} delay={i * 70} className={`${spans[i]} sm:col-span-1`}>
                <article className="card group relative h-full overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_60px_-30px_rgba(79,70,229,0.35)] sm:p-8">
                  <div
                    aria-hidden
                    className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-brand-100 to-orange-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex items-start justify-between">
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tints[s.id]}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                  </div>
                  <h3 className="relative mt-6 text-xl font-bold tracking-tight text-ink">{s.title}</h3>
                  <p className="relative mt-3 leading-relaxed text-ink-soft">{s.body}</p>
                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li key={t} className="rounded-full border border-line bg-slate-50 px-3 py-1 text-xs font-medium text-ink-soft">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
