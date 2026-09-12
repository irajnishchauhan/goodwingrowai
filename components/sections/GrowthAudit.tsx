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
            title="Find Your Biggest Growth Opportunities"
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
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                   <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Analyzing Your Growth</h3>
                <p className="text-secondary">Our system is processing your details. Our strategy team will contact you shortly with your custom roadmap.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2 group">
                  <label className="text-xs uppercase tracking-wider text-secondary font-medium group-focus-within:text-accent transition-colors">Website</label>
                  <input required name="website" type="url" className="bg-surface/80 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-normal ease-emil" placeholder="https://example.com" />
                </div>
                
                <div className="flex flex-col gap-2 group">
                  <label className="text-xs uppercase tracking-wider text-secondary font-medium group-focus-within:text-accent transition-colors">Industry</label>
                  <select required name="industry" className="bg-surface/80 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-normal ease-emil appearance-none">
                    <option value="">Select Industry</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="realestate">Real Estate</option>
                    <option value="education">Education</option>
                    <option value="d2c">D2C / Ecommerce</option>
                    <option value="automotive">Automotive</option>
                    <option value="professional">Professional Services</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="startups">Startups</option>
                    <option value="local">Local Businesses</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="text-xs uppercase tracking-wider text-secondary font-medium group-focus-within:text-accent transition-colors">Monthly Marketing Spend</label>
                  <select required name="spend" className="bg-surface/80 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-normal ease-emil appearance-none">
                    <option value="">Select Range</option>
                    <option value="under5k">Under $5,000</option>
                    <option value="5k_20k">$5,000 - $20,000</option>
                    <option value="20k_50k">$20,000 - $50,000</option>
                    <option value="over50k">Over $50,000</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="text-xs uppercase tracking-wider text-secondary font-medium group-focus-within:text-accent transition-colors">Primary Goal</label>
                  <textarea required name="goal" rows={3} className="bg-surface/80 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-normal ease-emil resize-none" placeholder="e.g. Decrease CAC, scale lead volume, automate workflows..."></textarea>
                </div>
                
                <GlowButton variant="primary" type="submit" className="w-full mt-4 py-4">
                  Analyze My Growth
                </GlowButton>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
