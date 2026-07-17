import { ActionLink } from "@/components/shared/action-link";

/**
 * Two CTAs, deliberately unequal.
 *
 * The primary is the only filled element in the hero, which makes it the
 * single highest-contrast object on the page — that is the whole reason it
 * converts. Giving the secondary a border would create two competing targets
 * and flatten the hierarchy, so it stays a quiet ghost link with an arrow.
 *
 * `lg` is 48px tall: comfortable as a touch target, and enough mass to anchor
 * the composition. The design system's own Button tops out at h-9, which is
 * tuned for dense app UI rather than a hero.
 */
export function HeroActions({ delay }: { delay?: string }) {
  return (
    <div
      style={{ animationDelay: delay }}
      className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5"
    >
      <ActionLink href="#contact" variant="primary" size="lg" stretch>
        Book a consultation
      </ActionLink>

      <ActionLink href="#expertise" variant="ghost" size="lg" stretch arrow>
        Explore our expertise
      </ActionLink>
    </div>
  );
}
