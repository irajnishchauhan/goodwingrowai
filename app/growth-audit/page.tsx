'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from 'lucide-react';

export default function GrowthAuditPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate CRM integration submission
    setTimeout(() => {
      setStatus('success');
      router.push('/thank-you');
    }, 1500);
  };

  return (
    <div className="fade-in">
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
          
          <div style={{ maxWidth: '600px' }}>
            <h1 className="section-title-large">Find What's Holding Your Growth Back.</h1>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Get a practical assessment of your marketing, website, acquisition and automation opportunities.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.125rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle color="var(--success)" size={20} /> 100% Free Analysis</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle color="var(--success)" size={20} /> Custom Growth Roadmap</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle color="var(--success)" size={20} /> No Pushy Sales Tactics</li>
            </ul>
          </div>

          <Card style={{ backgroundColor: 'var(--surface)' }}>
            <CardContent style={{ padding: '3rem' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Name *</label>
                    <Input required placeholder="Your name" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Business Name *</label>
                    <Input required placeholder="Company Inc." />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Email *</label>
                    <Input type="email" required placeholder="name@company.com" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Phone</label>
                    <Input type="tel" placeholder="+91 95895 31380" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Website URL *</label>
                    <Input type="url" required placeholder="https://" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Industry *</label>
                    <select required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.375rem', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                      <option value="">Select industry</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="ecommerce">D2C & E-commerce</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="technology">Technology & Startups</option>
                      <option value="local-business">Local Business</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Monthly Marketing Budget *</label>
                    <select required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.375rem', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under ₹10,000</option>
                      <option value="10k-50k">₹10,000 - ₹50,000</option>
                      <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                      <option value="1L-plus">₹1,00,000+</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Primary Growth Goal *</label>
                    <select required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.375rem', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                      <option value="">Select primary goal</option>
                      <option value="leads">Generate More Leads</option>
                      <option value="sales">Increase Sales / Revenue</option>
                      <option value="conversion">Improve Conversion Rate</option>
                      <option value="automation">Automate Operations / AI</option>
                      <option value="seo">Improve SEO / Organic Traffic</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Current Marketing Channels *</label>
                    <Input required placeholder="e.g. Meta Ads, Google Ads, SEO, Referrals" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Biggest Challenge Right Now *</label>
                    <textarea required placeholder="Briefly describe your biggest growth bottleneck..." rows={3} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.375rem', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--foreground)', fontFamily: 'inherit', resize: 'vertical' }} />
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'} style={{ marginTop: '1rem' }}>
                  {status === 'loading' ? 'Submitting Details...' : 'Get My Free Growth Audit'}
                </Button>
                <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center' }}>Your information is secure. We will contact you within 24 hours to schedule your audit presentation.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
