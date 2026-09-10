import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { ArrowRight, Bot, TrendingUp, Users } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.content} fade-up`}>
          <div className={styles.eyebrow}>
            <Bot size={16} />
            AI-POWERED MARKETING & GROWTH PARTNER
          </div>
          <h1 className={styles.title}>
            Grow Smarter.<br />
            Grow Faster.<br />
            <span className={styles.highlight}>Grow With AI.</span>
          </h1>
          <p className={styles.description}>
            We combine AI, performance marketing, automation and analytics to build growth systems that generate more leads, customers and revenue.
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
          <div className={styles.trustText}>
            <span>No long-term commitment</span> • <span>Strategy-first</span> • <span>Measurable outcomes</span>
          </div>
        </div>

        <div className={`${styles.visual} fade-in`}>
          <div className={styles.dashboard}>
            
            {/* SVG Lines Connecting Cards */}
            <svg className={styles.linesOverlay} viewBox="0 0 500 500">
              <path className={styles.path} d="M150,150 Q300,150 350,250 T250,400" />
              <path className={styles.animatedPath} d="M150,150 Q300,150 350,250 T250,400" />
            </svg>

            {/* Traffic Node */}
            <div className={`${styles.card} ${styles.trafficCard}`}>
              <div className={styles.label}>Traffic</div>
              <div className={styles.metric}>
                <TrendingUp size={20} color="var(--secondary)" />
                24.5k
              </div>
            </div>

            {/* AI Processing Node */}
            <div className={`${styles.card} ${styles.leadsCard}`}>
              <div className={styles.label}>AI Qualified Leads</div>
              <div className={styles.metric}>
                <Bot size={20} color="var(--primary)" />
                842
              </div>
              <div className={styles.trend}>+34% this month</div>
            </div>

            {/* Revenue Node */}
            <div className={`${styles.card} ${styles.revenueCard}`}>
              <div className={styles.label}>Revenue Generated</div>
              <div className={styles.metric}>
                <Users size={20} color="var(--accent)" />
                $128k
              </div>
              <div className={styles.trend}>Automated close</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
