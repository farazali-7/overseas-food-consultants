import type { Transition, Variants } from "framer-motion";

/**
 * Motion tokens for the marketing surface.
 *
 * The brief calls for animation that reinforces hierarchy rather than
 * entertains, so everything here is a single deceleration curve at a
 * restrained duration. Nothing overshoots, nothing bounces: a spring would
 * read as playful, and this brand is selling composure.
 */

/** Decelerate-out. Fast start, long settle — motion that arrives, not bounces. */
export const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.3,
  base: 0.5,
  slow: 0.8,
  draw: 1.6,
} as const;

/** Distance elements travel on entrance. Small enough to feel like settling. */
const RISE = 12;

/**
 * Parent orchestrator. Children inherit `initial`/`animate` from it, so a
 * section only declares its stagger once and every child follows.
 */
export function riseContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export const riseItem: Variants = {
  hidden: { opacity: 0, y: RISE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

/**
 * Reduced-motion swap. We keep the opacity fade (it carries the same
 * hierarchy information) and drop only the transform, which is what actually
 * triggers vestibular discomfort. Returning `y: 0` in both states means the
 * element never occupies a shifted position, so there is no CLS either.
 */
export const fadeItem: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.fast, ease: EASE_OUT },
  },
};

export function itemVariants(reduced: boolean | null): Variants {
  return reduced ? fadeItem : riseItem;
}
