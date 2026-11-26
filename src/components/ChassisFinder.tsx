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
    const c = chassis.trim().toUpperCase();
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
    window.setTimeout(() => setSaved(false), 5000);
  };

  const inputCls =
    "w-full rounded-xl border border-line bg-page px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted transition focus:border-brand focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-obsidian dark:text-slate-100 dark:focus:border-amber-400";

  return (
    <section id="finder" className="scroll-mt-32 py-12 sm:py-16" aria-labelledby="finder-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm dark:border-slate-800 dark:bg-[#131a26]">
          <div className="grid lg:grid-cols-12">
            {/* Left explainer panel */}
            <div className="flex flex-col justify-between border-b border-line bg-obsidian p-6 text-slate-100 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:border-obsidian-border">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                  {t.finderKicker}
                </p>
                <h2
                  id="finder-title"
                  className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
                >
                  {t.finderTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {t.finderText}
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-obsidian-border bg-obsidian-soft/80 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  {t.finderWhereTitle}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  {t.finderWhereText}
                </p>
              </div>
            </div>

            {/* Right form panel */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="f-chassis"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft dark:text-slate-300"
                  >
                    {t.finderChassisLabel}
                  </label>
                  <input
                    id="f-chassis"
                    type="text"
                    autoComplete="off"
                    value={chassis}
                    onChange={(e) => setChassis(e.target.value)}
                    placeholder={t.finderChassisPlaceholder}
                    className={`${inputCls} font-mono tracking-wide uppercase`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="f-model"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft dark:text-slate-300"
                  >
                    {t.finderModelLabel}
                  </label>
                  <select
                    id="f-model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className={inputCls}
                  >
                    {MODELS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                    <option value="other">{t.finderOtherModel}</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="f-part"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft dark:text-slate-300"
                  >
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
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-extrabold text-slate-950 shadow-sm transition hover:bg-amber-400"
                >
                  {t.finderButton}
                </button>

                {error && (
                  <p className="text-sm font-semibold text-red-600 dark:text-red-400" role="alert">
                    {error}
                  </p>
                )}
                {saved && !error && (
                  <p
                    className="text-sm font-semibold text-emerald-600 dark:text-emerald-400"
                    role="status"
                  >
                    ✓ {t.finderSaved}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
