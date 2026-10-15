import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type ThemeMode = "light" | "dark" | "system";

const THEME_STORAGE_KEY = "bikefix.theme";

function isThemeMode(value: string | null): value is ThemeMode {
  return value === "light" || value === "dark" || value === "system";
}

interface ThemeValue {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeValue | null>(null);

function apply(mode: ThemeMode) {
  const prefersDark =
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = mode === "dark" || (mode === "system" && prefersDark);
  const root = document.documentElement;

  root.classList.toggle("dark", dark);
  root.dataset.theme = dark ? "dark" : "light";
  root.style.colorScheme = dark ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("light");

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const initial: ThemeMode = isThemeMode(stored) ? stored : "system";

    setModeState(initial);
    apply(initial);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (initial === "system") apply("system");
    };
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const value = useMemo<ThemeValue>(
    () => ({
      mode,
      setMode: (m) => {
        setModeState(m);
        localStorage.setItem(THEME_STORAGE_KEY, m);
        apply(m);
      },
    }),
    [mode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeValue {
  const ctx = useContext(ThemeContext);
  if (ctx) return ctx;
  // Safe fallback so a missing provider never blanks the page.
  return {
    mode: "system",
    setMode: (m) => {
      if (typeof window === "undefined") return;
      localStorage.setItem(THEME_STORAGE_KEY, m);
      apply(m);
    },
  };
}
