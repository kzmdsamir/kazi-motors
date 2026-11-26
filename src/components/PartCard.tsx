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
  const inList = (items[part.id] ?? 0) > 0;
  const name = lang === "bn" ? part.bn : part.en;
  const category = categoryById(part.category);

  const handleAdd = () => {
    addPart(part.id);
    showToast(t.toastAdded);
    setPopping(true);
    window.setTimeout(() => setPopping(false), 200);
  };

  return (
    <article className="flex flex-col rounded-xl border border-line bg-white p-4 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-2">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand dark:bg-slate-800"
          aria-hidden="true"
        >
          <CategoryIcon category={part.category} className="h-9 w-9" />
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          {t.conditionLabel}
        </span>
      </div>

      <span className="mt-3 text-xs font-bold uppercase tracking-wide text-brand">
        {lang === "bn" ? category.bn : category.en}
      </span>
      <h3 className="mt-1 font-bold leading-snug text-ink dark:text-white">{name}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-ink-soft dark:text-slate-400">
        {t.fitsLabel} {part.fits.join(", ")}
      </p>

      <div className="mt-auto flex items-center justify-between gap-2 pt-4">
        <span className="text-sm font-extrabold text-ink dark:text-white">
          {t.priceOnRequest}
        </span>
        <button
          type="button"
          onClick={handleAdd}
          aria-pressed={inList}
          className={`rounded-lg px-3 py-2 text-xs font-bold text-white shadow-sm transition ${
            inList ? "bg-emerald-600 hover:bg-emerald-700" : "bg-brand hover:bg-brand-dark"
          } ${popping ? "animate-pop" : ""}`}
        >
          {inList ? `✓ ${t.inList}` : t.addToList}
        </button>
      </div>
    </article>
  );
}
