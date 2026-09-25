import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { VolunteerSection } from "@/components/sections/get-involved/volunteer-section";
import { DonateSection } from "@/components/sections/get-involved/donate-section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer your time or give to support V4ME's environmental and humanitarian programs — every hand and every gift counts.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Every Hand Counts — Add Yours"
        description="Whether it's an hour of your time or a gift that fuels the next outreach, there's a place for you in this work."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Get Involved" }]}
        image="/images/hero/hero-books-handout.jpg"
        imageAlt="A V4ME volunteer handing books to children during a community outreach"
      />
      <VolunteerSection />
      <DonateSection />
      <CtaBand
        eyebrow="Still Curious"
        title="See Where Your Support Goes"
        description="Take a closer look at the environmental and humanitarian programs your time and gifts make possible."
        primaryAction={{ label: "Explore Our Programs", href: "/programs", variant: "accent" }}
        secondaryAction={{ label: "Contact Us", href: "/contact", variant: "outline-primary" }}
      />
    </>
  );
}
