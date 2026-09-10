import React from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Megaphone, Search, Users, Zap, Globe, LineChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import styles from './ServicesOverview.module.css';

const services = [
  {
    icon: <Bot size={28} />,
    title: "AI Marketing",
    description: "AI-powered strategies, personalization and content systems designed to increase marketing efficiency and conversion.",
    deliverables: ["AI content systems", "Customer segmentation", "Personalization", "Marketing intelligence"],
    href: "/services/ai-marketing"
  },
  {
    icon: <Megaphone size={28} />,
    title: "Performance Marketing",
    description: "Data-driven Google and Meta Ads for optimized customer acquisition and predictable ROAS.",
    deliverables: ["Omnichannel campaigns", "A/B testing", "Retargeting", "Ad creative"],
    href: "/services/performance-marketing"
  },
  {
    icon: <Search size={28} />,
    title: "SEO & Content",
    description: "Technical SEO and programmatic content workflows to dominate search in the AI era.",
    deliverables: ["Technical audits", "Programmatic SEO", "AI Overview optimization", "Authority building"],
    href: "/services/seo-content"
  },
  {
    icon: <Users size={28} />,
    title: "Lead Generation",
    description: "High-converting funnels, landing pages, and CRM integrations to fill your sales pipeline.",
    deliverables: ["Funnel architecture", "Lead magnets", "B2B prospecting", "Landing pages"],
    href: "/services/lead-generation"
  },
  {
    icon: <Zap size={28} />,
    title: "AI Automation",
    description: "Workflow automation and AI agents that handle repetitive tasks and customer follow-ups.",
    deliverables: ["Sales agents", "Support chatbots", "Zapier/Make integration", "Data sync"],
    href: "/services/ai-automation"
  },
  {
    icon: <Globe size={28} />,
    title: "Website & Conversion",
    description: "Conversion-focused, high-performance websites built to turn traffic into revenue.",
    deliverables: ["CRO audits", "Next.js architecture", "Headless CMS", "A/B testing"],
    href: "/services/web-development"
  },
  {
    icon: <LineChart size={28} />,
    title: "Data & Analytics",
    description: "Marketing dashboards, full-funnel attribution, and actionable business intelligence.",
    deliverables: ["GA4 setup", "Custom dashboards", "Attribution modeling", "Data warehousing"],
    href: "/services/analytics"
  }
];

export const ServicesOverview = () => {
  return (
    <section className={`${styles.section} section-padding`} style={{ backgroundColor: 'var(--surface-muted)' }}>
      <div className={`container ${styles.container}`}>
        <div className={`section-header ${styles.header}`} style={{ marginBottom: '4rem' }}>
          <h2 className={`section-title ${styles.title}`}>Growth Systems, Not Just Campaigns.</h2>
          <p className={`section-subtitle ${styles.description}`}>
            We combine artificial intelligence with proven marketing strategies to build scalable revenue engines for your business.
          </p>
        </div>

        <div className={styles.grid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {services.map((service, idx) => (
            <Link key={idx} href={service.href} className={styles.cardLink} style={{ height: '100%' }}>
              <Card className={styles.card} style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <CardHeader>
                  <div className={styles.iconWrapper} style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{service.icon}</div>
                  <CardTitle style={{ fontSize: '1.5rem' }}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <p className={styles.cardDescription} style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
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
                  <div className={styles.learnMore} style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>
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
  );
};
