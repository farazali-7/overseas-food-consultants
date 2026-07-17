/**
 * Founder portrait.
 *
 * DELIBERATE PLACEHOLDER — this is not an oversight.
 *
 * The brief specifies an editorial portrait of a real, named person. No such
 * photograph was supplied, and the two obvious ways to fill the hole are both
 * wrong: a stock headshot would present a stranger as OFC's founder, and a
 * generated face would invent a likeness for a real individual. The Trust
 * section is built on never manufacturing credibility; a fabricated face is
 * that same lie with a jawline.
 *
 * So the frame is real, correctly proportioned, and reserves the exact layout
 * box the photo will occupy — meaning dropping the real image in causes no
 * reflow and no CLS. The 4:5 ratio is the editorial portrait crop (HBR,
 * Stripe leadership pages), not a square avatar, which is what keeps this
 * reading as a masthead rather than a LinkedIn profile.
 *
 * TO SHIP THE REAL PORTRAIT — replace the inner <div> with:
 *
 *   import Image from "next/image";
 *
 *   <Image
 *     src="/founder.jpg"
 *     alt="Proshottam Rahul, founder of Overseas Food Consultants"
 *     fill
 *     sizes="(min-width: 1024px) 380px, 100vw"
 *     placeholder="blur"
 *     blurDataURL={...}
 *     className="object-cover"
 *   />
 *
 * `fill` + `sizes` lets next/image serve AVIF/WebP at the right width. The alt
 * text must name the person and their role — a portrait that carries identity
 * is content, not decoration, so it must never be alt="".
 */
export function FounderPortrait() {
  return (
    <figure className="m-0">
      {/* No border, no shadow, no card. The portrait sits in whitespace and
          carries itself — framing a face in a bordered box is what makes a
          leadership page read as a staff directory. The subtle ground exists
          only to mark the reserved slot while the real photo is outstanding;
          it goes with the placeholder. */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card bg-[color-mix(in_oklch,var(--background),var(--foreground)_3%)]">
        <div
          aria-hidden
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        >
          {/* A quiet registration mark, not a grey person-silhouette icon —
              a silhouette would read as a broken avatar rather than a
              reserved slot. */}
          <span className="h-10 w-px bg-rule" />
          <span className="eyebrow text-muted-foreground/50">
            Portrait to be supplied
          </span>
          <span className="h-10 w-px bg-rule" />
        </div>
        <div aria-hidden className="grain-overlay" />
      </div>

      <figcaption className="mt-5">
        <p className="font-heading text-[1.0625rem] tracking-tight">
          Proshottam Rahul
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Founder, Overseas Food Consultants
        </p>
      </figcaption>
    </figure>
  );
}
