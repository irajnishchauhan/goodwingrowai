import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const problems = [
  "Leads are inconsistent",
  "Marketing data is scattered",
  "Ad spend isn't predictable",
  "Follow-ups are manual",
  "Teams waste time on repetitive work",
  "Website traffic doesn't convert",
  "Businesses don't know which channels actually drive revenue"
];

export const ProblemSection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Your Marketing Shouldn't Feel Like Guesswork.</h2>
          <p className="section-subtitle">
            Most businesses struggle because their acquisition efforts are disconnected.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Problems List */}
          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--danger)' }}>The Broken Model</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {problems.map((problem, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--muted)' }}>
                  <XCircle size={20} color="var(--danger)" style={{ flexShrink: 0 }} />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent)' }}>We Build The System Behind The Growth.</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--foreground)' }}>
            Strategy → Acquisition → Conversion → Automation → Analytics → Optimization
          </p>
        </div>
      </div>
    </section>
  );
};
