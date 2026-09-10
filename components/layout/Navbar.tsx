import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';
import { Sparkles } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Sparkles className={styles.logoIcon} />
          <span>Goodwin Grow AI</span>
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/industries" className={styles.navLink}>Industries</Link>
          <Link href="/process" className={styles.navLink}>Process</Link>
          <Link href="/pricing" className={styles.navLink}>Pricing</Link>
          <Link href="/resources" className={styles.navLink}>Resources</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/growth-audit">
            <Button variant="primary" size="sm">Free Growth Audit</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
