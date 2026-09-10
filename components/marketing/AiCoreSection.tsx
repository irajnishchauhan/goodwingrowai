import React from 'react';
import { Bot, LineChart, Cpu, Workflow, Target, Search } from 'lucide-react';

export const AiCoreSection = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--surface)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>AI Is Not The Service.</h2>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--primary)' }}>AI Is The Engine Behind The Service.</h2>
        
        <p style={{ fontSize: '1.125rem', color: 'var(--muted)', maxWidth: '800px', margin: '0 auto 4rem' }}>
          We don't just sell "AI chatbots". We integrate artificial intelligence deeply into every marketing function to give you an unfair advantage.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { title: "Research", icon: <Search /> },
            { title: "Strategy", icon: <Target /> },
            { title: "Content", icon: <Bot /> },
            { title: "Campaigns", icon: <LineChart /> },
            { title: "Lead Qual", icon: <Cpu /> },
            { title: "Automation", icon: <Workflow /> },
          ].map((item, idx) => (
            <div key={idx} style={{ 
              padding: '2rem', 
              backgroundColor: 'var(--surface-muted)', 
              borderRadius: '1rem',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{ color: 'var(--accent)' }}>{item.icon}</div>
              <strong style={{ color: 'var(--foreground)' }}>{item.title}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
