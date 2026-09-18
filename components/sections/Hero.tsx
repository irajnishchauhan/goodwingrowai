"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";
import { ArrowRight, BarChart3, Zap, Activity } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      
      {/* Background subtle noise/grid can go here, but keeping it minimal and dark */}
      <div className="absolute inset-0 bg-background -z-20" />
      
      {/* Background Video Placeholder */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 -z-[15] mix-blend-screen pointer-events-none"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10 opacity-50" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
        
        {/* Left Column: Copy */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold tracking-widest text-accent uppercase">AI-Powered Marketing & Growth</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.05]"
          >
            Turn AI into <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">measurable growth.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg md:text-xl text-secondary leading-relaxed max-w-xl"
          >
            Stop guessing. Build a growth engine that gets smarter every day by connecting your marketing, automation, and analytics into one intelligent system.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a href="#audit" className="w-full sm:w-auto">
              <GlowButton variant="primary" className="w-full sm:w-auto text-base h-14 px-8">
                Get Your Free Growth Audit <ArrowRight className="w-5 h-5 ml-2" />
              </GlowButton>
            </a>
            <a href="#how-we-work" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto text-base h-14 px-8 font-medium text-foreground hover:text-accent transition-colors">
                See How We Work
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Growth Intelligence Dashboard */}
        <div className="flex-1 w-full lg:max-w-xl relative mt-12 lg:mt-0">
          {mounted && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/5] sm:aspect-square bg-surface/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <Image 
                src="/images/hero_dashboard.jpg" 
                alt="AI Growth Dashboard" 
                fill 
                className="object-cover opacity-40 mix-blend-screen pointer-events-none" 
              />
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-medium text-secondary tracking-widest uppercase">Live System</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-accent/50" />
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 flex flex-col gap-4 h-full relative">
                
                {/* Metric Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col gap-1 relative overflow-hidden">
                    <motion.div 
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -right-4 -top-4 w-16 h-16 bg-accent/10 rounded-full blur-xl"
                    />
                    <span className="text-xs text-secondary font-medium">ROAS Prediction</span>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-foreground">3.4x</span>
                      <span className="text-xs text-accent font-medium mb-1">+12%</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col gap-1">
                    <span className="text-xs text-secondary font-medium">Qualified Leads</span>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-foreground">1,204</span>
                      <span className="text-xs text-accent font-medium mb-1">Live</span>
                    </div>
                  </div>
                </div>

                {/* Automation Flow Visual */}
                <div className="flex-1 bg-white/[0.01] border border-white/5 rounded-xl p-5 flex flex-col justify-between mt-2">
                  <span className="text-xs text-secondary font-medium uppercase tracking-widest mb-4 block">AI Routing</span>
                  
                  <div className="flex flex-col gap-4 relative">
                    {/* Data Node */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center gap-4 bg-surface border border-white/10 rounded-lg p-3 z-10"
                    >
                      <div className="w-8 h-8 rounded-md bg-blue-500/10 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">Campaign Data</span>
                        <span className="text-[10px] text-secondary">Ingesting from 4 sources</span>
                      </div>
                    </motion.div>

                    {/* Connecting Line */}
                    <div className="absolute left-7 top-10 bottom-10 w-px bg-white/10 z-0">
                      <motion.div 
                        animate={{ top: ["0%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-1/2 -translate-x-1/2 w-0.5 h-6 bg-accent rounded-full"
                      />
                    </div>

                    {/* AI Node */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex items-center gap-4 bg-surface border border-accent/20 rounded-lg p-3 ml-8 z-10 relative"
                    >
                      <div className="absolute -inset-0.5 bg-accent/10 rounded-lg blur-sm -z-10" />
                      <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
                        <Zap className="w-4 h-4 text-background" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">Optimization Engine</span>
                        <span className="text-[10px] text-accent">Adjusting bids & creative</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-[10px] text-secondary font-mono">SYS_STATUS: ACTIVE</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => {
                      const heights = ["8px", "12px", "16px", "6px", "10px"];
                      return (
                        <motion.div 
                          key={i}
                          animate={{ height: ["4px", heights[i - 1], "4px"] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          className="w-1 bg-accent/40 rounded-full"
                        />
                      );
                    })}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};
