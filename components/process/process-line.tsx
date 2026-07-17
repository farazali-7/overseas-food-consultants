"use client";

import { motion, useReducedMotion } from "framer-motion";

import { DURATION, EASE_OUT } from "@/lib/motion";

/**
 * The connecting rule behind the phase cards.
 *
 * The trick: this line spans the full track, and the cards sit on top of it
 * with an opaque background. So the line is only ever visible in the gaps
 * between cards — continuity implied rather than drawn. A full dotted arrow
 * rail would be decoration; this is barely there, which is the point.
 *
 * It draws once, left to right, before the cards arrive. That order matters:
 * the path exists first, then the steps land on it. Motion is arguing that
 * this is a route, not a pile of services.
 *
 * scaleX/scaleY are compositor-only — no layout, no repaint. Animating width
 * or height here would thrash layout on every frame for the same visual.
 */
export function ProcessLine() {
  const reduced = useReducedMotion();

  const draw = {
    hidden: { scaleX: 0, scaleY: 0 },
    visible: {
      scaleX: 1,
      scaleY: 1,
      transition: { duration: DURATION.slow, ease: EASE_OUT },
    },
  };

  // Reduced motion: the line is present but never sweeps.
  const initial = reduced ? "visible" : "hidden";

  return (
    <>
      {/* Mobile: a vertical spine down the centre, showing between stacked cards. */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 lg:hidden"
      >
        <motion.div
          variants={draw}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          className="h-full w-full origin-top bg-rule"
        />
      </div>

      {/* Desktop: horizontal, aligned to the vertical centre of the phase
          numerals (card padding 28px + half the 40px numeral ≈ 48px). */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px lg:block"
      >
        <motion.div
          variants={draw}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          className="h-full w-full origin-left bg-rule"
        />
      </div>
    </>
  );
}
