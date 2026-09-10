'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { GoodwinLogo } from '../ui/GoodwinLogo';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle body scroll locking and Escape key
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <GoodwinLogo variant="horizontal" theme="dark" size="md" className="logo-reveal" />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/industries" className={styles.navLink}>Industries</Link>
          <Link href="/process" className={styles.navLink}>How We Work</Link>
          <Link href="/pricing" className={styles.navLink}>Pricing</Link>
          <Link href="/blog" className={styles.navLink}>Resources</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/growth-audit">
            <Button variant="primary" size="sm">Free Growth Audit</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className={`${styles.mobileOverlay} fade-in`} role="dialog" aria-modal="true">
          <Link href="/services" className={styles.mobileLink} onClick={closeMenu}>Services</Link>
          <Link href="/industries" className={styles.mobileLink} onClick={closeMenu}>Industries</Link>
          <Link href="/process" className={styles.mobileLink} onClick={closeMenu}>How We Work</Link>
          <Link href="/pricing" className={styles.mobileLink} onClick={closeMenu}>Pricing</Link>
          <Link href="/blog" className={styles.mobileLink} onClick={closeMenu}>Resources</Link>
          <Link href="/contact" className={styles.mobileLink} onClick={closeMenu}>Contact</Link>
          
          <div style={{ marginTop: '2rem' }}>
            <Link href="/growth-audit" onClick={closeMenu}>
              <Button variant="primary" size="lg">Free Growth Audit</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
