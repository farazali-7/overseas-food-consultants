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
      className="surface surface-interactive group relative flex flex-col p-7"
    >
      {/*
        Decorative: the <ol> already conveys sequence to assistive tech, so
        announcing "01" would just make a screen reader read the order twice.

        On hover the numeral takes the brand colour. That is the whole hover —
        the card holds still. A phase number lighting up is a quieter and far
        more editorial signal than a card jumping 2px, and it points at the
        thing the reader is actually pointing at.
      */}
      <span
        aria-hidden
        className="font-mono text-[2.5rem] leading-none tracking-tight text-muted-foreground/30 transition-colors duration-[var(--dur-medium)] ease-[var(--ease-out)] group-hover:text-brand motion-reduce:transition-none"
      >
        {phase.number}
      </span>

      {/* Letter-spacing opens by half a pixel. Almost subliminal — it reads as
          the word settling rather than as an animation. */}
      <h3 className="font-heading mt-6 text-[1.375rem] font-medium leading-snug tracking-[-0.01em] transition-[letter-spacing] duration-[var(--dur-medium)] ease-[var(--ease-out)] group-hover:tracking-[0.005em] motion-reduce:transition-none">
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
