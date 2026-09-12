"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Database, BrainCircuit, Lightbulb, Zap, Target, LineChart, RefreshCw } from "lucide-react";

const pipelineSteps = [
  { id: 1, name: "Data Ingestion", icon: Database, desc: "Connects CRM, Ads, & Web" },
  { id: 2, name: "AI Analysis", icon: BrainCircuit, desc: "Pattern recognition" },
  { id: 3, name: "Insight", icon: Lightbulb, desc: "Identify growth levers" },
  { id: 4, name: "Automation", icon: Zap, desc: "Trigger workflows" },
  { id: 5, name: "Action", icon: Target, desc: "Execute campaigns" },
  { id: 6, name: "Measurement", icon: LineChart, desc: "Track revenue impact" },
  { id: 7, name: "Optimization", icon: RefreshCw, desc: "Continuous learning" },
];

export const SystemPipeline = () => {
  return (
    <section className="py-32 bg-background border-t border-white/5 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-24 md:w-2/3">
          <SectionHeading 
            title="How the AI actually works."
            subtitle="We don't just use 'AI' as a buzzword. We deploy specific machine learning models across a 7-step pipeline to turn your raw data into automated revenue."
            align="left"
          />
        </div>

        <div className="relative">
          
          {/* Connecting Line Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0" />
          
          {/* Connecting Line Mobile */}
          <div className="lg:hidden absolute left-[31px] top-0 bottom-0 w-px bg-white/10 z-0" />

          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 relative z-10">
            {pipelineSteps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex lg:flex-col items-center lg:items-center gap-6 lg:gap-4 group"
              >
                {/* Node Icon */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center relative z-10 group-hover:border-accent/50 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-secondary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  {/* Pulse effect */}
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 0.2, 0] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                    className="absolute inset-0 bg-accent rounded-2xl -z-10"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col lg:items-center lg:text-center">
                  <span className="text-[10px] font-mono text-accent mb-1 tracking-widest">STEP 0{step.id}</span>
                  <h4 className="text-sm font-bold text-foreground whitespace-nowrap">{step.name}</h4>
                  <p className="text-xs text-secondary mt-1 max-w-[120px] leading-tight hidden lg:block">{step.desc}</p>
                  <p className="text-sm text-secondary mt-1 lg:hidden">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
