import {
  Building2,
  Factory,
  Hotel,
  Rocket,
  Store,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

/**
 * Specific segments, not categories.
 *
 * "Restaurants" is a category and it makes a multi-site operator do the
 * translation work themselves. "Restaurant Chains" plus a line about
 * standardising across locations does that work for them, and the visitor
 * thinks "that's literally us" instead of "close enough". Precision is what
 * converts here — a visitor who cannot find themselves leaves.
 *
 * Order is strategic, not alphabetical or arbitrary: per the Creative
 * Director's final note, these run highest-value-prospect first. Position one
 * gets the most attention on the grid, so it goes to the client OFC most wants
 * to win. Re-order only if the target client changes.
 *
 * Icons are architectural (buildings, plant, storefront) rather than culinary.
 * A knife or a chef's hat here would undo the hero's positioning work in a
 * single glance and re-file OFC as a restaurant brand.
 */
export const industries: Industry[] = [
  {
    title: "Restaurant Chains",
    description:
      "Create standardised operations, strengthen food safety practices, and support consistent growth across every location.",
    icon: Building2,
    href: "#contact",
  },
  {
    title: "Food Manufacturing",
    description:
      "Develop structured quality systems, prepare for audits, and improve production reliability.",
    icon: Factory,
    href: "#contact",
  },
  {
    title: "Cloud Kitchens",
    description:
      "Design efficient workflows, improve compliance, and build scalable operating systems for delivery-first businesses.",
    icon: Workflow,
    href: "#contact",
  },
  {
    title: "Hotels & Hospitality",
    description:
      "Strengthen kitchen operations, food safety, and service consistency across hospitality environments.",
    icon: Hotel,
    href: "#contact",
  },
  {
    title: "Retail Food Businesses",
    description:
      "Support compliance, documentation, supplier management, and operational excellence.",
    icon: Store,
    href: "#contact",
  },
  {
    title: "Food Entrepreneurs",
    description:
      "Turn new food business ideas into operationally strong businesses ready for long-term growth.",
    icon: Rocket,
    href: "#contact",
  },
];
