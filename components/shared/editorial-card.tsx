"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

type Variants = React.ComponentProps<typeof motion.li>["variants"];

/**
 * The clickable editorial card, shared by Services and Industries.
 *
 * The briefs specced these as separate `ServiceCard` and `IndustryCard`
 * components, but they resolved to the same object: icon, title, description,
 * a footer line, and a whole-card link. Shipping that twice would guarantee
 * the two drift apart the first time someone tunes the hover — so it lives
 * once here, and each section supplies data.
 *
 * Note this is deliberately NOT the Trust card. That one is inert (nowhere to
 * navigate) and carries a mono index; this one navigates and carries an arrow.
 * Same family, different jobs — collapsing them would mean an interactive card
 * that is sometimes a lie.
 *
 * Accessibility, the part that matters most here:
 * The link wraps only the title and stretches over the card with `after:inset-0`.
 * The naive "make the whole card a link" approach swallows the description into
 * the accessible name, so a screen reader announces forty words where it should
 * announce four. Here the link's name is exactly the title, the description is
 * read as ordinary text, and the entire card is still a click target. The focus
 * ring is hoisted to the card via `has-[a:focus-visible]` so keyboard users see
 * the same region the mouse can hit.
 */
export function EditorialCard({
  title,
  description,
  footer,
  href,
  icon: Icon,
  variants,
}: {
  title: string;
  description: string;
  /** Optional outcome label — the business gain, not the activity. */
  footer?: string;
  href: string;
  icon: LucideIcon;
  variants?: Variants;
}) {
  return (
    <motion.li
      variants={variants}
      className="group relative flex flex-col rounded-3xl border border-border bg-card p-8 transition-[transform,border-color,box-shadow] duration-300 ease-out has-[a:focus-visible]:ring-3 has-[a:focus-visible]:ring-ring/50 hover:-translate-y-[2px] hover:border-[color-mix(in_oklch,var(--border),var(--foreground)_28%)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_28px_-12px_rgba(0,0,0,0.10)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <Icon
        aria-hidden
        strokeWidth={1.5}
        className="mb-7 size-6 text-foreground/70 transition-colors duration-300 group-hover:text-brand motion-reduce:transition-none"
      />

      <h3 className="font-heading text-[1.375rem] font-medium leading-snug tracking-[-0.01em]">
        <Link
          href={href}
          className="outline-none transition-colors after:absolute after:inset-0 after:rounded-3xl after:content-[''] group-hover:text-brand motion-reduce:transition-none"
        >
          {title}
        </Link>
      </h3>

      {/* ~46 characters at this measure — the brief's readability ceiling. */}
      <p className="mt-3 max-w-[46ch] text-[0.9375rem] leading-[1.6] text-muted-foreground">
        {description}
      </p>

      <div className="mt-7 flex items-center justify-between gap-4 border-t border-rule/70 pt-5">
        {footer ? (
          <span className="eyebrow text-muted-foreground/70">{footer}</span>
        ) : (
          <span />
        )}
        <ArrowRight
          aria-hidden
          strokeWidth={1.5}
          className="size-4 shrink-0 text-muted-foreground transition-[transform,color] duration-300 ease-out group-hover:translate-x-1.5 group-hover:text-brand motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        />
      </div>
    </motion.li>
  );
}
