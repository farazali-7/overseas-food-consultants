"use client";

import { motion } from "framer-motion";

import type { Expertise } from "./trust-data";

type Variants = React.ComponentProps<typeof motion.li>["variants"];

/**
 * One competence.
 *
 * These cards are not links and not buttons — there is nowhere to go yet, so
 * they are `li` elements and stay out of the tab order. Making a non-
 * interactive card focusable is a common accessibility own-goal: it adds six
 * empty stops for keyboard users and tells a screen reader something is
 * actionable when it isn't.
 *
 * Hover therefore expresses quality, not affordance: the border firms up, the
 * card lifts 3px, the icon warms to brand. Nothing implies a click.
 */
export function TrustCard({
  item,
  variants,
}: {
  item: Expertise;
  variants?: Variants;
}) {
  const Icon = item.icon;

  return (
    <motion.li
      variants={variants}
      className="surface surface-interactive group relative flex flex-col p-8"
    >
      <div className="mb-7 flex items-start justify-between">
        <Icon
          aria-hidden
          strokeWidth={1.5}
          className="size-6 text-foreground/70 transition-colors duration-300 group-hover:text-brand motion-reduce:transition-none"
        />
        <span
          aria-hidden
          className="font-mono text-[0.6875rem] tracking-[0.1em] text-muted-foreground/45"
        >
          {item.index}
        </span>
      </div>

      <h3 className="font-heading text-[1.375rem] font-medium leading-snug tracking-[-0.01em]">
        {item.title}
      </h3>

      <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">
        {item.description}
      </p>
    </motion.li>
  );
}
