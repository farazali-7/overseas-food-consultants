"use client";

import { motion, useReducedMotion } from "framer-motion";

import { itemVariants, riseContainer } from "@/lib/motion";
import { ProcessCard } from "./process-card";
import { ProcessLine } from "./process-line";
import { phases } from "./process-data";
import { Container } from "@/components/shared/container";

/**
 * "A Structured Partnership from Day One" — the anxiety beat.
 *
 * This is the section that quietly closes deals, and the one most consultancy
 * sites waste on Consultation → Planning → Execution → Delivery. By now the
 * visitor believes OFC is credible, relevant, and experienced. The remaining
 * blocker is not doubt about OFC — it is uncertainty about themselves: will
 * this be complicated, will they understand us, will they vanish after the
 * audit? Uncertainty is what stops the click.
 *
 * Semantics: an <ol>, so the sequence is conveyed structurally. A screen
 * reader gets "list of 5 items, item 1…" for free, which is exactly the
 * information the numerals carry visually — hence the numerals are aria-hidden
 * rather than read out twice.
 *
 * Layout: five across on desktop, one column below. The five-column row is the
 * argument — a journey read left to right. It collapses straight to a single
 * column at `lg` with no intermediate two- or three-up, because a 3+2 wrap
 * would break the sequence into two ragged rows and destroy the very
 * continuity the line exists to establish.
 */
export function Process() {
  const reduced = useReducedMotion();
  const item = itemVariants(reduced);

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative border-t border-rule py-24 sm:py-[8.75rem]"
    >
      <Container className="relative">
        <motion.div
          variants={riseContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="max-w-[760px]"
        >
          <motion.p variants={item} className="eyebrow text-muted-foreground">
            How we work
          </motion.p>

          <motion.h2
            id="process-heading"
            variants={item}
            className="font-heading mt-5 text-balance text-[clamp(1.875rem,3.6vw,2.75rem)] font-normal leading-[1.12] tracking-[-0.02em]"
          >
            A structured partnership from{" "}
            <em className="italic text-brand">day one</em>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-[620px] text-pretty text-[1.0625rem] leading-[1.65] text-muted-foreground"
          >
            Every engagement follows a practical framework designed to
            understand your business, identify opportunities, implement
            meaningful improvements, and support long-term success.
          </motion.p>

          <motion.div variants={item} aria-hidden className="divider-rule" />
        </motion.div>

        <div className="relative mt-16">
          <ProcessLine />

          <motion.ol
            // delayChildren waits out the line sweep: the route is drawn, then
            // the stops land on it. 0.12s steps read as a sequence of arrivals
            // rather than a single block fading up.
            variants={riseContainer(0.12, reduced ? 0 : 0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="relative grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-4"
          >
            {phases.map((phase) => (
              <ProcessCard key={phase.number} phase={phase} variants={item} />
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}
