import React from 'react';
import Link from 'next/link';

export function generateStaticParams() {
  return [
    { slug: 'how-ai-is-reshaping-b2b-lead-generation' },
    { slug: 'death-of-traditional-seo' },
    { slug: 'building-your-first-marketing-ai-agent' }
  ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="fade-in">
      <article>
        <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--surface-muted)' }}>
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <Link href="/blog" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 500 }}>
              ← Back to all posts
            </Link>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--muted)' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase' }}>AI Automation</span>
              <span>•</span>
              <span>Oct 12, 2026</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <h1 style={{ fontSize: '3rem', lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--foreground)' }}>
              {title}
            </h1>
          </div>
        </section>

        <section style={{ padding: '4rem 0 6rem' }}>
          <div className="container" style={{ maxWidth: '700px' }}>
            <div style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                In today's fast-paced digital landscape, manual outreach is no longer sufficient to maintain a competitive edge. AI is fundamentally reshaping how B2B companies identify, engage, and convert potential leads.
              </p>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--foreground)', marginTop: '2rem', marginBottom: '0.5rem' }}>The Shift from Manual to Autonomous</h2>
              <p>
                The traditional B2B sales cycle involves hours of manual prospecting, data entry, and generic cold emails. By integrating artificial intelligence into your marketing stack, you can transition from these labor-intensive processes to highly autonomous, self-optimizing growth systems.
              </p>
              <p>
                AI agents can now scrape target accounts, analyze public data to identify buying intent signals, and draft hyper-personalized outreach sequences—all before a human sales representative even opens their laptop.
              </p>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--foreground)', marginTop: '2rem', marginBottom: '0.5rem' }}>Key Components of an AI Growth System</h2>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Predictive Scoring:</strong> Automatically grading leads based on historical conversion data.</li>
                <li><strong>Dynamic Personalization:</strong> Adapting website content and email copy in real-time based on the visitor's firmographics.</li>
                <li><strong>Conversational Agents:</strong> 24/7 intelligent chatbots that qualify visitors and book meetings instantly.</li>
              </ul>
              <div style={{ padding: '2rem', backgroundColor: 'var(--surface-muted)', borderLeft: '4px solid var(--accent)', marginTop: '2rem', borderRadius: '0 0.5rem 0.5rem 0' }}>
                <strong style={{ color: 'var(--foreground)', display: 'block', marginBottom: '0.5rem' }}>Want to implement these systems in your business?</strong>
                <p style={{ margin: 0, fontSize: '1rem' }}>
                  <Link href="/growth-audit" style={{ color: 'var(--accent)', fontWeight: 500, textDecoration: 'underline' }}>Book a free growth audit</Link> to discover how Goodwin Grow AI can build your custom growth engine.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
