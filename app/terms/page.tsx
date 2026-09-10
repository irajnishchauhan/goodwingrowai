import React from 'react';

export const metadata = {
  title: "Terms of Service | Goodwin Grow AI",
};

export default function TermsPage() {
  return (
    <div className="fade-in container" style={{ padding: '6rem 1.5rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms of Service</h1>
      <div style={{ color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 style={{ color: 'var(--foreground)', fontSize: '1.5rem', marginTop: '1rem' }}>1. Agreement to Terms</h2>
        <p>By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
        
        <h2 style={{ color: 'var(--foreground)', fontSize: '1.5rem', marginTop: '1rem' }}>2. Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Goodwin Grow AI.</p>
        
        <h2 style={{ color: 'var(--foreground)', fontSize: '1.5rem', marginTop: '1rem' }}>3. Service Provision</h2>
        <p>We reserve the right to withdraw or amend our service, and any service or material we provide, in our sole discretion without notice.</p>

        <p style={{ marginTop: '2rem' }}>
          <em>Note: This is a placeholder Terms of Service. Please consult legal counsel to generate comprehensive terms.</em>
        </p>
      </div>
    </div>
  );
}
