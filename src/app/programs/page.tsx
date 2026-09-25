import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { PillarsIntro } from "@/components/sections/programs/pillars-intro";
import { EnvironmentalPrograms } from "@/components/sections/programs/environmental-programs";
import { HumanitarianPrograms } from "@/components/sections/programs/humanitarian-programs";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "V4ME's work spans two pillars: Environmental Programs (waste management, tree planting, climate action, clean energy) and Humanitarian Programs (poverty relief, quality education, health, IDP support).",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Two Pillars, One Mission"
        description="From restoring ecosystems to relief efforts on the ground, every V4ME program serves the same goal: a world where Mother Earth and her children thrive together."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Work" }]}
        image="/images/community/classroom-lesson.jpg"
        imageAlt="Students in a classroom during a V4ME program session"
      />
      <PillarsIntro />
      <EnvironmentalPrograms />
      <HumanitarianPrograms />
      <CtaBand
        eyebrow="Get Involved"
        title="Ready to Add Your Voice?"
        description="Whether it's your time, your skills, or your support — there's a place for you in this work."
        primaryAction={{ label: "Donate Now", href: "/get-involved#donate", variant: "accent" }}
        secondaryAction={{ label: "Volunteer With Us", href: "/get-involved#volunteer", variant: "outline-primary" }}
      />
    </>
  );
}
