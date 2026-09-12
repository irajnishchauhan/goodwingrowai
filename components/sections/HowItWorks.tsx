"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "Understand your business, audience, competitors and market context deeply using AI-driven research."
  },
  {
    num: "02",
    title: "STRATEGIZE",
    desc: "Build a comprehensive AI-powered growth roadmap tailored to your exact business objectives."
  },
  {
    num: "03",
    title: "CREATE",
    desc: "Generate high-converting campaigns, engaging content, and premium creative assets at speed."
  },
  {
    num: "04",
    title: "OPTIMIZE",
    desc: "Use real-time data and AI algorithms to continuously improve performance across all channels."
  },
  {
    num: "05",
    title: "SCALE",
    desc: "Automate what works and aggressively scale the growth engine to compound your returns."
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
    <section id="how-it-works" ref={containerRef} className="bg-background h-[300vh] relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
        
        <div className="container mx-auto px-6 mb-10">
          <SectionHeading 
            title="From business problem to measurable growth."
            align="left"
          />
        </div>

        <motion.div style={{ x }} className="flex pl-6 md:pl-20 gap-8 lg:gap-16 w-fit pb-20">
          {steps.map((step, index) => (
            <div key={step.num} className="w-[300px] md:w-[450px] shrink-0">
              <div className="text-accent text-6xl md:text-8xl font-black opacity-20 mb-6">{step.num}</div>
              
              <div className="relative pl-8 border-l-2 border-white/10 h-full">
                {/* Animated line dot indicator */}
                <motion.div 
                  className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-accent border-4 border-background"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                />
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">{step.title}</h3>
                <p className="text-secondary text-lg leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};
