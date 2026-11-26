"use client";

import { useMemo } from "react";
import { CATEGORIES, MODELS, PARTS, categoryById } from "@/data/products";
import type { CategoryId, Model } from "@/data/products";
import { useCatalog, useLanguage } from "@/context/AppContext";
import type { SortMode } from "@/context/AppContext";
import { PartCard } from "./PartCard";

export function Catalog() {
  const { t, lang } = useLanguage();
  const { query, setQuery, category, setCategory, model, setModel, sort, setSort } =
    useCatalog();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = PARTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (model !== "all" && !p.fits.includes(model)) return false;
      if (!q) return true;
      const hay = `${p.id} ${p.en} ${p.bn} ${categoryById(p.category).en} ${categoryById(p.category).bn} ${p.fits.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
    if (sort === "name") {
      return [...list].sort((a, b) =>
        (lang === "bn" ? a.bn : a.en).localeCompare(lang === "bn" ? b.bn : b.en),
      );
    }
    if (sort === "category") {
      return [...list].sort(
        (a, b) =>
          categoryById(a.category).en.localeCompare(categoryById(b.category).en) ||
          a.en.localeCompare(b.en),
      );
    }
    return list;
  }, [query, category, model, sort, lang]);

  // Count parts per category given current model/search filter
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    const q = query.trim().toLowerCase();
    for (const p of PARTS) {
      if (model !== "all" && !p.fits.includes(model)) continue;
      if (q) {
        const hay = `${p.id} ${p.en} ${p.bn} ${categoryById(p.category).en} ${categoryById(p.category).bn} ${p.fits.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) continue;
      }
      counts[p.category] = (counts[p.category] ?? 0) + 1;
    }
    return counts;
  }, [query, model]);

  const hasActiveFilters = query.trim() !== "" || category !== "all" || model !== "all";

  const resetAll = () => {
    setQuery("");
    setCategory("all");
    setModel("all");
  };

  const chip = (active: boolean) =>
    `whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-semibold transition sm:text-[13px] ${
      active
        ? "border-obsidian bg-obsidian text-white shadow-sm dark:border-amber-500 dark:bg-amber-500 dark:text-slate-950"
        : "border-line bg-white text-ink-soft hover:border-slate-400 hover:text-ink dark:border-slate-700 dark:bg-[#131a26] dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
    }`;

  return (
    <section id="parts" className="scroll-mt-32 py-14 sm:py-16" aria-labelledby="parts-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2
              id="parts-title"
              className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl dark:text-white"
            >
              {t.catalogTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base dark:text-slate-400">
              {t.catalogSub}
            </p>
          </div>
          <p
            className="shrink-0 font-mono text-xs font-semibold text-ink-soft dark:text-slate-400"
            aria-live="polite"
          >
            {t.resultsCount(filtered.length)}
          </p>
        </div>

        {/* Filter control panel */}
        <div className="mt-6 rounded-2xl border border-line bg-white p-4 shadow-xs sm:p-5 dark:border-slate-800 dark:bg-[#131a26]">
          {/* Search + sort row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <label htmlFor="catalog-search" className="sr-only">
                {t.searchLabel}
              </label>
              <span
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
              </span>
              <input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full rounded-xl border border-line bg-page py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-brand focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-obsidian dark:text-slate-100 dark:focus:border-amber-400"
              />
            </div>

            <div className="flex items-center gap-2.5">
              <label
                htmlFor="sort"
                className="text-xs font-bold uppercase tracking-wider text-ink-muted dark:text-slate-400"
              >
                {t.sortLabel}
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortMode)}
                className="rounded-xl border border-line bg-page px-3.5 py-2.5 text-sm font-semibold text-ink focus:border-brand focus:outline-none dark:border-slate-700 dark:bg-obsidian dark:text-slate-100"
              >
                <option value="featured">{t.sortFeatured}</option>
                <option value="name">{t.sortName}</option>
                <option value="category">{t.sortCategory}</option>
              </select>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetAll}
                  className="whitespace-nowrap rounded-xl border border-line px-3 py-2.5 text-xs font-bold text-ink-soft transition hover:border-brand hover:text-brand dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-400 dark:hover:text-amber-300"
                >
                  {t.resetFilters}
                </button>
              )}
            </div>
          </div>

          {/* Model filter row */}
          <div className="mt-4 flex flex-col gap-2 border-t border-line/70 pt-4 sm:flex-row sm:items-center dark:border-slate-800">
            <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-ink-muted sm:w-28 dark:text-slate-400">
              {t.filterByModel}
            </span>
            <div
              className="flex gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:pb-0 no-scrollbar"
              role="group"
              aria-label={t.allModels}
            >
              <button
                type="button"
                className={chip(model === "all")}
                aria-pressed={model === "all"}
                onClick={() => setModel("all")}
              >
                {t.allModels}
              </button>
              {MODELS.map((m) => (
                <button
                  key={m}
                  type="button"
                  className={chip(model === m)}
                  aria-pressed={model === m}
                  onClick={() => setModel(m as Model)}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Category filter row */}
          <div className="mt-3 flex flex-col gap-2 border-t border-line/70 pt-4 sm:flex-row sm:items-start dark:border-slate-800">
            <span className="shrink-0 pt-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-muted sm:w-28 dark:text-slate-400">
              {t.filterByCategory}
            </span>
            <div
              className="flex gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:pb-0 no-scrollbar"
              role="group"
              aria-label={t.catalogTitle}
            >
              <button
                type="button"
                className={chip(category === "all")}
                aria-pressed={category === "all"}
                onClick={() => setCategory("all")}
              >
                {t.allCategories}
              </button>
              {CATEGORIES.map((c) => {
                const countForCat = categoryCounts[c.id] ?? 0;
                return (
                  <button
                    key={c.id}
                    type="button"
                    className={chip(category === c.id)}
                    aria-pressed={category === c.id}
                    onClick={() => setCategory(c.id as CategoryId)}
                  >
                    {lang === "bn" ? c.bn : c.en}
                    <span className="ml-1.5 font-mono text-[11px] opacity-65">
                      {countForCat}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-[#131a26]">
            <p className="text-base font-bold text-ink dark:text-white">{t.emptyTitle}</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft dark:text-slate-400">
              {t.emptyText}
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAll}
                className="mt-5 rounded-xl bg-obsidian px-4 py-2 text-xs font-bold text-white transition hover:bg-brand dark:bg-amber-500 dark:text-slate-950"
              >
                {t.resetFilters}
              </button>
            )}
          </div>
        ) : (
          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((part) => (
              <PartCard key={part.id} part={part} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
