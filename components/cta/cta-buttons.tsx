"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

type Variants = React.ComponentProps<typeof motion.div>["variants"];

/**
 * Two doors, not one.
 *
 * "Book a consultation" asks for a calendar commitment, which a visitor who
 * is still 80% convinced will not make — and a single high-commitment CTA
 * silently loses every one of them. "Send an inquiry" is the low-stakes door:
 * ask a question, stay in control, no diary entry. Different comfort levels,
 * same funnel.
 *
 * The secondary is a real `mailto:` rather than a second scroll target,
 * because the whole point is that it costs the visitor nothing to open.
 */
export function CtaButtons({ variants }: { variants?: Variants }) {
  return (
    <motion.div
      variants={variants}
      className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
    >
      <Link
        href="#contact"
        className="group inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-background outline-none transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-[color-mix(in_oklch,var(--foreground),var(--brand)_35%)] focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto"
      >
        Book a consultation
      </Link>

      <Link
        href={`mailto:${siteConfig.email}`}
        className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-[0.9375rem] font-medium outline-none transition-[transform,border-color,color] duration-200 hover:-translate-y-px hover:border-[color-mix(in_oklch,var(--border),var(--foreground)_28%)] hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto"
      >
        Send an inquiry
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        />
      </Link>
    </motion.div>
  );
}
