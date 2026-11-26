"use client";

import { useState, type FormEvent } from "react";
import { CATEGORIES, PARTS } from "@/data/products";
import { useCatalog, useCart, useLanguage, useTheme } from "@/context/AppContext";

function SearchIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
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
    setSwinging(true);
    window.setTimeout(() => setSwinging(false), 1450);
  };

  const jumpToParts = () => {
    document.getElementById("parts")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    jumpToParts();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-obsidian-border/80 bg-obsidian/95 text-slate-100 backdrop-blur-md">
      {/* Main header bar */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-2.5 px-3.5 py-2.5 sm:gap-x-4 sm:px-6 sm:py-3">
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-2 shrink-0" aria-label={t.brandName}>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-amber-500/40 bg-obsidian-soft text-sm font-black tracking-tight text-amber-400 transition group-hover:border-amber-400 sm:h-9 sm:w-9 sm:text-base"
            aria-hidden="true"
          >
            K
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight text-white sm:text-[17px]">
              Kazi <span className="text-amber-400">Motors</span>
            </span>
            <span className="hidden text-[11px] font-medium text-slate-400 sm:block">
              {t.brandLocation}
            </span>
          </span>
        </a>

        {/* Search — front and centre */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative order-3 min-w-0 flex-1 basis-full md:order-2 md:basis-auto md:max-w-xl"
          role="search"
        >
          <label htmlFor="header-search" className="sr-only">
            {t.searchLabel}
          </label>
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            <SearchIcon />
          </span>
          <input
            id="header-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={jumpToParts}
            placeholder={t.searchPlaceholder}
            className="w-full rounded-lg border border-obsidian-border bg-obsidian-soft py-2 pl-10 pr-9 text-sm text-slate-100 placeholder:text-slate-400 transition focus:border-amber-400 focus:bg-[#192231] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={t.searchClear}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </form>

        {/* Controls */}
        <div className="order-2 ml-auto flex items-center gap-1.5 sm:gap-2 md:order-3">
          {/* Language toggle */}
          <div
            className="flex items-center rounded-lg border border-obsidian-border bg-obsidian-soft p-0.5"
            role="group"
            aria-label={t.langLabel}
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`rounded-md px-2 py-1 text-[11px] font-bold transition sm:px-2.5 sm:text-xs ${
                lang === "en"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("bn")}
              aria-pressed={lang === "bn"}
              className={`rounded-md px-2 py-1 text-[11px] font-bold transition sm:px-2.5 sm:text-xs ${
                lang === "bn"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              বাংলা
            </button>
          </div>

          {/* Theme toggle with subtle pendulum touch */}
          <button
            type="button"
            onClick={handleTheme}
            aria-label={theme === "dark" ? t.themeLight : t.themeDark}
            title={theme === "dark" ? t.themeLight : t.themeDark}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-obsidian-border bg-obsidian-soft text-slate-300 transition hover:border-slate-500 hover:text-white sm:h-9 sm:w-9"
          >
            <span className={`block origin-top ${swinging ? "animate-swing" : ""}`}>
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>

          {/* Enquiry list button */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 rounded-lg bg-amber-500 px-2.5 py-1.5 text-xs font-extrabold tracking-wide text-slate-950 shadow-sm transition hover:bg-amber-400 sm:gap-2 sm:px-3.5 sm:py-2 sm:text-sm"
            aria-label={`${t.cartButton} (${count})`}
          >
            <ListIcon />
            <span className="hidden sm:inline">{t.cartButton}</span>
            <span
              className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-extrabold ${
                count > 0
                  ? "bg-slate-950 text-amber-400"
                  : "bg-slate-950/15 text-slate-950"
              }`}
            >
              {count}
            </span>
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="border-t border-obsidian-border/60 bg-obsidian-soft/70" aria-label="Sections">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {[
              { href: "#parts", label: t.navParts },
              { href: "#finder", label: t.navFinder },
              { href: "#how", label: t.navHow },
              { href: "#why", label: t.navWhy },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap border-b-2 border-transparent px-3 py-2.5 text-xs font-semibold tracking-wide text-slate-300 transition hover:border-amber-400 hover:text-white sm:text-[13px]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="hidden shrink-0 font-mono text-[11px] text-slate-400 lg:block">
            {PARTS.length} {lang === "bn" ? "পার্টস" : "PARTS"} · {CATEGORIES.length}{" "}
            {lang === "bn" ? "ক্যাটাগরি" : "CATEGORIES"}
          </p>
        </div>
      </nav>
    </header>
  );
}
