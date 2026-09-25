import { Hero } from "@/components/sections/hero";
import { QuickIntro } from "@/components/sections/quick-intro";
import { ImpactStats } from "@/components/sections/impact-stats";
import { FeaturedPrograms } from "@/components/sections/featured-programs";
import { PhotoMarquee } from "@/components/sections/photo-marquee";
import { SdgTeaser } from "@/components/sections/sdg-teaser";
import { TrusteesTeaser } from "@/components/sections/trustees-teaser";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickIntro />
      <ImpactStats />
      <FeaturedPrograms />
      <PhotoMarquee />
      <SdgTeaser />
      <TrusteesTeaser />
      <CtaBand
        eyebrow="Join The Work"
        title="Every Hand Counts — Add Yours"
        description="Whether it's an hour of your time, a skill you can share, or a donation that fuels the next outreach, there's a place for you in this work."
        primaryAction={{ label: "Donate Now", href: "/get-involved#donate", variant: "accent" }}
        secondaryAction={{ label: "Volunteer With Us", href: "/get-involved#volunteer", variant: "outline-primary" }}
        cardClassName="bg-[oklch(82.8%_0.111_230.318)]"
      />
    </>
  );
}
