import { Founder } from "@/components/founder/founder";
import { Hero } from "@/components/hero/hero";
import { IndustriesSection } from "@/components/industries/industries-section";
import { Process } from "@/components/process/process";
import { ServicesSection } from "@/components/services/services-section";
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
 *
 * Business → process → person → action. The founder sits here rather than at
 * the foot of the page because for a single-founder consultancy he is a trust
 * asset, not an appendix.
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
      </main>
    </>
  );
}
