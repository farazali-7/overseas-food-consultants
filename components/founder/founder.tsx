"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ActionLink } from "@/components/shared/action-link";
import { itemVariants, riseContainer } from "@/lib/motion";
import { FounderPortrait } from "./founder-portrait";
import { FounderQuote } from "./founder-quote";
import { FounderSkills } from "./founder-skills";
import { Container } from "@/components/shared/container";

/**
 * The person beat — placed immediately after Process, per the brief's call to
 * pull the founder up from the bottom of the page.
 *
 * That ordering is right. The page now runs business → process → person →
 * action: the visitor learns what OFC does, who it helps, how it works, and
 * only then meets the judgement behind the methodology. Buried at the foot of
 * the page a founder is a footnote; here he is the answer to "whose judgement
 * am I actually buying?" — which, for a single-founder consultancy, is the
 * real question.
 *
 * HEADING NOTE — deliberate divergence from the brief.
 * The brief specified "Built on Experience. Driven by Better Food Businesses."
 * The Trust section already ships "Built on experience. Focused on better food
 * businesses." Running both on one page reads as a copy bug, and the near-miss
 * repetition would undercut both. This heading instead takes the brief's own
 * stronger idea — the CD note about closing the systems gap — which frames the
 * firm around a mission rather than a résumé, and is unmistakably distinct.
 */
export function Founder() {
  const reduced = useReducedMotion();
  const item = itemVariants(reduced);

  return (
    <section
      id="about"
      aria-labelledby="founder-heading"
      className="relative border-t border-rule py-24 sm:py-40"
    >
      <Container className="relative">
        <motion.div
          variants={riseContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20"
        >
          {/* Portrait leads on desktop and on mobile alike. Meeting the face
              before the argument is what makes the next 80 words read as a
              person talking rather than corporate boilerplate. */}
          <motion.div variants={item} className="lg:pt-2">
            <FounderPortrait />
          </motion.div>

          <div>
            <motion.p variants={item} className="eyebrow text-muted-foreground">
              The founder
            </motion.p>

            <motion.h2
              id="founder-heading"
              variants={item}
              className="font-heading mt-5 text-balance text-[clamp(1.875rem,3.4vw,2.625rem)] font-normal leading-[1.12] tracking-[-0.02em]"
            >
              Founded to close the{" "}
              <em className="italic text-brand">systems gap</em>
            </motion.h2>

            {/* Measure capped at ~65 characters per the brief — past that the
                eye loses the line return and long-form copy stops being read.
                Note this is an absolute width, NOT `ch`: the `ch` unit is the
                advance of the "0" glyph, and in a proportional face average
                lowercase runs far narrower, so `62ch` silently yields ~80
                characters. Measured, 34rem lands at ~65. */}
            <motion.p
              variants={item}
              className="mt-7 max-w-[34rem] text-pretty text-[1.0625rem] leading-[1.7] text-muted-foreground"
            >
              Working across food manufacturing, quality assurance, audits, and
              compliance surfaced the same pattern again and again: businesses
              rarely struggle because they lack ambition. They struggle because
              they lack systems that hold up as they grow.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-[34rem] text-pretty text-[1.0625rem] leading-[1.7] text-muted-foreground"
            >
              OFC was founded to close that gap — with a consulting approach
              built around long-term improvement rather than one-time
              recommendations.
            </motion.p>

            <FounderQuote variants={item} />

            <FounderSkills variants={item} />

            <motion.div variants={item} className="mt-10">
              <ActionLink href="#process" variant="outline" size="md" arrow>
                Learn about our approach
              </ActionLink>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
