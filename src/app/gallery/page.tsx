import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { GalleryGrid } from "@/components/sections/gallery/gallery-grid";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Real photos of V4ME's board, team, and community programs — from relief distributions to classroom visits and health outreach.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="In Pictures"
        title="Our Gallery"
        description="Real faces and real moments from the people and programs behind V4ME — click any photo to view it larger."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        image="/images/hero/hero-gallery-collage.jpg"
        imageAlt="A collage of photographs from V4ME's outreaches pinned to a board"
      />
      <GalleryGrid />
      <CtaBand
        eyebrow="Be Part of the Story"
        title="Your Support Writes the Next Photo"
        description="Every picture here started with someone who showed up — as a volunteer, a partner, or a donor."
        primaryAction={{ label: "Donate Now", href: "/get-involved#donate", variant: "accent" }}
        secondaryAction={{ label: "Volunteer With Us", href: "/get-involved#volunteer", variant: "outline-primary" }}
      />
    </>
  );
}
