import Image from "next/image";
import type { Sdg } from "@/lib/sdg-data";

type SdgCardProps = {
  sdg: Sdg;
};

/**
 * Full-detail card for the SDG Alignment page. The header now carries a
 * real photo (goal color washed over it, matching the home-page teaser
 * tiles) instead of a flat color block, so the two sections read as one
 * connected design instead of two different styles bolted together.
 */
export function SdgCard({ sdg }: SdgCardProps) {
  const Icon = sdg.icon;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10">
      <div className="relative isolate flex h-28 items-start justify-between overflow-hidden px-5 py-5 text-white">
        <Image
          src={sdg.image}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 260px, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ backgroundColor: sdg.color, opacity: 0.78 }} aria-hidden="true" />
        <span className="font-display relative z-10 text-3xl leading-none font-extrabold">
          {String(sdg.number).padStart(2, "0")}
        </span>
        <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 py-4">
        <h3 className="font-display text-sm font-semibold text-primary-950">{sdg.name}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-primary-900/65">{sdg.connection}</p>
      </div>
    </div>
  );
}
