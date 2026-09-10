import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Bot, Lightbulb, AlertTriangle } from 'lucide-react';

export default function AiInsightsPage() {
  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>AI Growth Insights</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '3rem', fontSize: '1.125rem' }}>
        Actionable business intelligence generated automatically from your CRM and analytics data.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Card style={{ borderLeft: '4px solid var(--success)' }}>
          <CardHeader style={{ paddingBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Bot color="var(--success)" />
              <CardTitle>Conversion Opportunity</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p style={{ color: 'var(--foreground)' }}>
              "Most leads are coming from organic search, but the Website Audit tool has a 42% higher conversion rate to booked calls. Consider placing the Audit CTA prominently on high-traffic blog posts."
            </p>
          </CardContent>
        </Card>

        <Card style={{ borderLeft: '4px solid var(--accent)' }}>
          <CardHeader style={{ paddingBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Lightbulb color="var(--accent)" />
              <CardTitle>Service Demand</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p style={{ color: 'var(--foreground)' }}>
              "Growth audit submissions show a 3x increase in demand for 'AI Automation' over the last 30 days. You may want to increase ad spend on this category."
            </p>
          </CardContent>
        </Card>

        <Card style={{ borderLeft: '4px solid var(--warning)' }}>
          <CardHeader style={{ paddingBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <AlertTriangle color="var(--warning)" />
              <CardTitle>Action Required</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p style={{ color: 'var(--foreground)' }}>
              "There are 5 'Qualified' leads in the system that have not received a follow-up in the last 48 hours. Consider automating an initial touchpoint via the Sales Agent."
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
