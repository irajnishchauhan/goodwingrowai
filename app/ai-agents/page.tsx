import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Bot, UserPlus, Headset, Search, PenTool, PhoneCall, BarChart, Settings } from 'lucide-react';

const agents = [
  {
    icon: <UserPlus size={32} />,
    title: "Lead Qualification Agent",
    description: "Engages website visitors 24/7, asks qualifying questions, and automatically routes high-intent leads to your sales CRM."
  },
  {
    icon: <Headset size={32} />,
    title: "Customer Support Agent",
    description: "Resolves tier-1 support queries instantly using your specific knowledge base, reducing ticket volume by up to 70%."
  },
  {
    icon: <Search size={32} />,
    title: "Marketing Research Agent",
    description: "Scrapes competitor websites and industry news to generate actionable positioning insights for your marketing team."
  },
  {
    icon: <PenTool size={32} />,
    title: "Content Agent",
    description: "Drafts hyper-personalized cold outreach emails and generates first-draft blog content based on your brand voice."
  },
  {
    icon: <PhoneCall size={32} />,
    title: "Sales Follow-up Agent",
    description: "Automates multi-touch email sequences to nurture dormant leads and schedule meetings on your calendar."
  },
  {
    icon: <BarChart size={32} />,
    title: "Reporting Agent",
    description: "Pulls data from Google Analytics, Meta Ads, and your CRM to deliver a plain-English performance summary every morning."
  },
  {
    icon: <Settings size={32} />,
    title: "Operations Agent",
    description: "Connects fragmented tools via API to automate data entry, invoice generation, and internal notifications."
  }
];

export const metadata = {
  title: "AI Agents for Business | Goodwin Grow AI",
  description: "Practical business automation systems designed to increase operational efficiency."
};

export default function AiAgentsPage() {
  return (
    <div className="fade-in">
      <section className="section-padding-large" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container section-header" style={{ marginBottom: 0 }}>
          <h1 className="section-title-large">Business Automation Systems. Not Toys.</h1>
          <p className="section-subtitle">
            We don't overpromise autonomous capabilities. We deploy practical, secure AI agents that handle repetitive tasks reliably.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {agents.map((agent, idx) => (
              <Card key={idx} style={{ backgroundColor: 'var(--surface)' }}>
                <CardContent style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
                  <div style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{agent.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--foreground)' }}>{agent.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.6, flexGrow: 1 }}>{agent.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div style={{ marginTop: '5rem', padding: '4rem 2rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Need a custom agent for your workflow?</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Our engineers can build and integrate bespoke AI models directly into your systems.</p>
            <Link href="/contact">
              <Button size="lg" variant="primary">Discuss Your Workflow</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
