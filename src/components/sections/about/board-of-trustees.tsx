import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

// Real Board of Trustees and operations team, replacing the earlier
// placeholder role tiles. Bios are tightened summaries of the fuller
// biographies supplied for each person — see project notes for the
// full-length originals if a longer version is ever needed elsewhere.
const trustees = [
  {
    name: "Barrister Gambo Umaru, LLB, BL",
    title: "Legal & Compliance Advisor",
    bio: "Founder and Principal Consultant of Delu Consulting Firm, he provides legal guidance and supports sound governance, compliance, and institutional accountability across the Foundation.",
    photo: "/images/team/trustee-gambo-umaru.jpg",
  },
  {
    name: "Alhaji Innayatu Jubril Mohammed",
    title: "Trustee · CEO, Honey Acres Farmland",
    bio: "An industrial chemist with 30+ years in quality control at Kaduna Refining and Petrochemical Company, he now leads Honey Acres Farmland and champions tree planting and carbon footprint reduction as practical climate action.",
    photo: "/images/team/trustee-innayatu-mohammed.jpg",
  },
  {
    name: "Christie Ekwujuru",
    title: "Trustee · CEO, De Nelly Diamond Global",
    bio: "A human resources professional with postgraduate studies in Conflict, Peace and Strategic Studies, she is a committed advocate for Clean Water & Sanitation and Sustainable Cities & Communities.",
    photo: "/images/team/trustee-christie-ekwujuru.jpg",
  },
  {
    name: "Mrs. Ijeoma Santos-Okpe",
    title: "Board Secretary",
    bio: "A Registered Nurse and nursing professor in New York with over 23 years in the U.S. health sector, she brings deep healthcare and philanthropic experience, with a focus on Zero Hunger and Good Health & Well-Being.",
    photo: "/images/team/trustee-ijeoma-santos-okpe.jpg",
  },
  {
    name: "Joy Ekwujuru",
    title: "Financial Officer",
    bio: "An accounting professional and financial broker with Unicoke Star Ventures, she also founded the GoldenJoy4Kids Initiative and is a strong advocate for Quality Education.",
    photo: "/images/team/trustee-joy-ekwujuru.jpg",
  },
  {
    name: "Sonia Nkechi Christopher, B.NSc.",
    title: "Trustee & Team Member",
    bio: "A nursing graduate of Novena University, Delta State, she is passionate about patient care, mental health nursing, and nursing education, and volunteers regularly in her community.",
    photo: "/images/team/trustee-sonia-christopher.jpg",
  },
  {
    name: "Bernard Emeka Afulike, BSc, MSc, FCIFC, FCILRM",
    title: "Trustee · CEO, Brain Hive Ltd",
    bio: "An Economist and Education & Finance Management Consultant with over 10 years in education and 8 in finance and banking, he is a Fellow of FCIFC and FCILRM, passionate about Quality Education.",
    photo: "/images/team/trustee-bernard-afulike.jpg",
  },
] as const;

const teamMembers = [
  {
    name: "Jude Iyelumi",
    title: "Full-Stack Developer",
    bio: "Jude Iyelumi is the full-stack developer behind V4ME's website, designed and built from the ground up. Driven by the belief that good technology should make good work easier to find and support, he continues to lead the Foundation's digital development.",
    photo: "/images/team/team-jude-iyelumi.png",
  },
  {
    name: "Lawrence Wisdom",
    title: "Creative Design Director",
    bio: "A Computer Science graduate with a strong passion for visual brand identity, he leads V4ME's graphic design, user interface architecture, and creative direction, shaping the Foundation's visual presence through clear, consistent, and intentional design.",
    photo: "/images/team/lawrence-wisdom.jpg",
  },
  {
    name: "Emmanuel Christopher",
    title: "Photography & Visual Documentation Officer",
    bio: "A pharmacy undergraduate at Novena University with a passion for photography, he documents V4ME's projects, campaigns, and field activities, helping tell the Foundation's story through compelling visuals.",
    photo: "/images/team/emmanuel-christopher.jpg",
  },
  {
    name: "Raymond Munachi Christopher",
    title: "ICT & Technical Support Officer",
    bio: "A Cybersecurity undergraduate at the Federal University of Applied Sciences Kachia (FUASK), he supports V4ME's digital equipment, technology, and responsible digital practices.",
    photo: "/images/team/raymond-christopher.jpg",
  },
  {
    name: "Anthony Onyi Uwandu",
    title: "Head of Administration & Operations",
    bio: "A Business Management graduate and entrepreneur with experience in business leadership and administration, he is the CEO of LaVisa Links Communications and De Nero Green Farms, bringing his organisational and management experience to V4ME.",
    photo: "/images/team/team-anthony-uwandu.jpg",
  },
] as const;

type Person = {
  name: string;
  title: string;
  bio: string;
  photo: string;
};

function PersonCard({ name, title, bio, photo }: Person) {
  return (
    <div className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-md shadow-primary-950/5 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-950/10">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-4 ring-primary-50">
        <Image src={photo} alt={name} fill sizes="112px" className="object-cover" />
      </div>
      <h3 className="font-display mt-4 text-base font-semibold text-primary-950">{name}</h3>
      <p className="mt-1 text-xs font-bold tracking-wide text-accent-600 uppercase">{title}</p>
      <p className="mt-3 text-sm leading-relaxed text-primary-900/65">{bio}</p>
    </div>
  );
}

export function BoardOfTrustees() {
  return (
    <section id="trustees" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="accent" align="center">
            The People
          </Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl dark:text-white">
            Board of Trustees
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            A governance board of professionals from healthcare, law, finance, education, and
            industry, united by a shared commitment to V4ME&apos;s mission.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustees.map((person, i) => (
            <Reveal key={person.name} delay={(i % 3) * 0.06}>
              <PersonCard {...person} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-20 max-w-2xl text-center">
          <Eyebrow color="secondary" align="center">
            Behind the Scenes
          </Eyebrow>
          <h3 className="font-display mt-5 text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl dark:text-white">
            Operations Team
          </h3>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((person, i) => (
            <Reveal key={person.name} delay={(i % 3) * 0.06}>
              <PersonCard {...person} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-primary-300 bg-primary-50 p-6 text-center sm:flex-row sm:text-left dark:border-primary-700 dark:bg-primary-900/20">
            <p className="text-sm font-medium text-primary-800 dark:text-primary-100">
              Want to be part of the team driving this work? We&apos;re always open to passionate
              volunteers and collaborators.
            </p>
            <Button href="/get-involved#volunteer" variant="primary" size="sm" className="shrink-0">
              Get Involved
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
