import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { siteConfig } from '@/lib/config';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Goodwin Grow AI" width={200} height={40} className={styles.logoImage} />
          </Link>
          <p className={styles.description}>
            AI-powered marketing and growth systems for ambitious businesses.
          </p>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Company</h4>
          <Link href="/about" className={styles.link}>About Us</Link>
          <Link href="/process" className={styles.link}>How We Work</Link>
          <Link href="/pricing" className={styles.link}>Pricing</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Services</h4>
          <Link href="/services/ai-marketing" className={styles.link}>AI Marketing</Link>
          <Link href="/services/performance-marketing" className={styles.link}>Performance Marketing</Link>
          <Link href="/services/seo-content" className={styles.link}>SEO & Content</Link>
          <Link href="/services/lead-generation" className={styles.link}>Lead Generation</Link>
          <Link href="/services/ai-automation" className={styles.link}>AI Automation</Link>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Industries</h4>
          <Link href="/industries#healthcare" className={styles.link}>Healthcare</Link>
          <Link href="/industries#ecommerce" className={styles.link}>D2C & E-commerce</Link>
          <Link href="/industries#b2b" className={styles.link}>Professional Services</Link>
          <Link href="/industries" className={styles.link}>View All</Link>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Resources</h4>
          <Link href="/blog" className={styles.link}>Blog</Link>
          <Link href="/case-studies" className={styles.link}>Case Studies</Link>
          <Link href="/ai-agents" className={styles.link}>AI Agents</Link>
          <Link href="/tools/website-audit" className={styles.link}>Website Audit</Link>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {new Date().getFullYear()} Goodwin Grow AI. All rights reserved.</p>
        <div className={styles.legal}>
          <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
          <Link href="/terms" className={styles.link}>Terms of Service</Link>
          <Link href="/cookie-policy" className={styles.link}>Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};
