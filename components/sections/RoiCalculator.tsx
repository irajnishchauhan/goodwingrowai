"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

export const RoiCalculator = () => {
  const [adSpend, setAdSpend] = useState<number>(50000);
  const [cpa, setCpa] = useState<number>(1000);
  const [aov, setAov] = useState<number>(3000);

  // Simple placeholder math for demonstration
  const currentCustomers = Math.floor(adSpend / cpa);
  const currentRevenue = currentCustomers * aov;
  
  // Goodwin AI assumption: 30% more efficient CPA, 15% higher AOV through better targeting
  const newCpa = cpa * 0.7;
  const newAov = aov * 1.15;
  const newCustomers = Math.floor(adSpend / newCpa);
  const newRevenue = newCustomers * newAov;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading 
          title="What could better marketing be worth to you?"
          subtitle="See the potential impact of an AI-optimized growth engine."
        />

        <div className="glass rounded-3xl p-8 md:p-12 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border-accent/20">
          
          {/* Inputs */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-foreground">Monthly Ad Spend (₹)</label>
                <span className="text-sm text-accent font-mono">₹{adSpend.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="10000" max="1000000" step="10000"
                value={adSpend} 
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full accent-accent bg-surface rounded-lg appearance-none h-2"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-foreground">Current CPA (Cost per Acquisition)</label>
                <span className="text-sm text-accent font-mono">₹{cpa.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="100" max="10000" step="100"
                value={cpa} 
                onChange={(e) => setCpa(Number(e.target.value))}
                className="w-full accent-accent bg-surface rounded-lg appearance-none h-2"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-foreground">Average Order Value (LTV)</label>
                <span className="text-sm text-accent font-mono">₹{aov.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="500" max="50000" step="500"
                value={aov} 
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full accent-accent bg-surface rounded-lg appearance-none h-2"
              />
            </div>
            
            <p className="text-xs text-white/30 mt-4 leading-relaxed">
              * Calculations are estimates based on average client improvements (30% CPA reduction, 15% AOV increase). Actual results depend on market conditions and execution.
            </p>
          </div>

          {/* Outputs */}
          <div className="bg-surface/50 rounded-2xl p-8 border border-white/5 flex flex-col justify-center">
            
            <div className="mb-8">
              <span className="text-sm text-secondary uppercase tracking-wider block mb-2">Estimated Current Revenue</span>
              <span className="text-3xl font-bold text-foreground">₹{currentRevenue.toLocaleString()}</span>
            </div>
            
            <div className="mb-10">
              <span className="text-sm text-accent uppercase tracking-wider block mb-2 flex items-center">
                Potential Goodwin Revenue
                <span className="ml-2 px-2 py-0.5 rounded-full bg-accent/20 text-[10px] font-bold text-accent">AI OPTIMIZED</span>
              </span>
              <span className="text-5xl font-black text-foreground">₹{newRevenue.toLocaleString()}</span>
              <div className="mt-2 text-sm text-green-400 font-medium">
                +₹{(newRevenue - currentRevenue).toLocaleString()} monthly growth potential
              </div>
            </div>

            <a href="#audit" className="w-full">
              <GlowButton variant="primary" className="w-full">
                Build My Growth Plan
              </GlowButton>
            </a>
            
          </div>

        </div>
      </div>
    </section>
  );
};
