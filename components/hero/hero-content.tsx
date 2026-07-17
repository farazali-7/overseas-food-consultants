/**
 * Headline and supporting copy.
 *
 * Type sizing is `clamp()` rather than breakpoint jumps so the headline
 * degrades continuously between laptop and mobile — the brief asks for the
 * hierarchy to survive at every width, and stepped sizes always leave one
 * awkward viewport where the line breaks badly.
 *
 * The measure is capped near 16ch on the headline and 620px on the body. Past
 * roughly 75 characters the eye loses the line return, and a hero that is hard
 * to read is a hero that gets skipped.
 *
 * The h1 is the LCP element, so it carries the shortest delay in the sequence
 * that still preserves reading order. Every extra 100ms here is 100ms of LCP.
 */
export function HeroContent({
  headlineDelay,
  copyDelay,
}: {
  headlineDelay?: string;
  copyDelay?: string;
}) {
  return (
    <>
      <h1
        style={{ animationDelay: headlineDelay }}
        className="reveal font-heading mx-auto mt-7 max-w-[16ch] text-balance text-[clamp(2.375rem,6vw,4.25rem)] font-normal leading-[1.04] tracking-[-0.025em]"
      >
        Helping food businesses scale{" "}
        <em className="font-normal italic text-brand">with confidence</em>
      </h1>

      <p
        style={{ animationDelay: copyDelay }}
        className="reveal mx-auto mt-7 max-w-[620px] text-pretty text-[clamp(1rem,1.4vw,1.1875rem)] leading-[1.65] text-muted-foreground"
      >
        From food safety and HACCP implementation to operational excellence and
        compliance, we help food businesses build stronger systems, meet
        international standards, and grow with confidence.
      </p>
    </>
  );
}
