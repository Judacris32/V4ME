import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type EyebrowColor = "primary" | "accent" | "secondary";

type EyebrowProps = {
  children: string;
  icon?: LucideIcon;
  color?: EyebrowColor;
  /** Set on a permanently-dark section (e.g. a brand-green band) so the
   * label reads correctly regardless of the site's light/dark theme. */
  onDark?: boolean;
  align?: "left" | "center";
  className?: string;
};

const lineColor: Record<EyebrowColor, string> = {
  primary: "bg-primary-500",
  accent: "bg-accent-500",
  secondary: "bg-secondary-500",
};

const textColor: Record<EyebrowColor, string> = {
  primary: "text-primary-700 dark:text-primary-300",
  accent: "text-accent-600 dark:text-accent-400",
  secondary: "text-secondary-700 dark:text-secondary-300",
};

const textColorOnDark: Record<EyebrowColor, string> = {
  primary: "text-primary-300",
  accent: "text-accent-300",
  secondary: "text-secondary-300",
};

/**
 * Editorial section label: a short colored rule + tracked uppercase text,
 * deliberately not a pill/badge. Used in place of the rounded-full chip
 * eyebrow so section openers read as considered typography rather than a
 * UI-kit default.
 */
export function Eyebrow({
  children,
  icon: Icon,
  color = "accent",
  onDark = false,
  align = "left",
  className,
}: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3",
        align === "center" && "justify-center",
        className,
      )}
    >
      <span className={cn("h-[2px] w-9 shrink-0", lineColor[color])} aria-hidden="true" />
      <span
        className={cn(
          "inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.16em] uppercase",
          onDark ? textColorOnDark[color] : textColor[color],
        )}
      >
        {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
        {children}
      </span>
    </div>
  );
}
