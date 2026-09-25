import { Compass, Globe2, Target, Users } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CountUp } from "@/components/ui/count-up";

// Deliberately structural counts (focus areas, objectives, goals, people)
// rather than beneficiary/impact numbers we can't yet verify — every figure
// here is a direct, checkable count of the Foundation's own real content.
const stats = [
  { icon: Compass, value: 2, label: "Focus Areas", detail: "Environmental & Humanitarian Programs" },
  { icon: Target, value: 8, label: "Core Objectives", detail: "SDG-aligned aims driving every project" },
  { icon: Globe2, value: 11, label: "UN SDGs", detail: "Global goals our work ties back to" },
  { icon: Users, value: 9, label: "People Leading", detail: "Trustees and team guiding the mission" },
] as const;

/**
 * The outer section stays white (both themes) — the card inside it carries
 * the theme, now built around the brand's orange accent instead of the
 * dark-green treatment used elsewhere on the page, so this band reads as
 * its own distinct, warmer moment. Each stat lives in its own mini-card
 * with an icon, and the number ticks up from 0 the first time it scrolls
 * into view.
 */
export function ImpactStats() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-5xl">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-accent-50 via-white to-accent-100/50 px-6 py-14 shadow-sm ring-1 ring-accent-100 sm:px-10 sm:py-16 dark:from-accent-950 dark:via-primary-950 dark:to-accent-950 dark:shadow-none dark:ring-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden bg-[radial-gradient(55%_45%_at_85%_0%,rgba(242,153,74,0.3),transparent)] dark:block"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden bg-[radial-gradient(45%_40%_at_10%_100%,rgba(45,156,219,0.12),transparent)] dark:block"
            />

            <div className="relative mx-auto max-w-2xl text-center">
              <Eyebrow color="accent" align="center">
                Our Foundation
              </Eyebrow>
              <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
                What V4ME Stands For
              </h2>
            </div>

            <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(({ icon: Icon, value, label, detail }, i) => (
                <Reveal key={label} delay={(i % 4) * 0.06}>
                  <div className="flex h-full flex-col items-center rounded-2xl bg-white/80 p-6 text-center shadow-sm shadow-accent-900/5 ring-1 ring-accent-100 dark:bg-white/5 dark:shadow-none dark:ring-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-white shadow-sm shadow-accent-900/20">
                      <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                    </span>
                    <span className="font-display mt-4 block text-5xl font-extrabold tracking-tight text-accent-600 sm:text-6xl dark:text-accent-400">
                      <CountUp value={value} />
                    </span>
                    <span className="mt-3 block text-base font-semibold text-primary-950 dark:text-white">
                      {label}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-primary-900/65 dark:text-white/65">
                      {detail}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
