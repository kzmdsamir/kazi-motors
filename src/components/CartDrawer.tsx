"use client";

import { useEffect, useRef } from "react";
import { partById } from "@/data/products";
import { useCart, useLanguage, useToast } from "@/context/AppContext";

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t, lang } = useLanguage();
  const { items, requests, setQty, removePart, removeRequest, clear } = useCart();
  const { showToast } = useToast();
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on Escape; focus the close button when opened.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const partIds = Object.keys(items).filter((id) => items[id] > 0);
  const isEmpty = partIds.length === 0 && requests.length === 0;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={t.cartTitle}>
      <button
        type="button"
        aria-label={t.cartClose}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/50"
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md animate-drawer-in flex-col bg-white shadow-xl dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-line px-5 py-4 dark:border-slate-700">
          <h2 className="text-lg font-extrabold text-ink dark:text-white">{t.cartTitle}</h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.cartClose}
            className="rounded-lg border border-line px-2.5 py-1.5 text-sm font-bold text-ink-soft hover:text-ink dark:border-slate-600 dark:text-slate-300"
          >
            ✕
          </button>
        </div>

        <p className="border-b border-line bg-page px-5 py-3 text-xs leading-relaxed text-ink-soft dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {t.cartNote}
        </p>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {isEmpty ? (
            <div className="py-10 text-center">
              <p className="font-bold text-ink dark:text-white">{t.cartEmptyTitle}</p>
              <p className="mt-1.5 text-sm text-ink-soft dark:text-slate-300">{t.cartEmptyText}</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {partIds.map((id) => {
                const part = partById(id);
                if (!part) return null;
                const qty = items[id];
                return (
                  <li
                    key={id}
                    className="flex items-center gap-3 rounded-xl border border-line bg-page p-3 dark:border-slate-700 dark:bg-slate-800"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-ink dark:text-white">
                        {lang === "bn" ? part.bn : part.en}
                      </p>
                      <p className="text-xs text-ink-soft dark:text-slate-400">
                        {t.conditionLabel} · {t.priceOnRequest}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setQty(id, qty - 1)}
                        aria-label={t.cartQtyDecrease}
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-white font-bold text-ink hover:border-brand dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-bold text-ink dark:text-white" aria-live="polite">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(id, qty + 1)}
                        aria-label={t.cartQtyIncrease}
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-white font-bold text-ink hover:border-brand dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        removePart(id);
                        showToast(t.toastRemoved);
                      }}
                      aria-label={t.cartRemove}
                      className="rounded-md px-2 py-1 text-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
                    >
                      🗑
                    </button>
                  </li>
                );
              })}
              {requests.map((r) => (
                <li
                  key={r.id}
                  className="flex items-center gap-3 rounded-xl border border-dashed border-brand/50 bg-brand-soft p-3 dark:bg-slate-800"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-ink dark:text-white">{t.cartRequest}</p>
                    <p className="truncate text-xs text-ink-soft dark:text-slate-400">
                      {t.cartRequestDetail(r.chassis, r.model, r.part)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      removeRequest(r.id);
                      showToast(t.toastRemoved);
                    }}
                    aria-label={t.cartRemove}
                    className="rounded-md px-2 py-1 text-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!isEmpty && (
          <div className="border-t border-line px-5 py-4 dark:border-slate-700">
            <p className="rounded-lg bg-amber-50 px-3 py-2.5 text-center text-sm font-semibold text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
              {t.cartComingSoon}
            </p>
            <button
              type="button"
              onClick={() => {
                clear();
                showToast(t.toastCleared);
              }}
              className="mt-3 w-full rounded-lg border border-line py-2.5 text-sm font-bold text-ink-soft hover:text-red-600 dark:border-slate-600 dark:text-slate-300"
            >
              {t.cartClear}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
