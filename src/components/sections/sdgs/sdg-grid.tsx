import { ListChecks } from "lucide-react";
import { sdgs } from "@/lib/sdg-data";
import { SdgCard } from "@/components/ui/sdg-card";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

/**
 * Full detail grid. The section itself carries a soft tint (distinct from
 * both the plain page background above it and the card below), and the
 * grid of goals sits inside its own centered, white/elevated card so the
 * two containers never read as the same block of color.
 */
export function SdgGrid() {
  return (
    <section className="bg-primary-50 py-16 sm:py-20 dark:bg-primary-950/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="primary" icon={ListChecks} align="center">
            {`All ${sdgs.length} Goals`}
          </Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-balance text-primary-950 sm:text-4xl dark:text-white">
            Every Goal, and{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              How We Advance It
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            Each card below names the specific V4ME program behind that goal — nothing here is a
            stretch or a nice-to-have, it&apos;s work already underway, grounded in the outreaches,
            plantings, and classrooms you can read about across this site.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-6xl">
          <div className="rounded-3xl bg-white p-5 shadow-xl shadow-primary-950/5 ring-1 ring-border-subtle sm:p-8 dark:bg-primary-900/30 dark:shadow-none dark:ring-white/10 lg:p-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {sdgs.map((sdg, i) => (
                <Reveal key={sdg.number} delay={(i % 4) * 0.05}>
                  <SdgCard sdg={sdg} />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
