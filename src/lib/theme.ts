export type Theme = "dark" | "light";

const STORAGE_KEY = "hf-theme";

function safeGetStoredTheme(): Theme | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "dark" || raw === "light") return raw;
    return null;
  } catch {
    return null;
  }
}

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return safeGetStoredTheme() ?? "dark";
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore (private mode / disabled storage)
  }
}

export function toggleTheme(current: Theme): Theme {
  return current === "dark" ? "light" : "dark";
}

