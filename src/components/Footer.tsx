"use client";

import { useLanguage } from "@/context/AppContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-12 border-t border-obsidian-border bg-obsidian text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-lg">
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-amber-500/40 bg-obsidian-soft text-sm font-black text-amber-400"
                aria-hidden="true"
              >
                K
              </span>
              <p className="text-lg font-extrabold tracking-tight text-white">
                Kazi <span className="text-amber-400">Motors</span>
              </p>
            </div>
            <p className="mt-3 text-sm text-slate-300">{t.footerTag}</p>
            <p className="mt-4 text-xs leading-relaxed text-slate-400">
              {t.footerHonest}
            </p>
          </div>

          <nav className="flex gap-14 text-sm" aria-label="Footer">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                {t.footerCatalogue}
              </p>
              <ul className="mt-3 space-y-2 text-slate-400">
                <li>
                  <a href="#parts" className="transition hover:text-amber-400">
                    {t.navParts}
                  </a>
                </li>
                <li>
                  <a href="#finder" className="transition hover:text-amber-400">
                    {t.navFinder}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                {t.footerHelp}
              </p>
              <ul className="mt-3 space-y-2 text-slate-400">
                <li>
                  <a href="#how" className="transition hover:text-amber-400">
                    {t.navHow}
                  </a>
                </li>
                <li>
                  <a href="#why" className="transition hover:text-amber-400">
                    {t.navWhy}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-10 border-t border-obsidian-border pt-5 text-xs text-slate-400">
          © {new Date().getFullYear()} Kazi Motors · {t.footerMade}
        </div>
      </div>
    </footer>
  );
}
