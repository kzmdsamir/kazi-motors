"use client";

import { useLanguage } from "@/context/AppContext";

export function Dholaikhal() {
  const { t } = useLanguage();
  return (
    <section className="py-12 sm:py-16" aria-labelledby="dholaikhal-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-obsidian-border bg-obsidian p-6 text-slate-100 sm:p-10">
          <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {t.dholaikhalKicker}
            </p>
            <h2
              id="dholaikhal-title"
              className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
            >
              {t.dholaikhalTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {t.dholaikhalText}
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {[t.dholaikhalStat1, t.dholaikhalStat2, t.dholaikhalStat3].map((stat, i) => (
                <li
                  key={stat}
                  className="rounded-xl border border-obsidian-border bg-obsidian-soft/85 px-5 py-4"
                >
                  <span className="block font-mono text-xs font-bold text-amber-400" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="mt-1.5 block text-sm font-bold text-white">
                    {stat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const WHY_ICONS = [
  <svg key="origin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="match" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
  </svg>,
  <svg key="price" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M12 3v18M5 8h14M7 8l-2 6h4l-2-6zM17 8l-2 6h4l-2-6z" />
  </svg>,
  <svg key="delivery" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
];

export function WhyUs() {
  const { t } = useLanguage();
  const items = [
    { title: t.why1Title, text: t.why1Text },
    { title: t.why2Title, text: t.why2Text },
    { title: t.why3Title, text: t.why3Text },
    { title: t.why4Title, text: t.why4Text },
  ];

  return (
    <section id="why" className="scroll-mt-32 py-12 sm:py-16" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2
            id="why-title"
            className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl dark:text-white"
          >
            {t.whyTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base dark:text-slate-400">
            {t.whySub}
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-white p-6 transition hover:border-slate-300 dark:border-slate-800 dark:bg-[#131a26] dark:hover:border-slate-700"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-brand dark:text-amber-400"
                aria-hidden="true"
              >
                {WHY_ICONS[idx]}
              </span>
              <h3 className="mt-4 text-base font-bold text-ink dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
