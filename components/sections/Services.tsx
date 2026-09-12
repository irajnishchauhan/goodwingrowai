"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Brain, Target, Users, Zap, BarChart3, ArrowUpRight, Lightbulb } from "lucide-react";

const capabilities = [
  {
    id: "ai-marketing",
    name: "AI Marketing",
    icon: Brain,
    description: "Deploy machine learning models to predict customer behavior, personalize ad creative at scale, and reduce customer acquisition costs automatically.",
    metric: "-24%",
    metricLabel: "Average CPA Reduction",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "performance",
    name: "Performance Marketing",
    icon: Target,
    description: "Data-driven paid acquisition across Search, Social, and Programmatic. We don't just buy clicks; we buy profitable revenue.",
    metric: "3.2x",
    metricLabel: "Average ROAS",
    color: "bg-red-500/10 text-red-400 border-red-500/20"
  },
  {
    id: "lead-gen",
    name: "Lead Generation",
    icon: Users,
    description: "High-intent B2B and B2C lead pipelines. We build full-funnel systems that capture, qualify, and route leads to your sales team.",
    metric: "+140%",
    metricLabel: "Lead Volume Increase",
    color: "bg-green-500/10 text-green-400 border-green-500/20"
  },
  {
    id: "automation",
    name: "Marketing Automation",
    icon: Zap,
    description: "Connect your CRM, email, and ad platforms. Automate follow-ups, lead scoring, and reporting to remove manual bottlenecks.",
    metric: "40hrs",
    metricLabel: "Saved Per Week",
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
  },
  {
    id: "analytics",
    name: "Analytics & BI",
    icon: BarChart3,
    description: "Custom growth dashboards that unify fragmented data. See exactly which campaigns are driving revenue, not just clicks.",
    metric: "100%",
    metricLabel: "Data Visibility",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: "cro",
    name: "Conversion Optimization",
    icon: ArrowUpRight,
    description: "A/B testing, heatmaps, and UX improvements to ensure the traffic you pay for actually converts into paying customers.",
    metric: "+35%",
    metricLabel: "Conversion Lift",
    color: "bg-pink-500/10 text-pink-400 border-pink-500/20"
  },
  {
    id: "strategy",
    name: "Growth Strategy",
    icon: Lightbulb,
    description: "Fractional CMO-level guidance. We audit your business, identify growth levers, and build the roadmap to scale efficiently.",
    metric: "Target",
    metricLabel: "Alignment Achieved",
    color: "bg-white/5 text-foreground border-white/10"
  }
];

export const Services = () => {
  const [activeId, setActiveId] = useState(capabilities[0].id);

  const activeCapability = capabilities.find(c => c.id === activeId) || capabilities[0];
  const ActiveIcon = activeCapability.icon;

  return (
    <section id="services" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        
        <div className="mb-20">
          <SectionHeading 
            title="Core Capabilities"
            subtitle="We don't sell disconnected services. We build custom growth engines combining the exact disciplines your business needs to scale."
            align="left"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24">
          
          {/* Left: Capability List */}
          <div className="lg:w-5/12 flex flex-col gap-2">
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onMouseEnter={() => setActiveId(cap.id)}
                onClick={() => setActiveId(cap.id)}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 ease-emil flex items-center justify-between group ${
                  activeId === cap.id 
                    ? "bg-white/10 border-white/10 text-foreground shadow-lg" 
                    : "bg-transparent border-transparent text-secondary hover:text-foreground hover:bg-white/5"
                } border`}
              >
                <span className="text-lg font-semibold">{cap.name}</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ease-emil ${
                  activeId === cap.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-50"
                }`} />
              </button>
            ))}
          </div>

          {/* Right: Dynamic Display */}
          <div className="lg:w-7/12 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-background border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col box-glow"
              >
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border ${activeCapability.color}`}>
                  <ActiveIcon className="w-8 h-8" />
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-4">{activeCapability.name}</h3>
                
                <p className="text-lg text-secondary leading-relaxed max-w-xl mb-12">
                  {activeCapability.description}
                </p>

                {/* Simulated Data/Metric Block */}
                <div className="mt-auto bg-surface border border-white/5 rounded-xl p-6 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-mono text-secondary uppercase tracking-widest mb-1">Impact Metric</span>
                    <span className="block text-sm font-medium text-foreground">{activeCapability.metricLabel}</span>
                  </div>
                  <div className="text-4xl font-bold text-accent tracking-tighter">
                    {activeCapability.metric}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
