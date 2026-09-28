import { ArrowRight, Check, Sparkles } from "lucide-react";
import { pricing } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Engagement models"
          title={
            <>
              Simple, <span className="font-serif font-normal italic text-gradient">transparent</span> pricing
            </>
          }
          body="Fixed-scope projects or an embedded team. Every proposal is tailored — these are typical starting points."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {pricing.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 ${
                  p.featured
                    ? "bg-ink text-white shadow-[0_40px_80px_-30px_rgba(79,70,229,0.6)] lg:-mt-4 lg:mb-[-1rem]"
                    : "card hover:shadow-xl"
                }`}
              >
                {p.featured && (
                  <>
                    <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-accent px-3.5 py-1.5 text-xs font-bold text-white shadow-lg">
                      <Sparkles className="h-3.5 w-3.5" /> Most popular
                    </span>
                  </>
                )}
                <h3 className={`text-lg font-bold ${p.featured ? "text-white" : "text-ink"}`}>{p.name}</h3>
                <p className={`mt-2 text-sm ${p.featured ? "text-slate-300" : "text-ink-soft"}`}>{p.blurb}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className={`text-sm ${p.featured ? "text-slate-400" : "text-muted"}`}>{p.cadence}</span>
                  <span className="text-5xl font-extrabold tracking-tight">{p.price}</span>
                </div>
                <ul className="mt-8 flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          p.featured ? "bg-white/15 text-white" : "bg-brand-50 text-brand-600"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className={p.featured ? "text-slate-200" : "text-ink-soft"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-10 w-full ${
                    p.featured
                      ? "inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                      : "btn-ghost"
                  }`}
                >
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
