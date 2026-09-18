"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-surface/30 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading 
          title="Get in Touch"
          subtitle="Have a question or want to discuss a custom solution? Fill out the form below and we'll get back to you shortly."
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-background border border-white/10 rounded-2xl overflow-hidden p-2 shadow-2xl relative"
        >
           <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-20 pointer-events-none" />
          <iframe
            id="JotFormIFrame-262541466036052"
            title="Inquiry Form"
            allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/262541466036052"
            frameBorder="0"
            className="w-full relative z-10"
            style={{ height: "700px", border: "none" }}
            scrolling="yes"
          >
          </iframe>
        </motion.div>
      </div>
    </section>
  );
};
