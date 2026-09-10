"use client";

import { motion } from "framer-motion";

const industries = [
  "D2C Brands",
  "Healthcare",
  "Education",
  "Real Estate",
  "Automotive",
  "Professional Services",
  "Local Businesses",
  "SaaS & Startups",
];

export const TrustBar = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-background overflow-hidden flex flex-col items-center">
      <p className="text-sm font-medium text-secondary mb-6 text-center">
        Built for businesses ready to grow smarter.
      </p>
      
      <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden mask-edges">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
        
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Double array to create seamless loop */}
          {[...industries, ...industries].map((industry, index) => (
            <div 
              key={index}
              className="flex items-center justify-center px-10 py-2 min-w-max"
            >
              <span className="text-xl md:text-2xl font-bold text-white/20 hover:text-white/40 transition-colors">
                {industry}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
