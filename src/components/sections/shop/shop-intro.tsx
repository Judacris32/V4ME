import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function ShopIntro() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl sm:aspect-3/4 lg:aspect-4/5">
              <Image
                src="/images/merch/merch-lifestyle-collection.png"
                alt="A V4ME supporter wearing the branded cap and hoodie, carrying the tote bag and water bottle"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-700 uppercase dark:bg-primary-800/40 dark:text-primary-200">
              First Look
            </span>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
              A Small Collection, A Big Statement
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/75">
              <p>
                We&apos;re putting together a small line of V4ME gear so our community can carry the
                mission with them wherever they go — on a morning walk, at the market, or out on the
                next community outreach.
              </p>
              <p>
                Every piece carries the same message on the back: People. Planet. A Brighter Future.
                Nothing is for sale just yet, but early supporters can reach out below to reserve a
                piece before the online store opens to everyone else.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
