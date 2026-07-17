import { Container } from "@/components/shared/container";
import { HeroActions } from "./hero-actions";
import { HeroBackground } from "./hero-background";
import { HeroBadge } from "./hero-badge";
import { HeroContent } from "./hero-content";
import { HeroIllustration } from "./hero-illustration";

/**
 * Practice areas, not proof claims.
 *
 * The obvious move here is "Trusted by 500+ businesses" or a logo wall. On a
 * demo build both would be fabricated, and fabricated credibility is the one
 * mistake a compliance consultancy cannot survive being caught at. These are
 * disciplines OFC works in — a statement of scope, which is true by
 * construction and needs nobody's permission to publish.
 */
const PRACTICE_AREAS = [
  "HACCP",
  "Food Safety Systems",
  "Quality Assurance",
  "Compliance",
  "Training",
];

/**
 * The whole hero is a server component: zero client JS above the fold.
 *
 * The stagger below is the point — eyebrow, then headline, then copy, then
 * CTAs. Motion teaches the reading order before the visitor has consciously
 * chosen one. Steps are ~80ms, under the threshold where a sequence starts to
 * feel like it is being performed at you.
 *
 * Delays are literal values rather than a computed loop because each one was
 * tuned against the element it belongs to — the h1 is early because it is the
 * LCP element, the illustration is last because it is the only decorative
 * thing here and must never precede the message.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 sm:pb-28">
      <HeroBackground />

      <Container className="relative text-center">
        <HeroBadge delay="80ms">Trusted Food Business Consulting</HeroBadge>

        <HeroContent headlineDelay="160ms" copyDelay="240ms" />

        <HeroActions delay="320ms" />

        <div className="reveal mt-14" style={{ animationDelay: "400ms" }}>
          <p className="eyebrow mb-4 text-muted-foreground/70">
            Areas of practice
          </p>
          <ul className="mx-auto flex max-w-[760px] flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground sm:gap-x-5">
            {PRACTICE_AREAS.map((area, i) => (
              <li key={area} className="flex items-center gap-3 sm:gap-5">
                {/* Separators only once the row can actually hold a row. Below
                    sm this list wraps, and a leading dot on a wrapped line
                    reads as a stray bullet rather than a divider. */}
                {i > 0 && (
                  <span
                    aria-hidden
                    className="hidden size-[3px] rounded-full bg-rule sm:block"
                  />
                )}
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="relative">
        <HeroIllustration delay="480ms" />
      </Container>
    </section>
  );
}
