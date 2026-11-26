"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { CategoryId, Model } from "@/data/products";
import { STRINGS, type Lang, type Strings } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/* Language                                                            */
/* ------------------------------------------------------------------ */

interface LanguageValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Strings;
}

const LanguageContext = createContext<LanguageValue | null>(null);

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside AppProvider");
  return ctx;
}

/* ------------------------------------------------------------------ */
/* Cart (enquiry list) — persisted to localStorage                     */
/* ------------------------------------------------------------------ */

export interface ChassisRequest {
  id: string;
  chassis: string;
  model: string;
  part: string;
}

interface CartValue {
  /** partId -> quantity */
  items: Record<string, number>;
  requests: ChassisRequest[];
  count: number;
  addPart: (partId: string) => void;
  setQty: (partId: string, qty: number) => void;
  removePart: (partId: string) => void;
  addRequest: (req: Omit<ChassisRequest, "id">) => void;
  removeRequest: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartValue | null>(null);

export function useCart(): CartValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside AppProvider");
  return ctx;
}

const CART_KEY = "km-cart-v2";

function loadCart(): { items: Record<string, number>; requests: ChassisRequest[] } {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return { items: {}, requests: [] };
    const parsed = JSON.parse(raw) as {
      items?: Record<string, number>;
      requests?: ChassisRequest[];
    };
    return {
      items: parsed.items ?? {},
      requests: parsed.requests ?? [],
    };
  } catch {
    return { items: {}, requests: [] };
  }
}

/* ------------------------------------------------------------------ */
/* Catalogue filters                                                   */
/* ------------------------------------------------------------------ */

export type SortMode = "featured" | "name" | "category";

interface CatalogValue {
  query: string;
  setQuery: (q: string) => void;
  category: "all" | CategoryId;
  setCategory: (c: "all" | CategoryId) => void;
  model: "all" | Model;
  setModel: (m: "all" | Model) => void;
  sort: SortMode;
  setSort: (s: SortMode) => void;
}

const CatalogContext = createContext<CatalogValue | null>(null);

export function useCatalog(): CatalogValue {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error("useCatalog must be used inside AppProvider");
  return ctx;
}

/* ------------------------------------------------------------------ */
/* Theme (light / dark)                                                */
/* ------------------------------------------------------------------ */

export type Theme = "light" | "dark";

interface ThemeValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeValue | null>(null);

export function useTheme(): ThemeValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside AppProvider");
  return ctx;
}

/* ------------------------------------------------------------------ */
/* Toast                                                               */
/* ------------------------------------------------------------------ */

interface ToastValue {
  showToast: (message: string) => void;
  toast: string | null;
}

const ToastContext = createContext<ToastValue | null>(null);

export function useToast(): ToastValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside AppProvider");
  return ctx;
}

/* ------------------------------------------------------------------ */
/* Provider                                                            */
/* ------------------------------------------------------------------ */

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [items, setItems] = useState<Record<string, number>>({});
  const [requests, setRequests] = useState<ChassisRequest[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | CategoryId>("all");
  const [model, setModel] = useState<"all" | Model>("all");
  const [sort, setSort] = useState<SortMode>("featured");
  const [theme, setTheme] = useState<Theme>("light");
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hydrated = useRef(false);

  // Hydrate persisted state once, client-side only.
  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    const savedLang = localStorage.getItem("km-lang");
    if (savedLang === "en" || savedLang === "bn") setLangState(savedLang);
    const savedTheme = localStorage.getItem("km-theme");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    const cart = loadCart();
    setItems(cart.items);
    setRequests(cart.requests);
  }, []);

  // Persist cart.
  useEffect(() => {
    if (!hydrated.current) return;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify({ items, requests }));
    } catch {
      /* storage unavailable — cart still works in memory */
    }
  }, [items, requests]);

  // Apply theme class to <html>.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    try {
      localStorage.setItem("km-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem("km-lang", next);
    } catch {
      /* ignore */
    }
  }, []);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2400);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const cartValue = useMemo<CartValue>(() => {
    const count =
      Object.values(items).reduce((a, b) => a + b, 0) + requests.length;
    return {
      items,
      requests,
      count,
      addPart: (partId) =>
        setItems((prev) => ({ ...prev, [partId]: (prev[partId] ?? 0) + 1 })),
      setQty: (partId, qty) =>
        setItems((prev) => {
          if (qty <= 0) {
            const next = { ...prev };
            delete next[partId];
            return next;
          }
          return { ...prev, [partId]: qty };
        }),
      removePart: (partId) =>
        setItems((prev) => {
          const next = { ...prev };
          delete next[partId];
          return next;
        }),
      addRequest: (req) =>
        setRequests((prev) => [
          ...prev,
          { ...req, id: `req-${Date.now()}-${prev.length}` },
        ]),
      removeRequest: (id) => setRequests((prev) => prev.filter((r) => r.id !== id)),
      clear: () => {
        setItems({});
        setRequests([]);
      },
    };
  }, [items, requests]);

  const catalogValue = useMemo<CatalogValue>(
    () => ({ query, setQuery, category, setCategory, model, setModel, sort, setSort }),
    [query, category, model, sort],
  );

  const languageValue = useMemo<LanguageValue>(
    () => ({ lang, setLang, t: STRINGS[lang] }),
    [lang, setLang],
  );

  const themeValue = useMemo<ThemeValue>(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  const toastValue = useMemo<ToastValue>(
    () => ({ showToast, toast }),
    [showToast, toast],
  );

  return (
    <LanguageContext.Provider value={languageValue}>
      <CartContext.Provider value={cartValue}>
        <CatalogContext.Provider value={catalogValue}>
          <ThemeContext.Provider value={themeValue}>
            <ToastContext.Provider value={toastValue}>
              {children}
            </ToastContext.Provider>
          </ThemeContext.Provider>
        </CatalogContext.Provider>
      </CartContext.Provider>
    </LanguageContext.Provider>
  );
}
