"use client";

import { motion } from "framer-motion";

import { expertisePills } from "./founder-data";

type Variants = React.ComponentProps<typeof motion.li>["variants"];

/**
 * Practice pills.
 *
 * These stand in for the awards row and the certificate badges the brief
 * explicitly rejected — same job (establish standing), none of the vanity, and
 * nothing that requires a certificate we cannot produce.
 *
 * A <ul>, because it is a list and the DOM should say so. Inert: no links, no
 * tab stops, no hover lift. They are labels, and a label that lifts under the
 * cursor is promising a click it cannot honour.
 */
export function FounderSkills({ variants }: { variants?: Variants }) {
  return (
    <ul className="mt-10 flex flex-wrap gap-2">
      {expertisePills.map((pill) => (
        <motion.li
          key={pill}
          variants={variants}
          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[0.8125rem] text-muted-foreground"
        >
          {pill}
        </motion.li>
      ))}
    </ul>
  );
}
