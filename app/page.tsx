'use client';

import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { ScrollHighlightText } from '@/components/ScrollHighlightText';
import styles from './page.module.css';

const howItWorksSteps = [
  {
    number: '01',
    title: 'Tomorrow',
    description:
      'A platform built for digital creators, giving them the tools and infrastructure to grow, manage, and monetise their content with ease.'
  }
];

export default function Home() {
  const [hiwVisible, setHiwVisible] = useState(false);
  const [trustVisible, setTrustVisible] = useState(false);
  const hiwRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === hiwRef.current) setHiwVisible(true);
            if (entry.target === trustRef.current) setTrustVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (hiwRef.current) observer.observe(hiwRef.current);
    if (trustRef.current) observer.observe(trustRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <Header />

      {/* ─── Hero ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroBgImage} />
          <div className={styles.heroBgOverlay} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.scrollHint}>/ Scroll down</p>

          <div className={styles.heroTextBlock}>
            <h1 className={styles.heroHeadline}>
              We build software<br />& digital products.<br />
            </h1>

            <div className={styles.heroActions}>
              <a href="mailto:nitinmittal44066@gmail.com" className={styles.heroComingSoon}>Work with us</a>
            </div>
          </div>

        </div>
      </section>

      {/* ─── About / What ─── */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutInner}>
          <h5 className={styles.sectionLabel}>WHAT</h5>
          <div className={styles.aboutDivider} />
          <ScrollHighlightText
            text="PrismLabs is a software studio. We partner with businesses to design and build websites, web apps, and digital products, turning ideas into fast, reliable, and beautifully crafted software."
            className={styles.aboutHeadline}
          />
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className={styles.hiwSection} id="how-it-works" ref={hiwRef}>
        <div className={styles.hiwInner}>
          <div className={styles.hiwLeft}>
            <h5 className={styles.sectionLabel}>Products</h5>
            <h2 className={styles.hiwHeadline}>
              Our latest work.{' '}
              <span className={styles.accentOrange}>built with purpose.</span>
            </h2>
          </div>

          <div className={styles.hiwRight}>
            <div className={styles.hiwCards}>
              {howItWorksSteps.map((step, i) => (
                <div
                  key={step.number}
                  className={`${styles.hiwCard} ${hiwVisible ? styles.hiwCardVisible : ''}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <h3 className={styles.hiwCardTitle}>{step.title}</h3>
                  <p className={styles.hiwCardDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLeft}>
            <div className={styles.footerBrand}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="14,3 26,24 2,24" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round" />
                </svg>
              <span className={styles.footerBrandName}>Prism Labs</span>
            </div>
          </div>

          <div className={styles.footerRight}>
            <nav className={styles.footerNav}>
              <span className={styles.footerLink}>CWS-1V-227261
                26th Floor, <br/>Amber Gem Tower, Ajman <br/> +971-588935929 </span>
            </nav>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span className={styles.footerCopyright}>© {new Date().getFullYear()} Prism Labs FZE LLC.</span>
        </div>
      </footer>
    </div>
  );
}
