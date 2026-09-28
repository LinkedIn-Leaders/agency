"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Clock, Loader2, Mail, MapPin, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const interests = ["Website", "Web app", "Mobile app", "UI/UX design", "AI features", "Other"];
const budgets = ["< $10k", "$10k – $25k", "$25k – $50k", "$50k +"];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [picked, setPicked] = useState<string[]>(["Web app"]);
  const [budget, setBudget] = useState(budgets[1]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const toggle = (v: string) => setPicked((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          company: form.get("company"),
          message: form.get("message"),
          interests: picked,
          budget,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-all ${
      active
        ? "border-brand-500 bg-brand-50 text-brand-700 shadow-[0_0_0_3px_rgba(99,102,241,0.12)]"
        : "border-line bg-white text-ink-soft hover:border-brand-200"
    }`;

  const input =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-slate-400 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100";

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-100 via-fuchsia-100 to-orange-100 opacity-70 blur-3xl" />
      </div>

      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">Let&apos;s talk</span>
          <h2 className="h-section mt-5">
            Have an idea? Let&apos;s make it{" "}
            <span className="font-serif font-normal italic text-gradient">real.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Tell us about your project and get a free estimate with scope, timeline and cost within 48 hours. No
            obligation, no sales pressure.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { Icon: Clock, t: "Reply within 1 business day", d: "Usually much faster." },
              { Icon: ShieldCheck, t: "NDA on request", d: "Your idea stays yours." },
              { Icon: Mail, t: site.email, d: "Prefer email? Write to us directly.", href: `mailto:${site.email}` },
              { Icon: MapPin, t: site.location, d: "Working across time zones." },
            ].map(({ Icon, t, d, href }) => (
              <li key={t} className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-brand-600 shadow-sm ring-1 ring-line">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  {href ? (
                    <a href={href} className="font-semibold text-ink hover:text-brand-700">
                      {t}
                    </a>
                  ) : (
                    <p className="font-semibold text-ink">{t}</p>
                  )}
                  <p className="text-sm text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="card rounded-[2rem] p-6 shadow-[0_40px_100px_-40px_rgba(49,46,129,0.35)] sm:p-10">
            {status === "sent" ? (
              <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-ink">Thanks — we&apos;ve got it!</h3>
                <p className="mt-3 max-w-sm text-ink-soft">
                  We&apos;ll review your project and get back to you within one business day with next steps.
                </p>
                <button type="button" onClick={() => setStatus("idle")} className="btn-ghost mt-8">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-7">
                <fieldset>
                  <legend className="text-sm font-semibold text-ink">I&apos;m interested in…</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {interests.map((v) => (
                      <button
                        type="button"
                        key={v}
                        aria-pressed={picked.includes(v)}
                        onClick={() => toggle(v)}
                        className={chip(picked.includes(v))}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-ink">Your name</span>
                    <input name="name" required autoComplete="name" placeholder="Jane Cooper" className={`${input} mt-2`} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-ink">Work email</span>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className={`${input} mt-2`}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-semibold text-ink">
                    Company <span className="font-normal text-muted">(optional)</span>
                  </span>
                  <input name="company" autoComplete="organization" placeholder="Acme Inc." className={`${input} mt-2`} />
                </label>

                <fieldset>
                  <legend className="text-sm font-semibold text-ink">Estimated budget</legend>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        aria-pressed={budget === b}
                        onClick={() => setBudget(b)}
                        className={chip(budget === b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="text-sm font-semibold text-ink">Tell us about your project</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="What are you building, who is it for, and when do you want to launch?"
                    className={`${input} mt-2 resize-none`}
                  />
                </label>

                {status === "error" && (
                  <p role="alert" className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    {error}
                  </p>
                )}

                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                  <p className="text-xs text-muted">No spam, ever. We&apos;ll never share your details.</p>
                  <button type="submit" disabled={status === "sending"} className="btn-primary w-full px-8 py-4 text-base disabled:opacity-70 sm:w-auto">
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Get my free estimate <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
