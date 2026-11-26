"use client";

import { useLanguage } from "@/context/AppContext";

export function HowToOrder() {
  const { t } = useLanguage();
  const steps = [
    { n: 1, title: t.step1Title, text: t.step1Text },
    { n: 2, title: t.step2Title, text: t.step2Text },
    { n: 3, title: t.step3Title, text: t.step3Text },
  ];
  return (
    <section id="how" className="scroll-mt-32 py-12" aria-labelledby="how-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 id="how-title" className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl dark:text-white">
          {t.howTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-ink-soft dark:text-slate-300">{t.howSub}</p>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-xl border border-line bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-extrabold text-white" aria-hidden="true">
                {s.n}
              </span>
              <h3 className="mt-4 font-bold text-ink dark:text-white">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft dark:text-slate-300">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-200">
          {t.howNote}
        </p>
      </div>
    </section>
  );
}
