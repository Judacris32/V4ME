import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Hover backgrounds are unified on the brand accent (orange) across every
// variant, so any button reads the same way on interaction regardless of
// its resting color.
const variantStyles = {
  accent:
    "bg-accent-500 text-white shadow-sm shadow-accent-900/10 hover:bg-accent-600 focus-visible:outline-accent-600",
  primary:
    "bg-primary-500 text-white shadow-sm shadow-primary-900/20 hover:bg-accent-500 focus-visible:outline-accent-600",
  secondary:
    "bg-secondary-500 text-white shadow-sm shadow-secondary-900/20 hover:bg-accent-500 focus-visible:outline-accent-600",
  outline:
    "border border-white/70 text-white hover:bg-accent-500/20 focus-visible:outline-white",
  "outline-primary":
    "border border-primary-500 text-primary-600 hover:bg-accent-50 dark:text-primary-200 dark:border-primary-300 dark:hover:bg-accent-900/30",
  ghost:
    "text-primary-700 hover:bg-accent-50 dark:text-primary-100 dark:hover:bg-accent-900/30",
} as const;

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
} as const;

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
  /** Render as a same-tab internal <Link> */
  href?: string;
  /** When used with `href`, opens in a new tab as a plain <a> */
  external?: boolean;
};

export type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]";

/**
 * Shared CTA button. Renders a <Link> when `href` is provided (internal
 * routing), a new-tab <a> when `external` is also set, and a native
 * <button> otherwise.
 */
export function Button({
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
  href,
  external,
  type,
  ...rest
}: ButtonProps) {
  const classes = cn(baseClasses, variantStyles[variant], sizeStyles[size], className);

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {icon}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
      {icon}
    </button>
  );
}
