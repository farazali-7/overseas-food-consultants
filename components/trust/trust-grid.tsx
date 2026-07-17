"use client";

import { motion, useReducedMotion } from "framer-motion";

import { itemVariants, riseContainer } from "@/lib/motion";
import { TrustCard } from "./trust-card";
import { expertise } from "./trust-data";

/**
 * 3 × 2 on desktop, 2 × 3 on tablet, single column on mobile.
 *
 * Six across in one row was the alternative and it fails twice: each card
 * would be too narrow to hold a two-line serif title, and a single row invites
 * horizontal scanning past the fold. Two rows of three keeps every card at a
 * readable measure and lets the eye rest at the row break.
 *
 * `once: true` matters — cards that re-animate every time they scroll back
 * into view turn a credibility section into a toy.
 */
export function TrustGrid() {
  const reduced = useReducedMotion();
  const item = itemVariants(reduced);

  return (
    <motion.ul
      variants={riseContainer(0.07)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {expertise.map((entry) => (
        <TrustCard key={entry.index} item={entry} variants={item} />
      ))}
    </motion.ul>
  );
}
