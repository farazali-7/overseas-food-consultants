import {
  Blocks,
  ClipboardList,
  FileCheck2,
  LineChart,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  /**
   * The business gain, per the Creative Director's final refinement. This
   * replaces a generic "Explore →": an arrow says the card is clickable, but
   * only this line says what the reader walks away with. It shifts the card
   * from "what we do" to "what your business gets".
   */
  outcome: string;
  icon: LucideIcon;
  href: string;
};

/**
 * Problems, not service names.
 *
 * Nobody wakes up wanting HACCP. They wake up having failed an inspection, or
 * needing a second kitchen open by Q3. Every title below is the sentence the
 * client would actually say out loud, which is what makes the section produce
 * recognition ("that's exactly us") rather than comprehension ("I see, they
 * offer six services").
 *
 * Copy rule when extending: no entry may begin with "We provide". If it opens
 * with the consultant instead of the client, rewrite it.
 */
export const services: Service[] = [
  {
    title: "Launch New Food Businesses",
    description:
      "Whether you're opening your first restaurant or expanding into new locations, we help build the operational foundations for long-term success.",
    outcome: "Support business expansion",
    icon: Blocks,
    href: "#contact",
  },
  {
    title: "Build Safer Operations",
    description:
      "Implement practical food safety systems that reduce risk, improve consistency, and support regulatory compliance.",
    outcome: "Reduce compliance risk",
    icon: Shield,
    href: "#contact",
  },
  {
    title: "Strengthen Quality Systems",
    description:
      "Develop structured quality assurance processes that improve reliability across every stage of operations.",
    outcome: "Improve operational consistency",
    icon: ClipboardList,
    href: "#contact",
  },
  {
    title: "Prepare for Audits",
    description:
      "Build confidence before inspections with organised documentation, training, and compliance support.",
    outcome: "Prepare for certification",
    icon: FileCheck2,
    href: "#contact",
  },
  {
    title: "Improve Operational Performance",
    description:
      "Identify inefficiencies, optimise workflows, and create scalable operational systems.",
    outcome: "Increase operational efficiency",
    icon: LineChart,
    href: "#contact",
  },
  {
    title: "Train & Empower Teams",
    description:
      "Equip your staff with the knowledge and processes needed to maintain high standards every day.",
    outcome: "Raise team capability",
    icon: Users,
    href: "#contact",
  },
];
