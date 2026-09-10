import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowRight, Bot, Megaphone, Search, Users, Zap, Globe, LineChart } from 'lucide-react';

const servicesList = [
  {
    icon: <Bot size={28} />,
    title: "AI Marketing",
    slug: "ai-marketing",
    description: "AI-powered strategies, personalization and content systems designed to increase marketing efficiency and conversion.",
    deliverables: ["AI content systems", "Customer segmentation", "Personalization", "Marketing intelligence"]
  },
  {
    icon: <Megaphone size={28} />,
    title: "Performance Marketing",
    slug: "performance-marketing",
    description: "Data-driven Google and Meta Ads for optimized customer acquisition and predictable ROAS.",
    deliverables: ["Omnichannel campaigns", "A/B testing", "Retargeting", "Ad creative"]
  },
  {
    icon: <Search size={28} />,
    title: "SEO & Content",
    slug: "seo-content",
    description: "Technical SEO and programmatic content workflows to dominate search in the AI era.",
    deliverables: ["Technical audits", "Programmatic SEO", "AI Overview optimization", "Authority building"]
  },
  {
    icon: <Users size={28} />,
    title: "Lead Generation",
    slug: "lead-generation",
    description: "High-converting funnels, landing pages, and CRM integrations to fill your sales pipeline.",
    deliverables: ["Funnel architecture", "Lead magnets", "B2B prospecting", "Landing pages"]
  },
  {
    icon: <Zap size={28} />,
    title: "AI Automation",
    slug: "ai-automation",
    description: "Workflow automation and AI agents that handle repetitive tasks and customer follow-ups.",
    deliverables: ["Sales agents", "Support chatbots", "Zapier/Make integration", "Data sync"]
  },
  {
    icon: <Globe size={28} />,
    title: "Website & Conversion",
    slug: "web-development",
    description: "Conversion-focused, high-performance websites built to turn traffic into revenue.",
    deliverables: ["CRO audits", "Next.js architecture", "Headless CMS", "A/B testing"]
  },
  {
    icon: <LineChart size={28} />,
    title: "Data & Analytics",
    slug: "analytics",
    description: "Marketing dashboards, full-funnel attribution, and actionable business intelligence.",
    deliverables: ["GA4 setup", "Custom dashboards", "Attribution modeling", "Data warehousing"]
  }
];

export const metadata = {
  title: "AI Marketing Services | Goodwin Grow AI",
  description: "Explore our AI-powered marketing, automation, and lead generation services designed to build scalable growth engines."
};

export default function ServicesPage() {
  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Growth Systems, Not Just Campaigns.</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted)' }}>
            We combine artificial intelligence with proven marketing strategies to build scalable revenue engines for your business.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {servicesList.map((service, idx) => (
              <Link key={idx} href={`/services/${service.slug}`} style={{ height: '100%', display: 'block' }}>
                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface)' }}>
                  <CardHeader>
                    <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{service.icon}</div>
                    <CardTitle style={{ fontSize: '1.5rem' }}>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                      {service.description}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--foreground)' }}>
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent)', borderRadius: '50%' }}></div>
                          {del}
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                      <span>Explore Service</span>
                      <ArrowRight size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
