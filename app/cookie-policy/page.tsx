import React from 'react';

export const metadata = {
  title: "Cookie Policy | Goodwin Grow AI",
};

export default function CookiePolicyPage() {
  return (
    <div className="fade-in container" style={{ padding: '6rem 1.5rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Cookie Policy</h1>
      <div style={{ color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 style={{ color: 'var(--foreground)', fontSize: '1.5rem', marginTop: '1rem' }}>1. What Are Cookies</h2>
        <p>Cookies are small pieces of text sent to your web browser by a website you visit. They help the website remember information about your visit.</p>
        
        <h2 style={{ color: 'var(--foreground)', fontSize: '1.5rem', marginTop: '1rem' }}>2. How We Use Cookies</h2>
        <p>We use cookies for various purposes, including ensuring our website functions correctly, analyzing site traffic, and personalizing content and ads.</p>

        <p style={{ marginTop: '2rem' }}>
          <em>Note: This is a placeholder Cookie Policy.</em>
        </p>
      </div>
    </div>
  );
}
