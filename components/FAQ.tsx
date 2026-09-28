import { Plus } from "lucide-react";
import { faqs, site } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={
              <>
                Questions? <span className="font-serif font-normal italic text-gradient">Answered.</span>
              </>
            }
            body="Can't find what you're looking for? We reply to every message within one business day."
          />
          <Reveal className="mt-8">
            <a href={`mailto:${site.email}`} className="btn-ghost">
              Email {site.email}
            </a>
          </Reveal>
        </div>

        <div className="space-y-3 lg:col-span-7">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details
                name="faq"
                className="group rounded-2xl border border-line bg-canvas px-6 transition-colors open:border-brand-200 open:bg-white open:shadow-[0_20px_40px_-24px_rgba(79,70,229,0.35)]"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white ring-1 ring-line transition-all duration-300 group-open:rotate-45 group-open:bg-ink group-open:text-white">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <p className="pb-6 pr-10 leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
