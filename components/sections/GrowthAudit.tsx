"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

export const GrowthAudit = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission goes here
    setSubmitted(true);
  };

  return (
    <section id="audit" className="py-24 bg-surface/30 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2">
          <SectionHeading 
            title="Find your biggest growth opportunities."
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-10 border-white/10 relative overflow-hidden"
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                   <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Your growth audit is being prepared.</h3>
                <p className="text-secondary">Our strategy team will review your details and contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-secondary font-medium">Name</label>
                    <input required type="text" className="bg-surface border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-secondary font-medium">Work Email</label>
                    <input required type="email" className="bg-surface border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-secondary font-medium">Company Website</label>
                    <input required type="url" className="bg-surface border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="https://example.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-secondary font-medium">Industry</label>
                    <select className="bg-surface border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors appearance-none">
                      <option value="">Select Industry</option>
                      <option value="d2c">D2C / Ecommerce</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="realestate">Real Estate</option>
                      <option value="education">Education</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-secondary font-medium">Primary Goal</label>
                  <textarea required rows={3} className="bg-surface border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none" placeholder="e.g. We need to lower our CAC and scale lead volume..."></textarea>
                </div>
                
                <GlowButton variant="primary" type="submit" className="w-full mt-4 py-4">
                  Get My AI Growth Audit
                </GlowButton>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
