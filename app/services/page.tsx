import React from 'react';
import { ServicesOverview } from "@/components/marketing/ServicesOverview";

export const metadata = {
  title: "Services | Goodwin Grow AI",
  description: "Explore our AI-powered marketing and growth services.",
};

export default function ServicesPage() {
  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0 2rem', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Services</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted)' }}>
            We don't just market your business. We build AI-powered growth systems.
          </p>
        </div>
      </section>
      <ServicesOverview />
    </div>
  );
}
