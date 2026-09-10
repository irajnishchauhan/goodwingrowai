'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function GrowthAuditPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="fade-in">
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Free AI Growth Audit</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)' }}>
            Find out how AI and automation can accelerate your business growth. Takes 2 minutes.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          {/* Progress Bar */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--muted)', fontWeight: 500 }}>
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}% Completed</span>
            </div>
            <div style={{ height: '8px', backgroundColor: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(step / totalSteps) * 100}%`, backgroundColor: 'var(--accent)', transition: 'width 0.3s ease' }} />
            </div>
          </div>

          <Card>
            <CardContent style={{ padding: '2rem' }}>
              {step === 1 && (
                <div className="fade-in">
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>1. Business Basics</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Website URL</label>
                      <Input placeholder="https://www.yourcompany.com" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Industry</label>
                      <select style={{ width: '100%', height: '2.5rem', borderRadius: '0.375rem', border: '1px solid var(--border)', padding: '0 0.75rem', backgroundColor: 'var(--surface)', color: 'var(--foreground)' }}>
                        <option>E-commerce</option>
                        <option>Professional Services</option>
                        <option>SaaS / Tech</option>
                        <option>Local Business</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="fade-in">
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>2. Current Marketing</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>What is your primary source of leads/sales today?</label>
                      <select style={{ width: '100%', height: '2.5rem', borderRadius: '0.375rem', border: '1px solid var(--border)', padding: '0 0.75rem', backgroundColor: 'var(--surface)', color: 'var(--foreground)' }}>
                        <option>Word of Mouth / Referrals</option>
                        <option>Organic Search (SEO)</option>
                        <option>Paid Ads (Google/Meta)</option>
                        <option>Outbound Sales</option>
                        <option>Social Media</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Are you currently using any AI tools in your business?</label>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="radio" name="ai-usage" /> Yes, extensively</label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="radio" name="ai-usage" /> Just ChatGPT occasionally</label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="radio" name="ai-usage" /> No, none at all</label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="fade-in">
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>3. Growth Goals</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>What is your #1 bottleneck right now?</label>
                      <select style={{ width: '100%', height: '2.5rem', borderRadius: '0.375rem', border: '1px solid var(--border)', padding: '0 0.75rem', backgroundColor: 'var(--surface)', color: 'var(--foreground)' }}>
                        <option>Not enough leads</option>
                        <option>Lead quality is poor</option>
                        <option>Too much manual, repetitive work</option>
                        <option>High customer acquisition cost (CAC)</option>
                        <option>Low website conversion rate</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="fade-in">
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>4. Get Your Results</h2>
                  <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>We'll generate your custom AI Growth Score and send you the detailed report.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                      <Input placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                      <Input type="email" placeholder="jane@company.com" />
                    </div>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                {step > 1 ? (
                  <Button variant="outline" onClick={prevStep}>Back</Button>
                ) : (
                  <div></div>
                )}
                
                {step < totalSteps ? (
                  <Button variant="primary" onClick={nextStep}>Next Step</Button>
                ) : (
                  <Button variant="primary">Generate My Growth Score</Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
