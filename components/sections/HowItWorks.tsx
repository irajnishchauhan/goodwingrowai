"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    num: "01",
    title: "Diagnose",
    desc: "We analyze your current data, tracking setup, and campaigns to find immediate bottlenecks and missed revenue."
  },
  {
    num: "02",
    title: "Strategize",
    desc: "We design a custom growth architecture, defining exactly which channels, AI models, and automations will drive ROI."
  },
  {
    num: "03",
    title: "Build",
    desc: "We connect your tools into a single intelligence engine. Tracking, CRM pipelines, and AI scoring are unified."
  },
  {
    num: "04",
    title: "Launch",
    desc: "We deploy high-converting campaigns across search and social, powered by data-driven creative and precise targeting."
  },
  {
    num: "05",
    title: "Optimize",
    desc: "Our AI optimization engine begins testing variables in real-time, shifting budget to top-performing segments automatically."
  },
  {
    num: "06",
    title: "Scale",
    desc: "Once unit economics are profitable, we aggressively scale spend and automate follow-ups to compound growth."
  }
];

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section id="how-we-work" ref={containerRef} className="bg-surface h-[300vh] relative border-t border-white/5">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
        
        <div className="container mx-auto px-6 mb-10">
          <SectionHeading 
            title="How we build your growth engine."
            subtitle="A systematic, engineered approach to scaling businesses. We don't guess; we test, measure, and scale."
            align="left"
          />
        </div>

        <motion.div style={{ x }} className="flex pl-6 md:pl-20 gap-8 lg:gap-16 w-fit pb-20">
          {steps.map((step, index) => (
            <div key={step.num} className="w-[300px] md:w-[450px] shrink-0">
              <div className="text-accent text-6xl md:text-8xl font-black opacity-10 mb-6 font-mono tracking-tighter">{step.num}</div>
              
              <div className="relative pl-8 border-l border-white/10 h-full">
                {/* Animated line dot indicator */}
                <motion.div 
                  className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-accent"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                />
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">{step.title}</h3>
                <p className="text-secondary text-base md:text-lg leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};
