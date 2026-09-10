import React from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Megaphone, Search, Users, Zap, Globe, LineChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import styles from './ServicesOverview.module.css';

const services = [
  {
    icon: <Bot size={28} />,
    title: "AI Marketing",
    description: "AI-powered marketing strategy, personalization, and content systems.",
    href: "/services/ai-marketing"
  },
  {
    icon: <Megaphone size={28} />,
    title: "Performance Marketing",
    description: "Data-driven Google and Meta Ads for optimized customer acquisition.",
    href: "/services/performance-marketing"
  },
  {
    icon: <Search size={28} />,
    title: "SEO & Content",
    description: "Technical SEO and AI-assisted content workflows to dominate search.",
    href: "/services/seo-content"
  },
  {
    icon: <Users size={28} />,
    title: "Lead Generation",
    description: "High-converting funnels, landing pages, and CRM integrations.",
    href: "/services/lead-generation"
  },
  {
    icon: <Zap size={28} />,
    title: "AI Automation",
    description: "Workflow automation, AI agents, and customer support intelligence.",
    href: "/services/ai-automation"
  },
  {
    icon: <Globe size={28} />,
    title: "Website & Digital",
    description: "Conversion-focused, AI-enabled websites built for performance.",
    href: "/services/web-development"
  },
  {
    icon: <LineChart size={28} />,
    title: "Data & Analytics",
    description: "Marketing dashboards, attribution, and business intelligence.",
    href: "/services/analytics"
  }
];

export const ServicesOverview = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Growth Systems, Not Just Campaigns.</h2>
          <p className={styles.description}>
            We combine artificial intelligence with proven marketing strategies to build scalable revenue engines for your business.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, idx) => (
            <Link key={idx} href={service.href} className={styles.cardLink}>
              <Card className={styles.card}>
                <CardHeader>
                  <div className={styles.iconWrapper}>{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={styles.cardDescription}>{service.description}</p>
                  <div className={styles.learnMore}>
                    <span>Learn more</span>
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
