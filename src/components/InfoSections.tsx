"use client";

import { useLanguage } from "@/context/AppContext";

export function Dholaikhal() {
  const { t } = useLanguage();
  return (
    <section className="py-12" aria-labelledby="dholaikhal-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl bg-ink p-6 text-white sm:p-8 dark:bg-slate-900 dark:ring-1 dark:ring-slate-700">
          <h2 id="dholaikhal-title" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {t.dholaikhalTitle}
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">{t.dholaikhalText}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {[t.dholaikhalStat1, t.dholaikhalStat2, t.dholaikhalStat3].map((stat) => (
              <li
                key={stat}
                className="rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm font-bold"
              >
                {stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const { t } = useLanguage();
  const items = [
    { title: t.why1Title, text: t.why1Text },
    { title: t.why2Title, text: t.why2Text },
    { title: t.why3Title, text: t.why3Text },
    { title: t.why4Title, text: t.why4Text },
  ];
  return (
    <section id="why" className="scroll-mt-32 py-12" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 id="why-title" className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl dark:text-white">
          {t.whyTitle}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-line bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <h3 className="mt-3 font-bold text-ink dark:text-white">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft dark:text-slate-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
