"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { X, Check } from "lucide-react";

export const WhyGoodwin = () => {
  return (
    <section className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Not another marketing agency."
          subtitle="We are a technology-enabled growth partner."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
          
          {/* Traditional Agency */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl border border-white/5 bg-background/50 relative overflow-hidden"
          >
            <h3 className="text-2xl font-semibold text-secondary mb-8">Traditional Agency</h3>
            
            <ul className="space-y-6">
              {[
                "Manual, slow execution",
                "Fragmented tools and data",
                "Expensive retainer models",
                "Reactive to market changes",
                "Siloed channels (SEO vs Ads)"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-secondary">
                  <X className="w-5 h-5 text-red-500/70 mr-4 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Goodwin Grow AI */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl glass border-accent/30 relative overflow-hidden box-glow"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4" />

            <div className="flex items-center gap-3 mb-8 relative z-10">
              <h3 className="text-2xl font-bold text-foreground">Goodwin Grow AI</h3>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold bg-accent text-black uppercase tracking-wider">
                The New Way
              </div>
            </div>
            
            <ul className="space-y-6 relative z-10">
              {[
                "AI-accelerated execution",
                "Connected data and insights",
                "Performance-focused outcomes",
                "Proactive, real-time optimization",
                "Unified growth engine"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-foreground font-medium">
                  <Check className="w-5 h-5 text-accent mr-4 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto">
          {[
            { title: "AI-Native", desc: "AI is embedded into every workflow from day one." },
            { title: "Strategy First", desc: "Technology strictly follows business strategy." },
            { title: "Performance Focused", desc: "Every activity connects to measurable outcomes." },
            { title: "Human + AI", desc: "AI accelerates execution. Humans provide judgment." }
          ].map((pillar, i) => (
            <motion.div 
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-white/10 pt-6"
            >
              <h4 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h4>
              <p className="text-secondary text-sm">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
