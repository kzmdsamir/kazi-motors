"use client";

import { useEffect, useRef } from "react";
import { partById } from "@/data/products";
import { useCart, useLanguage, useToast } from "@/context/AppContext";

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  );
}

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
        className="absolute inset-0 cursor-default bg-slate-950/65 backdrop-blur-xs"
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md animate-drawer-in flex-col border-l border-line bg-white shadow-2xl dark:border-slate-800 dark:bg-[#0e131b]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-4 dark:border-slate-800">
          <h2 className="text-lg font-extrabold tracking-tight text-ink dark:text-white">
            {t.cartTitle}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.cartClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-sm font-bold text-ink-soft transition hover:border-slate-400 hover:text-ink dark:border-slate-700 dark:text-slate-300 dark:hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Honest enquiry notice */}
        <p className="border-b border-line bg-page px-5 py-3 text-xs leading-relaxed text-ink-soft dark:border-slate-800 dark:bg-[#131a26] dark:text-slate-300">
          {t.cartNote}
        </p>

        {/* List content */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {isEmpty ? (
            <div className="rounded-2xl border border-dashed border-line px-6 py-12 text-center dark:border-slate-800">
              <p className="font-bold text-ink dark:text-white">{t.cartEmptyTitle}</p>
              <p className="mt-2 text-sm text-ink-soft dark:text-slate-400">
                {t.cartEmptyText}
              </p>
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
                    className="flex items-center gap-3 rounded-xl border border-line bg-page p-3.5 dark:border-slate-800 dark:bg-[#131a26]"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-muted dark:text-slate-400">
                        {part.id}
                      </span>
                      <p className="truncate text-sm font-bold text-ink dark:text-white">
                        {lang === "bn" ? part.bn : part.en}
                      </p>
                      <p className="mt-0.5 text-xs text-ink-soft dark:text-slate-400">
                        {t.priceOnRequest}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setQty(id, qty - 1)}
                        aria-label={t.cartQtyDecrease}
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-white text-sm font-bold text-ink transition hover:border-brand dark:border-slate-700 dark:bg-obsidian dark:text-slate-200"
                      >
                        −
                      </button>
                      <span
                        className="w-6 text-center font-mono text-sm font-bold text-ink dark:text-white"
                        aria-live="polite"
                      >
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(id, qty + 1)}
                        aria-label={t.cartQtyIncrease}
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-white text-sm font-bold text-ink transition hover:border-brand dark:border-slate-700 dark:bg-obsidian dark:text-slate-200"
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
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-muted transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/60 dark:hover:text-red-400"
                    >
                      <TrashIcon />
                    </button>
                  </li>
                );
              })}

              {requests.map((r) => (
                <li
                  key={r.id}
                  className="flex items-center gap-3 rounded-xl border border-amber-500/40 bg-amber-50/70 p-3.5 dark:border-amber-500/30 dark:bg-amber-950/20"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand dark:text-amber-400">
                      {t.cartRequest}
                    </p>
                    <p className="mt-0.5 break-words text-xs font-semibold text-ink dark:text-slate-200">
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
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-muted transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/60 dark:hover:text-red-400"
                  >
                    <TrashIcon />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-line px-5 py-4 dark:border-slate-800">
          <p className="rounded-xl border border-amber-500/30 bg-amber-50 px-3.5 py-2.5 text-center text-xs font-bold text-amber-950 dark:border-amber-500/25 dark:bg-amber-950/30 dark:text-amber-200">
            {t.cartComingSoon}
          </p>
          {!isEmpty && (
            <button
              type="button"
              onClick={() => {
                clear();
                showToast(t.toastCleared);
              }}
              className="mt-3 w-full rounded-xl border border-line py-2.5 text-xs font-bold text-ink-soft transition hover:border-red-300 hover:text-red-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-red-800 dark:hover:text-red-400"
            >
              {t.cartClear}
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}
