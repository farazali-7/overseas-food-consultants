"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { Expertise } from "./trust-data";

type Variants = React.ComponentProps<typeof motion.li>["variants"];

/**
 * One competence.
 *
 * Inert by design — no link, no tab stop. There is nowhere to go, so these are
 * plain `li`s. Making a non-interactive card focusable is a common
 * accessibility own-goal: six empty tab stops, and a screen reader told
 * something is actionable when it isn't.
 *
 * HIERARCHY: the featured card spans the full row and lays out horizontally,
 * so the extra width buys a real editorial composition rather than one short
 * line stretched across three columns. It carries the strongest trust signal
 * (international experience); the remaining five support it. Six equal cards
 * gave the eye nowhere to land.
 *
 * Hover is border + 3° icon + a 2px title nudge. No lift: this section's job
 * is to look like it is not trying, and a card that leaps at the cursor is
 * trying.
 */
export function TrustCard({
  item,
  featured = false,
  variants,
}: {
  item: Expertise;
  featured?: boolean;
  variants?: Variants;
}) {
  const Icon = item.icon;

  return (
    <motion.li
      variants={variants}
      className={cn(
        "surface surface-interactive group relative p-8",
        featured
          ? "flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-start sm:gap-8 lg:col-span-3"
          : "flex flex-col",
      )}
    >
      <div
        className={cn(
          "flex items-start justify-between",
          featured ? "sm:block" : "mb-7",
        )}
      >
        <Icon
          aria-hidden
          strokeWidth={1.5}
          className={cn(
            "text-foreground/70 transition-transform duration-[var(--dur-medium)] ease-[var(--ease-out)] group-hover:rotate-3 motion-reduce:transition-none",
            featured ? "size-9" : "size-7",
          )}
        />
        {!featured && (
          <span
            aria-hidden
            className="font-mono text-[0.6875rem] tracking-[0.1em] text-muted-foreground/45"
          >
            {item.index}
          </span>
        )}
      </div>

      <div className={cn(featured && "flex-1")}>
        <h3
          className={cn(
            "font-heading font-medium leading-snug tracking-[-0.01em] transition-transform duration-[var(--dur-medium)] ease-[var(--ease-out)] group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0",
            featured ? "text-[1.875rem]" : "text-[1.375rem]",
          )}
        >
          {item.title}
        </h3>

        <p
          className={cn(
            "mt-3 leading-[1.6] text-muted-foreground",
            featured ? "max-w-[52ch] text-base" : "text-[0.9375rem]",
          )}
        >
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}
