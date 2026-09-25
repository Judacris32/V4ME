"use client";

import { useState, type FormEvent } from "react";
import { Mail, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

/**
 * Field stories and articles aren't published yet, so this section says so
 * plainly instead of shipping placeholder blog posts with invented dates
 * and authors. The signup hands off to email the same way the Contact and
 * Volunteer forms do, until a real newsletter service is connected.
 */
export function UpdatesSection() {
  const [email, setEmail] = useState("");
  const [handedOff, setHandedOff] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      "Newsletter Signup",
    )}&body=${encodeURIComponent(`Please add this address to the V4ME updates list: ${email}`)}`;
    window.location.href = mailto;
    setHandedOff(true);
  }

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-700 uppercase dark:bg-primary-800/40 dark:text-primary-200">
              <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
              Stories &amp; Updates
            </span>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
              Field Stories Are Coming Soon
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75">
              We&apos;re building out a home for dispatches from our outreaches, program updates, and
              the people behind the work — worth the wait. In the meantime, drop your email and
              we&apos;ll let you know the moment it&apos;s live.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border-subtle bg-surface p-6 shadow-sm sm:p-8"
            >
              <label htmlFor="update-email" className="mb-1.5 block text-sm font-medium text-foreground/80">
                Email address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="update-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border-subtle bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-200 focus:outline-none dark:focus:ring-primary-800/50"
                />
                <Button type="submit" variant="accent" size="md" icon={<Mail className="h-4 w-4" />} className="shrink-0">
                  Notify Me
                </Button>
              </div>
              {handedOff && (
                <p className="mt-4 text-sm text-primary-600 dark:text-primary-300" role="status">
                  Opening your email app to confirm — thanks for your patience while we build this
                  out.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
