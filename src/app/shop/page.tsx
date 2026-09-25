import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ShopIntro } from "@/components/sections/shop/shop-intro";
import { MerchGrid } from "@/components/sections/shop/merch-grid";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "A first look at the V4ME merch collection — caps, hoodies, totes, and more. Wear the mission and support our environmental and humanitarian work.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        eyebrow="V4ME Shop"
        title="Wear the Mission"
        description="Every cap, hoodie, and tote carries our message a little further. Here's a first look at what's coming."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
        image="/images/hero/hero-merch-flatlay.jpg"
        imageAlt="V4ME branded caps, a water bottle, hoodies, and a tote bag laid out on a wooden table"
      />
      <ShopIntro />
      <MerchGrid />
      <CtaBand
        eyebrow="Want One?"
        title="Be First in Line When the Store Opens"
        description="Our online shop isn't live yet, but early supporters can reach out to reserve a piece before everyone else."
        primaryAction={{ label: "Get Involved", href: "/get-involved", variant: "accent" }}
        secondaryAction={{ label: "Back to Our Work", href: "/programs", variant: "outline-primary" }}
      />
    </>
  );
}
