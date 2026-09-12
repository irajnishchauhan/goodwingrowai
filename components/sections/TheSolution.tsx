"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stages = [
  { id: 1, name: "Acquisition" },
  { id: 2, name: "Conversion" },
  { id: 3, name: "Automation" },
  { id: 4, name: "Analytics" },
  { id: 5, name: "Optimization" },
  { id: 6, name: "Scale" },
];

export const TheSolution = () => {
  return (
    <section id="engine" className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <SectionHeading 
            title="One growth system. Every moving part connected."
            subtitle="Data flows seamlessly through a closed-loop intelligence engine, ensuring every dollar spent works harder than the last."
          />
        </div>

        {/* System Diagram Container */}
        <div className="relative w-full max-w-5xl mx-auto h-[600px] md:h-[500px] flex items-center justify-center">
          
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Central Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative flex items-center justify-center w-40 h-40">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-accent/30"
              />
              <div className="glass border-accent/40 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(184,255,61,0.15)] box-glow">
                <span className="text-sm font-bold text-foreground leading-tight tracking-widest">
                  GOODWIN<br/>GROW AI
                </span>
              </div>
            </div>
          </div>

          {/* Orbital Nodes & Paths */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {stages.map((stage, i) => {
              // Distribute nodes in a circle
              const angle = (i * (360 / stages.length)) * (Math.PI / 180);
              // Different radius for mobile vs desktop
              const radiusX = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 320;
              const radiusY = typeof window !== 'undefined' && window.innerWidth < 768 ? 220 : 160;
              
              const x = `calc(50% + ${Math.cos(angle) * radiusX}px)`;
              const y = `calc(50% + ${Math.sin(angle) * radiusY}px)`;
              
              // Next node angle for connecting lines
              const nextAngle = ((i + 1) % stages.length * (360 / stages.length)) * (Math.PI / 180);
              // Next node angle for connecting lines (unused in current implementation, but can be used for multi-node connection)

              return (
                <div key={stage.id}>
                  {/* Connecting Line to next node (Circle path approximation via straight lines for simplicity, or just a central hub spoke model) */}
                  {/* Actually, a spoke model from center to nodes is cleaner to implement in CSS without SVG paths */}
                  
                  {/* Spoke Line from Center */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                     <line 
                      x1="50%" 
                      y1="50%" 
                      x2={x} 
                      y2={y} 
                      stroke="rgba(255,255,255,0.05)" 
                      strokeWidth="1"
                    />
                     {/* Animated Data Packet along Spoke */}
                     <motion.circle 
                       r="2" 
                       fill="#B8FF3D"
                       className="blur-[1px]"
                       initial={{ cx: "50%", cy: "50%", opacity: 0 }}
                       animate={{ 
                         cx: [ "50%", x, "50%" ], 
                         cy: [ "50%", y, "50%" ],
                         opacity: [0, 1, 0]
                       }}
                       transition={{ 
                         duration: 4, 
                         delay: i * 0.8, 
                         repeat: Infinity, 
                         ease: "easeInOut" 
                       }}
                     />
                  </svg>

                  {/* Node */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 bg-surface/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-sm font-medium text-secondary shadow-xl z-10"
                    style={{ left: x, top: y }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-white/30">{`0${stage.id}`}</span>
                      <span className="text-foreground">{stage.name}</span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
