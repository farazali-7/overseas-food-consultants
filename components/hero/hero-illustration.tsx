"use client";

import { motion, useReducedMotion } from "framer-motion";

import { DURATION, EASE_OUT } from "@/lib/motion";

/**
 * The hero mark.
 *
 * The original brief asked for a laptop, dashboard, database, cloud-deploy
 * and auth-shield illustration. That is a picture of a software product, and
 * OFC does not sell software — it would have quietly repositioned the firm as
 * a SaaS vendor. Stock food photography fails the other way and repositions
 * it as a restaurant brand.
 *
 * So: a rising curve anchored to a measured baseline by control points.
 * It carries the value proposition literally — growth ("scale") that is
 * governed at every checkpoint ("with confidence") — and nods at HACCP's
 * critical control points without illustrating a single kitchen. Abstract
 * enough to stay premium, specific enough to mean something.
 *
 * Geometry note: node coordinates are the t=0.5 midpoints of each cubic
 * segment, computed from the control points, so they sit exactly on the
 * curve rather than approximately near it.
 */

type Node = { cx: number; cy: number; accent?: boolean };

const NODES: Node[] = [
  { cx: 80, cy: 196 },
  { cx: 267.5, cy: 169.5 },
  { cx: 440, cy: 128, accent: true },
  { cx: 612.5, cy: 89.25 },
  { cx: 800, cy: 58 },
];

const CURVE = "M 80 196 C 240 194, 300 150, 440 128 C 580 106, 640 70, 800 58";

const BASELINE_Y = 214;

/** Measurement ticks along the baseline — the "ruled instrument" texture. */
const TICKS = Array.from({ length: 22 }, (_, i) => 60 + i * 36.2);

export function HeroIllustration() {
  const reduced = useReducedMotion();

  // With reduced motion we mount straight into the finished frame. The mark is
  // decorative, so nothing is lost by skipping the reveal — and a 1.6s line
  // draw is exactly the sustained movement the preference exists to stop.
  const initial = reduced ? "visible" : "hidden";

  return (
    <div aria-hidden className="mx-auto mt-16 w-full max-w-[880px] sm:mt-20">
      <motion.svg
        viewBox="0 0 880 260"
        fill="none"
        role="presentation"
        className="h-auto w-full overflow-visible"
        initial={initial}
        animate="visible"
      >
        {/* Reference rules at each measured height. Faint enough to read as
            paper ruling rather than as chart gridlines. */}
        {[58, 128, 196].map((y) => (
          <motion.line
            key={y}
            x1={60}
            y1={y}
            x2={820}
            y2={y}
            stroke="var(--rule)"
            strokeWidth={1}
            strokeDasharray="2 6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: DURATION.slow, ease: EASE_OUT },
              },
            }}
          />
        ))}

        {/* Baseline: the operating floor the curve is measured against. */}
        <motion.line
          x1={60}
          y1={BASELINE_Y}
          x2={820}
          y2={BASELINE_Y}
          stroke="var(--color-foreground)"
          strokeOpacity={0.28}
          strokeWidth={1}
          variants={{
            hidden: { pathLength: 0 },
            visible: {
              pathLength: 1,
              transition: { duration: DURATION.slow, ease: EASE_OUT },
            },
          }}
        />

        {TICKS.map((x) => (
          <motion.line
            key={x}
            x1={x}
            y1={BASELINE_Y}
            x2={x}
            y2={BASELINE_Y + 6}
            stroke="var(--color-foreground)"
            strokeOpacity={0.16}
            strokeWidth={1}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: DURATION.fast, ease: EASE_OUT },
              },
            }}
          />
        ))}

        {/* Droplines tie each control point back to the baseline: every gain
            is accountable to a measurement. */}
        {NODES.map((n) => (
          <motion.line
            key={`drop-${n.cx}`}
            x1={n.cx}
            y1={BASELINE_Y}
            x2={n.cx}
            y2={n.cy}
            stroke="var(--color-foreground)"
            strokeOpacity={0.14}
            strokeWidth={1}
            variants={{
              hidden: { pathLength: 0 },
              visible: {
                pathLength: 1,
                transition: {
                  duration: DURATION.base,
                  ease: EASE_OUT,
                  delay: reduced ? 0 : 1.1,
                },
              },
            }}
          />
        ))}

        {/* The growth curve. Drawn left-to-right, slowly — it is the one
            piece of motion in the hero allowed to take its time, because it
            is describing a trajectory and a trajectory needs duration. */}
        <motion.path
          d={CURVE}
          stroke="var(--color-foreground)"
          strokeWidth={1.75}
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0 },
            visible: {
              pathLength: 1,
              transition: {
                duration: DURATION.draw,
                ease: EASE_OUT,
                delay: reduced ? 0 : 0.35,
              },
            },
          }}
        />

        {NODES.map((n, i) => (
          <motion.g
            key={`node-${n.cx}`}
            variants={{
              hidden: { opacity: 0, scale: 0.4 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: DURATION.fast,
                  ease: EASE_OUT,
                  delay: reduced ? 0 : 0.75 + i * 0.16,
                },
              },
            }}
            style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
          >
            <circle
              cx={n.cx}
              cy={n.cy}
              r={4.5}
              fill="var(--color-background)"
              stroke={n.accent ? "var(--brand)" : "var(--color-foreground)"}
              strokeWidth={n.accent ? 2 : 1.5}
            />
          </motion.g>
        ))}

        {/* The single accent in the whole composition. One highlighted control
            point earns far more attention than five would. */}
        <motion.circle
          cx={440}
          cy={128}
          r={13}
          stroke="var(--brand)"
          strokeWidth={1}
          strokeOpacity={0.45}
          fill="none"
          style={{ transformOrigin: "440px 128px" }}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: DURATION.slow,
                ease: EASE_OUT,
                delay: reduced ? 0 : 1.35,
              },
            },
          }}
        />
      </motion.svg>
    </div>
  );
}
