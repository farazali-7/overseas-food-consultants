"use client";

import { motion } from "framer-motion";

type Variants = React.ComponentProps<typeof motion.h2>["variants"];

/**
 * The closing statement.
 *
 * Set below the hero's scale (56px against 68px) on purpose. The hero opens
 * the argument and the CTA closes it — a closer that shouts louder than the
 * opener reads as a sales push, and this page has spent six sections earning
 * the right not to push.
 *
 * "Let's Build a Stronger Food Business" is a statement about the reader's
 * company, not a request for the reader's business. That is the whole
 * difference between this and "Ready to Work Together?".
 */
export function CtaContent({
  headingId,
  variants,
}: {
  headingId: string;
  variants?: Variants;
}) {
  return (
    <>
      <motion.h2
        id={headingId}
        variants={variants}
        className="font-heading mx-auto max-w-[18ch] text-balance text-[clamp(2.125rem,4.8vw,3.5rem)] font-normal leading-[1.06] tracking-[-0.025em]"
      >
        Let&rsquo;s build a{" "}
        <em className="font-normal italic text-brand">stronger</em> food
        business
      </motion.h2>

      <motion.p
        variants={variants}
        className="mx-auto mt-7 max-w-[560px] text-pretty text-[clamp(1rem,1.4vw,1.125rem)] leading-[1.65] text-muted-foreground"
      >
        Whether you&rsquo;re launching a new venture, improving existing
        operations, or preparing for future growth, we&rsquo;d be glad to
        explore how we can help.
      </motion.p>
    </>
  );
}
