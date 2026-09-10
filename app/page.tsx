import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { TheProblem } from "@/components/sections/TheProblem";
import { PlatformModules } from "@/components/sections/PlatformModules";
import { AiDashboardDemo } from "@/components/sections/AiDashboardDemo";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AiAgents } from "@/components/sections/AiAgents";
import { AiGrowthLoop } from "@/components/sections/AiGrowthLoop";
import { Industries } from "@/components/sections/Industries";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyGoodwin } from "@/components/sections/WhyGoodwin";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { GrowthAudit } from "@/components/sections/GrowthAudit";
import { Insights } from "@/components/sections/Insights";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TheProblem />
      <PlatformModules />
      <AiDashboardDemo />
      <HowItWorks />
      <AiAgents />
      <AiGrowthLoop />
      <Industries />
      <CaseStudies />
      <WhyGoodwin />
      <RoiCalculator />
      <GrowthAudit />
      <Insights />
      <FinalCta />
    </>
  );
}
