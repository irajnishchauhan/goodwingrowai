import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/Button";

const steps = [
  { number: "01", title: "DISCOVER", description: "We start by deeply understanding your business, market, and current bottlenecks." },
  { number: "02", title: "AUDIT", description: "Our team performs a comprehensive AI and marketing audit to identify immediate growth opportunities." },
  { number: "03", title: "STRATEGIZE", description: "We create a custom growth roadmap detailing the systems, campaigns, and automation required." },
  { number: "04", title: "BUILD", description: "We implement the marketing infrastructure, technology stack, and AI systems." },
  { number: "05", title: "AUTOMATE", description: "We deploy AI agents and workflow automation to reduce repetitive work and accelerate lead processing." },
  { number: "06", title: "OPTIMIZE", description: "We continuously analyze data, run A/B tests, and refine the systems for maximum ROI." },
  { number: "07", title: "GROW", description: "Once the engine is running efficiently, we scale what works to drive exponential growth." }
];

export const metadata = {
  title: "How We Work | Goodwin Grow AI",
  description: "Our 7-step process to building AI-powered growth systems.",
};

export default function ProcessPage() {
  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>How We Work</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted)' }}>
            A systematic approach to predictable revenue growth.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '2rem', padding: '2rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem' }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--surface-muted)', lineHeight: 1 }}>
                  {step.number}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>{step.title}</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Ready to start step 01?</h3>
            <Link href="/growth-audit">
              <Button size="lg" variant="primary">Book a Free Growth Audit</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
