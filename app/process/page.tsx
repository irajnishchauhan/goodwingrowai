import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/Button";

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Understand the business, customer and growth bottlenecks.",
  },
  {
    num: "02",
    title: "Strategize",
    description: "Build a data-backed growth roadmap.",
  },
  {
    num: "03",
    title: "Build",
    description: "Deploy campaigns, websites, automation and AI systems.",
  },
  {
    num: "04",
    title: "Launch",
    description: "Put the growth engine into market.",
  },
  {
    num: "05",
    title: "Measure",
    description: "Track leads, conversions, CAC and revenue.",
  },
  {
    num: "06",
    title: "Optimize",
    description: "Continuously improve performance using data and AI.",
  }
];

export const metadata = {
  title: "How We Work | Goodwin Grow AI",
  description: "From strategy to scale. See our proven 6-step process for building predictable AI growth engines."
};

export default function ProcessPage() {
  return (
    <div className="fade-in">
      <section className="section-padding-large" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container section-header" style={{ marginBottom: 0 }}>
          <h1 className="section-title-large">From Strategy To Scale.</h1>
          <p className="section-subtitle">
            We don't do random acts of marketing. We execute a disciplined, 6-step engineering process to build your growth system.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', backgroundColor: 'var(--border)', zIndex: 0 }}></div>

            {steps.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '2rem', marginBottom: idx !== steps.length - 1 ? '4rem' : '0', position: 'relative', zIndex: 1 }}>
                
                {/* Number Circle */}
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--surface)', 
                  border: '2px solid var(--primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: 'var(--primary)',
                  flexShrink: 0
                }}>
                  {step.num}
                </div>

                {/* Content */}
                <div style={{ paddingTop: '0.5rem', paddingBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--foreground)' }}>Step {step.num} — {step.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '1.125rem', lineHeight: 1.6 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '6rem', textAlign: 'center', padding: '3rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready for Step 01?</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Book your free growth audit to start the discovery process today.</p>
            <Link href="/growth-audit">
              <Button size="lg" variant="primary">Book a Free Growth Audit</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
