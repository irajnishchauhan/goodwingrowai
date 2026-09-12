"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrendingDown, TrendingUp, Clock, ShieldCheck } from "lucide-react";

const outcomes = [
  {
    title: "Lower Acquisition Costs",
    desc: "AI identifies wasted ad spend and reallocates budget to top-performing audiences in real-time.",
    icon: TrendingDown,
  },
  {
    title: "Predictable Lead Volume",
    desc: "Eliminate the revenue roller-coaster. Build consistent pipelines that deliver qualified prospects daily.",
    icon: TrendingUp,
  },
  {
    title: "Hours Saved Weekly",
    desc: "Automate follow-ups, CRM entry, and reporting. Let software handle the busywork so you can focus on strategy.",
    icon: Clock,
  },
  {
    title: "Data You Can Trust",
    desc: "No more disconnected dashboards. See exactly how every marketing dollar impacts your bottom line.",
    icon: ShieldCheck,
  }
];

export const Outcomes = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        
        <div className="mb-20 text-center">
          <SectionHeading 
            title="What happens when marketing actually works."
            subtitle="We measure our success by your bottom line, not just vanity metrics."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background border border-white/5 p-8 rounded-2xl flex flex-col items-start gap-4 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent mb-2">
                <outcome.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{outcome.title}</h3>
              <p className="text-secondary leading-relaxed">{outcome.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
