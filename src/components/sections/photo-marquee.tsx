import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

// Real photos from V4ME outreach and program work — no stock filler. The
// track below duplicates this list once so the CSS marquee loops seamlessly.
const photos = [
  { src: "/images/community/aid-distribution.jpg", alt: "A V4ME volunteer distributing support to mothers and children" },
  { src: "/images/community/classroom-lesson.jpg", alt: "Students engaged in a classroom lesson at a V4ME partner school" },
  { src: "/images/community/community-gathering.jpg", alt: "Community members gathered for a V4ME outreach event" },
  { src: "/images/community/health-outreach-table.jpg", alt: "V4ME volunteers conducting a community health outreach session" },
  { src: "/images/community/sdg-awareness-group.jpg", alt: "A group session raising awareness of the Sustainable Development Goals" },
  { src: "/images/community/school-assembly.jpg", alt: "Students gathered outside their school during a V4ME community program" },
  { src: "/images/community/aid-box-handoff.jpg", alt: "A V4ME volunteer handing a relief box to a community member" },
  { src: "/images/community/classroom-mural.jpg", alt: "A classroom mural at a V4ME partner school" },
] as const;

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-5 pr-5" aria-hidden={ariaHidden}>
      {photos.map((photo, i) => (
        <div
          key={`${photo.src}-${i}`}
          className="relative h-52 w-72 shrink-0 overflow-hidden rounded-2xl shadow-md shadow-primary-950/10 ring-1 ring-black/5 sm:h-60 sm:w-80"
        >
          <Image src={photo.src} alt={ariaHidden ? "" : photo.alt} fill sizes="320px" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export function PhotoMarquee() {
  return (
    <section className="overflow-hidden bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="secondary" align="center">
            In the Field
          </Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
            Moments From the Work
          </h2>
        </Reveal>
      </div>

      <div
        className="mt-12 flex w-max animate-marquee"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <Track />
        <Track ariaHidden />
      </div>

      <Reveal delay={0.1} className="mt-12 flex justify-center px-4">
        <Button href="/gallery" variant="accent" size="lg" className="hover:bg-primary-600">
          View Full Gallery
        </Button>
      </Reveal>
    </section>
  );
}
