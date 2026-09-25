import { Gavel, Globe2, HandHeart, Handshake, Sprout } from "lucide-react";
import { sdgs } from "@/lib/sdg-data";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

// The UN's own five broad groupings.
const pillars = [
  {
    key: "People" as const,
    icon: HandHeart,
    title: "People",
    description: "Ending poverty and hunger, and making sure health and education reach everyone.",
  },
  {
    key: "Planet" as const,
    icon: Sprout,
    title: "Planet",
    description: "Protecting the water, land, and climate every community depends on.",
  },
  {
    key: "Prosperity" as const,
    icon: Globe2,
    title: "Prosperity",
    description: "Building livelihoods, fair growth, and resilient, sustainable communities.",
  },
  {
    key: "Peace" as const,
    icon: Gavel,
    title: "Peace",
    description: "Governance, accountability, and the institutions that keep the work honest.",
  },
  {
    key: "Partnership" as const,
    icon: Handshake,
    title: "Partnership",
    description: "The collaborations with communities, donors, and allies that make progress possible.",
  },
];

export function SdgPillars() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="secondary" align="center">
            The Bigger Picture
          </Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
            How the UN Groups These Goals
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            The UN clusters its 17 goals into five broad themes. Our {sdgs.length} tracked goals
            now touch every one of them.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const goals = sdgs.filter((sdg) => sdg.pillar === pillar.key);
            return (
              <Reveal key={pillar.key} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold text-primary-950">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-900/65">{pillar.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {goals.map((goal) => (
                      <span
                        key={goal.number}
                        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
                        style={{ backgroundColor: goal.color }}
                      >
                        {String(goal.number).padStart(2, "0")}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
