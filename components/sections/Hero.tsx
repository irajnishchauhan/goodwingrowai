"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";
import { ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-background text-foreground">
      {/* Immersive Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://player.vimeo.com/external/372335198.sd.mp4?s=34a5d85c49424e622b72efde68a73a3c260bc135&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-0 w-full"
        >
          <h1 className="text-[12vw] md:text-[10vw] font-display font-extrabold uppercase leading-[0.85] tracking-tighter text-foreground">
            Unfair
          </h1>
          <h1 className="text-[12vw] md:text-[10vw] font-display font-extrabold uppercase leading-[0.85] tracking-tighter outline-text mb-8">
            Advantage.
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-foreground/70 font-medium max-w-3xl mx-auto mb-10"
        >
          We build AI-driven growth engines that connect your marketing, automation, and analytics into one intelligent, self-optimizing system.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a href="#services">
            <GlowButton variant="primary" className="h-16 px-10 text-lg rounded-full group bg-primary text-white border-none hover:bg-foreground hover:text-white transition-colors duration-300">
              Explore Solutions <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </GlowButton>
          </a>
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="h-16 px-10 text-lg rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors duration-300 flex items-center gap-2 group font-medium"
          >
            <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" /> Watch Showreel
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-foreground/50">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-foreground/50 to-transparent" />
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsVideoOpen(false)}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsVideoOpen(false);
              }}
              className="absolute top-8 right-8 z-[110] text-white/70 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-black/40"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl mx-4 cursor-default z-[105]"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src="/videos/goodwin-grow-ai-reel-final.mp4" 
                className="absolute inset-0 w-full h-full object-contain" 
                autoPlay
                controls
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
