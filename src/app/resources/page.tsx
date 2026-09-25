import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { UpdatesSection } from "@/components/sections/resources/updates-section";
import { FaqSection } from "@/components/sections/resources/faq-section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Answers to common questions about volunteering, giving, and partnering with V4ME — plus a first look at where our field stories will live.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Learn, Ask, and Stay Close to the Work"
        description="Everything you need to know before you volunteer, give, or partner with us — with field stories on the way."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        image="/images/community/classroom-students.jpg"
        imageAlt="Students in a classroom during a V4ME community education program"
      />
      <UpdatesSection />
      <FaqSection />
      <CtaBand
        eyebrow="Ready When You Are"
        title="Put a Question Into Action"
        description="Still have something on your mind? Reach out directly, or jump straight to getting involved."
        primaryAction={{ label: "Contact Us", href: "/contact", variant: "accent" }}
        secondaryAction={{ label: "Get Involved", href: "/get-involved", variant: "outline-primary" }}
      />
    </>
  );
}
