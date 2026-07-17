"use client";

import { motion, useReducedMotion } from "framer-motion";

import { itemVariants, riseContainer } from "@/lib/motion";
import { EditorialCard } from "@/components/shared/editorial-card";
import { services } from "./services";

/**
 * Two columns inside the split, not three.
 *
 * The cards sit in the right-hand track of an editorial split, so they get
 * roughly 60% of the container. Forcing three across there would squeeze each
 * card under ~240px and break the serif titles onto four lines. Two columns
 * keeps the measure honest and lets the grid breathe against the sticky rail.
 */
export function ServiceGrid() {
  const reduced = useReducedMotion();
  const item = itemVariants(reduced);

  return (
    <motion.ul
      variants={riseContainer(0.07)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
    >
      {services.map((service) => (
        <EditorialCard
          key={service.title}
          title={service.title}
          description={service.description}
          footer={service.outcome}
          href={service.href}
          icon={service.icon}
          variants={item}
        />
      ))}
    </motion.ul>
  );
}