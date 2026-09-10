import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const agents = [
  { name: "Marketing Agent", description: "Creates campaign ideas, content plans, and analyzes market trends.", status: "Available Now" },
  { name: "Lead Agent", description: "Engages and qualifies incoming leads via chat or email 24/7.", status: "Available Now" },
  { name: "Sales Agent", description: "Assists sales follow-up, drafts proposals, and handles objections.", status: "Custom Built" },
  { name: "Customer Support Agent", description: "Answers common customer questions and routes complex issues.", status: "Available Now" },
  { name: "Analytics Agent", description: "Explains business performance and generates actionable insights.", status: "Coming Soon" },
  { name: "Research Agent", description: "Performs deep market and competitor research on demand.", status: "Coming Soon" }
];

export const metadata = {
  title: "AI Agents | Goodwin Grow AI",
  description: "Deploy autonomous AI agents to handle marketing, sales, and support.",
};

export default function AiAgentsPage() {
  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>AI Agents for Business</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted)' }}>
            Digital employees that work 24/7 to scale your operations without increasing headcount.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {agents.map((agent, idx) => (
              <Card key={idx} style={{ position: 'relative' }}>
                <CardHeader>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CardTitle>{agent.name}</CardTitle>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 600, 
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '9999px',
                      backgroundColor: agent.status === 'Available Now' ? 'rgba(16, 185, 129, 0.1)' : 
                                     agent.status === 'Custom Built' ? 'rgba(37, 99, 235, 0.1)' : 'var(--surface-muted)',
                      color: agent.status === 'Available Now' ? 'var(--success)' : 
                             agent.status === 'Custom Built' ? 'var(--accent)' : 'var(--muted)'
                    }}>
                      {agent.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p style={{ color: 'var(--muted)' }}>{agent.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
