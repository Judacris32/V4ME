import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ProgramCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tone?: "primary" | "secondary";
};

const toneIconBg = {
  primary: "bg-primary-500 text-white",
  secondary: "bg-secondary-500 text-white",
} as const;

/**
 * Photo-led program card: real image on top with an icon badge overlapping
 * its edge, title + description below. Deliberately distinct from the
 * flat icon-only cards used elsewhere (AimsObjectives) for visual variety.
 */
export function ProgramCard({ icon: Icon, title, description, image, imageAlt, tone = "primary" }: ProgramCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-sm shadow-black/5 ring-1 ring-border-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="relative flex flex-1 flex-col px-5 pb-6">
        <span
          className={cn(
            "-mt-6 flex h-12 w-12 items-center justify-center rounded-xl shadow-md ring-4 ring-surface",
            toneIconBg[tone],
          )}
        >
          <Icon className="h-5.5 w-5.5" />
        </span>
        <h3 className="font-display mt-3 text-base font-semibold text-primary-950 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">{description}</p>
      </div>
    </div>
  );
}
