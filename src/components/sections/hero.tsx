"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, HeartHandshake, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

type Slide = {
  src: string;
  alt: string;
  /** Object-position for the background image, tuned per-photo so the key
   * subject stays well-framed as object-cover crops it across breakpoints. */
  objectPosition: string;
  eyebrow: string;
  headline: string;
  subtext: string;
};

const slides: Slide[] = [
  {
    src: "/images/hero/hero-globe-hands-forest.jpg",
    alt: "Hands of many volunteers lifting a globe toward the sky in a sunlit forest",
    objectPosition: "60% 40%",
    eyebrow: "Our Mission",
    headline: "One Earth, Carried by All of Us",
    subtext:
      "No single person saves a planet. It takes hands from every community, every background, every corner of the world — working together, one project at a time.",
  },
  {
    src: "/images/hero/hero-tree-planting-climate-action.jpg",
    alt: "A volunteer and a child planting a tree seedling together, with wind turbines on the hills behind them",
    objectPosition: "35% 60%",
    eyebrow: "Climate Action",
    headline: "Planting Trees, Raising a Generation That Cares",
    subtext:
      "Every seedling in the ground today is a small bet on tomorrow — and the best way to make sure it pays off is to plant it together, one generation teaching the next.",
  },
  {
    src: "/images/hero/hero-food-relief-distribution.jpg",
    alt: "A volunteer handing a bag of food supplies to a family during a relief distribution",
    objectPosition: "35% 55%",
    eyebrow: "Humanitarian Relief",
    headline: "Food, Dignity, and a Hand to Hold",
    subtext:
      "Poverty relief isn't just about supplies — it's about showing up, looking someone in the eye, and making sure they know they haven't been forgotten.",
  },
  {
    src: "/images/hero/hero-classroom-education.jpg",
    alt: "A teacher helping three students with their schoolwork at an outdoor desk",
    objectPosition: "50% 42%",
    eyebrow: "Quality Education",
    headline: "Every Child Deserves a Seat and a Chance",
    subtext:
      "A good teacher, a few books, and a little encouragement can change where a child's life goes. We're here to make sure more kids get that chance.",
  },
  {
    src: "/images/hero/hero-health-outreach.jpg",
    alt: "A health worker examining a child with a stethoscope during a community health outreach",
    objectPosition: "38% 45%",
    eyebrow: "Health Access",
    headline: "Care That Meets Communities Where They Are",
    subtext:
      "For families without a clinic nearby, an outreach visit can be the difference between an illness caught early and one that isn't. We bring the care to them.",
  },
  {
    src: "/images/hero/hero-seedling-hands-soil.jpg",
    alt: "A volunteer's soil-covered hands cradling a young seedling in a sunlit field",
    objectPosition: "50% 50%",
    eyebrow: "Where It Starts",
    headline: "It Starts With Two Hands and a Little Soil",
    subtext:
      "Every forest we've helped bring back started the same way — someone kneeling down, planting one seedling, and trusting it to grow.",
  },
];

const AUTO_ADVANCE_MS = 6500;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const active = slides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured stories"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-primary-950 text-white"
    >
      {/* Slides */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={active.src}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1 }, scale: { duration: AUTO_ADVANCE_MS / 1000 + 1, ease: "linear" } }}
            className="absolute inset-0"
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: active.objectPosition }}
            />
          </motion.div>
        </AnimatePresence>
        {/* Legibility gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-32 pb-20 text-center sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.src}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-200 uppercase backdrop-blur-sm ring-1 ring-white/20">
                {active.eyebrow}
              </span>
              <h1 className="font-display mt-5 text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {active.headline}
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                {active.subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/get-involved#volunteer" variant="accent" size="lg" icon={<HeartHandshake className="h-4.5 w-4.5" />}>
              Join Us
            </Button>
            <Button href="/get-involved#donate" variant="primary" size="lg" icon={<Leaf className="h-4.5 w-4.5" />}>
              Donate
            </Button>
            <Button href="/get-involved#volunteer" variant="outline" size="lg" icon={<Users className="h-4.5 w-4.5" />}>
              Volunteer
            </Button>
            <Button href="/about" variant="ghost" size="lg" className="text-white hover:bg-accent-500/25">
              Learn More →
            </Button>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-accent-500/25"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-accent-500/25"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-2" role="tablist" aria-label="Slide selector">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}: ${slide.headline}`}
                onClick={() => goTo(i)}
                className="group relative h-1.5 w-10 overflow-hidden rounded-full bg-white/25"
              >
                {i === index && (
                  <motion.span
                    layoutId="hero-progress"
                    className="absolute inset-y-0 left-0 bg-accent-400"
                    initial={{ width: "0%" }}
                    animate={{ width: paused ? "100%" : "100%" }}
                    transition={{ duration: paused ? 0.2 : AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                  />
                )}
                {i !== index && <span className="absolute inset-0 bg-white/25 group-hover:bg-accent-400/60" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
        </div>
      </motion.div>
    </section>
  );
}
