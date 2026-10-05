"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from "react";
import { Locale, PortfolioContent } from "@/types/portfolio";
import { portfolioContent, defaultLocale } from "@/data/portfolio";

interface LanguageContextType {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  toggleLocale: () => void;
  content: PortfolioContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
let listeners: Array<() => void> = [];
function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

const localeStore = {
  getSnapshot: (): Locale => {
    if (typeof window === "undefined") return defaultLocale;
    const saved = localStorage.getItem("portfolio-locale") as Locale | null;
    return saved === "km" || saved === "en" ? saved : defaultLocale;
  },
  getServerSnapshot: (): Locale => defaultLocale,
  subscribe: (listener: () => void) => {
    listeners.push(listener);
    window.addEventListener("storage", listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
      window.removeEventListener("storage", listener);
    };
  },
  setLocale: (newLocale: Locale) => {
    localStorage.setItem("portfolio-locale", newLocale);
    emitChange();
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    localeStore.subscribe,
    localeStore.getSnapshot,
    localeStore.getServerSnapshot
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    localeStore.setLocale(newLocale);
  };

  const toggleLocale = () => {
    const nextLocale: Locale = locale === "en" ? "km" : "en";
    localeStore.setLocale(nextLocale);
  };

  const content = portfolioContent[locale] || portfolioContent.en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
