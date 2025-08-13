import { useTheme as useNextTheme } from "next-themes";
import { useState, useEffect } from "react";
import type { Theme } from "./use-theme"; // Asumiendo que Theme type está definido

export function useTheme() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useNextTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return { theme: resolvedTheme as Theme, toggleTheme, mounted };
}
