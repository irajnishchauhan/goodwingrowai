"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Brain, LineChart, PenTool, Search, Settings, Activity, Target } from "lucide-react";

const agents = [
  {
    name: "Strategy Agent",
    role: "Identifies market gaps.",
    icon: <Brain className="w-5 h-5" />,
    tasks: ["Competitor Analysis", "Trend Spotting", "Positioning"],
    status: "Analyzing market"
  },
  {
    name: "Performance Agent",
    role: "Optimizes campaigns continuously.",
    icon: <Target className="w-5 h-5" />,
    tasks: ["CPC / CPA / ROAS", "Bid Management", "Budget Allocation"],
    status: "Monitoring campaigns"
  },
  {
    name: "Creative Agent",
    role: "Generates high-converting assets.",
    icon: <PenTool className="w-5 h-5" />,
    tasks: ["Ad Copy", "Visuals", "A/B Testing Content"],
    status: "Generating creatives"
  },
  {
    name: "SEO Agent",
    role: "Dominates AI search engines.",
    icon: <Search className="w-5 h-5" />,
    tasks: ["Keyword Clustering", "AEO Strategy", "Rank Tracking"],
    status: "Tracking visibility"
  },
  {
    name: "Automation Agent",
    role: "Builds seamless lead flows.",
    icon: <Settings className="w-5 h-5" />,
    tasks: ["CRM Sync", "WhatsApp Alerts", "Lead Scoring"],
    status: "Routing leads"
  },
  {
    name: "Analytics Agent",
    role: "Turns data into insights.",
    icon: <LineChart className="w-5 h-5" />,
    tasks: ["Attribution", "Funnel Metrics", "Custom Reports"],
    status: "Processing data"
  },
];

export const AiAgents = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Meet your AI growth team."
          subtitle="Specialized AI agents working in harmony to accelerate your execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 rounded-2xl border-white/5 hover:border-accent/30 transition-colors group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 text-foreground font-semibold">
                  <div className="p-2 rounded-lg bg-surface border border-white/10 text-accent">
                    {agent.icon}
                  </div>
                  {agent.name}
                </div>
                
                {/* Live Status Indicator */}
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-secondary uppercase tracking-wider">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                  </span>
                  {agent.status}
                </div>
              </div>

              <p className="text-secondary text-sm mb-6 pb-6 border-b border-white/5">
                {agent.role}
              </p>

              <div className="mt-auto">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-3">Monitors</div>
                <ul className="flex flex-wrap gap-2">
                  {agent.tasks.map(task => (
                    <li key={task} className="text-xs text-secondary bg-surface px-2 py-1 rounded-md border border-white/5">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
