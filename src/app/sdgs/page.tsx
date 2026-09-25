import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SdgIntro } from "@/components/sections/sdgs/sdg-intro";
import { SdgGrid } from "@/components/sections/sdgs/sdg-grid";
import { SdgPillars } from "@/components/sections/sdgs/sdg-pillars";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "SDG Alignment",
  description:
    "Our initiatives contribute directly to 16 of the UN's 17 Sustainable Development Goals — see how V4ME's work maps to each one.",
};

export default function SdgsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Global Goals"
        title="Our SDG Alignment"
        description="Our initiatives contribute directly to the UN Sustainable Development Goals."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "SDG Alignment" }]}
        image="/images/hero/hero-sdg-poster-outreach.jpg"
        imageAlt="A V4ME volunteer walking schoolchildren through the UN Sustainable Development Goals poster"
      />
      <SdgIntro />
      <SdgGrid />
      <SdgPillars />
      <CtaBand
        eyebrow="Our Work"
        title="See These Goals in Action"
        description="Every badge above maps to a program we run today — explore how."
        primaryAction={{ label: "Explore Our Programs", href: "/programs", variant: "accent" }}
        secondaryAction={{ label: "Get Involved", href: "/get-involved", variant: "outline-primary" }}
      />
    </>
  );
}
