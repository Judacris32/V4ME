import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { OurStory } from "@/components/sections/about/our-story";
import { FounderSpotlight } from "@/components/sections/about/founder-spotlight";
import { VisionMission } from "@/components/sections/about/vision-mission";
import { AimsObjectives } from "@/components/sections/about/aims-objectives";
import { BoardOfTrustees } from "@/components/sections/about/board-of-trustees";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn why Voice for Mother Earth Humanitarian Foundation (V4ME) exists, our vision, mission, and aims & objectives.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About V4ME"
        title="Protecting Our Planet, Uplifting Her People"
        description="Voice for Mother Earth Humanitarian Foundation is a non-profit dedicated to the belief that caring for the Earth and caring for humanity go hand in hand."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        image="/images/community/school-assembly.jpg"
        imageAlt="Students gathered outside their school during a V4ME community program"
      />
      <FounderSpotlight />
      <OurStory />
      <VisionMission />
      <AimsObjectives />
      <BoardOfTrustees />
    </>
  );
}
