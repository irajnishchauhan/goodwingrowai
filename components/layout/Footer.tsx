import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Sparkles className={styles.logoIcon} />
            <span>Goodwin Grow AI</span>
          </Link>
          <p className={styles.description}>
            AI-powered marketing and growth services. We turn artificial intelligence, marketing, and automation into measurable growth.
          </p>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Company</h4>
          <Link href="/about" className={styles.link}>About Us</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
          <Link href="/process" className={styles.link}>How We Work</Link>
          <Link href="/pricing" className={styles.link}>Pricing</Link>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Services</h4>
          <Link href="/services/ai-marketing" className={styles.link}>AI Marketing</Link>
          <Link href="/services/lead-generation" className={styles.link}>Lead Generation</Link>
          <Link href="/services/ai-automation" className={styles.link}>AI Automation</Link>
          <Link href="/services/seo-content" className={styles.link}>SEO & Content</Link>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Resources</h4>
          <Link href="/blog" className={styles.link}>Blog</Link>
          <Link href="/ai-agents" className={styles.link}>AI Agents</Link>
          <Link href="/case-studies" className={styles.link}>Case Studies</Link>
          <Link href="/tools/website-audit" className={styles.link}>Website Audit</Link>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {new Date().getFullYear()} Goodwin Grow AI. All rights reserved.</p>
        <div className={styles.legal}>
          <Link href="#" className={styles.link}>Privacy Policy</Link>
          <Link href="#" className={styles.link}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
