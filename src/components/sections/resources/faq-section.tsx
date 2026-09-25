"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How can I get involved if I can't donate money?",
    answer:
      "Volunteering is just as valuable — outreaches, tree-planting drives, and events all run on people's time and skills. In-kind support (materials, transport, professional skills like design or writing) is also always welcome. Reach out through our Get Involved page and we'll match you to something that fits.",
  },
  {
    question: "Where does V4ME currently operate?",
    answer:
      "Our programs are based out of Abuja, Nigeria, with outreaches extending to surrounding communities. As partnerships grow, so does our reach — check our SDG Alignment and Our Work pages for the latest on where we're active.",
  },
  {
    question: "Can my company or organization partner with V4ME?",
    answer:
      "Yes — we welcome partnerships with businesses, schools, and other organizations, from sponsoring a specific outreach to longer-term collaboration. Send us a note through the Contact page and tell us what you have in mind.",
  },
  {
    question: "Do you accept in-kind donations (supplies, materials)?",
    answer:
      "Often, yes — needs vary by program and season. The best way to confirm what's needed right now is to email us directly before sending or dropping anything off.",
  },
  {
    question: "How do I stay updated on new programs and outreaches?",
    answer:
      "Follow us on social media (links in the footer) or sign up above — we'll notify you as soon as our Stories & Updates section goes live with regular news from the field.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface-muted py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-700 uppercase dark:bg-primary-800/40 dark:text-primary-200">
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Common Questions
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
            Answers Before You Ask
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="text-sm font-semibold text-primary-950 sm:text-base dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4.5 w-4.5 shrink-0 text-primary-500 transition-transform duration-200",
                        open && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-200 ease-in-out",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-foreground/70 sm:px-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
