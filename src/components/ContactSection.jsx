import React from "react";
import styles from "../styles/ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <h2 className={styles.contactHeadline}>Reach Out</h2>
        <div className={styles.contactInfo}>
          <div>Conference Secretariat</div>
          <div>163 Woodlands Place</div>
          <div>Algies Bay, Rodney 0920</div>
          <div>123-456-7890</div>
          <div>
            <a href="mailto:hello@reallygreatsite.com" className={styles.contactLink}>hello@reallygreatsite.com</a>
          </div>
          <div>@reallygreatsite</div>
        </div>
        <button className={styles.contactButton}>RESERVE YOUR SEAT</button>
      </div>
      <div className={styles.contactImageWrapper}>
        {/* Use a different office/team Unsplash image for the contact area */}
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=facearea&w=500&h=500&q=80"
          alt="Office teamwork"
          className={styles.contactImage}
        />
      </div>
    </section>
  );
}
