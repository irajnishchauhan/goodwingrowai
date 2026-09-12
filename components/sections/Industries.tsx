"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    challenges: "Patient acquisition, local competition, trust.",
    solution: "Local SEO, WhatsApp lead automation, content engine.",
  },
  {
    name: "Real Estate",
    challenges: "High CPA, lead quality, long sales cycles.",
    solution: "Meta Ads, CRM automation, hyper-targeted local campaigns.",
  },
  {
    name: "Education",
    challenges: "Enrollment numbers, high competition, tracking.",
    solution: "Google Ads, AI search visibility, unified analytics.",
  },
  {
    name: "D2C / Ecommerce",
    challenges: "ROAS, creative fatigue, cart abandonment.",
    solution: "AI Creative generation, dynamic retargeting, conversion optimization.",
  },
  {
    name: "Automotive",
    challenges: "Test drives, dealership visits, inventory marketing.",
    solution: "Local GEO, Meta lead generation, automated follow-ups.",
  },
  {
    name: "Professional Services",
    challenges: "Authority building, high-value leads.",
    solution: "Thought leadership content, LinkedIn B2B AI strategy.",
  }
];

export const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="AI growth systems built around your business."
          subtitle="We don't do generic marketing. We architect industry-specific growth engines."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group glass p-8 rounded-2xl cursor-pointer hover:bg-surface/80 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-accent transition-colors">{ind.name}</h3>
              
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider text-white/40 block mb-1">Typical Challenges</span>
                <p className="text-sm text-secondary">{ind.challenges}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-xs uppercase tracking-wider text-accent/60 block mb-1">Goodwin Solution</span>
                <p className="text-sm text-foreground">{ind.solution}</p>
              </div>

              <div className="flex items-center text-sm font-medium text-secondary group-hover:text-foreground transition-colors">
                Explore {ind.name} Growth <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
