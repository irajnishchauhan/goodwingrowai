import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const industries = [
  { name: "Startups", challenge: "Rapid customer acquisition with limited budgets." },
  { name: "E-commerce", challenge: "Increasing ROAS and customer lifetime value." },
  { name: "Local Businesses", challenge: "Dominating local search and generating qualified foot traffic." },
  { name: "Professional Services", challenge: "Building authority and generating high-ticket leads." },
  { name: "B2B", challenge: "Complex sales cycles and account-based marketing." },
  { name: "Real Estate", challenge: "Automating lead follow-ups and property inquiries." }
];

export const metadata = {
  title: "Industries | Goodwin Grow AI",
  description: "AI marketing solutions tailored for your industry.",
};

export default function IndustriesPage() {
  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Industries We Serve</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted)' }}>
            AI growth systems tailored to the unique challenges of your market.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {industries.map((ind, idx) => (
              <Card key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                <CardHeader>
                  <CardTitle>{ind.name}</CardTitle>
                </CardHeader>
                <CardContent style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--foreground)', fontSize: '0.875rem' }}>The Challenge:</strong>
                    <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>{ind.challenge}</p>
                  </div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--accent)', fontSize: '0.875rem' }}>The AI Opportunity:</strong>
                    <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Automated workflows, predictive analytics, and personalized campaigns at scale.</p>
                  </div>
                  <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <Link href={`/industries/${ind.name.toLowerCase().replace(/ /g, '-')}`}>
                      <Button variant="outline" fullWidth>View Solutions</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
