import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Case Studies | Goodwin Grow AI",
  description: "Real results from our AI growth systems.",
};

export default function CaseStudiesPage() {
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
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ padding: '4rem 2rem', border: '1px dashed var(--border)', borderRadius: '1rem', backgroundColor: 'var(--surface)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', marginBottom: '1.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Case Studies Coming Soon</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
              We are currently compiling data and anonymizing metrics from our latest client successes. Check back soon for detailed breakdowns of our AI growth systems in action.
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
