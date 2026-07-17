"use client";

import { motion, useReducedMotion } from "framer-motion";

import { itemVariants, riseContainer } from "@/lib/motion";

/**
 * The motion vocabulary. Two components, one language.
 *
 * Before this, every section repeated the same six lines: call
 * `useReducedMotion`, derive variants, build a container, thread `variants`
 * down through each child as a prop. Eight copies of an orchestration
 * decision is eight chances to get the reduced-motion branch subtly wrong —
 * and the one that gets it wrong is invisible until it reaches someone who
 * actually needs it.
 *
 * `<Stagger>` owns the reduced-motion decision for its whole subtree, so no
 * caller can forget it. `<FadeUp>` inherits `hidden`/`visible` through
 * framer-motion's context, which is why children need no `initial`/`animate`
 * of their own — and must not declare them, or they detach from the sequence.
 *
 * Both are generic over the rendered tag rather than taking a union of every
 * element's props: a union would intersect `div`, `ul` and `li` handler types,
 * which are mutually incompatible and collapse to `never` at the call site.
 * The generic keeps each caller checked against the tag it actually renders.
 *
 * Usage:
 *   <Stagger as="ul">        // orchestrates, reveals on scroll, once
 *     <FadeUp as="li">…</FadeUp>
 *   </Stagger>
 */

type StaggerTag = "div" | "ul" | "ol" | "section";
type ItemTag = "div" | "p" | "h2" | "h3" | "li" | "span" | "blockquote";

type StaggerOwnProps = {
  /** Seconds between children. ~80ms reads as a sequence, not a performance. */
  stagger?: number;
  /** Seconds before the first child. Use to wait out a preceding animation. */
  delayChildren?: number;
  /** Reveal on scroll (default) vs immediately on mount, for above-fold use. */
  trigger?: "inView" | "mount";
};

export function Stagger<T extends StaggerTag = "div">({
  as,
  stagger = 0.08,
  delayChildren = 0,
  trigger = "inView",
  children,
  ...props
}: { as?: T } & StaggerOwnProps &
  Omit<React.ComponentProps<(typeof motion)[T]>, "as">) {
  const reduced = useReducedMotion();
  const Component = motion[as ?? "div"] as React.ElementType;

  // Reduced motion collapses the stagger to zero rather than disabling the
  // reveal: content still fades in, but nothing is sequenced and nothing
  // travels.
  const variants = riseContainer(
    reduced ? 0 : stagger,
    reduced ? 0 : delayChildren,
  );

  const animation =
    trigger === "mount"
      ? { animate: "visible" }
      : {
          whileInView: "visible",
          // Fire slightly before the element is fully on screen, so the reveal
          // is already resolving by the time it is centred and readable.
          viewport: { once: true, margin: "0px 0px -80px 0px" },
        };

  return (
    <Component initial="hidden" variants={variants} {...animation} {...props}>
      {children}
    </Component>
  );
}

/**
 * A single revealed item. Must live inside a <Stagger>: it has no `initial`
 * or `animate` of its own by design, and takes both from context.
 */
export function FadeUp<T extends ItemTag = "div">({
  as,
  children,
  ...props
}: { as?: T } & Omit<React.ComponentProps<(typeof motion)[T]>, "as">) {
  const reduced = useReducedMotion();
  const Component = motion[as ?? "div"] as React.ElementType;

  return (
    <Component variants={itemVariants(reduced)} {...props}>
      {children}
    </Component>
  );
}
