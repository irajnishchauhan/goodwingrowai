import React from 'react';
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Book a Consultation | Goodwin Grow AI",
  description: "Schedule a time to speak with an AI Growth Expert.",
};

export default function BookPage() {
  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Book a Consultation</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--muted)' }}>
              Choose a time to speak with one of our AI Growth Experts about scaling your business.
            </p>
          </div>

          <Card>
            <CardContent style={{ paddingTop: '1.5rem' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Full Name</label>
                  <Input placeholder="Jane Doe" required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Company Name</label>
                  <Input placeholder="Acme Inc." required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Work Email</label>
                  <Input type="email" placeholder="jane@acme.com" required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Primary Interest</label>
                  <select style={{ width: '100%', height: '2.5rem', borderRadius: '0.375rem', border: '1px solid var(--border)', padding: '0 0.75rem', backgroundColor: 'var(--surface)', color: 'var(--foreground)' }}>
                    <option>AI Marketing</option>
                    <option>Performance Marketing</option>
                    <option>SEO & Content</option>
                    <option>Lead Generation</option>
                    <option>AI Automation</option>
                    <option>Website & Digital</option>
                    <option>Data & Analytics</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Tell us about your current challenges</label>
                  <textarea 
                    rows={4} 
                    style={{ width: '100%', borderRadius: '0.375rem', border: '1px solid var(--border)', padding: '0.5rem 0.75rem', fontFamily: 'inherit', resize: 'vertical' }}
                  />
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <Button type="button" variant="primary" size="lg" fullWidth>Request Consultation</Button>
                </div>
                <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)' }}>
                  By submitting this form, you agree to our Privacy Policy.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
