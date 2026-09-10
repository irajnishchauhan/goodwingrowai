import { Hero } from "@/components/marketing/Hero";
import { TrustSection } from "@/components/marketing/TrustSection";
import { ServicesOverview } from "@/components/marketing/ServicesOverview";

export default function Home() {
  return (
    <div className="fade-in">
      <Hero />
      <TrustSection />
      <ServicesOverview />
    </div>
  );
}
