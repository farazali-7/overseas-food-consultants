import {
  ClipboardCheck,
  Globe,
  GraduationCap,
  Handshake,
  Settings2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Expertise = {
  /** Editorial index. Rendered in mono — a documentation cue, not decoration. */
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

/**
 * Six competences, zero claims.
 *
 * Every entry describes what OFC does, never how many times it has done it.
 * That is not a stylistic preference — unverifiable counts ("500+ clients",
 * "50+ countries") and borrowed logos are the fastest way to lose a buyer who
 * evaluates evidence for a living. Expertise can be stated honestly on day
 * one; popularity cannot.
 *
 * Copy rule for anyone extending this list: if a sentence would need a
 * client's permission or a number we cannot produce on request, it does not
 * belong here.
 */
export const expertise: Expertise[] = [
  {
    index: "01",
    title: "International Industry Experience",
    description:
      "Working with food businesses while aligning operations with globally recognised food safety practices.",
    icon: Globe,
  },
  {
    index: "02",
    title: "Food Safety & Compliance",
    description:
      "Helping businesses meet regulatory requirements through structured systems and proven processes.",
    icon: ShieldCheck,
  },
  {
    index: "03",
    title: "HACCP & Quality Systems",
    description:
      "Building practical quality frameworks that reduce risk and improve consistency.",
    icon: ClipboardCheck,
  },
  {
    index: "04",
    title: "Operational Excellence",
    description:
      "Improving workflows, efficiency, and day-to-day operations across food businesses.",
    icon: Settings2,
  },
  {
    index: "05",
    title: "Training & Capability Development",
    description:
      "Helping teams adopt better practices through structured learning and implementation.",
    icon: GraduationCap,
  },
  {
    index: "06",
    title: "Long-Term Consulting Partnership",
    description:
      "Supporting businesses beyond audits with continuous improvement and strategic guidance.",
    icon: Handshake,
  },
];
