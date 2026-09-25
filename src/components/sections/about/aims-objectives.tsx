import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

// Operationalizes the Mission statement against the Environmental /
// Humanitarian pillars and the SDGs V4ME has named as priorities. Each
// card leads with a themed icon graphic (leaves + soft photo backdrop,
// matching the Vision & Mission treatment) instead of a lucide-react icon.
const objectives = [
  {
    title: "Environmental Protection",
    description:
      "Advance conservation, reforestation, and habitat restoration to protect vulnerable ecosystems.",
    image: "/images/icons/aim-environmental-protection.jpg",
  },
  {
    title: "Climate Action & Clean Energy",
    description: "Promote affordable, clean energy solutions and climate-resilient practices.",
    image: "/images/icons/aim-climate-energy.jpg",
  },
  {
    title: "Poverty Relief & Livelihoods",
    description: "Expand access to basic needs, economic opportunity, and sustainable livelihoods.",
    image: "/images/icons/aim-poverty-relief.jpg",
  },
  {
    title: "Quality Education",
    description: "Improve access to inclusive, quality education for children and adults alike.",
    image: "/images/icons/aim-education.jpg",
  },
  {
    title: "Health & Clean Water",
    description: "Support public health outreach and access to clean water and sanitation.",
    image: "/images/icons/aim-health-water.jpg",
  },
  {
    title: "IDP & Humanitarian Relief",
    description: "Provide protection, relief, and reintegration support to displaced communities.",
    image: "/images/icons/aim-idp-relief.jpg",
  },
  {
    title: "Responsible Consumption",
    description: "Advocate for sustainable production, consumption, and community waste management.",
    image: "/images/icons/aim-responsible-consumption.jpg",
  },
  {
    title: "Partnerships for the Goals",
    description: "Build strategic partnerships that advance the UN Sustainable Development Goals.",
    image: "/images/icons/aim-partnerships.jpg",
  },
] as const;

export function AimsObjectives() {
  return (
    <section className="bg-surface-muted py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="secondary" align="center">
            How We Deliver
          </Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
            Aims &amp; Objectives
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            Eight commitments that turn our mission into measurable, on-the-ground action.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map(({ title, description, image }, i) => (
            <Reveal key={title} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-md shadow-primary-950/5 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-950/10">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full">
                  <Image src={image} alt="" aria-hidden="true" fill sizes="96px" className="object-cover" />
                </div>
                <h3 className="font-display mt-4 text-base font-semibold text-primary-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-900/65">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
