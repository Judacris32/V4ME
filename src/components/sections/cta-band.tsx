import { Reveal } from "@/components/ui/reveal";
import { Button, type ButtonVariant } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaAction = {
  label: string;
  href: string;
  variant?: ButtonVariant;
};

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction: CtaAction;
  secondaryAction?: CtaAction;
  /** Override the card's background for one specific usage of this shared
   * component (e.g. a custom brand color on a single page), without
   * touching every other page that renders a CtaBand. Merged over the
   * default bg-surface-muted / dark:bg-primary-950 via tailwind-merge, so
   * pass both a light value and a `dark:` value if dark mode should change
   * too — otherwise the default dark card is kept. */
  cardClassName?: string;
};

/**
 * Closing call-to-action band, reused at the bottom of most pages. The
 * outer section is always white (both themes); the card inside it carries
 * the theme instead, switching from a light tinted card to the brand-dark
 * green card as the site's light/dark toggle changes (unless overridden
 * per-usage via `cardClassName`).
 */
export function CtaBand({ eyebrow, title, description, primaryAction, secondaryAction, cardClassName }: CtaBandProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl">
          <div
            className={cn(
              "relative isolate overflow-hidden rounded-3xl bg-surface-muted px-6 py-14 text-center shadow-sm ring-1 ring-border-subtle sm:px-12 sm:py-16 dark:bg-primary-950 dark:shadow-none dark:ring-0",
              cardClassName,
            )}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden bg-[radial-gradient(70%_60%_at_50%_100%,rgba(45,156,219,0.25),transparent)] dark:block"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden bg-[radial-gradient(55%_45%_at_15%_0%,rgba(0,164,71,0.22),transparent)] dark:block"
            />

            <div className="relative">
              {eyebrow && (
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-700 uppercase ring-1 ring-accent-100 dark:bg-white/10 dark:text-accent-200 dark:ring-white/20">
                  {eyebrow}
                </span>
              )}
              <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-balance text-primary-950 sm:text-4xl dark:text-white">
                {title}
              </h2>
              {description && (
                <p className="mt-4 text-base leading-relaxed text-primary-900/70 sm:text-lg dark:text-white/80">
                  {description}
                </p>
              )}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button href={primaryAction.href} variant={primaryAction.variant ?? "accent"} size="lg">
                  {primaryAction.label}
                </Button>
                {secondaryAction && (
                  <Button href={secondaryAction.href} variant={secondaryAction.variant ?? "outline"} size="lg">
                    {secondaryAction.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
