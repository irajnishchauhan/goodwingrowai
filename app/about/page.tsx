import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary-foreground)' }}>About Goodwin Grow AI</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            We are technologists, marketers, and data scientists on a mission to democratize enterprise-grade AI for growing businesses.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
              <p style={{ color: 'var(--muted)', fontSize: '1.125rem', lineHeight: 1.6 }}>
                To turn artificial intelligence into a practical, accessible growth engine for every business. We cut through the hype and implement systems that actually generate leads, close deals, and increase revenue.
              </p>
            </div>
            
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Approach</h2>
              <p style={{ color: 'var(--muted)', fontSize: '1.125rem', lineHeight: 1.6 }}>
                We believe that modern marketing cannot rely on human effort alone. By combining deep marketing expertise with advanced automation and AI agents, we build systems that work 24/7. We don't just run campaigns; we build scalable digital infrastructure.
              </p>
            </div>

            <div style={{ padding: '3rem', backgroundColor: 'var(--surface-muted)', borderRadius: '1rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ready to work with us?</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Book a free growth audit and let's map out your AI strategy.</p>
              <Link href="/growth-audit">
                <Button size="lg" variant="primary">Book Your Free Audit</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
