"use client";

import { motion, useReducedMotion } from "framer-motion";

import { itemVariants, riseContainer } from "@/lib/motion";
import { EditorialCard } from "@/components/shared/editorial-card";
import { industries } from "./industry-data";
import { Container } from "@/components/shared/container";

/**
 * "Built for Every Stage of the Food Business" — the belonging beat.
 *
 * By now the visitor accepts that OFC is experienced and solves relevant
 * problems. The last doubt is the most specific: "have they worked with
 * companies like mine?" This section exists to let them find themselves, and
 * nothing else.
 *
 * Composition: the heading returns to the centred axis established by the
 * hero, which closes the loop after the Services split and signals the
 * argument is resolving rather than continuing. The tinted ground and white
 * cards mirror the Trust section, but these cards navigate and carry arrows,
 * so the two never read as the same module repeated.
 */
export function IndustriesSection() {
  const reduced = useReducedMotion();
  const item = itemVariants(reduced);

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative border-t border-rule bg-[color-mix(in_oklch,var(--background),var(--foreground)_1.5%)] py-24 sm:py-[6.875rem]"
    >
      <div aria-hidden className="grain-overlay" />

      <Container className="relative">
        <motion.div
          variants={riseContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="mx-auto max-w-[720px] text-center"
        >
          <motion.p variants={item} className="eyebrow text-muted-foreground">
            Industries we serve
          </motion.p>

          <motion.h2
            id="industries-heading"
            variants={item}
            className="font-heading mt-5 text-balance text-[clamp(1.875rem,3.6vw,2.75rem)] font-normal leading-[1.12] tracking-[-0.02em]"
          >
            Built for every stage of the food business
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-[620px] text-pretty text-[1.0625rem] leading-[1.65] text-muted-foreground"
          >
            Whether you&rsquo;re launching your first concept, managing multiple
            locations, or scaling manufacturing operations, our consulting
            adapts to the way your business works.
          </motion.p>

          <motion.div variants={item} aria-hidden className="divider-rule mx-auto" />
        </motion.div>

        <motion.ul
          variants={riseContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          // Gap widened 24px → 32px. The cards were correct and still felt
          // cramped; space is the cheapest thing on the page that reads as
          // expensive.
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry, i) => (
            // Restaurant Chains is the flagship — already ordered first as the
            // highest-value prospect, now weighted to match.
            <EditorialCard
              key={industry.title}
              title={industry.title}
              description={industry.description}
              href={industry.href}
              icon={industry.icon}
              featured={i === 0}
              variants={item}
            />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
