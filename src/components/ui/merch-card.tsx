import Image from "next/image";
import { Clock } from "lucide-react";

type MerchCardProps = {
  category: string;
  title: string;
  tagline: string;
  image: string;
  imageAlt: string;
};

/**
 * Photo-led product tile for the Shop lookbook.
 *
 * The source photos come from mixed marketing mockups (different crops,
 * different backgrounds, different framing) so the image sits on a soft
 * branded backdrop and is *contained* rather than cropped to fill —
 * `object-contain` never cuts off part of a garment, no matter how the
 * original photo was composed. That backdrop plus consistent padding is
 * what makes a set of mismatched source images read as one cohesive,
 * catalog-style collection instead of a pile of screenshots.
 *
 * Carries a "Coming Soon" badge instead of a price/add-to-cart — this is a
 * showcase of the merch line, not a live storefront (no checkout yet).
 */
export function MerchCard({ category, title, tagline, image, imageAlt }: MerchCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-border-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
      <div className="relative aspect-square w-full overflow-hidden rounded-t-2xl bg-gradient-to-b from-primary-50 to-primary-100/70 dark:from-primary-900/30 dark:to-primary-950/50">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-7 drop-shadow-md transition-transform duration-500 group-hover:scale-[1.04] sm:p-9"
        />

        <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-primary-950/95 px-3 py-1.5 text-[10px] font-bold tracking-wider text-white uppercase shadow-md ring-1 ring-white/10">
          <Clock className="h-3 w-3" aria-hidden="true" />
          Coming Soon
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5">
        <span className="text-[11px] font-semibold tracking-wide text-accent-600 uppercase dark:text-accent-400">
          {category}
        </span>
        <h3 className="font-display mt-1.5 text-lg font-bold text-primary-950 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">{tagline}</p>
      </div>
    </div>
  );
}
