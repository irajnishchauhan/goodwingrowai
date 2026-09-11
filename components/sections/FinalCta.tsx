"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";

export const FinalCta = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl leading-tight"
        >
          You're not hiring another agency.<br/>
          <span className="text-glow text-accent">You're building a growth engine.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 text-xl text-secondary max-w-2xl"
        >
          We built an AI-powered growth system, and our team operates it for your business.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#audit">
            <GlowButton variant="primary" className="w-full sm:w-auto h-14 px-10 text-base">
              Get Growth Audit
            </GlowButton>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
