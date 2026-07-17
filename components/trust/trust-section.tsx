"use client";

import { motion, useReducedMotion } from "framer-motion";

import { itemVariants, riseContainer } from "@/lib/motion";
import { TrustGrid } from "./trust-grid";
import { Container } from "@/components/shared/container";

/**
 * The credibility beat, immediately after the hero.
 *
 * The visitor arrives here with one question — "why should I believe you?" —
 * and this section answers it by demonstrating competence rather than
 * asserting popularity. The heading is set left, not centred: the hero owns
 * the centred axis, and shifting to a left-aligned masthead signals a change
 * from statement to substance without a single decorative divider.
 */
export function TrustSection() {
  const reduced = useReducedMotion();
  const item = itemVariants(reduced);

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative border-t border-rule bg-[color-mix(in_oklch,var(--background),var(--foreground)_1.5%)] py-24 sm:py-32"
    >
      <div aria-hidden className="grain-overlay" />

      <Container className="relative">
        <motion.div
          variants={riseContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="max-w-[760px]"
        >
          <motion.p variants={item} className="eyebrow text-muted-foreground">
            Why OFC
          </motion.p>

          <motion.h2
            id="expertise-heading"
            variants={item}
            className="font-heading mt-5 text-balance text-[clamp(1.875rem,3.6vw,2.75rem)] font-normal leading-[1.12] tracking-[-0.02em]"
          >
            Built on experience.{" "}
            <span className="text-muted-foreground">
              Focused on better food businesses.
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-[620px] text-pretty text-[1.0625rem] leading-[1.65] text-muted-foreground"
          >
            Every engagement is built around practical expertise, measurable
            improvements, and long-term partnerships — not one-size-fits-all
            recommendations.
          </motion.p>
        </motion.div>

        <TrustGrid />
      </Container>
    </section>
  );
}
