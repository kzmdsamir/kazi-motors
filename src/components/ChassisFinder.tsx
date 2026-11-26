"use client";

import { useState, type FormEvent } from "react";
import { MODELS } from "@/data/products";
import { useCart, useLanguage, useToast } from "@/context/AppContext";

export function ChassisFinder() {
  const { t } = useLanguage();
  const { addRequest } = useCart();
  const { showToast } = useToast();
  const [chassis, setChassis] = useState("");
  const [model, setModel] = useState<string>(MODELS[0]);
  const [part, setPart] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const c = chassis.trim();
    const p = part.trim();
    if (!c) {
      setError(t.finderNeedChassis);
      return;
    }
    if (!p) {
      setError(t.finderNeedPart);
      return;
    }
    addRequest({ chassis: c, model, part: p });
    showToast(t.toastRequestSaved);
    setError(null);
    setSaved(true);
    setChassis("");
    setPart("");
    window.setTimeout(() => setSaved(false), 4000);
  };

  const inputCls =
    "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100";

  return (
    <section id="finder" className="scroll-mt-32 py-12" aria-labelledby="finder-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8 dark:border-slate-700 dark:bg-slate-900">
          <h2 id="finder-title" className="text-2xl font-extrabold tracking-tight text-ink dark:text-white">
            {t.finderTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-ink-soft dark:text-slate-300">{t.finderText}</p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="f-chassis" className="mb-1.5 block text-sm font-bold text-ink dark:text-slate-200">
                {t.finderChassisLabel}
              </label>
              <input
                id="f-chassis"
                type="text"
                autoComplete="off"
                value={chassis}
                onChange={(e) => setChassis(e.target.value)}
                placeholder={t.finderChassisPlaceholder}
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="f-model" className="mb-1.5 block text-sm font-bold text-ink dark:text-slate-200">
                {t.finderModelLabel}
              </label>
              <select
                id="f-model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className={inputCls}
              >
                {MODELS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
                <option value="other">{t.finderOtherModel}</option>
              </select>
            </div>
            <div>
              <label htmlFor="f-part" className="mb-1.5 block text-sm font-bold text-ink dark:text-slate-200">
                {t.finderPartLabel}
              </label>
              <input
                id="f-part"
                type="text"
                autoComplete="off"
                value={part}
                onChange={(e) => setPart(e.target.value)}
                placeholder={t.finderPartPlaceholder}
                className={inputCls}
              />
            </div>
            <div className="md:col-span-3">
              <button
                type="submit"
                className="rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark"
              >
                {t.finderButton}
              </button>
              {error && (
                <p className="mt-3 text-sm font-semibold text-red-600" role="alert">
                  {error}
                </p>
              )}
              {saved && !error && (
                <p className="mt-3 text-sm font-semibold text-emerald-600" role="status">
                  ✓ {t.finderSaved}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
