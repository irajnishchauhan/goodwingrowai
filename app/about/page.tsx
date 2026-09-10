import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About | Goodwin Grow AI",
  description: "We don't believe businesses need more marketing noise. They need better growth systems."
};

export default function AboutPage() {
  return (
    <div className="fade-in">
      <section className="section-padding-large" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container section-header" style={{ marginBottom: 0 }}>
          <h1 className="section-title-large">
            We don't believe businesses need more marketing noise. <br/>
            <span style={{ color: 'var(--primary)' }}>They need better growth systems.</span>
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>Who We Are</h2>
            <div style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                Goodwin Grow AI was founded on a simple observation: the traditional agency model is fundamentally broken. Agencies sell isolated services—SEO, Facebook Ads, or Web Design—while businesses actually just want one thing: <strong>predictable revenue growth</strong>.
              </p>
              <p>
                We are an AI-powered growth partner that eliminates silos by combining performance marketing, advanced automation, data analytics, and artificial intelligence into a single, cohesive engine.
              </p>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>What We Believe</h2>
            <div style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                <strong>Data over opinions.</strong> If we can't track it, we can't scale it. We believe every marketing dollar should be accountable to a business outcome.
              </p>
              <p>
                <strong>Systems over campaigns.</strong> A viral campaign might generate a spike, but a properly engineered growth system generates consistent, compounding returns month over month.
              </p>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>Why AI?</h2>
            <div style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                Artificial Intelligence is not just a buzzword; it is the ultimate lever for business efficiency. We utilize AI to process vast amounts of marketing data instantly, generate hyper-personalized content at scale, and automate repetitive operational tasks like lead qualification.
              </p>
              <p>
                By letting AI handle the heavy lifting of data analysis and automation, we free up human intelligence for high-level strategy, creativity, and relationship building.
              </p>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>Who We Help</h2>
            <div style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                We partner with ambitious founders, marketing directors, and business owners across Healthcare, Real Estate, E-commerce, B2B SaaS, and Local Services who are frustrated by stagnant growth and fragmented marketing efforts. 
              </p>
            </div>
          </div>

          <div style={{ padding: '3rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Ready to build your system?</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Stop guessing and start engineering your growth.</p>
            <Link href="/growth-audit">
              <Button size="lg" variant="primary">Book a Free Growth Audit</Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
