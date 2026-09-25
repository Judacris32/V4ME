import Image from "next/image";
import Link from "next/link";
import { Target } from "lucide-react";
import { sdgs } from "@/lib/sdg-data";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

/**
 * Compact home-page teaser for the SDG Alignment page. Each goal is now a
 * small photo tile (goal color as a translucent wash over a real photo)
 * carrying its name, not just a bare number — so it reads as meaningful on
 * its own rather than needing a hover tooltip to explain itself.
 */
export function SdgTeaser() {
  return (
    <section className="bg-surface-muted py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="primary" icon={Target} align="center">
            Our Commitment
          </Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
            Aligned With the UN Sustainable Development Goals
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            Every program we run ties back to one or more of these global goals — our way of making
            sure local action adds up to something bigger.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl bg-primary-600 p-5 shadow-lg shadow-primary-950/10 sm:p-8 dark:bg-white lg:p-10">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
              {sdgs.map((sdg, i) => (
                <Reveal key={sdg.number} delay={(i % 6) * 0.04}>
                  <Link
                    href="/sdgs"
                    className="group relative isolate flex aspect-square flex-col justify-between overflow-hidden rounded-2xl p-3 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Image
                      src={sdg.image}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="(min-width: 1024px) 140px, 45vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: sdg.color, opacity: 0.74 }}
                      aria-hidden="true"
                    />
                    <span className="font-display relative z-10 text-2xl font-extrabold text-white">
                      {String(sdg.number).padStart(2, "0")}
                    </span>
                    <span className="relative z-10 text-xs leading-tight font-semibold text-white">
                      {sdg.name}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Link
            href="/sdgs"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200"
          >
            See how each goal connects to our work
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
