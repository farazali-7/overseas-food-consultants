/**
 * Real-world contact details for OFC.
 *
 * ⚠️ EVERY VALUE BELOW IS A PLACEHOLDER AND MUST BE REPLACED BEFORE LAUNCH.
 *
 * None of this was supplied, and none of it is inventable. A wrong email
 * silently drops real enquiries; a guessed LinkedIn URL points at a stranger;
 * a made-up address is a factual claim about where a company operates. On a
 * site whose entire argument is "we are the people who get compliance right",
 * a fabricated contact detail is not a placeholder — it is a defect with a
 * business cost.
 *
 * `.example` is the IANA-reserved documentation TLD (RFC 2606). It cannot
 * resolve and cannot deliver mail, so a missed replacement fails loudly in
 * testing rather than quietly swallowing a lead in production. That is
 * deliberate: choose the failure mode that gets noticed.
 *
 * Centralised here so going live is one edit to one file, not a hunt through
 * the component tree.
 */
export const siteConfig = {
  name: "Overseas Food Consultants",

  /**
   * PLACEHOLDER — replace with the real production origin.
   *
   * This is `metadataBase`. Next.js resolves every relative Open Graph and
   * canonical URL against it, so a wrong value here does not break the build —
   * it silently ships share cards and canonicals pointing at a domain OFC does
   * not own. Wrong is strictly worse than missing.
   */
  url: "https://overseasfoodconsultants.example",

  description:
    "We help food businesses build stronger systems, meet international standards, and grow with confidence — from HACCP implementation to operational excellence.",

  /** PLACEHOLDER — replace with the real enquiries inbox. */
  email: "hello@overseasfoodconsultants.example",

  /** PLACEHOLDER — replace with the real company LinkedIn URL. */
  linkedin: "https://www.linkedin.com/company/example",

  /** PLACEHOLDER — replace with the real operating location, or delete the
      row entirely. An approximate location is worse than none. */
  location: "Location to be confirmed",

  /**
   * The response promise in the CTA's reassurance line. This is a commitment
   * the business has to actually keep, so it lives in config rather than
   * buried in JSX — if OFC cannot answer in a day, change it here.
   */
  responseTime: "Response within one business day",
} as const;
