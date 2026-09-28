import { ArrowUpRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

const socialIcons: Record<keyof typeof site.socials, React.ReactNode> = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4V9.75Z" />
  ),
  x: <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.2h1.7L7.4 4.7H5.58l11.09 14.5Z" />,
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  dribbble: (
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.6 4.6a8.5 8.5 0 0 1 1.9 5.3c-2.8-.6-5.3-.5-7.4.1-.2-.5-.4-1-.7-1.5 2.4-1 4.4-2.3 6.2-3.9ZM12 3.5c2.1 0 4.1.8 5.6 2.1-1.6 1.5-3.5 2.6-5.8 3.5-1.2-2.2-2.6-4.1-4-5.5A8.5 8.5 0 0 1 12 3.5ZM6.2 4.3c1.4 1.3 2.8 3.2 4 5.4-2.6.8-5.4 1.2-6.6 1.2a8.5 8.5 0 0 1 2.6-6.6ZM3.5 12.4c1.6 0 4.7-.4 7.4-1.3l.6 1.3c-3.2 1.1-5.8 3.2-7.3 5.6a8.4 8.4 0 0 1-.7-5.6Zm8.5 8.1a8.4 8.4 0 0 1-5.4-2c1.3-2.3 3.8-4.3 6.6-5.3 1 2.6 1.6 5.2 1.8 6.7a8.5 8.5 0 0 1-3 .6Zm4.5-1.3c-.3-1.6-.8-4-1.7-6.4 1.9-.4 4-.4 6.4.1a8.5 8.5 0 0 1-4.7 6.3Z" />
  ),
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink text-white">
        <div aria-hidden className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />

        <div className="container-x relative">
          {/* Final CTA */}
          <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 py-16 lg:flex-row lg:items-center">
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to build something{" "}
              <span className="font-serif font-normal italic text-brand-200">remarkable?</span>
            </h2>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 text-base font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(129,140,248,0.8)]"
            >
              Start a project
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </a>
          </div>

          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Logo light />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{site.description}</p>
              <div className="mt-6 flex gap-2">
                {(Object.keys(site.socials) as (keyof typeof site.socials)[]).map((k) => (
                  <a
                    key={k}
                    href={site.socials[k]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={k}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10 transition hover:bg-white hover:text-ink"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      {socialIcons[k]}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Explore</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="transition hover:text-white">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>
                  <a href={`mailto:${site.email}`} className="transition hover:text-white">
                    {site.email}
                  </a>
                </li>
                <li>{site.phone}</li>
                <li>{site.location}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row">
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
            <p>Crafted with Next.js &amp; a lot of coffee.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
