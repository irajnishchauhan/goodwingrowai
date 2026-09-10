"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, PenTool, BarChart3, Settings, BrainCircuit, LineChart } from "lucide-react";

const modules = [
  {
    id: "01",
    title: "AI Strategy",
    icon: <BrainCircuit className="w-6 h-6 text-accent" />,
    description: "Market research, competitor intelligence, and positioning driven by real-time data.",
    tags: ["Audience Research", "Growth Strategy", "Positioning"]
  },
  {
    id: "02",
    title: "AI Creative",
    icon: <PenTool className="w-6 h-6 text-accent" />,
    description: "High-converting ad creatives, social content, and copywriting generated at scale.",
    tags: ["Ad Creatives", "Social Media", "Brand Content"]
  },
  {
    id: "03",
    title: "AI Performance",
    icon: <BarChart3 className="w-6 h-6 text-accent" />,
    description: "Intelligent budget allocation and continuous campaign optimization across Meta and Google.",
    tags: ["Meta Ads", "Google Ads", "Optimization"]
  },
  {
    id: "04",
    title: "AI Search",
    icon: <Search className="w-6 h-6 text-accent" />,
    description: "Next-generation SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization).",
    tags: ["SEO", "AEO", "GEO", "Visibility"]
  },
  {
    id: "05",
    title: "AI Automation",
    icon: <Settings className="w-6 h-6 text-accent" />,
    description: "Seamless lead workflows, CRM integration, and WhatsApp/Email sequence automation.",
    tags: ["Lead Workflows", "WhatsApp", "CRM"]
  },
  {
    id: "06",
    title: "AI Analytics",
    icon: <LineChart className="w-6 h-6 text-accent" />,
    description: "Unified marketing dashboards, precise lead attribution, and actionable growth intelligence.",
    tags: ["ROI Tracking", "Attribution", "Dashboards"]
  },
];

export const PlatformModules = () => {
  return (
    <section id="engine" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title={<>One AI growth engine.<br/>Every marketing function connected.</>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[320px] rounded-2xl glass p-8 overflow-hidden transition-colors hover:bg-surface/90 hover:border-accent/30 cursor-pointer"
            >
              {/* Background Animated Gradient (Hover) */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-accent/50 transition-all duration-300">
                    {mod.icon}
                  </div>
                  <span className="text-3xl font-bold text-white/5">{mod.id}</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">{mod.title}</h3>
                <p className="text-secondary mb-auto text-sm leading-relaxed">{mod.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {mod.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-secondary border border-white/5 group-hover:border-accent/20 group-hover:text-foreground transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
