import React from 'react';
import Link from 'next/link';
import { GoodwinLogo } from '../ui/GoodwinLogo';
import styles from './Footer.module.css';
import { siteConfig } from '@/lib/config';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className={styles.logo}>
            <GoodwinLogo variant="horizontal" theme="dark" />
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '300px' }}>
            India-first AI-powered growth partner. We combine performance marketing, automation, data, and AI to generate measurable business growth.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--foreground)' }}>Contact Us</h3>
          <a href="mailto:goodwingrow@gmail.com" style={{ color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none' }}>goodwingrow@gmail.com</a>
          <a href="tel:+919589531380" style={{ color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none' }}>+91 95895 31380</a>
          <a href="https://wa.me/919589531380" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 500 }}>Chat on WhatsApp</a>
          <span style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Mon-Fri, 9:00 AM - 6:00 PM IST</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--foreground)' }}>Services</h3>
          <Link href="/services" className={styles.link}>AI Marketing</Link>
          <Link href="/services" className={styles.link}>Performance Marketing</Link>
          <Link href="/services" className={styles.link}>SEO & Content</Link>
          <Link href="/services" className={styles.link}>AI Automation</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--foreground)' }}>Company</h3>
          <Link href="/about" className={styles.link}>About Us</Link>
          <Link href="/case-studies" className={styles.link}>Case Studies</Link>
          <Link href="/pricing" className={styles.link}>Pricing</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
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
