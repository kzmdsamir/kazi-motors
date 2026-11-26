"use client";

import { type FormEvent } from "react";
import { MODELS, type Model } from "@/data/products";
import { useCatalog, useLanguage } from "@/context/AppContext";

export function Hero() {
  const { t } = useLanguage();
  const { query, setQuery, setModel, setCategory } = useCatalog();

  const jumpToParts = () => {
    document.getElementById("parts")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    jumpToParts();
  };

  const handleModelPick = (m: Model) => {
    setCategory("all");
    setModel(m);
    jumpToParts();
  };

  const trustSignals = [
    t.chipJapan,
    t.chipModels,
    t.chipPrice,
    t.chipDholaikhal,
  ];

  return (
    <section className="relative overflow-hidden border-b border-obsidian-border bg-obsidian text-slate-100">
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
            {t.heroKicker}
          </p>

          <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[54px]">
            {t.heroTitle}{" "}
            <span className="text-amber-400">{t.heroTitleAccent}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {t.heroSub}
          </p>

          {/* Working hero search bar */}
          <form
            onSubmit={handleSubmit}
            className="mt-7 flex flex-col gap-2.5 sm:flex-row"
            role="search"
          >
            <div className="relative flex-1">
              <label htmlFor="hero-search" className="sr-only">
                {t.searchLabel}
              </label>
              <span
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
              </span>
              <input
                id="hero-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.heroSearchPlaceholder}
                className="w-full rounded-xl border border-obsidian-border bg-obsidian-soft py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-slate-400 transition focus:border-amber-400 focus:outline-none sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-sm transition hover:bg-amber-400"
            >
              {t.heroSearchButton}
            </button>
            <a
              href="#finder"
              className="shrink-0 rounded-xl border border-obsidian-border bg-obsidian-soft px-5 py-3.5 text-center text-sm font-bold text-slate-100 transition hover:border-amber-400/70 hover:text-amber-300"
            >
              {t.heroCtaFinder}
            </a>
          </form>

          {/* Quick Toyota model selectors */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {t.heroModelsLabel}
            </span>
            {MODELS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => handleModelPick(m)}
                className="rounded-lg border border-obsidian-border bg-obsidian-soft/80 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/70 hover:bg-amber-500/10 hover:text-amber-300"
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Honest trust signals strip */}
        <ul
          className="mt-10 grid grid-cols-1 gap-3 border-t border-obsidian-border/80 pt-7 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Trust signals"
        >
          {trustSignals.map((signal) => (
            <li
              key={signal}
              className="flex items-center gap-2.5 rounded-lg border border-obsidian-border/60 bg-obsidian-soft/60 px-3.5 py-2.5 text-xs font-semibold text-slate-200 sm:text-[13px]"
            >
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-400"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span>{signal}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
