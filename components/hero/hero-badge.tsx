"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * Context before the headline. Deliberately not a pill-shaped "badge" — a
 * capsule with a background reads as a product announcement. A rule and a
 * mono label reads as a masthead, which is the register we want.
 */
export function HeroBadge({
  children,
  className,
  variants,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: React.ComponentProps<typeof motion.div>["variants"];
}) {
  return (
    <motion.div
      variants={variants}
      className={cn("flex items-center justify-center gap-3", className)}
    >
      <span aria-hidden className="h-px w-6 bg-rule sm:w-10" />
      <span className="eyebrow text-muted-foreground">{children}</span>
      <span aria-hidden className="h-px w-6 bg-rule sm:w-10" />
    </motion.div>
  );
}
