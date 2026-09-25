import { HandHeart, Laptop2, Leaf, Mail, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

const ways = [
  {
    icon: Leaf,
    title: "Environmental Programs",
    description: "Tree-planting drives, community clean-ups, and clean-energy outreach — hands-on, outdoors, and usually on a weekend.",
  },
  {
    icon: HandHeart,
    title: "Humanitarian Relief",
    description: "Relief distributions, health outreaches, and support for displaced families — direct, on-the-ground work with communities.",
  },
  {
    icon: Users,
    title: "Events & Organizing",
    description: "Help plan and run outreach days, awareness campaigns, and community events from start to finish.",
  },
  {
    icon: Laptop2,
    title: "Remote & Skills-Based",
    description: "Design, writing, admin, photography, or anything else you're good at — a lot of what V4ME needs can be done from anywhere.",
  },
];

/**
 * No intake form here — collecting name/email/interest through a web form
 * with no backend behind it just meant quietly emailing it anyway, so this
 * goes straight to that same honest step: a direct, pre-filled email to the
 * team. Swap in a real intake flow once V4ME has somewhere for it to go.
 */
export function VolunteerSection() {
  return (
    <section id="volunteer" className="scroll-mt-28 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-700 uppercase dark:bg-primary-800/40 dark:text-primary-200">
            <HandHeart className="h-3.5 w-3.5" aria-hidden="true" />
            Volunteer
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
            Bring Your Time and Skills
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/75">
            Our tree-planting drives, relief outreaches, and community events run on people who show
            up. Whatever your background — student, professional, tradesperson, or just someone with
            a free weekend — there&apos;s a place for you in this work.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((way, i) => {
            const Icon = way.icon;
            return (
              <Reveal key={way.title} delay={(i % 4) * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-800/40 dark:text-primary-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-4 text-sm font-bold text-primary-950 dark:text-white">
                    {way.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">{way.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-2xl rounded-3xl bg-primary-950 p-8 text-center text-white sm:p-10">
          <p className="text-base leading-relaxed text-white/85">
            Tell us your name, where you&apos;re based, and what you&apos;d like to help with — we
            reply to every message, usually within one business day.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Volunteer Interest")}`}
              variant="accent"
              size="md"
              icon={<Mail className="h-4 w-4" />}
            >
              Email Us to Volunteer
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="md"
              icon={<MessageCircle className="h-4 w-4" />}
            >
              Talk to the Team
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
