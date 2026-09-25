import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

export function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-20 text-white sm:py-24">
      {/* Decorative radial glow + faint topographic texture, so the band
       * reads as designed rather than a flat color fill. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(45,156,219,0.18),transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(45%_40%_at_100%_100%,rgba(242,153,74,0.12),transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(40%_35%_at_0%_100%,rgba(0,164,71,0.14),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="accent" onDark align="center">
            What Drives Us
          </Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Vision &amp; Mission
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-2xl shadow-black/20 sm:p-10">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
                <Image
                  src="/images/icons/vision-globe.jpg"
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display mt-6 text-xl font-semibold text-primary-950">
                Our Vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-primary-900/70">
                A world where Mother Earth and her children live in harmony — thriving ecosystems,
                resilient communities, and a sustainable future for all.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-2xl shadow-black/20 sm:p-10">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
                <Image
                  src="/images/icons/mission-seedling.jpg"
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display mt-6 text-xl font-semibold text-primary-950">
                Our Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-primary-900/70">
                To advocate for environmental protection and social justice by promoting sustainable
                practices, supporting vulnerable communities, and advancing the United Nations
                Sustainable Development Goals.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
