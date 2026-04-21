'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import styles from './Header.module.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="14,3 26,24 2,24" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round" />
          </svg>
        <span className={styles.logoText}>Prism Labs</span>
      </Link>

    </header>
  );
}
