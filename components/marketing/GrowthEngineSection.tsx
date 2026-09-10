import React from 'react';
import { ArrowDown, RotateCcw } from 'lucide-react';

export const GrowthEngineSection = () => {
  const steps = [
    "STRATEGY",
    "TRAFFIC",
    "LEADS",
    "CRM",
    "AUTOMATION",
    "CONVERSION",
    "RETENTION",
    "REVENUE"
  ];

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>One Growth Engine.<br/>Every Marketing Function Connected.</h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 4rem' }}>
          We don't just "run ads". We build a closed-loop system where data from your revenue feeds back into your strategy automatically.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', position: 'relative' }}>
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div style={{
                padding: '1rem 2rem',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                width: '100%',
                maxWidth: '300px',
                zIndex: 2
              }}>
                {step}
              </div>
              {idx < steps.length - 1 && (
                <ArrowDown color="var(--primary)" size={24} style={{ opacity: 0.5 }} />
              )}
            </React.Fragment>
          ))}

          {/* Feedback loop visualization */}
          <div style={{
            position: 'absolute',
            right: 'calc(50% - 150px)',
            top: '20px',
            bottom: '20px',
            width: '100px',
            borderRight: '2px dashed var(--accent)',
            borderTop: '2px dashed var(--accent)',
            borderBottom: '2px dashed var(--accent)',
            borderRadius: '0 20px 20px 0',
            zIndex: 1,
            opacity: 0.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '1rem'
          }}>
            <div style={{ transform: 'translateX(200px)', color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RotateCcw size={16} /> ANALYTICS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
