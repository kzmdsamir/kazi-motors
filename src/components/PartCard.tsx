"use client";

import { useState } from "react";
import type { Part } from "@/data/products";
import { categoryById } from "@/data/products";
import { useCart, useLanguage, useToast } from "@/context/AppContext";
import { CategoryIcon } from "./CategoryIcon";

export function PartCard({ part }: { part: Part }) {
  const { t, lang } = useLanguage();
  const { items, addPart } = useCart();
  const { showToast } = useToast();
  const [popping, setPopping] = useState(false);

  const qty = items[part.id] ?? 0;
  const inList = qty > 0;
  const name = lang === "bn" ? part.bn : part.en;
  const category = categoryById(part.category);

  const handleAdd = () => {
    addPart(part.id);
    showToast(t.toastAdded);
    setPopping(true);
    window.setTimeout(() => setPopping(false), 200);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-[#131a26] dark:hover:border-slate-700">
      {/* Technical SVG header band */}
      <div className="relative flex items-center justify-between border-b border-line/80 bg-slate-50/90 px-4 py-4 dark:border-slate-800/90 dark:bg-obsidian-soft/70">
        <div
          className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-line bg-white text-slate-700 transition group-hover:border-amber-500/50 group-hover:text-amber-600 dark:border-slate-700 dark:bg-obsidian dark:text-amber-400"
          aria-hidden="true"
        >
          <CategoryIcon category={part.category} className="h-8 w-8" />
        </div>

        <div className="flex flex-col items-end gap-1.5">
          <span className="rounded-md border border-line bg-white px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-muted dark:border-slate-700 dark:bg-obsidian dark:text-slate-400">
            {part.id}
          </span>
          <span className="text-[11px] font-semibold text-ink-soft dark:text-slate-400">
            {t.conditionLabel}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-brand dark:text-amber-400">
          {lang === "bn" ? category.bn : category.en}
        </span>

        <h3 className="mt-1.5 text-base font-bold leading-snug text-ink dark:text-slate-50">
          {name}
        </h3>

        {/* Compatible models */}
        <div className="mb-5 mt-3">
          <span className="sr-only">{t.fitsLabel}: </span>
          <ul className="flex flex-wrap gap-1.5" aria-label={t.fitsLabel}>
            {part.fits.map((m) => (
              <li
                key={m}
                className="rounded-md border border-line bg-page px-2 py-0.5 text-[11px] font-semibold text-ink-soft dark:border-slate-700/80 dark:bg-obsidian-soft dark:text-slate-300"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-line/80 pt-4 dark:border-slate-800">
          <span className="text-xs font-bold text-ink dark:text-slate-200 sm:text-[13px]">
            {t.priceOnRequest}
          </span>

          <button
            type="button"
            onClick={handleAdd}
            aria-pressed={inList}
            className={`shrink-0 rounded-lg px-3.5 py-2 text-xs font-extrabold transition ${
              inList
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-obsidian text-white hover:bg-brand dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400"
            } ${popping ? "animate-pop" : ""}`}
          >
            {inList ? `✓ ${t.inList} (${qty})` : t.addToList}
          </button>
        </div>
      </div>
    </article>
  );
}
