"use client";

import { motion } from "framer-motion";

import type { Phase } from "./process-data";

type Variants = React.ComponentProps<typeof motion.li>["variants"];

/**
 * One phase.
 *
 * `bg-card` is load-bearing, not cosmetic: the card must be opaque so it
 * occludes the connecting line running underneath, leaving the line visible
 * only in the gaps. Make this transparent and the whole line trick collapses.
 *
 * The card is inert — no link, no tab stop. The reader is being reassured
 * here, not asked to navigate. Hover is therefore the lightest touch on the
 * page: the border firms, the card lifts 2px, and the outcome warms to brand.
 * Nothing invites a click that leads nowhere.
 */
export function ProcessCard({
  phase,
  variants,
}: {
  phase: Phase;
  variants?: Variants;
}) {
  return (
    <motion.li
      variants={variants}
      className="group relative flex flex-col rounded-[20px] border border-border bg-card p-7 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-[2px] hover:border-[color-mix(in_oklch,var(--border),var(--foreground)_28%)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_28px_-12px_rgba(0,0,0,0.10)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {/*
        Decorative: the <ol> already conveys sequence to assistive tech, so
        announcing "01" would just make a screen reader read the order twice.
      */}
      <span
        aria-hidden
        className="font-mono text-[2.5rem] leading-none tracking-tight text-muted-foreground/30"
      >
        {phase.number}
      </span>

      <h3 className="font-heading mt-6 text-[1.375rem] font-medium leading-snug tracking-[-0.01em]">
        {phase.title}
      </h3>

      <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">
        {phase.description}
      </p>

      {/* On the desktop row the cards stretch to equal height, so `lg:mt-auto`
          pins every outcome to the card floor and the five badges align across
          the row despite uneven descriptions. Stacked on mobile each card is
          its own row and nothing stretches, so `mt-auto` would collapse to
          zero — hence the explicit `mt-7` below it. */}
      <div className="mt-7 border-t border-rule/70 pt-5 lg:mt-auto">
        <span className="eyebrow text-muted-foreground/60">Outcome</span>
        <p className="mt-1.5 text-sm font-medium transition-colors duration-300 group-hover:text-brand motion-reduce:transition-none">
          {phase.outcome}
        </p>
      </div>
    </motion.li>
  );
}
