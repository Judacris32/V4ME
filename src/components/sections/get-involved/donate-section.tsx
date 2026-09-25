import { Droplets, HandCoins, Mail, Repeat } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const ways = [
  {
    icon: HandCoins,
    title: "One-Time Gift",
    description:
      "A single gift of any size goes straight into whichever active drive needs it most — a tree-planting outreach, a relief kit run, or a school visit.",
  },
  {
    icon: Repeat,
    title: "Monthly Giving",
    description:
      "A recurring gift, even a modest one, gives us something steadier to plan a season of outreaches around than one-off donations alone.",
  },
  {
    icon: Droplets,
    title: "In-Kind & Sponsorship",
    description:
      "Materials, transport, venue space, or sponsoring a specific outreach — write to us and we'll figure out what fits best.",
  },
];

/**
 * Deliberately doesn't quote specific amounts or "this exact sum buys X"
 * claims — those figures were never confirmed by V4ME, so this sticks to
 * honest, general ways to give instead. Add real tiers back once V4ME has
 * verified figures to publish.
 *
 * No payment gateway is wired up yet either, so this doesn't pretend to
 * take a card or show fabricated bank details — it routes interested
 * donors to email, which is honest and actually works today. Swap the CTA
 * for a real checkout (Paystack / Flutterwave / Stripe, per what V4ME
 * decides) once that's chosen.
 */
export function DonateSection() {
  return (
    <section id="donate" className="scroll-mt-28 bg-surface-muted py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-700 uppercase dark:bg-accent-900/30 dark:text-accent-200">
            Ways To Give
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
            Every Gift Moves the Work Forward
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/75">
            There&apos;s no fixed price tag on generosity — whatever you&apos;re able to give, it goes
            straight into the field. Here are a few ways to do it.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {ways.map((way, i) => {
            const Icon = way.icon;
            return (
              <Reveal key={way.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-border-subtle bg-surface p-7 shadow-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-800/40 dark:text-primary-200">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="font-display mt-6 text-lg font-bold text-primary-950 dark:text-white">
                    {way.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{way.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-14 max-w-xl rounded-3xl bg-primary-950 p-8 text-center text-white sm:p-10">
          <p className="text-base leading-relaxed text-white/85">
            Online giving is on its way. For now, email us and we&apos;ll get you secure payment
            details right away — usually within one business day.
          </p>
          <Button
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Donation Inquiry")}`}
            variant="accent"
            size="md"
            icon={<Mail className="h-4 w-4" />}
            className="mt-6"
          >
            Request Giving Details
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
