import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { TheProblem } from "@/components/sections/TheProblem";
import { TheSolution } from "@/components/sections/TheSolution";
import { Services } from "@/components/sections/Services";
import { SystemPipeline } from "@/components/sections/SystemPipeline";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Industries } from "@/components/sections/Industries";
import { Outcomes } from "@/components/sections/Outcomes";
import { GrowthAudit } from "@/components/sections/GrowthAudit";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TheProblem />
      <TheSolution />
      <Services />
      <SystemPipeline />
      <HowItWorks />
      <Industries />
      <Outcomes />
      <GrowthAudit />
      <FinalCta />
    </>
  );
}
