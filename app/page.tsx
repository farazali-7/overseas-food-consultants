import { Hero } from "@/components/hero/hero";
import { SiteHeader } from "@/components/site/site-header";
import { TrustSection } from "@/components/trust/trust-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustSection />
      </main>
    </>
  );
}
