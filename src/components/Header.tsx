"use client";

import { useState } from "react";
import { useCatalog, useCart, useLanguage, useTheme } from "@/context/AppContext";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M3 3h2l2.4 12.4A2 2 0 0 0 9.36 17H18a2 2 0 0 0 1.95-1.55L21.5 8H6" />
      <circle cx="10" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
    </svg>
  );
}

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { count } = useCart();
  const { query, setQuery } = useCatalog();
  const [swinging, setSwinging] = useState(false);

  const handleTheme = () => {
    toggleTheme();
    // The one subtle playful touch: the theme icon swings like a pendulum.
    setSwinging(true);
    window.setTimeout(() => setSwinging(false), 1700);
  };

  const jumpToParts = () => {
    document.getElementById("parts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3 sm:px-6">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2" aria-label={t.brandName}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-lg font-extrabold text-white" aria-hidden="true">
            K
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-ink dark:text-white">
              Kazi <span className="text-brand">Motors</span>
            </span>
            <span className="hidden text-[11px] text-ink-soft sm:block dark:text-slate-400">
              {t.brandTag}
            </span>
          </span>
        </a>

        {/* Search — writes straight into the catalogue filter */}
        <div className="relative order-3 min-w-0 flex-1 basis-full sm:order-2 sm:basis-auto">
          <label htmlFor="header-search" className="sr-only">
            {t.searchLabel}
          </label>
          <input
            id="header-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={jumpToParts}
            placeholder={t.searchPlaceholder}
            className="w-full rounded-lg border border-line bg-page py-2 pl-10 pr-4 text-sm text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          />
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <SearchIcon />
          </span>
        </div>

        {/* Controls */}
        <div className="order-2 ml-auto flex items-center gap-1.5 sm:order-3 sm:ml-0">
          <div
            className="flex items-center rounded-lg border border-line p-0.5 dark:border-slate-600"
            role="group"
            aria-label={t.langLabel}
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`rounded-md px-2.5 py-1 text-xs font-bold ${lang === "en" ? "bg-brand text-white" : "text-ink-soft hover:text-ink dark:text-slate-300"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("bn")}
              aria-pressed={lang === "bn"}
              className={`rounded-md px-2.5 py-1 text-xs font-bold ${lang === "bn" ? "bg-brand text-white" : "text-ink-soft hover:text-ink dark:text-slate-300"}`}
            >
              বাংলা
            </button>
          </div>

          <button
            type="button"
            onClick={handleTheme}
            aria-label={theme === "dark" ? t.themeLight : t.themeDark}
            title={theme === "dark" ? t.themeLight : t.themeDark}
            className="rounded-lg border border-line p-2 text-ink-soft hover:text-ink dark:border-slate-600 dark:text-slate-300"
          >
            <span className={`block ${swinging ? "animate-swing" : ""}`}>
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            className="relative flex items-center gap-2 rounded-lg bg-brand px-3 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark"
            aria-label={`${t.cartButton} (${count})`}
          >
            <CartIcon />
            <span className="hidden sm:inline">{t.cartButton}</span>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-ink px-1 text-[11px] font-extrabold text-white dark:bg-white dark:text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Nav */}
      <nav className="border-t border-line/70 dark:border-slate-800" aria-label="Sections">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 sm:px-6 no-scrollbar">
          {[
            { href: "#parts", label: t.navParts },
            { href: "#how", label: t.navHow },
            { href: "#finder", label: t.navFinder },
            { href: "#why", label: t.navWhy },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap px-3 py-2 text-sm font-semibold text-ink-soft hover:text-brand dark:text-slate-300 dark:hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
