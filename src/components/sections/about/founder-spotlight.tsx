import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

// The origin narrative (the five days in an underserved community, the
// visit to Bakassi) lives in our-story.tsx just below. This section stays
// focused on who Jennifer is today rather than retelling the same story.
const bioParagraphs = [
  `Jennifer Kelechi Ekwujuru is an environmentalist, humanitarian,
  researcher, and the founder of Voice for Mother Earth Foundation — an
  organisation committed to protecting the environment, advancing
  sustainable development, and restoring dignity to communities affected
  by environmental and humanitarian challenges.`,
  `She holds a BSc in Industrial Chemistry from the Federal University of
  Technology, Minna, and an MSc in Industrial Chemistry from Kaduna State
  University. She's also a certified Data Analyst and SDG Ambassador, with
  additional training in menstrual and reproductive health advocacy and
  leadership development — a multidisciplinary background in science,
  data, and advocacy that shapes how she leads V4ME: grounded in evidence,
  compassion, collaboration, and practical action.`,
  `Jennifer is driven by a simple belief: meaningful change begins when
  people are given a voice, communities are empowered to participate in
  solutions, and the environment is treated not as a resource to use, but
  as a responsibility shared by all.`,
];

export function FounderSpotlight() {
  return (
    <section className="bg-surface-muted py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow color="primary">Our Founder</Eyebrow>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
              Jennifer Kelechi Ekwujuru
            </h2>
            <p className="mt-1.5 text-sm font-semibold tracking-wide text-accent-600 uppercase dark:text-accent-400">
              Founder · Environmentalist · Humanitarian · Researcher
            </p>

            <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/75">
              {bioParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex gap-4 rounded-2xl bg-white p-6 shadow-lg shadow-primary-950/5 ring-1 ring-black/5">
              <Quote className="h-8 w-8 shrink-0 text-accent-500" aria-hidden="true" />
              <div>
                <p className="font-display text-lg leading-snug text-primary-950 italic">
                  &ldquo;When we wound the Earth, we wound her children. And when we protect her,
                  we protect ourselves.&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
                    <Image
                      src="/images/team/founder-jennifer-headshot.jpg"
                      alt="Jennifer Kelechi Ekwujuru"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-primary-800">
                    Jennifer Kelechi Ekwujuru, Founder
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-xl shadow-primary-950/10 sm:aspect-3/4 lg:aspect-auto lg:min-h-[36rem]">
              <Image
                src="/images/team/founder.jpeg"
                alt="Jennifer Kelechi Ekwujuru, Founder of Voice for Mother Earth Foundation"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
