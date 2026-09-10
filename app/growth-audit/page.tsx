'use client';

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function GrowthAuditPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate CRM integration submission
    setTimeout(() => {
      setStatus('success');
    }, 2000);
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
              {status === 'success' ? (
                <div className="fade-in" style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle color="var(--success)" size={64} style={{ margin: '0 auto 1.5rem' }} />
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Audit Request Received!</h3>
                  <p style={{ color: 'var(--muted)' }}>Our strategy team will review your details and contact you within 24 hours to schedule your audit presentation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Name</label>
                      <Input required placeholder="Your name" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Business Name</label>
                      <Input required placeholder="Company Inc." />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Email</label>
                      <Input type="email" required placeholder="name@company.com" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Phone (Optional)</label>
                      <Input type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Website URL</label>
                      <Input type="url" required placeholder="https://" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Industry</label>
                      <select required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.375rem', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                        <option value="">Select industry</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="ecommerce">E-commerce / D2C</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="b2b-saas">B2B SaaS</option>
                        <option value="professional-services">Professional Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Monthly Marketing Budget</label>
                      <select required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.375rem', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                        <option value="">Select budget range</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-5k">$1,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-plus">$10,000+</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Primary Growth Goal</label>
                      <select required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.375rem', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                        <option value="">Select primary goal</option>
                        <option value="leads">Generate More Leads</option>
                        <option value="sales">Increase Sales</option>
                        <option value="conversion">Improve Website Conversion</option>
                        <option value="costs">Reduce Marketing Costs</option>
                        <option value="automation">Automate Operations</option>
                        <option value="seo">Improve SEO</option>
                        <option value="ads">Scale Paid Ads</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'} style={{ marginTop: '1rem' }}>
                    {status === 'loading' ? 'Analyzing Details...' : 'Get My Free Growth Audit'}
                  </Button>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center' }}>Your information is secure. We never sell data.</p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
