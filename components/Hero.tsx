import { ArrowRight, CalendarCheck, Sparkles, Star, TrendingUp, Zap } from "lucide-react";

const avatars = [
  "from-rose-400 to-orange-300",
  "from-sky-400 to-indigo-400",
  "from-emerald-400 to-teal-300",
  "from-violet-400 to-fuchsia-400",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0" />
        <div className="animate-blob absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-200/60 blur-3xl" />
        <div className="animate-blob absolute -right-24 top-40 h-[26rem] w-[26rem] rounded-full bg-orange-200/50 blur-3xl [animation-delay:-6s]" />
        <div className="animate-blob absolute left-1/3 top-[28rem] h-[22rem] w-[22rem] rounded-full bg-fuchsia-200/40 blur-3xl [animation-delay:-12s]" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <a href="#contact" className="eyebrow group animate-[float_6s_ease-in-out_infinite]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Now booking projects for Q4 — 2 spots left
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <h1 className="mt-7 text-[2.35rem] font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[5.2rem]">
            We build digital products that{" "}
            <span className="relative whitespace-nowrap">
              <span className="font-serif text-[1.1em] font-normal italic text-gradient">grow</span>
              <svg aria-hidden viewBox="0 0 220 20" className="absolute -bottom-2 left-0 w-full" preserveAspectRatio="none">
                <path d="M3 14 C 60 4, 150 4, 217 12" fill="none" stroke="url(#ug)" strokeWidth="5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="ug" x1="0" x2="1">
                    <stop offset="0" stopColor="#6366f1" />
                    <stop offset="1" stopColor="#ff7a59" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            your business.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            A senior studio of designers and engineers turning ideas into fast, beautiful web &amp; mobile
            apps — launched in weeks, not months, and built to convert.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary w-full px-7 py-4 text-base sm:w-auto">
              <CalendarCheck className="h-5 w-5" />
              Get a free project estimate
            </a>
            <a href="#work" className="btn-ghost w-full px-7 py-4 text-base sm:w-auto">
              See our work <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <div className="flex -space-x-3">
              {avatars.map((g, i) => (
                <span
                  key={g}
                  className={`grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-gradient-to-br ${g} text-xs font-bold text-white shadow-sm`}
                >
                  {["SC", "MW", "PN", "DO"][i]}
                </span>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 text-sm font-bold text-ink">4.9/5</span>
              </div>
              <p className="text-sm text-muted">Loved by 150+ founders &amp; product teams</p>
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
      {/* Glow */}
      <div aria-hidden className="absolute inset-x-10 -top-6 bottom-0 -z-10 rounded-[3rem] bg-gradient-to-r from-brand-400/30 via-fuchsia-300/30 to-orange-300/30 blur-3xl" />

      {/* Browser window */}
      <div className="card overflow-hidden rounded-[1.75rem] p-2 shadow-[0_40px_100px_-30px_rgba(49,46,129,0.35)]">
        <div className="flex items-center gap-2 rounded-t-[1.3rem] border-b border-line bg-slate-50/80 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-300" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
          <div className="mx-auto hidden w-72 items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-1 text-xs text-muted ring-1 ring-line sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> app.yourproduct.com
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 bg-gradient-to-b from-white to-slate-50/60 p-3 sm:gap-4 sm:p-5">
          {/* Sidebar */}
          <div className="col-span-3 hidden flex-col gap-2 rounded-2xl bg-slate-50 p-3 ring-1 ring-line md:flex">
            <div className="mb-2 h-6 w-24 rounded-md bg-gradient-to-r from-brand-500 to-violet-500" />
            {["Overview", "Customers", "Revenue", "Reports", "Settings"].map((l, i) => (
              <div
                key={l}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium ${
                  i === 0 ? "bg-white text-brand-700 shadow-sm ring-1 ring-line" : "text-muted"
                }`}
              >
                <span className={`h-2 w-2 rounded-sm ${i === 0 ? "bg-brand-500" : "bg-slate-300"}`} /> {l}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="col-span-12 flex flex-col gap-3 sm:gap-4 md:col-span-9">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { l: "Revenue", v: "$84.2k", d: "+32%", c: "text-emerald-600" },
                { l: "Active users", v: "12,480", d: "+18%", c: "text-emerald-600" },
                { l: "Conversion", v: "6.4%", d: "+2.1pt", c: "text-emerald-600" },
              ].map((k) => (
                <div key={k.l} className="rounded-2xl bg-white p-3 ring-1 ring-line sm:p-4">
                  <p className="text-[10px] font-medium text-muted sm:text-xs">{k.l}</p>
                  <p className="mt-1 text-base font-bold text-ink sm:text-2xl">{k.v}</p>
                  <p className={`text-[10px] font-semibold sm:text-xs ${k.c}`}>{k.d}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-white p-4 ring-1 ring-line">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-ink sm:text-sm">Growth after launch</p>
                <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">Live</span>
              </div>
              <svg viewBox="0 0 400 120" className="mt-3 h-28 w-full sm:h-36" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#6366f1" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="line" x1="0" x2="1">
                    <stop offset="0" stopColor="#6366f1" />
                    <stop offset="1" stopColor="#ff7a59" />
                  </linearGradient>
                </defs>
                {[30, 60, 90].map((y) => (
                  <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#eef0f5" strokeDasharray="4 4" />
                ))}
                <path d="M0 100 C 40 95, 60 88, 90 84 S 150 70, 180 72 S 240 50, 270 44 S 340 20, 400 10 L400 120 L0 120 Z" fill="url(#area)" />
                <path d="M0 100 C 40 95, 60 88, 90 84 S 150 70, 180 72 S 240 50, 270 44 S 340 20, 400 10" fill="none" stroke="url(#line)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="400" cy="10" r="5" fill="#ff7a59" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="animate-float absolute -left-3 top-24 hidden w-56 rounded-2xl border border-line bg-white/90 p-4 shadow-xl backdrop-blur sm:block lg:-left-16">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
            <Zap className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs text-muted">Lighthouse score</p>
            <p className="text-lg font-bold text-ink">100 / 100</p>
          </div>
        </div>
        <div className="mt-3 flex gap-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="h-1.5 flex-1 rounded-full bg-emerald-400" />
          ))}
        </div>
      </div>

      <div className="animate-float-slow absolute -right-3 top-8 hidden w-60 rounded-2xl border border-line bg-white/90 p-4 shadow-xl backdrop-blur sm:block lg:-right-14">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
            <TrendingUp className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs text-muted">Avg. conversion lift</p>
            <p className="text-lg font-bold text-ink">+64%</p>
          </div>
        </div>
      </div>

      <div className="animate-float absolute -bottom-6 right-6 hidden items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-xl backdrop-blur [animation-delay:-3s] sm:flex lg:right-24">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent text-white">
          <Sparkles className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">Shipped to production 🚀</p>
          <p className="text-xs text-muted">Week 6 · on time, on budget</p>
        </div>
      </div>
    </div>
  );
}
