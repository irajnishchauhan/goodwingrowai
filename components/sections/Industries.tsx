"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    name: "Healthcare & Clinics",
    challenge: "High patient acquisition costs (CAC) and strict compliance limiting marketing agility.",
    opportunity: "AI-driven local search dominance and HIPAA-compliant automated lead nurturing.",
  },
  {
    name: "E-Commerce & D2C",
    challenge: "Creative fatigue, rising ad costs, and cart abandonment eroding margins.",
    opportunity: "Predictive LTV modeling, dynamic creative testing, and automated retention loops.",
  },
  {
    name: "B2B SaaS & Tech",
    challenge: "Long sales cycles and difficulty attributing pipeline revenue to specific marketing efforts.",
    opportunity: "Full-funnel tracking, intent-based lead scoring, and automated sales handoffs.",
  },
  {
    name: "Real Estate & Property",
    challenge: "Low-quality lead volume wasting agent time and high competition in local markets.",
    opportunity: "Hyper-targeted geo-fencing, AI qualification bots, and speed-to-lead automation.",
  }
];

export const Industries = () => {
  return (
    <section id="industries" className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="mb-20">
          <SectionHeading 
            title="Built for complex, data-rich industries."
            subtitle="Generic marketing doesn't work. We engineer specific growth solutions for sectors with high compliance, long sales cycles, or intense competition."
            align="left"
          />
        </div>

        <div className="max-w-4xl border-t border-white/10">
          {industries.map((ind, i) => (
            <div 
              key={ind.name}
              className="border-b border-white/10 py-8 relative group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <h3 className="text-2xl md:text-3xl font-medium text-foreground md:w-1/3 transition-colors duration-300 group-hover:text-accent">
                  {ind.name}
                </h3>
                
                <div className="md:w-2/3 flex flex-col gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-secondary mb-1 block">The Challenge</span>
                    <p className="text-base text-foreground/80">{ind.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-accent/80 mb-1 block">The Opportunity</span>
                    <p className="text-base text-foreground">{ind.opportunity}</p>
                  </div>
                </div>
              </div>
              
              {/* Optional: arrow that appears on hover */}
              <div className="absolute right-0 top-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
                <ArrowUpRight className="w-8 h-8 text-accent/50" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
