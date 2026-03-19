"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { applyTheme, getInitialTheme, toggleTheme, type Theme } from "./theme";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => toggleTheme(t)), []);
  const value = useMemo(
    () => ({ theme, setTheme, toggle, isDark: theme === "dark" }),
    [theme, toggle],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

