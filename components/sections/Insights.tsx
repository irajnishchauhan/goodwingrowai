"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "AI Marketing",
    title: "How AI is changing performance marketing in 2026",
    excerpt: "The shift from manual bidding to predictive AI models is fundamentally changing how growth teams operate.",
    readTime: "5 min read",
    date: "Sep 12, 2026"
  },
  {
    category: "Search Strategy",
    title: "AEO vs SEO: How brands get discovered in AI search",
    excerpt: "With the rise of generative search, optimizing for answers is becoming more important than optimizing for links.",
    readTime: "8 min read",
    date: "Sep 05, 2026"
  },
  {
    category: "Growth Strategy",
    title: "How small businesses can build an AI marketing engine",
    excerpt: "You don't need a massive enterprise budget to leverage AI. Here's how to build a scalable engine from day one.",
    readTime: "6 min read",
    date: "Aug 28, 2026"
  }
];

export const Insights = () => {
  return (
    <section id="insights" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="The Goodwin Growth Intelligence Hub"
          subtitle="Insights, strategies, and frameworks from our AI growth team."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="w-full aspect-[16/10] bg-surface/50 rounded-2xl mb-6 border border-white/5 overflow-hidden relative">
                {/* Placeholder Image Graphic */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface to-background flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700">
                   <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-background/50">
                     <span className="text-3xl">✦</span>
                   </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-xs text-white/40">{article.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
                {article.title}
              </h3>
              
              <p className="text-secondary text-sm mb-6 flex-grow">
                {article.excerpt}
              </p>
              
              <div className="flex items-center text-sm font-medium text-foreground group-hover:text-accent transition-colors mt-auto">
                Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
