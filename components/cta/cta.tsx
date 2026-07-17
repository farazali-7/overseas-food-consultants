"use client";

import { motion, useReducedMotion } from "framer-motion";

import { itemVariants, riseContainer } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";
import { CtaButtons } from "./cta-buttons";
import { CtaContent } from "./cta-content";

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

  // Each line kills a specific stated objection: "how long until someone
  // replies?", "what is this going to cost me?", "is this a sales pitch?".
  // Short enough to hold one row on desktop — a wrapped list strands its
  // separator dots at the head of the next line, where they read as stray
  // bullets.
  const reassurances = [
    siteConfig.responseTime,
    "No obligation",
    "A conversation, not a sales pitch",
  ];

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative border-t border-rule py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.div
          variants={riseContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="relative overflow-hidden rounded-[32px] border border-border bg-card px-6 py-20 text-center sm:px-16 sm:py-24"
        >
          {/* The same brand wash that opens the hero, reprised at the close —
              a bookend, and the only colour in the section beyond one word. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(60%_100%_at_50%_0%,color-mix(in_oklch,var(--brand),transparent_94%),transparent_70%)]"
          />
          <div aria-hidden className="grain-overlay" />

          <div className="relative">
            <motion.p variants={item} className="eyebrow text-muted-foreground">
              Start a conversation
            </motion.p>

            <div className="mt-6">
              <CtaContent headingId="cta-heading" variants={item} />
            </div>

            <CtaButtons variants={item} />

            {/* Not a list of features — a list of removed anxieties. */}
            <motion.ul
              variants={item}
              className="mx-auto mt-10 flex max-w-[760px] flex-col items-center justify-center gap-y-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-3"
            >
              {reassurances.map((line, i) => (
                <li key={line} className="flex items-center gap-3">
                  {/* Stacked on mobile, so the separators are not just
                      redundant there — they would dangle. Row only. */}
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="hidden size-[3px] rounded-full bg-rule sm:block"
                    />
                  )}
                  {line}
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
