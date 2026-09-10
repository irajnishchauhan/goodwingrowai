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
      <section className="section-padding-large" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container section-header" style={{ marginBottom: 0 }}>
          <h1 className="section-title-large">Client Results</h1>
          <p className="section-subtitle">
            See how we've helped businesses transform their marketing with artificial intelligence.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          
          {/* Growth Experiments / Sample Case Studies */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--foreground)' }}>Growth Experiments & Methodologies</h2>
            <Card style={{ backgroundColor: 'var(--surface)', marginBottom: '2rem' }}>
              <CardContent style={{ padding: '3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                  
                  <div>
                    <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--primary)', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                      Methodology Case Study: B2B SaaS
                    </span>
                    <h3 style={{ fontSize: '2rem', marginTop: '1rem', marginBottom: '1.5rem' }}>Scaling Product Qualified Leads (PQL) via AI Automation</h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                      <div>
                        <strong style={{ color: 'var(--muted)', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>The Challenge</strong>
                        <p style={{ fontSize: '0.875rem' }}>High top-of-funnel traffic, but extremely low conversion to qualified sales calls due to slow, manual follow-up from the SDR team.</p>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--muted)', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>The Goodwin Strategy</strong>
                        <p style={{ fontSize: '0.875rem' }}>Implement AI conversational agents to instantly qualify traffic, route high-intent leads to Calendly, and nurture low-intent leads via automated email sequences.</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                    <strong style={{ color: 'var(--foreground)', display: 'block', marginBottom: '1rem' }}>Target Metrics for this Framework</strong>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                      <div style={{ padding: '1.5rem', backgroundColor: 'var(--surface-muted)', borderRadius: '0.5rem' }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--foreground)' }}>Lead Response Time</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>Reduced from hours to seconds</div>
                      </div>
                      <div style={{ padding: '1.5rem', backgroundColor: 'var(--surface-muted)', borderRadius: '0.5rem' }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--foreground)' }}>Qualification Rate</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>100% automated accuracy</div>
                      </div>
                      <div style={{ padding: '1.5rem', backgroundColor: 'var(--surface-muted)', borderRadius: '0.5rem' }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--foreground)' }}>Cost Per Lead (CPL)</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>Optimized through conversion lift</div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </CardContent>
            </Card>

            <Card style={{ backgroundColor: 'var(--surface)' }}>
              <CardContent style={{ padding: '3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                  
                  <div>
                    <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--primary)', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                      Methodology Case Study: E-Commerce
                    </span>
                    <h3 style={{ fontSize: '2rem', marginTop: '1rem', marginBottom: '1.5rem' }}>Predictive Analytics for Customer Retention</h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                      <div>
                        <strong style={{ color: 'var(--muted)', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>The Challenge</strong>
                        <p style={{ fontSize: '0.875rem' }}>High customer acquisition cost (CAC) on Meta Ads, but low lifetime value (LTV) due to poor post-purchase engagement.</p>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--muted)', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>The Goodwin Strategy</strong>
                        <p style={{ fontSize: '0.875rem' }}>Deploy a predictive churn model to identify at-risk customers, triggering personalized AI-generated win-back offers via WhatsApp and Email.</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </CardContent>
            </Card>
          </div>

          <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px dashed var(--border)', borderRadius: '1rem', backgroundColor: 'var(--surface-muted)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Looking for specific industry data?</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
              We custom-build strategies based on your unique data architecture. Book an audit to see how these methodologies apply to your business.
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
