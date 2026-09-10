"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "Physiotherapy Clinic",
    challenge: "New clinic with low local awareness and inconsistent footfall.",
    system: ["Local SEO", "Google Business optimization", "Meta Ads", "WhatsApp lead automation"],
    results: [
      { metric: "+X%", label: "qualified leads" },
      { metric: "-X%", label: "acquisition cost" },
      { metric: "+X%", label: "website enquiries" },
    ]
  },
  {
    title: "D2C Apparel Brand",
    challenge: "Stagnant ROAS and creative fatigue on Meta platforms.",
    system: ["AI Creative Engine", "Dynamic Budget Allocation", "Conversion Rate Optimization"],
    results: [
      { metric: "+X%", label: "ROAS improvement" },
      { metric: "+X%", label: "CTR increase" },
      { metric: "X.X", label: "times faster creative testing" },
    ]
  }
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Growth you can measure."
          subtitle="Real systems built for tangible outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center gap-3 mb-8">
                <span className="px-3 py-1 text-xs font-medium bg-surface border border-white/10 rounded-full text-secondary">
                  Illustrative Example
                </span>
                <span className="text-xs text-white/30">Replace with verified client data</span>
              </div>

              <h3 className="text-3xl font-bold text-foreground mb-4">{study.title}</h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">The Challenge</h4>
                <p className="text-secondary">{study.challenge}</p>
              </div>

              <div className="mb-10">
                <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-3">Goodwin System</h4>
                <div className="flex flex-wrap gap-2">
                  {study.system.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-md bg-white/5 text-foreground border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                {study.results.map((result, idx) => (
                  <div key={idx}>
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1 flex items-start">
                      {result.metric} <ArrowUpRight className="w-4 h-4 ml-1 opacity-50" />
                    </div>
                    <div className="text-xs text-secondary leading-tight">{result.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
