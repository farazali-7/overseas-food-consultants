"use client";

import { motion } from "framer-motion";

type Variants = React.ComponentProps<typeof motion.h1>["variants"];

/**
 * Headline and supporting copy.
 *
 * Type sizing is `clamp()` rather than breakpoint jumps so the headline
 * degrades continuously between laptop and mobile — the brief asks for the
 * hierarchy to survive at every width, and stepped sizes always leave one
 * awkward viewport where the line breaks badly.
 *
 * The measure is capped near 700px on the headline and 620px on the body.
 * Past roughly 75 characters the eye loses the line return, and a hero that
 * is hard to read is a hero that gets skipped.
 */
export function HeroContent({ variants }: { variants?: Variants }) {
  return (
    <>
      <motion.h1
        variants={variants}
        className="font-heading mx-auto mt-7 max-w-[16ch] text-balance text-[clamp(2.375rem,6vw,4.25rem)] font-normal leading-[1.04] tracking-[-0.025em]"
      >
        Helping food businesses scale{" "}
        <em className="font-normal italic text-brand">with confidence</em>
      </motion.h1>

      <motion.p
        variants={variants}
        className="mx-auto mt-7 max-w-[620px] text-pretty text-[clamp(1rem,1.4vw,1.1875rem)] leading-[1.65] text-muted-foreground"
      >
        From food safety and HACCP implementation to operational excellence and
        compliance, we help food businesses build stronger systems, meet
        international standards, and grow with confidence.
      </motion.p>
    </>
  );
}
