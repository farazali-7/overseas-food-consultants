import { Cta } from "@/components/cta/cta";
import { Founder } from "@/components/founder/founder";
import { Hero } from "@/components/hero/hero";
import { IndustriesSection } from "@/components/industries/industries-section";
import { Process } from "@/components/process/process";
import { ServicesSection } from "@/components/services/services-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { TrustSection } from "@/components/trust/trust-section";
import { siteConfig } from "@/lib/site-config";

/**
 * Homepage argument, in order:
 *   Hero        — who we are, who we help, what to do next
 *   Trust       — why believe us (competence, not claims)
 *   Services    — can you solve MY problem
 *   Industries  — have you worked with businesses like mine
 *   Process     — what happens after I click the button
 *   Founder     — whose judgement am I buying
 *   CTA         — starting a conversation costs you nothing
 *   Footer      — the closing page, not the chrome
 *
 * Business → process → person → action. The founder sits before the CTA
 * rather than at the foot of the page because for a single-founder
 * consultancy he is a trust asset, not an appendix.
 *
 * Deliberately absent, per the brief: company values, animated counters,
 * awards, certification carousels, blog previews, newsletter signup, and a
 * "meet the team" for a team that has not been described. Each would either
 * dilute the argument or require content nobody has.
 */

/**
 * ProfessionalService schema.
 *
 * Only fields we can actually substantiate. No aggregateRating, no review, no
 * employee count — inventing structured data is worse than omitting it, since
 * a search engine may surface a fabricated claim as a rich result attributed
 * to OFC. `areaServed` and `email` resolve from siteConfig, so they inherit
 * the placeholder warnings rather than hiding them behind a second copy.
 */
const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
  knowsAbout: [
    "Food Safety",
    "HACCP",
    "Quality Assurance",
    "Operational Excellence",
    "Regulatory Compliance",
    "Food Manufacturing",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Next's recommended pattern for JSON-LD. Safe here because every
        // value is a build-time constant from siteConfig — no user input ever
        // reaches this string.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />
      {/* Skip-link target. tabIndex={-1} makes it programmatically focusable
          so focus actually lands here on activation; without it some browsers
          move the scroll position but leave focus stranded in the header. */}
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <TrustSection />
        <ServicesSection />
        <IndustriesSection />
        <Process />
        <Founder />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
