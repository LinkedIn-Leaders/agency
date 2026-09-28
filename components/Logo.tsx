import { site } from "@/lib/site";

export default function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label={`${site.name} home`}>
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 via-violet-500 to-accent shadow-[0_6px_20px_-6px_rgba(99,102,241,0.8)] transition-transform duration-500 group-hover:rotate-[20deg]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M7 4c0 8 10 8 10 16M17 4c0 8-10 8-10 16M8.5 8h7M8.5 16h7" />
        </svg>
      </span>
      <span className={`text-lg font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        {site.shortName}
        <span className={`font-serif text-xl font-normal italic ${light ? "text-brand-200" : "text-brand-600"}`}> studio</span>
      </span>
    </a>
  );
}
