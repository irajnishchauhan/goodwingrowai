"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ToolNode({ tool, progress, opacity, scale }: { tool: { label: string, x: number, y: number, color: string }, progress: MotionValue<number>, opacity: MotionValue<number>, scale: MotionValue<number> }) {
  const x = useTransform(progress, [0, 1], [tool.x, 0]);
  const y = useTransform(progress, [0, 1], [tool.y, 0]);
  return (
    <motion.div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-lg border text-sm font-medium whitespace-nowrap backdrop-blur-sm ${tool.color}`}
      style={{ x, y, opacity, scale }}
    >
      {tool.label}
    </motion.div>
  );
}

export const TheProblem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate convergence of tools into the center
  const progress = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  
  const opacity = useTransform(progress, [0, 0.8, 1], [1, 0, 0]);
  const scale = useTransform(progress, [0, 1], [1, 0]);
  
  const centerOpacity = useTransform(progress, [0.8, 1], [0, 1]);
  const centerScale = useTransform(progress, [0.8, 1], [0.5, 1]);

  return (
    <section ref={containerRef} className="py-32 relative bg-background overflow-hidden min-h-[120vh]">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="sticky top-1/4 h-[60vh] w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
          
          <motion.div style={{ opacity: useTransform(progress, [0.7, 0.9], [1, 0]) }} className="absolute top-0 text-center w-full">
             <SectionHeading 
              title="Your marketing generates data. But does it generate growth?"
              subtitle="Businesses struggle with fragmented marketing, wasted ad spend, inconsistent content, and disconnected data."
            />
          </motion.div>

          <motion.div style={{ opacity: centerOpacity }} className="absolute top-0 text-center w-full">
            <SectionHeading 
              title={<><span className="text-accent">One</span> intelligent growth system.</>}
              subtitle="Goodwin Grow AI centralizes your entire marketing operation into a single, cohesive engine."
            />
          </motion.div>
          
          {/* Visualization Container */}
          <div className="relative w-full max-w-3xl aspect-square md:aspect-[2/1] mt-32 md:mt-24">
            
            {/* The Disconnected Tools */}
            {[
              { label: "Website", x: -200, y: -150, color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
              { label: "Ads", x: 200, y: -120, color: "bg-red-500/10 border-red-500/30 text-red-400" },
              { label: "Follow-ups", x: -180, y: 100, color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400" },
              { label: "Analytics", x: 180, y: 120, color: "bg-purple-500/10 border-purple-500/30 text-purple-400" },
              { label: "Leads", x: 0, y: -180, color: "bg-pink-500/10 border-pink-500/30 text-pink-400" },
              { label: "CRM & Reporting", x: 0, y: 180, color: "bg-green-500/10 border-green-500/30 text-green-400" },
            ].map((tool, i) => (
              <ToolNode key={i} tool={tool} progress={progress} opacity={opacity} scale={scale} />
            ))}

            {/* The Core System */}
            <motion.div
              style={{
                opacity: centerOpacity,
                scale: centerScale,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative flex items-center justify-center w-64 h-64">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-[60px]" />
                <div className="relative z-10 glass border-accent/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center w-full box-glow">
                  <div className="w-12 h-12 rounded-full bg-accent mb-4 flex items-center justify-center shadow-[0_0_20px_rgba(184,255,61,0.5)]">
                     {/* Brain / Core Icon abstract representation */}
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </div>
                  <span className="text-xl font-bold text-foreground leading-tight">GOODWIN<br/>GROW AI</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
