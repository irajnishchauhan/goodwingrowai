import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from 'lucide-react';

const packages = [
  {
    name: "STARTER",
    description: "For businesses establishing their digital growth engine.",
    price: "Starting from ₹XX,XXX/mo",
    features: [
      "Website & Conversion Audit",
      "Basic SEO Configuration",
      "Performance Marketing Setup",
      "Monthly Reporting Dashboard"
    ],
    highlight: false
  },
  {
    name: "GROWTH",
    description: "For businesses actively scaling acquisition.",
    price: "Custom Pricing",
    features: [
      "Everything in Starter",
      "AI Content Generation System",
      "Omnichannel Ad Management",
      "CRM & Lead Gen Integration",
      "A/B Testing & Optimization",
      "Bi-Weekly Strategy Calls"
    ],
    highlight: true
  },
  {
    name: "SCALE",
    description: "For businesses requiring integrated marketing, AI, and automation.",
    price: "Custom Pricing",
    features: [
      "Everything in Growth",
      "Custom AI Conversational Agents",
      "Advanced Sales Automation Workflows",
      "Predictive Analytics & Attribution",
      "Dedicated Growth Director",
      "Priority 24/7 Support"
    ],
    highlight: false
  }
];

export const metadata = {
  title: "Pricing Packages | Goodwin Grow AI",
  description: "Explore our Starter, Growth, and Scale packages designed to fit your business objectives."
};

export default function PricingPage() {
  return (
    <div className="fade-in">
      <section className="section-padding-large" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container section-header" style={{ marginBottom: 0 }}>
          <h1 className="section-title-large">Growth Engineered for Your Stage.</h1>
          <p className="section-subtitle">
            We don't do cookie-cutter subscriptions. We build service packages tailored to your specific acquisition and automation needs.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            {packages.map((pkg, idx) => (
              <Card key={idx} style={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                backgroundColor: 'var(--surface)',
                border: pkg.highlight ? '2px solid var(--primary)' : '1px solid var(--border)',
                transform: pkg.highlight ? 'scale(1.02)' : 'none',
                position: 'relative'
              }}>
                {pkg.highlight && (
                  <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                    MOST POPULAR
                  </div>
                )}
                <CardHeader style={{ padding: '2.5rem 2rem 1.5rem' }}>
                  <CardTitle style={{ fontSize: '1.25rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>{pkg.name}</CardTitle>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--foreground)', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    {pkg.price}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{pkg.description}</p>
                </CardHeader>
                <CardContent style={{ padding: '0 2rem 2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--foreground)' }}>
                        <CheckCircle2 size={18} color="var(--success)" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/growth-audit" style={{ width: '100%' }}>
                    <Button variant={pkg.highlight ? "primary" : "outline"} style={{ width: '100%' }}>Build My Growth Plan</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Need something completely bespoke?</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>We offer Custom Growth Plans for enterprise requirements.</p>
            <Link href="/contact">
              <Button variant="outline">Contact Enterprise Sales</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
