import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/Button";
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="fade-in" style={{ 
      minHeight: '70vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '500px' }}>
        <AlertTriangle size={64} color="var(--primary)" style={{ margin: '0 auto 2rem' }} />
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Lost in the Growth Funnel?</h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>
          We can't find the page you're looking for. It might have been moved, deleted, or never existed in the first place.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/">
            <Button variant="primary">Return Home</Button>
          </Link>
          <Link href="/services">
            <Button variant="outline">View Services</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
