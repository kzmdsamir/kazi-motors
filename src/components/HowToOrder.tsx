"use client";

import { useLanguage } from "@/context/AppContext";

export function HowToOrder() {
  const { t } = useLanguage();
  const steps = [
    { n: "01", title: t.step1Title, text: t.step1Text },
    { n: "02", title: t.step2Title, text: t.step2Text },
    { n: "03", title: t.step3Title, text: t.step3Text },
  ];

  return (
    <section
      id="how"
      className="scroll-mt-32 border-y border-line bg-white py-14 sm:py-16 dark:border-slate-800 dark:bg-[#0f1520]"
      aria-labelledby="how-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2
            id="how-title"
            className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl dark:text-white"
          >
            {t.howTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base dark:text-slate-400">
            {t.howSub}
          </p>
        </div>

        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative flex flex-col rounded-2xl border border-line bg-page p-6 dark:border-slate-800 dark:bg-[#131a26]"
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 font-mono text-sm font-extrabold text-brand dark:text-amber-400"
                aria-hidden="true"
              >
                {s.n}
              </span>
              <h3 className="mt-4 text-base font-bold text-ink dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
                {s.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-50/70 px-4 py-3.5 text-sm text-amber-950 dark:border-amber-500/25 dark:bg-amber-950/25 dark:text-amber-200">
          <span className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </span>
          <p className="leading-relaxed">{t.howNote}</p>
        </div>
      </div>
    </section>
  );
}
