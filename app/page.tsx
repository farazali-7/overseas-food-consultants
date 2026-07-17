import { Cta } from "@/components/cta/cta";
import { Founder } from "@/components/founder/founder";
import { Hero } from "@/components/hero/hero";
import { IndustriesSection } from "@/components/industries/industries-section";
import { Process } from "@/components/process/process";
import { ServicesSection } from "@/components/services/services-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { TrustSection } from "@/components/trust/trust-section";

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
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
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
