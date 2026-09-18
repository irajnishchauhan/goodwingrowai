"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Left Column: Text & Info */}
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
                Ready to accelerate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">your growth?</span>
              </h2>
              <p className="text-secondary text-lg mb-12">
                Fill out the form to request a consultation, or reach out to us directly through any of the channels below.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface/80 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary mb-1">Email Us</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-foreground font-medium hover:text-accent transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface/80 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary mb-1">Call Us</p>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-foreground font-medium hover:text-accent transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface/80 border border-white/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary mb-1">WhatsApp</p>
                    <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent transition-colors">
                      Chat with us
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface/80 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary mb-1">Location</p>
                    <p className="text-foreground font-medium">{siteConfig.contact.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:w-7/12 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-[2rem] p-1 bg-gradient-to-br from-primary/30 via-white/5 to-accent/30 overflow-hidden shadow-2xl"
            >
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl -z-10" />
              
              <div className="bg-surface/90 backdrop-blur-2xl rounded-[1.8rem] overflow-hidden relative">
                {/* Subtle inner highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <iframe
                  id="JotFormIFrame-262541466036052"
                  title="Inquiry Form"
                  allow="geolocation; microphone; camera; fullscreen"
                  src="https://form.jotform.com/262541466036052"
                  frameBorder="0"
                  className="w-full relative z-10"
                  style={{ height: "650px", border: "none" }}
                  scrolling="yes"
                >
                </iframe>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
