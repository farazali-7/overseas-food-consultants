import { Container } from "@/components/shared/container";

/**
 * Atmosphere layer for the hero. Entirely decorative and entirely CSS — no
 * image requests, nothing that can shift layout, nothing announced to a
 * screen reader.
 *
 * Three stacked ideas, each doing one job:
 *  1. Column rules — hairlines at the text measure, borrowed from editorial
 *     layout. They make the centred composition feel set rather than floated.
 *  2. Vignette — a wide radial wash that lifts the centre and lets the
 *     composition fall off at the edges, so the eye lands on the headline.
 *  3. Grain — paper tooth. Stops the off-white from reading as flat screen fill.
 */
export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* The column rules must track the same measure as the content, so this
          reuses Container rather than re-declaring the width. Hardcoding it
          here is exactly how the rules drift out of register with the text. */}
      <Container className="absolute inset-0 hidden lg:block">
        <div className="relative h-full">
          <div className="absolute inset-y-0 left-0 w-px bg-rule/60" />
          <div className="absolute inset-y-0 right-0 w-px bg-rule/60" />
          <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-rule/35 xl:block" />
        </div>
      </Container>

      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_100%_at_50%_0%,color-mix(in_oklch,var(--brand),transparent_96%),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-rule" />

      <div className="grain-overlay" />
    </div>
  );
}
