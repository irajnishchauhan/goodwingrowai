"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

interface WorkItem {
  id: string;
  title: string;
  client: string;
  type: "video" | "image";
  src: string;
  span: "col-span-1" | "col-span-2" | "row-span-2";
}

const workItems: WorkItem[] = [
  {
    id: "w1",
    title: "Vibrant Campaigns",
    client: "Global Retailer",
    type: "image",
    src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
    span: "col-span-2",
  },
  {
    id: "w2",
    title: "Scale Without Limits",
    client: "Fintech Unicorn",
    type: "image",
    src: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1000",
    span: "row-span-2",
  },
  {
    id: "w3",
    title: "Brand Transformation",
    client: "Luxury Auto",
    type: "image",
    src: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=1000",
    span: "col-span-1",
  },
  {
    id: "w4",
    title: "Data Driven Creativity",
    client: "Tech Enterprise",
    type: "image",
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1000",
    span: "col-span-1",
  },
  {
    id: "w5",
    title: "Performance at Scale",
    client: "D2C Brand",
    type: "image",
    src: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=1000",
    span: "col-span-2",
  }
];

export const Showreel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      id="showreel"
      ref={containerRef} 
      className="py-32 bg-background relative overflow-hidden border-t border-foreground border"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-foreground uppercase leading-none">
              Selected <br />
              <span className="text-foreground/30">Work.</span>
            </h2>
          </div>
          <p className="max-w-sm text-lg text-secondary font-medium">
            We build high-performance growth systems and stunning brand experiences that dominate markets.
          </p>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {workItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group rounded-[45px] overflow-hidden bg-card brutalist-card border border-foreground border ${item.span} cursor-none`}
            >
              {item.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-all duration-700 ease-emil group-hover:scale-105"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 ease-emil scale-100 group-hover:scale-105"
                />
              )}

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-emil">
                  <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {item.client}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-foreground leading-tight mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-foreground/70 text-sm font-medium">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              {/* Play icon for videos */}
              {item.type === 'video' && (
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-foreground/5 backdrop-blur-md flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <Play className="w-5 h-5 text-foreground ml-1" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-medium transition-colors border border-foreground/20 text-foreground hover:bg-foreground hover:text-foreground group">
            <span className="flex items-center gap-2">
              View All Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
