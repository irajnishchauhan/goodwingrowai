import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "How AI is Reshaping B2B Lead Generation",
    excerpt: "Discover the new frameworks for automating outreach, qualifying prospects, and closing deals faster using intelligent agents.",
    category: "AI Automation",
    date: "Oct 12, 2026",
    slug: "how-ai-is-reshaping-b2b-lead-generation"
  },
  {
    title: "The Death of Traditional SEO: What You Need to Know",
    excerpt: "With AI overviews dominating search results, traditional keyword stuffing is dead. Here's how to optimize for the AI-first search era.",
    category: "SEO & Content",
    date: "Sep 28, 2026",
    slug: "death-of-traditional-seo"
  },
  {
    title: "Building Your First Marketing AI Agent",
    excerpt: "A step-by-step guide to creating a custom AI agent that can draft campaign copy, analyze competitors, and propose marketing strategies.",
    category: "AI Agents",
    date: "Sep 15, 2026",
    slug: "building-your-first-marketing-ai-agent"
  }
];

export const metadata = {
  title: "Blog & Resources | Goodwin Grow AI",
  description: "Insights, guides, and frameworks for AI-powered marketing.",
};

export default function BlogPage() {
  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Resources & Insights</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted)' }}>
            Expert strategies on AI, marketing automation, and digital growth.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {posts.map((post, idx) => (
              <Link key={idx} href={`/blog/${post.slug}`} style={{ display: 'block', height: '100%' }}>
                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s ease', border: '1px solid var(--border)' }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{post.date}</span>
                    </div>
                    <CardTitle style={{ fontSize: '1.25rem', lineHeight: 1.4 }}>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', flexGrow: 1, fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: 500, fontSize: '0.875rem' }}>
                      Read article <ArrowRight size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
