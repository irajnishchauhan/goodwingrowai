"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
  tags: string;
  cover_image: string | null;
}

const fallbackArticles = [
  {
    tags: "AI Marketing",
    title: "How AI is changing performance marketing in 2026",
    description: "The shift from manual bidding to predictive AI models is fundamentally changing how growth teams operate.",
    reading_time_minutes: 5,
    published_at: "2026-09-12T00:00:00Z",
    url: "#",
    cover_image: null
  },
  {
    tags: "Search Strategy",
    title: "AEO vs SEO: How brands get discovered in AI search",
    description: "With the rise of generative search, optimizing for answers is becoming more important than optimizing for links.",
    reading_time_minutes: 8,
    published_at: "2026-09-05T00:00:00Z",
    url: "#",
    cover_image: null
  },
  {
    tags: "Growth Strategy",
    title: "How small businesses can build an AI marketing engine",
    description: "You don't need a massive enterprise budget to leverage AI. Here's how to build a scalable engine from day one.",
    reading_time_minutes: 6,
    published_at: "2026-08-28T00:00:00Z",
    url: "#",
    cover_image: null
  }
];

export const Insights = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("https://dev.to/api/articles?tag=marketing&per_page=3");
        if (res.ok) {
          const data = await res.json();
          setArticles(data);
        }
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const displayArticles = articles.length > 0 ? articles : fallbackArticles;

  return (
    <section id="insights" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="The Goodwin Growth Intelligence Hub"
          subtitle="Insights, strategies, and frameworks from our AI growth team."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {displayArticles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="w-full aspect-[16/10] bg-surface/50 rounded-2xl mb-6 border border-white/5 overflow-hidden relative">
                {article.cover_image ? (
                  <img src={article.cover_image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-surface to-background flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700">
                     <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-background/50">
                       <span className="text-3xl">✦</span>
                     </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent truncate max-w-[150px]">
                  {article.tags.split(',')[0] || "Marketing"}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                <span className="text-xs text-white/40 shrink-0">{article.reading_time_minutes} min read</span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-secondary text-sm mb-6 flex-grow line-clamp-3">
                {article.description}
              </p>
              
              <div className="flex items-center text-sm font-medium text-foreground group-hover:text-accent transition-colors mt-auto">
                Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
