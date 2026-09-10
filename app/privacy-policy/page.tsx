import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | Goodwin Grow AI",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="fade-in container" style={{ padding: '6rem 1.5rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
      <div style={{ color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 style={{ color: 'var(--foreground)', fontSize: '1.5rem', marginTop: '1rem' }}>1. Introduction</h2>
        <p>Welcome to Goodwin Grow AI. We respect your privacy and are committed to protecting your personal data.</p>
        
        <h2 style={{ color: 'var(--foreground)', fontSize: '1.5rem', marginTop: '1rem' }}>2. Data We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you, including Identity Data, Contact Data, Technical Data, and Usage Data.</p>
        
        <h2 style={{ color: 'var(--foreground)', fontSize: '1.5rem', marginTop: '1rem' }}>3. How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to, primarily to provide services, improve our website, and manage our relationship with you.</p>

        <p style={{ marginTop: '2rem' }}>
          <em>Note: This is a placeholder Privacy Policy. Please consult legal counsel to generate a comprehensive policy tailored to your jurisdiction.</em>
        </p>
      </div>
    </div>
  );
}
