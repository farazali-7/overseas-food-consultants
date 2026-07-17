"use client";

import { motion } from "framer-motion";

import { founderQuote } from "./founder-data";

type Variants = React.ComponentProps<typeof motion.blockquote>["variants"];

/**
 * The pull quote.
 *
 * A real <blockquote>, not a styled <p> — assistive tech should announce this
 * as quoted speech, because "someone said this" is the entire reason it earns
 * space on the page.
 *
 * Set in the display serif at 24px italic and hung off a left rule rather than
 * wrapped in decorative quotation glyphs. Giant curly quote marks are the
 * default move here and they cheapen it instantly: they signal "inspirational
 * quote card". A rule and a change of voice signal editorial.
 */
export function FounderQuote({ variants }: { variants?: Variants }) {
  return (
    <motion.blockquote
      variants={variants}
      // Wider measure than the body copy: the quote is set larger, so the same
      // line length in characters needs more room. Capped all the same.
      className="mt-10 max-w-[38rem] border-l border-brand/40 pl-6"
    >
      <p className="font-heading text-pretty text-[clamp(1.25rem,1.8vw,1.5rem)] italic leading-[1.45] tracking-[-0.01em]">
        {founderQuote}
      </p>
    </motion.blockquote>
  );
}
