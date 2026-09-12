"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrainCircuit, Search, BarChart3, Settings, PenTool, LayoutTemplate } from "lucide-react";

const modules = [
  {
    id: "01",
    title: "Grow Intelligence",
    subtitle: "Strategy + Analytics",
    icon: <BrainCircuit className="w-6 h-6 text-accent" />,
    description: "Market research, competitor intelligence, and positioning driven by real-time data.",
    tags: ["Audience Research", "Growth Strategy", "Positioning"]
  },
  {
    id: "02",
    title: "Grow Creative",
    subtitle: "Content + Ads",
    icon: <PenTool className="w-6 h-6 text-accent" />,
    description: "High-converting ad creatives, social content, and copywriting generated at scale.",
    tags: ["Ad Creatives", "Social Media", "Brand Content"]
  },
  {
    id: "03",
    title: "Grow Performance",
    subtitle: "Google + Meta",
    icon: <BarChart3 className="w-6 h-6 text-accent" />,
    description: "Intelligent budget allocation and continuous campaign optimization across platforms.",
    tags: ["Meta Ads", "Google Ads", "Optimization"]
  },
  {
    id: "04",
    title: "Grow Search",
    subtitle: "SEO + AEO + GEO",
    icon: <Search className="w-6 h-6 text-accent" />,
    description: "Next-generation search visibility across traditional and generative AI engines.",
    tags: ["SEO", "AEO", "GEO", "Visibility"]
  },
  {
    id: "05",
    title: "Grow Automation",
    subtitle: "AI Agents + Workflows",
    icon: <Settings className="w-6 h-6 text-accent" />,
    description: "Seamless lead workflows, CRM integration, and intelligent sequence automation.",
    tags: ["Lead Workflows", "WhatsApp", "CRM"]
  },
  {
    id: "06",
    title: "Grow Conversion",
    subtitle: "Websites + Funnels",
    icon: <LayoutTemplate className="w-6 h-6 text-accent" />,
    description: "High-velocity landing pages, conversion tracking, and pipeline attribution.",
    tags: ["ROI Tracking", "Attribution", "Dashboards"]
  },
];

export const PlatformModules = () => {
  return (
    <section id="engine" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/5 text-accent font-bold tracking-widest text-sm">
             GOODWIN GROW ENGINE™
           </div>
           <SectionHeading 
             title="One intelligent system for your entire growth operation."
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[320px] rounded-2xl glass p-8 overflow-hidden transition-colors hover:bg-surface/90 hover:border-accent/30 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-accent/50 transition duration-300 ease-emil">
                    {mod.icon}
                  </div>
                  <span className="text-3xl font-bold text-white/5">{mod.id}</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground leading-tight">{mod.title}</h3>
                <span className="text-xs font-bold tracking-wider text-accent/80 uppercase mb-3 block">{mod.subtitle}</span>
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
