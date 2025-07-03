import React from "react";
import styles from "../styles/HeroSection.module.css";

// Office meeting photo: you can replace this Unsplash URL with another image if you'd like
envexport default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Selling online is vital to business growth.
        </h1>
        <h2 className={styles.heroSubtitle}>2025 Grow Your e-Commerce Conference</h2>
        <div className={styles.heroInfo}>
          <div>September 16–18, 2025</div>
          <div>Paragon One Plaza and Sky Garden</div>
        </div>
        <button className={styles.heroButton}>
          BOOK NOW FOR EARLY BIRD PRICES
        </button>
      </div>
      <div className={styles.heroImageWrapper}>
        {/* Replace the URL if preferred, use a sharp square crop of a business meeting */}
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=500&h=500&q=80"
          alt="Diverse office meeting"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}
