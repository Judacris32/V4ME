import { Sparkles, Sprout, GraduationCap, HeartPulse, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgramCard } from "@/components/ui/program-card";
import { Reveal } from "@/components/ui/reveal";

// A snapshot of the full program list on /programs — two from each pillar,
// picked for visual variety. Copy is reused verbatim from that page so the
// two stay consistent rather than drifting into two versions of the truth.
const featured = [
  {
    icon: Sprout,
    title: "Tree Planting",
    description:
      "Every drive starts with a single seedling in the ground. Multiplied by hundreds of hands, it adds up to restored land and greener communities.",
    image: "/images/hero/hero-healthy-planet-futures.jpg",
    imageAlt: "A volunteer's soil-covered hands cradling a young seedling",
    tone: "primary" as const,
  },
  {
    icon: Thermometer,
    title: "Climate Action",
    description:
      "We train communities to adapt and speak up for the policies that protect them, so a changing climate doesn't mean a community left behind.",
    image: "/images/hero/hero-people-planet-future.jpg",
    imageAlt: "A river winding through untouched rainforest at sunrise",
    tone: "primary" as const,
  },
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "We help kids stay in school and adults go back to learning — with materials, scholarships, and classrooms that welcome everyone.",
    image: "/images/community/classroom-students.jpg",
    imageAlt: "Students engaged in a classroom lesson at a V4ME partner school",
    tone: "secondary" as const,
  },
  {
    icon: HeartPulse,
    title: "Health",
    description:
      "Through outreach clinics and awareness campaigns, we bring care and information straight to the communities that need them most.",
    image: "/images/community/health-outreach-table.jpg",
    imageAlt: "V4ME volunteers conducting a community health outreach session",
    tone: "secondary" as const,
  },
] as const;

/**
 * Parent section is always white (both themes) — text colors here are
 * therefore literal (not theme-reactive) so they stay legible against
 * that fixed white background regardless of the site's light/dark toggle.
 */
export function FeaturedPrograms() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 shrink-0 bg-primary-500" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.16em] text-primary-700 uppercase">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              What We Do
            </span>
          </div>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl">
            Programs That Put the Mission to Work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-900/70">
            A look at a few of the environmental and humanitarian programs running right now —
            the full list is one click away.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((program, i) => (
            <Reveal key={program.title} delay={(i % 4) * 0.06}>
              <ProgramCard {...program} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Button href="/programs" variant="primary" size="lg">
            Explore All Programs
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
