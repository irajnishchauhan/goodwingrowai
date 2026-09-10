import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Case Studies | Goodwin Grow AI",
  description: "Real results from our AI growth systems.",
};

export default function CaseStudiesPage() {
  // Creating a placeholder layout that is clearly marked
  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Client Results</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted)' }}>
            See how we've helped businesses transform their marketing with artificial intelligence.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          
          {/* Sample Growth Framework (No fake data) */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--foreground)' }}>Sample Growth Framework</h2>
            <Card style={{ backgroundColor: 'var(--surface)' }}>
              <CardContent style={{ padding: '3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                  
                  <div>
                    <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--primary)', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                      B2B SaaS Placeholder
                    </span>
                    <h3 style={{ fontSize: '2rem', marginTop: '1rem', marginBottom: '1.5rem' }}>Scaling Product Qualified Leads (PQL) via AI Automation</h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                      <div>
                        <strong style={{ color: 'var(--muted)', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>Challenge</strong>
                        <p style={{ fontSize: '0.875rem' }}>High top-of-funnel traffic, but extremely low conversion to qualified sales calls due to manual follow-up.</p>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--muted)', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>Strategy</strong>
                        <p style={{ fontSize: '0.875rem' }}>Implement AI conversational agents to instantly qualify traffic and automate CRM routing.</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                    <strong style={{ color: 'var(--foreground)', display: 'block', marginBottom: '1rem' }}>Key Metrics (Placeholder)</strong>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                      <div style={{ padding: '1rem', backgroundColor: 'var(--surface-muted)', borderRadius: '0.5rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--success)' }}>+XX%</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>Leads</div>
                      </div>
                      <div style={{ padding: '1rem', backgroundColor: 'var(--surface-muted)', borderRadius: '0.5rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>-XX%</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>CPL</div>
                      </div>
                      <div style={{ padding: '1rem', backgroundColor: 'var(--surface-muted)', borderRadius: '0.5rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)' }}>+XX%</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>Conversion</div>
                      </div>
                      <div style={{ padding: '1rem', backgroundColor: 'var(--surface-muted)', borderRadius: '0.5rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--foreground)' }}>+XX%</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>Revenue</div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </CardContent>
            </Card>
          </div>

          <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px dashed var(--border)', borderRadius: '1rem', backgroundColor: 'var(--surface-muted)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>More Case Studies Compiling...</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
              We are currently anonymizing client data from our latest AI growth system deployments.
            </p>
            <Link href="/growth-audit">
              <Button size="lg" variant="primary">Become Our Next Success Story</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
