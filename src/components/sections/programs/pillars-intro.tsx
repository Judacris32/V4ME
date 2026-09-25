import { ArrowDown, HandHeart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

/**
 * Intro banner for the two program pillars. Parent section is a fixed
 * white band (both themes); the copy + pillar links live inside a single
 * centered card in the fixed apricot brand tone, which is why every color
 * on top of it is literal rather than theme-reactive — that card doesn't
 * switch with the site's light/dark toggle.
 */
export function PillarsIntro() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-3xl justify-center">
          <div className="flex w-full flex-col items-center rounded-[2rem] bg-apricot-500 px-6 py-12 text-center shadow-sm ring-1 ring-black/5 sm:px-12 sm:py-14">
            <p className="text-lg leading-relaxed text-primary-950/80">
              Everything V4ME does falls under one of two pillars — restoring the planet, and standing
              beside the people who depend on it. They&apos;re not separate missions; they&apos;re two
              halves of the same work.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                href="#environmental"
                variant="primary"
                icon={<ArrowDown className="h-3.5 w-3.5" />}
                className="shadow-md shadow-primary-900/15"
              >
                <Leaf className="h-4 w-4" aria-hidden="true" />
                Environmental Programs
              </Button>
              <Button
                href="#humanitarian"
                variant="secondary"
                icon={<ArrowDown className="h-3.5 w-3.5" />}
                className="shadow-md shadow-secondary-900/15"
              >
                <HandHeart className="h-4 w-4" aria-hidden="true" />
                Humanitarian Programs
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
