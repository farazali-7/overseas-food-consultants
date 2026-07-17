"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { itemVariants, riseContainer } from "@/lib/motion";
import { ServiceGrid } from "./service-grid";

/**
 * "Where We Create Impact" — the recognition beat.
 *
 * Trust answered "are they credible?". This answers the harder, more personal
 * question: "can they solve MY problem?" The whole section is engineered for
 * one reaction — the visitor finding their own situation in a card title and
 * thinking "that's exactly what we're struggling with".
 *
 * Layout: editorial split with a sticky left rail. Chosen over the full-width
 * stack for two reasons. First, the Trust section directly above is already a
 * full-width 3×2 grid, and repeating that rhythm twice running would make the
 * page read as a template. Second, the rail keeps the CTA in view for the
 * entire scroll of six cards — the moment a visitor recognises their problem
 * is the moment the CTA needs to be reachable, and here it always is.
 */
export function ServicesSection() {
  const reduced = useReducedMotion();
  const item = itemVariants(reduced);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative border-t border-rule py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
          <motion.div
            variants={riseContainer(0.09)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            // top-24 clears the 64px sticky header with room to spare, so the
            // rail never collides with the masthead.
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <motion.p variants={item} className="eyebrow text-muted-foreground">
              Services
            </motion.p>

            <motion.h2
              id="services-heading"
              variants={item}
              className="font-heading mt-5 text-balance text-[clamp(1.875rem,3.2vw,2.5rem)] font-normal leading-[1.12] tracking-[-0.02em]"
            >
              Where we create <em className="italic text-brand">impact</em>
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-6 max-w-[420px] text-pretty text-[1.0625rem] leading-[1.65] text-muted-foreground"
            >
              Every engagement is tailored to the unique challenges of your
              business — from launching new operations to strengthening food
              safety systems and improving day-to-day performance.
            </motion.p>

            <motion.div variants={item} className="mt-8">
              <Link
                href="#contact"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-[0.9375rem] font-medium outline-none transition-[transform,border-color,color] duration-200 hover:-translate-y-px hover:border-[color-mix(in_oklch,var(--border),var(--foreground)_28%)] hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Book a consultation
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                />
              </Link>
            </motion.div>
          </motion.div>

          <ServiceGrid />
        </div>
      </div>
    </section>
  );
}
