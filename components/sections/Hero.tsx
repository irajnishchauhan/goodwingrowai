"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Ambient Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground max-w-5xl leading-[1.1]"
        >
          Your AI-Powered <br className="hidden md:block"/>
          <span className="text-glow text-accent">Growth Team</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-xl text-secondary max-w-2xl leading-relaxed"
        >
          Strategy, creative, advertising, search, automation and analytics — connected into one intelligent growth engine.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <a href="#audit">
            <GlowButton variant="primary" className="w-full sm:w-auto text-base h-14 px-8">
              Build My Growth Plan <ArrowRight className="w-5 h-5 ml-2" />
            </GlowButton>
          </a>
          <a href="#engine">
            <GlowButton variant="secondary" className="w-full sm:w-auto text-base h-14 px-8">
              See How It Works
            </GlowButton>
          </a>
        </motion.div>

        {/* AI Growth Engine Visualization */}
        {mounted && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full max-w-4xl mx-auto glass rounded-2xl p-8 border-accent/20 relative box-glow flex flex-col items-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-accent/5 rounded-full blur-[60px] pointer-events-none" />
            
            {/* Top Node */}
            <div className="px-6 py-3 rounded-xl bg-surface border border-accent/50 text-accent font-bold tracking-widest text-sm shadow-[0_0_15px_rgba(184,255,61,0.2)] z-10 relative">
              GOODWIN GROW AI
            </div>

            {/* Vertical Line from Top */}
            <div className="h-8 w-px bg-gradient-to-b from-accent/50 to-white/20 relative">
              <motion.div 
                animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-1 h-3 bg-accent rounded-full blur-[1px]"
              />
            </div>

            {/* Horizontal Branching Line */}
            <div className="w-[90%] md:w-[70%] h-px bg-white/20 relative" />

            {/* Downward Lines to Modules */}
            <div className="w-[90%] md:w-[70%] flex justify-between relative h-8">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="h-full w-px bg-white/20 relative">
                  <motion.div 
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 -translate-x-1/2 w-0.5 h-3 bg-white/60 rounded-full"
                  />
                </div>
              ))}
            </div>

            {/* Module Nodes */}
            <div className="w-full max-w-3xl flex justify-between gap-2 z-10">
              {['STRATEGY', 'CREATIVE', 'ADS', 'SEARCH', 'AUTOMATION'].map((label, i) => (
                <div key={label} className="flex-1 px-2 py-2 rounded-lg bg-surface/50 border border-white/10 text-xs font-semibold text-secondary text-center uppercase">
                  {label}
                </div>
              ))}
            </div>

            {/* Downward Lines to Collection */}
            <div className="w-[90%] md:w-[70%] flex justify-between relative h-8 mt-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="h-full w-px bg-white/20 relative">
                  <motion.div 
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, delay: (i * 0.4) + 1, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 -translate-x-1/2 w-0.5 h-3 bg-accent/60 rounded-full"
                  />
                </div>
              ))}
            </div>
            
            {/* Horizontal Collector Line */}
            <div className="w-[90%] md:w-[70%] h-px bg-white/20 relative" />

            {/* Vertical Line to Data */}
            <div className="h-8 w-px bg-gradient-to-b from-white/20 to-accent/30 relative">
               <motion.div 
                animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-1 h-3 bg-accent rounded-full blur-[1px]"
              />
            </div>

            {/* Growth Data Node */}
            <div className="px-5 py-2 rounded-lg bg-surface border border-accent/30 text-foreground font-semibold text-xs tracking-widest z-10 relative">
              GROWTH DATA
            </div>

            {/* Vertical Line to Optimize */}
            <div className="h-8 w-px bg-gradient-to-b from-accent/30 to-accent/50 relative">
              <motion.div 
                animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-1 h-3 bg-accent rounded-full blur-[1px]"
              />
            </div>

            {/* Optimize Node */}
            <div className="px-6 py-3 rounded-xl bg-accent text-background font-bold tracking-widest text-sm z-10 relative shadow-[0_0_20px_rgba(184,255,61,0.4)] flex items-center gap-2">
              OPTIMIZE
              <motion.svg animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </motion.svg>
            </div>

          </motion.div>
        )}

      </div>
      
    </section>
  );
};
