import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check } from 'lucide-react';

const plans = [
  {
    name: "AI GROWTH STARTER",
    description: "For businesses beginning their AI journey.",
    features: ["Marketing Audit", "Basic SEO Optimization", "1 AI Workflow Automation", "Monthly Reporting", "Email Support"],
    popular: false
  },
  {
    name: "AI GROWTH ENGINE",
    description: "For businesses ready to build acquisition + automation systems.",
    features: ["Everything in Starter", "Custom Lead Generation Funnel", "Paid Ads Management", "3 AI Workflow Automations", "CRM Integration", "Priority Support"],
    popular: true
  },
  {
    name: "AI GROWTH PARTNER",
    description: "For businesses wanting ongoing strategic growth support.",
    features: ["Everything in Engine", "Dedicated Growth Strategist", "Custom AI Agent Development", "Advanced Data Architecture", "Weekly Strategy Calls", "24/7 Priority Support"],
    popular: false
  }
];

export const metadata = {
  title: "Pricing | Goodwin Grow AI",
  description: "Pricing and packages for our AI growth services.",
};

export default function PricingPage() {
  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Transparent Growth Plans</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted)' }}>
            Every business is different. We recommend a custom plan after understanding your goals.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {plans.map((plan, idx) => (
              <Card key={idx} style={{ position: 'relative', borderColor: plan.popular ? 'var(--accent)' : 'var(--border)', display: 'flex', flexDirection: 'column' }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'var(--accent)', color: 'white', padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <p style={{ color: 'var(--muted)', fontSize: '0.875rem', minHeight: '2.5rem' }}>{plan.description}</p>
                </CardHeader>
                <CardContent style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
                        <Check size={16} color="var(--success)" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/book" style={{ width: '100%' }}>
                    <Button variant={plan.popular ? 'primary' : 'outline'} fullWidth>
                      Get a Custom Growth Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
