import Image from "next/image";
import { Clock } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, socialLinks } from "@/lib/site-config";
import { ContactForm } from "./contact-form";

// Real brand icon images the client provided — the same set the footer
// uses — so every icon here is an actual, recognizable platform mark
// rather than a generic outline glyph. Keeping the map keyed by social
// label also means a new entry in socialLinks (site-config.ts) picks up
// its icon automatically instead of silently rendering blank.
const socialIconImages: Record<string, string> = {
  Facebook: "/images/icons/social/facebook.png",
  Instagram: "/images/icons/social/instagram.png",
  "X (Twitter)": "/images/icons/social/x-twitter.png",
  LinkedIn: "/images/icons/social/linkedin.png",
  YouTube: "/images/icons/social/youtube.png",
  WhatsApp: "/images/icons/social/whatsapp.png",
};

const whatsAppLink = socialLinks.find((s) => s.label === "WhatsApp");

const infoCards = [
  {
    icon: "/images/icons/social/google-maps.png",
    label: "Visit Us",
    value: siteConfig.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`,
    external: true,
  },
  {
    icon: "/images/icons/social/phone.png",
    label: "Call Us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: "/images/icons/social/gmail.png",
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  ...(whatsAppLink
    ? [
        {
          icon: "/images/icons/social/whatsapp.png",
          label: "Chat on WhatsApp",
          value: "Message us directly",
          href: whatsAppLink.href,
          external: true,
        },
      ]
    : []),
  {
    icon: null,
    label: "Office Hours",
    value: "Monday – Friday, 9am – 5pm (WAT)",
  },
];

export function ContactSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background py-20 sm:py-24 dark:bg-primary-950">
      {/* Same layered "dark base + soft color glows" treatment as the
          footer and CTA bands, in place of one flat dark-green fill, so
          this section reads as a considered dark surface rather than a
          plain color swap. Light mode is untouched. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden dark:block">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(242,153,74,0.16),transparent_70%)]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(45,156,219,0.14),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-700 uppercase dark:bg-primary-800/40 dark:text-primary-200">
              Reach Out
            </span>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
              We&apos;d Love to Hear From You
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75">
              Whether you&apos;re curious about a program, want to volunteer, or just have a question —
              a real person on our team reads every message.
            </p>

            <div className="mt-8 space-y-4">
              {infoCards.map((item) => {
                const content = (
                  <div className="flex items-start gap-3.5 rounded-2xl border-2 border-primary-200 bg-surface p-4 transition-colors duration-200 group-hover:border-accent-400 dark:border-accent-500/70 dark:group-hover:border-accent-400">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-800/40">
                      {item.icon ? (
                        <Image src={item.icon} alt="" aria-hidden="true" width={28} height={28} className="h-5 w-5 object-contain" />
                      ) : (
                        <Clock className="h-4.5 w-4.5 text-primary-600 dark:text-primary-200" aria-hidden="true" />
                      )}
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-foreground/50 uppercase">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground/85">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group block transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              {socialLinks.map((social) => {
                const icon = socialIconImages[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/20"
                  >
                    {icon && (
                      <Image
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        width={40}
                        height={40}
                        className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl border-2 border-primary-100 bg-white p-6 shadow-lg shadow-primary-950/10 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
