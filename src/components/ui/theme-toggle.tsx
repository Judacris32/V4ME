"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useHasMounted } from "@/lib/use-has-mounted";

type ThemeToggleProps = {
  className?: string;
};

/**
 * Accessible light/dark mode switch. Renders a neutral placeholder until
 * mounted so the server-rendered markup never mismatches the client theme.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useHasMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      aria-pressed={isDark}
      className={cn(
        "relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
        "border border-border-subtle bg-surface-muted text-primary-700 transition-colors",
        "hover:bg-accent-100 hover:text-accent-700",
        "dark:text-primary-200 dark:hover:bg-accent-800/40 dark:hover:text-white",
        className,
      )}
    >
      <Sun
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-300",
          isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
        aria-hidden="true"
      />
      <Moon
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-300",
          isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0",
        )}
        aria-hidden="true"
      />
    </button>
  );
}
