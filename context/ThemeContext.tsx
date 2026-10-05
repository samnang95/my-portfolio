"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from "react";
type Theme = "dark" | "light";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
let themeListeners: Array<() => void> = [];
function emitThemeChange() {
  for (const listener of themeListeners) {
    listener();
  }
}

function syncRootClass(theme: Theme) {
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }
}

const themeStore = {
  getSnapshot: (): Theme => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    return saved === "light" ? "light" : "dark";
  },
  getServerSnapshot: (): Theme => "dark",
  subscribe: (listener: () => void) => {
    themeListeners.push(listener);
    window.addEventListener("storage", listener);
    return () => {
      themeListeners = themeListeners.filter((l) => l !== listener);
      window.removeEventListener("storage", listener);
    };
  },
  setTheme: (newTheme: Theme) => {
    localStorage.setItem("portfolio-theme", newTheme);
    syncRootClass(newTheme);
    emitThemeChange();
  },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  // Synchronize HTML class on client mount without setState
  useEffect(() => {
    syncRootClass(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    themeStore.setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}