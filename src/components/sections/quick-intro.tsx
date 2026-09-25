import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe2, HandHeart, Leaf } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { siteConfig } from "@/lib/site-config";

const pillars = [
  {
    icon: Leaf,
    title: "Environmental Programs",
    description: "Waste management, tree planting, climate action, and clean energy for a healthier planet.",
    href: "/programs#environmental",
    image: "/images/hero/hero-seedling-hands-soil.jpg",
    imageAlt: "A volunteer's soil-covered hands cradling a young seedling",
    accent: "primary" as const,
  },
  {
    icon: HandHeart,
    title: "Humanitarian Programs",
    description: "Poverty relief, quality education, health access, and support for displaced communities.",
    href: "/programs#humanitarian",
    image: "/images/community/classroom-students.jpg",
    imageAlt: "Students engaged in a classroom lesson at a V4ME partner school",
    accent: "accent" as const,
  },
] as const;

const pillarAccent = {
  primary: {
    bar: "bg-primary-500 dark:bg-glow-500",
    iconWrap: "bg-primary-50 text-primary-600 dark:bg-glow-500/20 dark:text-glow-400",
    ring: "group-hover:ring-primary-200 dark:group-hover:ring-glow-600/60",
  },
  accent: {
    bar: "bg-accent-500",
    iconWrap: "bg-accent-50 text-accent-600 dark:bg-accent-900/40 dark:text-accent-300",
    ring: "group-hover:ring-accent-200 dark:group-hover:ring-accent-700/60",
  },
} as const;

/**
 * "Who We Are" — a photo + copy panel that flows with the site's normal
 * light/dark theme (no more fixed brand-color background). The section
 * backdrop is a soft, theme-reactive tint that separates it from the white
 * hero/stats bands around it without resorting to a loud flat color; the
 * polish instead comes from the panel itself — a framed photo with a
 * floating tagline chip, a gradient accent line, and color-coded pillar
 * cards with a hover micro-interaction.
 */
export function QuickIntro() {
  return (
    <section className="relative overflow-hidden bg-surface-muted py-20 sm:py-28 dark:bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-800/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-accent-200/25 blur-3xl dark:bg-accent-900/15"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-primary-950/10 ring-1 ring-border-subtle dark:bg-surface dark:shadow-black/30">
            <div className="h-1.5 w-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent-400" />

            <div className="grid lg:grid-cols-2">
              <div className="relative p-4 pb-8 sm:p-6 lg:p-8 lg:pb-8">
                <div className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[360px] lg:h-full lg:min-h-[420px]">
                  <Image
                    src="/images/community/aid-box-handoff.jpg"
                    alt="A V4ME volunteer handing over a box of relief supplies to a community member"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />

                  <div className="absolute right-4 bottom-4 left-4 flex items-center gap-2.5 rounded-xl bg-white/95 px-3.5 py-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur-sm dark:bg-surface/95">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                      <Globe2 className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-xs leading-tight font-medium text-primary-950 italic sm:text-sm dark:text-white">
                      &ldquo;{siteConfig.tagline}&rdquo;
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 pt-2 sm:p-10 sm:pt-2 lg:p-12 lg:pt-12">
                <Eyebrow icon={Globe2} color="accent">
                  Who We Are
                </Eyebrow>
                <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
                  One Foundation, Two Missions — People and Planet
                </h2>
                <p className="mt-5 text-base leading-relaxed text-foreground/70 sm:text-lg">
                  {siteConfig.shortName} is a non-profit organization dedicated to protecting our planet and
                  uplifting her people. We believe that caring for the Earth and caring for humanity go hand
                  in hand.
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/70 sm:text-lg">
                  Through sustainable practices, humanitarian services, and advocacy, we are creating a
                  future where both nature and communities thrive.
                </p>
                <Link
                  href="/about"
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-900 dark:text-primary-300 dark:hover:text-white"
                >
                  Read our full story
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {pillars.map(({ icon: Icon, title, description, href, image, imageAlt, accent }) => {
                    const styles = pillarAccent[accent];
                    return (
                      <Link
                        key={title}
                        href={href}
                        className={`group relative flex flex-col overflow-hidden rounded-2xl bg-surface-muted ring-1 ring-border-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-primary-950/40 ${styles.ring}`}
                      >
                        <div className="relative h-24 w-full shrink-0 overflow-hidden">
                          <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            sizes="220px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/75 via-primary-950/10 to-transparent" />
                          <span
                            className={`absolute right-2.5 bottom-2.5 flex h-8 w-8 items-center justify-center rounded-full ${styles.iconWrap}`}
                          >
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                        </div>
                        <span className={`h-1 w-full ${styles.bar}`} aria-hidden="true" />
                        <div className="flex flex-1 flex-col p-4">
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-display block text-sm font-semibold text-primary-950 dark:text-white">
                              {title}
                            </span>
                            <ArrowUpRight
                              className="h-4 w-4 shrink-0 text-primary-900/30 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 dark:text-white/30"
                              aria-hidden="true"
                            />
                          </div>
                          <span className="mt-1.5 block text-xs leading-relaxed text-foreground/65">
                            {description}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
