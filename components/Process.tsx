import { Check } from "lucide-react";
import { process } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const promises = [
  "Fixed price, no surprise invoices",
  "Weekly demos & live staging link",
  "You own 100% of the code & IP",
  "Senior people only — no hand-offs to juniors",
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div aria-hidden className="grid-bg absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              From idea to launch in <span className="font-serif font-normal italic text-gradient">weeks</span>
            </>
          }
          body="A proven, transparent process that de-risks your investment and keeps you in control at every step."
        />

        <div className="relative mt-16">
        <div aria-hidden className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />
        <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 120}>
              <div className="card group relative h-full p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-500 text-sm font-bold text-white shadow-[0_10px_24px_-8px_rgba(99,102,241,0.7)] transition-transform duration-500 group-hover:scale-110">
                    {p.step}
                  </span>
                  <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-muted ring-1 ring-line">
                    {p.time}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        </div>

        <Reveal className="mt-12">
          <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
            {promises.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
