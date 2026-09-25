import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig, socialLinks } from "@/lib/site-config";

// Real brand icon images the client provided, used in place of hand-drawn
// SVG glyphs so the social row and contact list carry actual recognizable
// platform marks.
const socialIconImages: Record<string, string> = {
  Facebook: "/images/icons/social/facebook.png",
  Instagram: "/images/icons/social/instagram.png",
  "X (Twitter)": "/images/icons/social/x-twitter.png",
  LinkedIn: "/images/icons/social/linkedin.png",
  YouTube: "/images/icons/social/youtube.png",
  WhatsApp: "/images/icons/social/whatsapp.png",
};

const exploreLinks = navLinks.slice(0, 5);
const supportLinks = navLinks.slice(5);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary-950 text-white">
      {/* Quiet brand-color wash in the corners instead of a flat block —
          the same glow treatment used on the CTA band and stats section,
          so the footer reads as part of the site rather than a bolted-on
          template block. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,164,71,0.16),transparent_70%)]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_70%)]" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow-500/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/95 p-1.5 shadow-sm ring-1 ring-black/5">
                <Image
                  src="/images/logo.png"
                  alt={`${siteConfig.shortName} logo`}
                  width={96}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-base font-bold tracking-tight text-white">
                  {siteConfig.shortName}
                </span>
                <span className="text-[11px] font-medium tracking-wide text-white/70 uppercase">
                  Voice for Mother Earth
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{siteConfig.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
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
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wide text-white/50 uppercase">Explore</h3>
            <ul className="mt-5 space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors duration-200 hover:text-glow-400"
                  >
                    <span className="h-px w-0 bg-glow-400 transition-all duration-200 group-hover:w-2.5" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wide text-white/50 uppercase">Get Involved</h3>
            <ul className="mt-5 space-y-3.5">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors duration-200 hover:text-glow-400"
                  >
                    <span className="h-px w-0 bg-glow-400 transition-all duration-200 group-hover:w-2.5" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wide text-white/50 uppercase">Get in Touch</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Image
                    src="/images/icons/social/google-maps.png"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-4 w-4 object-contain"
                  />
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Image
                    src="/images/icons/social/phone.png"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-4 w-4 object-contain"
                  />
                </span>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Image
                    src="/images/icons/social/gmail.png"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-4 w-4 object-contain"
                  />
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-6 text-center text-xs text-white/50 sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <span>
            © {year} {siteConfig.name}. All rights reserved.
          </span>
          <span>{siteConfig.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
