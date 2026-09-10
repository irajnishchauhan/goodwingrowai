import { Hero } from "@/components/marketing/Hero";
import { TrustSection } from "@/components/marketing/TrustSection";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { AiCoreSection } from "@/components/marketing/AiCoreSection";
import { GrowthEngineSection } from "@/components/marketing/GrowthEngineSection";
import { ServicesOverview } from "@/components/marketing/ServicesOverview";

export default function Home() {
  return (
    <div className="fade-in">
      <Hero />
      <TrustSection />
      <ProblemSection />
      <AiCoreSection />
      <GrowthEngineSection />
      <ServicesOverview />
    </div>
  );
}
