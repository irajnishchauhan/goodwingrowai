"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const loopItems = [
  "DATA", "INSIGHTS", "STRATEGY", "CREATIVE", "CAMPAIGN", "RESULTS", "LEARNING", "OPTIMIZATION"
];

export const AiGrowthLoop = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <SectionHeading 
          title="Your marketing gets smarter every cycle."
          subtitle="Our AI growth loop continuously feeds performance data back into strategy."
        />

        <div className="relative w-full max-w-2xl aspect-square md:aspect-auto md:h-[600px] mt-16 flex items-center justify-center">
          
          {/* Center Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center text-center">
             <div className="w-24 h-24 rounded-full bg-surface border border-white/10 shadow-[0_0_50px_rgba(184,255,61,0.15)] flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent animate-pulse" />
             </div>
             <span className="font-bold tracking-widest text-foreground text-sm">GOODWIN<br/>GROW AI</span>
          </div>

          {/* Rotating Loop */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] md:max-w-[500px] aspect-square rounded-full border border-dashed border-white/20"
          >
            {loopItems.map((item, i) => {
              const rotation = (360 / loopItems.length) * i;
              return (
                <div
                  key={item}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 text-center"
                  style={{
                    transform: `rotate(${rotation}deg) translateY(-250px) rotate(-${rotation}deg)`,
                    transformOrigin: "center 250px"
                  }}
                >
                  {/* We counter-rotate the text so it stays upright. 
                      Since the parent rotates continuously, this math is just for initial positioning.
                      To keep text upright during rotation, we apply a counter-rotation to the child. */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    className="glass px-3 py-1.5 rounded-full text-xs font-semibold text-accent border-accent/20 shadow-[0_0_15px_rgba(184,255,61,0.1)] whitespace-nowrap"
                  >
                    {item}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
          
          {/* Connection Lines (Static) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 600 600">
             <circle cx="300" cy="300" r="150" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeDasharray="4 4" />
             <defs>
               <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#B8FF3D" stopOpacity="0" />
                 <stop offset="50%" stopColor="#B8FF3D" stopOpacity="1" />
                 <stop offset="100%" stopColor="#B8FF3D" stopOpacity="0" />
               </linearGradient>
             </defs>
          </svg>
        </div>
        
      </div>
    </section>
  );
};
