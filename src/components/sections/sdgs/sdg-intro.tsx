import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { sdgs } from "@/lib/sdg-data";

const stats = [
  { value: String(sdgs.length), label: "SDGs We Track" },
  { value: "2", label: "Program Pillars" },
  { value: "8", label: "Core Objectives" },
];

export function SdgIntro() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow color="primary" align="center">
            Why These Goals
          </Eyebrow>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            The United Nations set 17 Sustainable Development Goals as a shared blueprint for peace
            and prosperity, for people and the planet. V4ME doesn&apos;t claim all 17 — we track the
            ones our programs actually move the needle on, and we&apos;re upfront about the gap
            between the two.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/65">
            Every goal below is tied to a specific, running initiative — not an aspiration on a
            slide. As our work grows into new communities and new areas, we&apos;ll add the goals
            that come with it, rather than claim ground we haven&apos;t actually covered.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-surface-muted px-3 py-5 text-center ring-1 ring-border-subtle sm:py-6"
            >
              <p className="font-display text-3xl font-extrabold text-primary-700 sm:text-4xl dark:text-primary-300">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs leading-snug font-semibold tracking-wide text-foreground/60 uppercase sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
