import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Search, LineChart, PhoneCall } from 'lucide-react';

export const metadata = {
  title: "Thank You | Goodwin Grow AI",
  description: "Your Growth Audit request has been received.",
  robots: {
    index: false,
    follow: false
  }
};

export default function ThankYouPage() {
  return (
    <div className="fade-in">
      <section className="section-padding-large" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <CheckCircle2 size={80} color="var(--success)" style={{ margin: '0 auto 2rem' }} />
          <h1 className="section-title-large">Your Growth Audit Request Is In.</h1>
          <p className="section-subtitle">
            Our strategy team has received your details. We are assigning a growth director to review your business.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>What happens next?</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', backgroundColor: 'var(--surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
              <Search size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>1. We review your business</h3>
                <p style={{ color: 'var(--muted)' }}>Our team analyzes your website, current marketing channels, and industry landscape to find immediate growth bottlenecks.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', backgroundColor: 'var(--surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
              <LineChart size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>2. We prepare recommendations</h3>
                <p style={{ color: 'var(--muted)' }}>We map out a data-driven strategy leveraging AI and automation specific to your business model and revenue goals.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', backgroundColor: 'var(--surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
              <PhoneCall size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>3. We contact you</h3>
                <p style={{ color: 'var(--muted)' }}>Within 24-48 hours, we will reach out to schedule a brief discovery call to present our findings.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Want to skip the wait?</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>You can instantly book a time on our calendar for your discovery call.</p>
            {/* Placeholder for Calendly or booking link */}
            <Link href="/contact">
              <Button size="lg" variant="primary">Book a Discovery Call</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
