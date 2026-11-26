"use client";

import { useLanguage } from "@/context/AppContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="border-b border-line bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-dark dark:bg-slate-800 dark:text-orange-300">
          {t.heroKicker}
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl dark:text-white">
          {t.heroTitle}{" "}
          <span className="text-brand">{t.heroTitleAccent}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg dark:text-slate-300">
          {t.heroSub}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#parts"
            className="rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark"
          >
            {t.heroCtaParts}
          </a>
          <a
            href="#finder"
            className="rounded-lg border-2 border-brand px-5 py-3 text-sm font-bold text-brand transition hover:bg-brand-soft dark:hover:bg-slate-800"
          >
            {t.heroCtaFinder}
          </a>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Highlights">
          {[t.chipJapan, t.chipModels, t.chipPrice].map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-line bg-page px-3 py-1.5 text-xs font-semibold text-ink-soft dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
