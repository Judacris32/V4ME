import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

// Real founding narrative, drawn from V4ME's founder biography document —
// not draft copy. See founder-spotlight.tsx for Jennifer's credentials and
// present-day role; this section owns the origin story specifically.
const storyParagraphs = [
  `V4ME didn't begin as a plan. It began with five days in a community with
  no electricity, no school, no clean water, and no health centre — where
  families drew the same stream for both drinking and bathing. Watching
  people navigate daily life, and what happens when a medical emergency
  hits a place with no clinic nearby, stayed with our founder, Jennifer,
  long after she left.`,
  `A later visit to Bakassi, where she saw severe food insecurity affecting
  children and adults alike, deepened that conviction further. These
  weren't distant statistics — they were human realities that demanded
  action, and communities that deserved far more attention, dignity, and
  opportunity than they were getting.`,
  `That's when protecting the planet and protecting people stopped being
  two separate causes. It became one task: clean water and energy, quality
  education and healthcare, stronger communities, and practical solutions
  tied to the UN Sustainable Development Goals — with a particular urgency
  around preparedness, since Jennifer had also seen firsthand what happens
  when a flood turns from an environmental event into a humanitarian one.`,
  `Voice for Mother Earth Foundation was founded to close that gap — to
  give Mother Earth and the people who depend on her a single, united
  voice. Every program we run today, from reforestation drives to relief
  outreach, still traces back to that same conviction.`,
];

export function OurStory() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-xl shadow-primary-950/10 sm:aspect-3/4 lg:aspect-4/5">
              <Image
                src="/images/community/aid-box-handoff.jpg"
                alt="A V4ME volunteer handing a relief box to a community member during a distribution outreach"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow color="accent">Our Story</Eyebrow>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
              The Journey That Became V4ME
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/75">
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex gap-4 rounded-2xl bg-white p-6 shadow-lg shadow-primary-950/5 ring-1 ring-black/5">
              <Quote className="h-8 w-8 shrink-0 text-accent-500" aria-hidden="true" />
              <div>
                <p className="font-display text-lg leading-snug text-primary-950 italic">
                  &ldquo;The Earth is wounded, and her children are hurting. Every polluted river,
                  devastated community, and lost life is a reminder that when we wound the Earth,
                  we wound ourselves.&rdquo;
                </p>
                <p className="mt-3 text-sm font-medium text-primary-700">
                  Jennifer Kelechi Ekwujuru, Founder
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
