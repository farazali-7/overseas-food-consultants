export type Phase = {
  number: string;
  title: string;
  description: string;
  /**
   * The destination, not the deliverable.
   *
   * Every phase closes on a client outcome rather than an OFC activity. This
   * is the section's whole conversion mechanic: a process list sells the
   * roadmap, an outcome list sells the place the roadmap arrives at. "We run a
   * gap analysis" is a task; "clear priorities" is a thing the reader wants.
   */
  outcome: string;
};

/**
 * Five phases. Not four, not eight.
 *
 * Four collapses into the generic Consultation → Planning → Execution →
 * Delivery that could belong to a plumber or a dentist. Eight reads as
 * bureaucracy, which is the exact fear this section exists to defuse. Five is
 * enough to look like a real methodology and short enough to scan in one pass.
 *
 * The anxiety being answered here is narrow and specific: "what actually
 * happens after I click Book a consultation?" Uncertainty is what stops the
 * click, so every phase is written from the client's side of the table — what
 * they experience, not what OFC performs internally.
 */
export const phases: Phase[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by understanding your business, goals, operational challenges, and regulatory requirements before making recommendations.",
    outcome: "Shared understanding",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "We evaluate current processes, identify risks, and uncover opportunities to improve food safety, quality, and operational performance.",
    outcome: "Clear priorities",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Together, we develop practical systems, documentation, and improvement strategies tailored to your business.",
    outcome: "Actionable roadmap",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "We support implementation, team adoption, training, and operational improvements to ensure recommendations become reality.",
    outcome: "Operational improvement",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Continuous guidance, reviews, and improvements help your business maintain high standards while preparing for future growth.",
    outcome: "Long-term partnership",
  },
];
