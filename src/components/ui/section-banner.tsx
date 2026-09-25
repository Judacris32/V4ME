import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionBannerProps = {
  eyebrow: string;
  /** Small icon shown beside the eyebrow label — a real icon, never an emoji. */
  icon?: LucideIcon;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  /** Tints the overlay to match the pillar it introduces. */
  tone?: "primary" | "secondary";
};

const toneOverlay = {
  primary: "from-primary-950/90 via-primary-900/60 to-primary-950/30",
  secondary: "from-secondary-950/90 via-secondary-900/55 to-secondary-950/30",
} as const;

const toneEyebrow = {
  primary: "bg-white/10 text-accent-200 ring-white/20",
  secondary: "bg-white/10 text-secondary-200 ring-white/20",
} as const;

/**
 * Compact photo banner used to open a section *within* a page (as opposed
 * to PageHeader, which sits at the very top and compensates for the fixed
 * navbar). Real photography + a tinted overlay instead of a flat color
 * block — keeps mid-page section headers from feeling like template filler.
 */
export function SectionBanner({
  eyebrow,
  icon: Icon,
  title,
  description,
  image,
  imageAlt,
  tone = "primary",
}: SectionBannerProps) {
  return (
    <div className="relative isolate flex min-h-[280px] w-full items-center overflow-hidden text-white sm:min-h-[320px]">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
        <div className={cn("absolute inset-0 bg-gradient-to-t", toneOverlay[tone])} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase ring-1 backdrop-blur-sm",
            toneEyebrow[tone],
          )}
        >
          {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
          {eyebrow}
        </span>
        <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl leading-[1.15] font-extrabold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
