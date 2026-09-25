import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Voice for Mother Earth Humanitarian Foundation (V4ME) — ask a question, explore a partnership, or just say hello.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact V4ME"
        title="We'd Love to Hear From You"
        description="Questions, ideas, or just a hello — our team is genuinely glad to hear from you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image="/images/hero/hero-community-interview.jpg"
        imageAlt="A V4ME team member speaking with a community elder during a field visit"
      />
      <ContactSection />
      <CtaBand
        eyebrow="Join The Work"
        title="Prefer to Get Involved Directly?"
        description="Volunteering and giving are two of the fastest ways to put your support to work."
        primaryAction={{ label: "Get Involved", href: "/get-involved", variant: "accent" }}
        secondaryAction={{ label: "Explore Our Programs", href: "/programs", variant: "outline-primary" }}
      />
    </>
  );
}
