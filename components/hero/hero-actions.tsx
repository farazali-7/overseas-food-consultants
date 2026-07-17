import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Two CTAs, deliberately unequal.
 *
 * The primary is the only filled element in the hero, which makes it the
 * single highest-contrast object on the page — that is the whole reason it
 * converts. Giving the secondary a border would create two competing targets
 * and flatten the hierarchy, so it stays a quiet text link with an arrow.
 *
 * `h-12` is a deliberate override of the design system's `lg` size (h-9).
 * System sizes are tuned for dense app UI; a hero CTA needs a comfortable
 * touch target and enough mass to anchor the composition.
 */
export function HeroActions({ delay }: { delay?: string }) {
  return (
    <div
      style={{ animationDelay: delay }}
      className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5"
    >
      <Link
        href="#contact"
        className="group inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-background outline-none transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-[color-mix(in_oklch,var(--foreground),var(--brand)_35%)] focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto"
      >
        Book a consultation
      </Link>

      <Link
        href="#expertise"
        className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-[0.9375rem] font-medium text-foreground outline-none transition-colors hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50 sm:w-auto"
      >
        Explore our expertise
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        />
      </Link>
    </div>
  );
}
