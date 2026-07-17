"use client";

import { motion, useReducedMotion } from "framer-motion";

import { itemVariants, riseContainer } from "@/lib/motion";
import { CtaButtons } from "./cta-buttons";
import { CtaContent } from "./cta-content";
import { Container } from "@/components/shared/container";

/**
 * The closing beat.
 *
 * By now the visitor likes the company. What remains is not doubt about OFC
 * but friction in themselves: is this worth my time, will it be a sales pitch,
 * will they even understand my business? This section exists to remove that
 * friction, not to ask for the business.
 *
 * Composition: a white card on paper, returning to the hero's centred axis.
 * The page opened centred and closes centred — the argument comes back to
 * where it started, which is what makes it feel resolved rather than merely
 * ended. No dark slab, no gradient: the calm established over six sections is
 * the asset, and a shouting CTA would spend it in the last 200 pixels.
 *
 * The reassurance line under the buttons is the highest-leverage copy here.
 * Every objection it answers ("will this cost me?", "how long until someone
 * replies?", "is this a pitch?") is answered before it can be raised.
 */
export function Cta() {
  const reduced = useReducedMotion();
  const item = itemVariants(reduced);

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative border-t border-rule py-28 sm:py-40"
    >
      <Container className="relative">
        <motion.div
          variants={riseContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="text-center"
        >
          <div className="relative">
            <motion.p variants={item} className="eyebrow text-muted-foreground">
              Start a conversation
            </motion.p>

            <div className="mt-6">
              <CtaContent headingId="cta-heading" variants={item} />
            </div>

            <CtaButtons variants={item} />

            {/* One sentence, not a list. It answers the only objection that
                actually stops the click: "is this a sales call?" */}
            <motion.p
              variants={item}
              className="mx-auto mt-10 max-w-[520px] text-sm leading-[1.6] text-muted-foreground"
            >
              Initial conversations are focused on understanding your business
              &mdash; not selling services.
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
