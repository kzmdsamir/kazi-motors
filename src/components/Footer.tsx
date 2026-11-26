"use client";

import { useLanguage } from "@/context/AppContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-16 bg-ink text-slate-300 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-md">
            <p className="text-lg font-extrabold text-white">
              Kazi <span className="text-brand">Motors</span>
            </p>
            <p className="mt-2 text-sm">{t.footerTag}</p>
            <p className="mt-4 text-xs leading-relaxed text-slate-400">
              {t.footerHonest}
            </p>
          </div>
          <nav className="flex gap-12 text-sm" aria-label="Footer">
            <div>
              <p className="font-bold text-white">{t.footerCatalogue}</p>
              <ul className="mt-2 space-y-1.5">
                <li><a href="#parts" className="hover:text-white">{t.navParts}</a></li>
                <li><a href="#finder" className="hover:text-white">{t.navFinder}</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white">{t.footerHelp}</p>
              <ul className="mt-2 space-y-1.5">
                <li><a href="#how" className="hover:text-white">{t.navHow}</a></li>
                <li><a href="#why" className="hover:text-white">{t.navWhy}</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-4 text-xs text-slate-400">
          © {new Date().getFullYear()} Kazi Motors · {t.footerMade}
        </div>
      </div>
    </footer>
  );
}
