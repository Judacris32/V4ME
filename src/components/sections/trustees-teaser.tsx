import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

// Small home-page preview of the full Board of Trustees section on /about —
// same seven trustees, just headshots + names here rather than full bios.
const trustees = [
  { name: "Barrister Gambo Umaru", photo: "/images/team/trustee-gambo-umaru.jpeg" },
  { name: "Alhaji Innayatu Jubril Mohammed", photo: "/images/team/trustee-innayatu-mohammed.jpg" },
  { name: "Christie Ekwujuru", photo: "/images/team/trustee-christie-ekwujuru.jpg" },
  { name: "Mrs. Ijeoma Santos-Okpe", photo: "/images/team/trustee-ijeoma-santos-okpe.jpg" },
  { name: "Joy Ekwujuru", photo: "/images/team/trustee-joy-ekwujuru.jpg" },
  { name: "Sonia Nkechi Christopher", photo: "/images/team/trustee-sonia-christopher.jpg" },
  { name: "Bernard Emeka Afulike", photo: "/images/team/trustee-bernard-afulike.jpg" },
] as const;

/**
 * Parent section and child card use exact client-supplied OKLCH values:
 *  - child: light oklch(91.7% 0.08 205.041), dark oklch(68.5% 0.169 237.323)
 *  - parent: a lighter/darker tint in the same blue hue family, chosen to
 *    blend with rather than fight the child card in both themes.
 * Both child colors are light enough (contrast-checked against black/white)
 * that the card content stays on dark text in both themes, unlike most
 * other sections on the site which flip to white text in dark mode.
 */
export function TrusteesTeaser() {
  return (
    <section className="bg-[oklch(97%_0.015_210)] py-20 sm:py-24 dark:bg-[oklch(20%_0.045_235)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2rem] bg-[oklch(91.7%_0.08_205.041)] px-6 py-14 text-center shadow-sm ring-1 ring-black/5 sm:px-12 sm:py-16 dark:bg-[oklch(68.5%_0.169_237.323)]">
            {/* Hand-rolled eyebrow, not the shared <Eyebrow>: this card stays
                on dark text in both themes (the dark-mode child color is
                itself light), unlike Eyebrow's built-in dark:text-* flip. */}
            <div className="inline-flex items-center justify-center gap-3">
              <span className="h-[2px] w-9 shrink-0 bg-primary-700" aria-hidden="true" />
              <span className="text-xs font-bold tracking-[0.16em] text-primary-800 uppercase">
                Leadership
              </span>
            </div>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl">
              Meet the People Behind V4ME
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary-950/70">
              A governance board of professionals from healthcare, law, finance, education, and
              industry, guiding V4ME&apos;s work.
            </p>

            <div className="mt-12 flex flex-wrap items-start justify-center gap-x-8 gap-y-6">
              {trustees.map((person) => (
                <div key={person.name} className="w-24 text-center">
                  <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full ring-4 ring-white/80">
                    <Image src={person.photo} alt={person.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <p className="mt-2.5 text-xs leading-snug font-semibold text-primary-950">
                    {person.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                href="/about#trustees"
                variant="accent"
                size="lg"
                className="hover:bg-primary-600"
              >
                Meet the Full Board
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
