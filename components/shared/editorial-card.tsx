"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type Variants = React.ComponentProps<typeof motion.li>["variants"];

/**
 * The clickable editorial card, shared by Services and Industries.
 *
 * The briefs specced these as separate `ServiceCard` and `IndustryCard`
 * components, but they resolved to the same object. Shipping that twice would
 * guarantee the two drift apart the first time someone tunes the hover — so it
 * lives once here, and each section supplies data.
 *
 * HIERARCHY (`featured`): one card per grid is promoted — wider, larger title,
 * larger icon. Six cards of identical weight give the eye no entry point, so it
 * scans and leaves. Promoting one answers "where do I start?" before the reader
 * has to ask. It is the difference between a section that is beautiful and one
 * that is designed.
 *
 * Accessibility: the link wraps only the title and stretches over the card via
 * `after:inset-0`. Making the whole card the link would swallow the description
 * into the accessible name, so a screen reader would announce forty words where
 * it should announce four. Here the link's name is exactly the title, the card
 * is still fully clickable, and the focus ring is hoisted to the card with
 * `has-[a:focus-visible]`.
 */
export function EditorialCard({
  title,
  description,
  footer,
  href,
  icon: Icon,
  featured = false,
  variants,
}: {
  title: string;
  description: string;
  /** Optional outcome label — the business gain, not the activity. */
  footer?: string;
  href: string;
  icon: LucideIcon;
  /** Promotes this card to the grid's entry point. One per grid. */
  featured?: boolean;
  variants?: Variants;
}) {
  return (
    <motion.li
      variants={variants}
      className={cn(
        "surface surface-interactive group relative flex flex-col p-8 has-[a:focus-visible]:ring-3 has-[a:focus-visible]:ring-ring/50",
        featured && "sm:col-span-2",
      )}
    >
      <Icon
        aria-hidden
        strokeWidth={1.5}
        className={cn(
          // +15%: the icons were reading as afterthoughts at 24px.
          "mb-7 size-7 text-foreground/70 transition-transform duration-[var(--dur-medium)] ease-[var(--ease-out)] motion-reduce:transition-none",
          // 3 degrees. Enough to register as alive, far too little to read as
          // a spin. Anything more would be a toy.
          "group-hover:rotate-3",
          featured && "size-8",
        )}
      />

      <h3
        className={cn(
          "font-heading font-medium leading-snug tracking-[-0.01em] transition-transform duration-[var(--dur-medium)] ease-[var(--ease-out)] group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0",
          featured ? "text-[1.75rem]" : "text-[1.375rem]",
        )}
      >
        <Link
          href={href}
          className="outline-none after:absolute after:inset-0 after:rounded-card after:content-['']"
        >
          {title}
        </Link>
      </h3>

      {/* ~46 characters — the brief's readability ceiling. */}
      <p
        className={cn(
          "mt-3 max-w-[46ch] leading-[1.6] text-muted-foreground",
          featured ? "text-base" : "text-[0.9375rem]",
        )}
      >
        {description}
      </p>

      <div className="relative mt-7 pt-5">
        {/* The divider that grows. The static rule is the resting state; the
            brand rule scales over it from the left on hover. scaleX is
            compositor-only, so this costs nothing per frame — animating width
            would relayout the card on every tick. */}
        <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-rule/70" />
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-[var(--dur-medium)] ease-[var(--ease-out)] group-hover:scale-x-100 motion-reduce:transition-none"
        />

        <div className="flex items-center justify-between gap-4">
          {footer ? (
            // The outcome, set as an editorial category rather than body text:
            // tiny, uppercase, wide-tracked, in brand. It reads as a magazine
            // rubric — which is what makes it feel deliberate instead of like
            // a leftover caption.
            <span className="eyebrow text-brand/80">{footer}</span>
          ) : (
            <span />
          )}
          <ArrowRight
            aria-hidden
            strokeWidth={1.5}
            className="size-4 shrink-0 text-muted-foreground transition-[transform,color] duration-[var(--dur-medium)] ease-[var(--ease-out)] group-hover:translate-x-2 group-hover:text-brand motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          />
        </div>
      </div>
    </motion.li>
  );
}
