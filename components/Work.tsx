import { ArrowUpRight } from "lucide-react";
import { work } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Kind = (typeof work)[number]["kind"];

function Mock({ kind }: { kind: Kind }) {
  if (kind === "mobile") {
    return (
      <div className="flex h-full items-end justify-center gap-4 pt-8">
        {[0, 1].map((i) => (
          <div
            key={i}
            className={`w-32 rounded-[1.6rem] border-4 border-white/70 bg-white p-2 shadow-2xl sm:w-36 ${i === 1 ? "translate-y-6" : ""}`}
          >
            <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-slate-200" />
            <div className="h-16 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500" />
            <div className="mt-2 space-y-1.5">
              <div className="h-2 w-3/4 rounded bg-slate-200" />
              <div className="h-2 w-1/2 rounded bg-slate-100" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1">
              {Array.from({ length: 6 }).map((_, j) => (
                <div key={j} className={`h-5 rounded-md ${j === 2 ? "bg-blue-500" : "bg-slate-100"}`} />
              ))}
            </div>
            <div className="mt-3 h-7 rounded-lg bg-ink" />
          </div>
        ))}
      </div>
    );
  }
  if (kind === "commerce") {
    return (
      <div className="grid h-full grid-cols-3 gap-3 p-8 pb-0">
        {["from-orange-200 to-rose-200", "from-pink-200 to-fuchsia-200", "from-amber-200 to-orange-200"].map((g, i) => (
          <div key={g} className={`rounded-t-2xl bg-white p-2 shadow-xl ${i === 1 ? "-translate-y-3" : ""}`}>
            <div className={`aspect-[3/4] rounded-xl bg-gradient-to-br ${g}`} />
            <div className="mt-2 h-2 w-3/4 rounded bg-slate-200" />
            <div className="mt-1.5 flex items-center justify-between">
              <div className="h-2 w-1/3 rounded bg-slate-300" />
              <div className="h-5 w-5 rounded-full bg-ink" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "ai") {
    return (
      <div className="flex h-full flex-col justify-end gap-2.5 p-8 pb-0">
        <div className="max-w-[75%] self-end rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-xs text-white shadow-lg">
          Where&apos;s my order #4821?
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-xs text-ink shadow-xl">
          <p className="mb-1 font-semibold text-emerald-600">✦ Copilot</p>
          It shipped this morning and arrives Thursday. Want me to send tracking to your email?
        </div>
        <div className="flex gap-2">
          <span className="rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-medium text-ink shadow">Yes please</span>
          <span className="rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-medium text-ink shadow">Change address</span>
        </div>
        <div className="h-12 rounded-t-2xl bg-white/90 shadow-xl" />
      </div>
    );
  }
  return (
    <div className="h-full p-8 pb-0">
      <div className="h-full rounded-t-2xl bg-white p-4 shadow-2xl">
        <div className="flex gap-2">
          {[60, 40, 50].map((w, i) => (
            <div key={i} className="flex-1 rounded-lg bg-slate-50 p-2 ring-1 ring-line">
              <div className="h-1.5 rounded bg-slate-200" style={{ width: `${w}%` }} />
              <div className="mt-2 h-3 w-2/3 rounded bg-indigo-400" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex h-24 items-end gap-1.5">
          {[35, 55, 40, 70, 60, 85, 75, 95, 80, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-500 to-purple-400"
              style={{ height: `${h}%`, opacity: 0.5 + i * 0.05 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title={
              <>
                Products that <span className="font-serif font-normal italic text-gradient">move</span> the needle
              </>
            }
            body="We measure success in outcomes, not deliverables. A few recent launches and the results they drove."
          />
          <Reveal>
            <a href="#contact" className="btn-ghost">
              Start your project <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {work.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 100}>
              <article className="group">
                <div
                  className="relative h-72 overflow-hidden rounded-[2rem] sm:h-80"
                  style={{ background: `linear-gradient(135deg, ${w.palette[0]}22, ${w.palette[1]}33)` }}
                >
                  <div
                    aria-hidden
                    className="absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-40 blur-3xl transition-transform duration-700 group-hover:scale-125"
                    style={{ background: w.palette[1] }}
                  />
                  <div className="relative h-full transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]">
                    <Mock kind={w.kind} />
                  </div>
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-ink shadow-sm backdrop-blur">
                    {w.result}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4 px-1">
                  <div>
                    <p className="text-sm font-medium text-muted">
                      {w.client} · {w.category}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold tracking-tight text-ink sm:text-2xl">{w.title}</h3>
                  </div>
                  <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-white transition-all duration-300 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
