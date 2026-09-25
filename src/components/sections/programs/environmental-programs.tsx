import { Leaf, Recycle, Sprout, Thermometer, Zap } from "lucide-react";
import { SectionBanner } from "@/components/ui/section-banner";
import { ProgramCard } from "@/components/ui/program-card";
import { Reveal } from "@/components/ui/reveal";

const programs = [
  {
    icon: Recycle,
    title: "Waste Management",
    description:
      "We organize community clean-up and recycling drives that pull plastic out of our waterways — and keep it from reaching them in the first place.",
    image: "/images/icons/aim-responsible-consumption.jpg",
    imageAlt: "Sorted recyclable waste materials from a community clean-up drive",
  },
  {
    icon: Sprout,
    title: "Tree Planting",
    description:
      "Every drive starts with a single seedling in the ground. Multiplied by hundreds of hands, it adds up to restored land and greener communities.",
    image: "/images/hero/hero-healthy-planet-futures.jpg",
    imageAlt: "A volunteer's soil-covered hands cradling a young seedling",
  },
  {
    icon: Thermometer,
    title: "Climate Action",
    description:
      "We train communities to adapt and speak up for the policies that protect them, so a changing climate doesn't mean a community left behind.",
    image: "/images/hero/hero-people-planet-future.jpg",
    imageAlt: "A river winding through untouched rainforest at sunrise",
  },
  {
    icon: Zap,
    title: "Clean Energy",
    description:
      "We help bring affordable, renewable energy to the communities we serve — lowering both bills and reliance on fossil fuels.",
    image: "/images/icons/aim-climate-energy.jpg",
    imageAlt: "Renewable energy icon graphic representing V4ME's Clean Energy program",
  },
] as const;

export function EnvironmentalPrograms() {
  return (
    <section id="environmental" className="scroll-mt-24 bg-white">
      <SectionBanner
        eyebrow="Environmental Programs"
        icon={Leaf}
        title="Protecting the Planet That Sustains Us"
        description="From cleaning up our neighborhoods to planting trees that will outlive us — this is what protecting the planet looks like in practice."
        image="/images/hero/hero-tree-planting-hillside.jpg"
        imageAlt="V4ME volunteers planting tree seedlings across a hillside at sunrise"
        tone="primary"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={(i % 4) * 0.06}>
              <ProgramCard {...program} tone="primary" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
