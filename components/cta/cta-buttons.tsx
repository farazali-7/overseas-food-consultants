"use client";

import { motion } from "framer-motion";

import { ActionLink } from "@/components/shared/action-link";
import { siteConfig } from "@/lib/site-config";

type Variants = React.ComponentProps<typeof motion.div>["variants"];

/**
 * Two doors, not one.
 *
 * "Book a consultation" asks for a calendar commitment, which a visitor who is
 * still 80% convinced will not make — and a single high-commitment CTA
 * silently loses every one of them. "Send an inquiry" is the low-stakes door:
 * ask a question, stay in control, no diary entry. Different comfort levels,
 * same funnel.
 *
 * The secondary is a real `mailto:` rather than a second scroll target,
 * because the whole point is that it costs the visitor nothing to open.
 * ActionLink renders it as a plain anchor — a mail client is not a route.
 */
export function CtaButtons({ variants }: { variants?: Variants }) {
  return (
    <motion.div
      variants={variants}
      className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
    >
      <ActionLink href="#contact" variant="primary" size="lg" stretch>
        Book a consultation
      </ActionLink>

      <ActionLink
        href={`mailto:${siteConfig.email}`}
        variant="outline"
        size="lg"
        stretch
        arrow
      >
        Send an inquiry
      </ActionLink>
    </motion.div>
  );
}
