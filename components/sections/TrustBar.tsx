"use client";

import { motion } from "framer-motion";

const pillars = [
  "AI Optimization",
  "Performance Marketing",
  "Automation",
  "Analytics",
  "Growth Strategy",
];

export const TrustBar = () => {
  return (
    <section className="py-16 md:py-20 border-y border-white/5 bg-background overflow-hidden relative">
      <div className="absolute inset-0 bg-surface/30 -z-10" />
      
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl font-medium text-foreground max-w-3xl leading-relaxed mb-12"
        >
          Built for businesses that want marketing to become a <span className="text-accent">measurable growth system.</span>
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 w-full max-w-4xl">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar}
              initial={{ opacity: 0, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="text-sm md:text-base font-semibold tracking-wide text-secondary uppercase">
                {pillar}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
