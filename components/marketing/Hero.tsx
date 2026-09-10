import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { ArrowRight, Bot, LineChart, Megaphone, Users, Zap } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <SparklesIcon className={styles.badgeIcon} />
            <span>AI-Powered Growth Partner</span>
          </div>
          <h1 className={styles.title}>
            Grow Smarter.<br />
            Grow Faster.<br />
            <span className={styles.highlight}>Grow With AI.</span>
          </h1>
          <p className={styles.description}>
            Goodwin Grow AI helps businesses turn artificial intelligence, marketing, and automation into measurable growth.
          </p>
          <div className={styles.actions}>
            <Link href="/growth-audit">
              <Button size="lg" variant="primary">
                Book a Free Growth Audit
                <ArrowRight className={styles.btnIcon} size={18} />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.systemDiagram}>
            <div className={`${styles.node} ${styles.marketing}`}>
              <Megaphone className={styles.nodeIcon} />
              <span>Marketing</span>
            </div>
            <div className={styles.connector} />
            <div className={`${styles.node} ${styles.ai}`}>
              <Bot className={styles.nodeIcon} />
              <span>AI Core</span>
            </div>
            <div className={styles.connector} />
            <div className={`${styles.node} ${styles.automation}`}>
              <Zap className={styles.nodeIcon} />
              <span>Automation</span>
            </div>
            <div className={styles.connector} />
            <div className={`${styles.node} ${styles.leads}`}>
              <Users className={styles.nodeIcon} />
              <span>Leads</span>
            </div>
            <div className={styles.connector} />
            <div className={`${styles.node} ${styles.revenue}`}>
              <LineChart className={styles.nodeIcon} />
              <span>Revenue</span>
            </div>
            
            {/* Animated particles */}
            <div className={styles.particle} style={{ animationDelay: '0s' }} />
            <div className={styles.particle} style={{ animationDelay: '1.5s' }} />
            <div className={styles.particle} style={{ animationDelay: '3s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);
