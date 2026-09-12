"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

export const GrowthAudit = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    
    const formData = new FormData(e.currentTarget);
    const website = formData.get('website');
    const industry = formData.get('industry');
    const spend = formData.get('spend');
    const goal = formData.get('goal');
    
    const text = `Hi Goodwin Grow AI Team,%0A%0AI'd like a custom growth roadmap.%0A*Website:* ${website}%0A*Industry:* ${industry}%0A*Monthly Spend:* ${spend}%0A*Primary Goal:* ${goal}`;
    const url = `https://wa.me/919589531380?text=${text}`;
    
    window.open(url, '_blank');
  };

  return (
    <section id="audit" className="py-24 bg-surface/30 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2">
          <SectionHeading 
            title="Find what's holding your growth back."
            subtitle="Tell us about your business. Our AI-assisted growth audit identifies opportunities across acquisition, content, search, conversion and automation."
            align="left"
            className="mb-8"
          />
          
          <ul className="space-y-4 mb-10">
            {[
              "Identify wasted ad spend",
              "Uncover high-intent SEO/AEO keywords",
              "Map out automation workflows",
              "Receive a custom 90-day growth roadmap"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-foreground font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass rounded-3xl p-8 md:p-10 border-white/10 relative overflow-hidden box-glow"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6 relative">
                   <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl" />
                   <svg className="w-10 h-10 text-accent relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Diagnostic Initiated</h3>
                <p className="text-secondary leading-relaxed">Our system has logged your parameters. A growth architect will review your data and send your custom roadmap shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 group relative">
                  <label className="text-xs uppercase tracking-widest text-secondary font-semibold group-focus-within:text-accent transition-colors duration-300">Target URL</label>
                  <input required name="website" type="url" className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-accent/[0.02] focus:ring-1 focus:ring-accent/50 transition-all duration-300 ease-emil" placeholder="https://yourdomain.com" />
                </div>
                
                <div className="flex flex-col gap-2 group relative">
                  <label className="text-xs uppercase tracking-widest text-secondary font-semibold group-focus-within:text-accent transition-colors duration-300">Industry Sector</label>
                  <select required name="industry" className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:bg-accent/[0.02] focus:ring-1 focus:ring-accent/50 transition-all duration-300 ease-emil appearance-none">
                    <option value="">Select Primary Sector</option>
                    <option value="healthcare">Healthcare & Clinics</option>
                    <option value="realestate">Real Estate & Property</option>
                    <option value="education">Education</option>
                    <option value="d2c">E-Commerce & D2C</option>
                    <option value="automotive">Automotive</option>
                    <option value="b2b">B2B SaaS & Tech</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 group relative">
                  <label className="text-xs uppercase tracking-widest text-secondary font-semibold group-focus-within:text-accent transition-colors duration-300">Monthly Ad Spend</label>
                  <select required name="spend" className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-accent focus:bg-accent/[0.02] focus:ring-1 focus:ring-accent/50 transition-all duration-300 ease-emil appearance-none">
                    <option value="">Select Investment Range</option>
                    <option value="under5k">Under $5k (Scaling Phase)</option>
                    <option value="5k_20k">$5k - $20k (Growth Phase)</option>
                    <option value="20k_50k">$20k - $50k (Acceleration)</option>
                    <option value="over50k">$50k+ (Enterprise)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 group relative">
                  <label className="text-xs uppercase tracking-widest text-secondary font-semibold group-focus-within:text-accent transition-colors duration-300">Primary Objective</label>
                  <textarea required name="goal" rows={3} className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-accent/[0.02] focus:ring-1 focus:ring-accent/50 transition-all duration-300 ease-emil resize-none" placeholder="E.g. Decrease CAC by 20%, scale lead volume without breaking unit economics..."></textarea>
                </div>
                
                <GlowButton variant="primary" type="submit" className="w-full mt-2 py-4 text-base font-semibold tracking-wide">
                  Run Growth Diagnostic
                </GlowButton>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
