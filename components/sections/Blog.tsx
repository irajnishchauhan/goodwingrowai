"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "How AI is Reshaping Performance Marketing in 2026",
    excerpt: "Discover the latest trends in AI automation and how businesses are using it to halve their CAC.",
    date: "Sep 15, 2026",
    category: "AI Marketing",
  },
  {
    title: "5 CRM Automations You Need to Implement Today",
    excerpt: "Stop wasting time on manual data entry. These 5 automations will save your sales team 10 hours a week.",
    date: "Sep 02, 2026",
    category: "Automation",
  },
  {
    title: "The Death of Traditional SEO: Enter Ambient Intelligence",
    excerpt: "Why optimizing for conversational AI and LLMs is the new frontier for organic growth.",
    date: "Aug 24, 2026",
    category: "Growth Strategy",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-32 bg-surface/30 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Insights & Growth Strategies"
          subtitle="Read our latest thoughts on AI, automation, and performance marketing."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background border border-white/10 rounded-2xl p-6 flex flex-col group hover:border-accent/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">{post.category}</span>
                <span className="text-xs text-secondary">{post.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
              <p className="text-secondary text-sm mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
              
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-foreground hover:bg-white/5 transition-colors">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};
