"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Brain, LineChart, PenTool, Search, Settings, Target, Globe } from "lucide-react";

const agents = [
  {
    name: "Strategy Agent",
    role: "Researches markets, competitors and audiences.",
    icon: <Brain className="w-5 h-5" />,
    status: "ACTIVE"
  },
  {
    name: "Creative Agent",
    role: "Creates campaigns, ads, content and concepts.",
    icon: <PenTool className="w-5 h-5" />,
    status: "ACTIVE"
  },
  {
    name: "Performance Agent",
    role: "Monitors Google/Meta campaigns.",
    icon: <Target className="w-5 h-5" />,
    status: "ACTIVE"
  },
  {
    name: "SEO Agent",
    role: "Optimizes organic search.",
    icon: <Search className="w-5 h-5" />,
    status: "ACTIVE"
  },
  {
    name: "GEO Agent",
    role: "Improves visibility in AI search.",
    icon: <Globe className="w-5 h-5" />,
    status: "ACTIVE"
  },
  {
    name: "Analytics Agent",
    role: "Turns marketing data into decisions.",
    icon: <LineChart className="w-5 h-5" />,
    status: "ACTIVE"
  },
  {
    name: "Automation Agent",
    role: "Automates repetitive growth workflows.",
    icon: <Settings className="w-5 h-5" />,
    status: "ACTIVE"
  },
];

export const AiAgents = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading 
          title="Meet Your AI Growth Team"
          subtitle="Specialized AI agents working in harmony to accelerate your execution."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="p-2 rounded-lg bg-surface border border-white/10 text-accent group-hover:scale-110 transition-transform">
                    {agent.icon}
                  </div>
                  {agent.name}
                </div>
                
                {/* Live Status Indicator */}
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-bold text-accent uppercase tracking-wider">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                  </span>
                  {agent.status}
                </div>
              </div>

              <p className="text-secondary text-sm">
                {agent.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
