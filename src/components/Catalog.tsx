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
      const hay = `${p.en} ${p.bn} ${categoryById(p.category).en} ${categoryById(p.category).bn} ${p.fits.join(" ")}`.toLowerCase();
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

  const chip = (active: boolean) =>
    `whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-semibold transition ${
      active
        ? "border-brand bg-brand text-white shadow-sm"
        : "border-line bg-white text-ink-soft hover:border-brand hover:text-brand dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300"
    }`;

  return (
    <section id="parts" className="scroll-mt-32 py-12" aria-labelledby="parts-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 id="parts-title" className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl dark:text-white">
          {t.catalogTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-ink-soft dark:text-slate-300">{t.catalogSub}</p>

        {/* Search + sort */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <label htmlFor="catalog-search" className="sr-only">
              {t.searchLabel}
            </label>
            <input
              id="catalog-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full rounded-lg border border-line bg-white py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-semibold text-ink-soft dark:text-slate-300">
              {t.sortLabel}:
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortMode)}
              className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm font-semibold text-ink focus:border-brand focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            >
              <option value="featured">{t.sortFeatured}</option>
              <option value="name">{t.sortName}</option>
              <option value="category">{t.sortCategory}</option>
            </select>
          </div>
        </div>

        {/* Category chips */}
        <div
          className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar"
          role="group"
          aria-label={t.catalogTitle}
        >
          <button type="button" className={chip(category === "all")} aria-pressed={category === "all"} onClick={() => setCategory("all")}>
            {t.allCategories}
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              className={chip(category === c.id)}
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id as CategoryId)}
            >
              {lang === "bn" ? c.bn : c.en}
            </button>
          ))}
        </div>

        {/* Model chips */}
        <div className="mt-2 flex gap-2 overflow-x-auto pb-1 no-scrollbar" role="group" aria-label={t.allModels}>
          <button type="button" className={chip(model === "all")} aria-pressed={model === "all"} onClick={() => setModel("all")}>
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

        <p className="mt-4 text-sm font-semibold text-ink-soft dark:text-slate-300" aria-live="polite">
          {t.resultsCount(filtered.length)}
        </p>

        {filtered.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-line bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-900">
            <p className="font-bold text-ink dark:text-white">{t.emptyTitle}</p>
            <p className="mt-1.5 text-sm text-ink-soft dark:text-slate-300">{t.emptyText}</p>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((part) => (
              <PartCard key={part.id} part={part} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
