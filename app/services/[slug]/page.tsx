import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/Button";

// Static params for demo purposes. In a real app, fetch from CMS/DB.
export function generateStaticParams() {
  return [
    { slug: 'ai-marketing' },
    { slug: 'performance-marketing' },
    { slug: 'seo-content' },
    { slug: 'lead-generation' },
    { slug: 'ai-automation' },
    { slug: 'web-development' },
    { slug: 'analytics' }
  ];
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="fade-in">
      {/* Hero */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '9999px', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Service Detail
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary-foreground)' }}>{title}</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem' }}>
            Transform your business with cutting-edge {title.toLowerCase()} strategies powered by artificial intelligence.
          </p>
          <Link href="/growth-audit">
            <Button variant="primary" size="lg" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
              Book a Free Growth Audit
            </Button>
          </Link>
        </div>
      </section>

      {/* Content skeleton */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The Problem with Traditional Approaches</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '3rem', fontSize: '1.125rem', lineHeight: 1.6 }}>
            Most businesses struggle to scale their {title.toLowerCase()} because they rely on outdated, manual processes. This leads to wasted budget, inconsistent results, and missed opportunities.
          </p>

          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The AI-Powered Solution</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '3rem', fontSize: '1.125rem', lineHeight: 1.6 }}>
            By integrating artificial intelligence into our {title.toLowerCase()} workflows, we eliminate guesswork and accelerate results. Our systems analyze data faster, optimize campaigns in real-time, and personalize experiences at scale.
          </p>

          <div style={{ padding: '3rem', backgroundColor: 'var(--surface-muted)', borderRadius: '1rem', marginTop: '4rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ready to transform your {title.toLowerCase()}?</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Let's discuss how we can build a custom growth system for your business.</p>
            <Link href="/book">
              <Button size="lg">Talk to an AI Growth Expert</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
