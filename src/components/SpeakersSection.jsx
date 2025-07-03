import React from "react";
import styles from "../styles/SpeakersSection.module.css";

// These Unsplash images should be replaced with portraits that suit your needs
const speakers = [
  {
    name: "Leslie Boatwright",
    role: "Head of Marketing",
    company: "The Hobbibox",
    date: "September 16",
    image:
      "https://randomuser.me/api/portraits/women/43.jpg", // Replace as needed
  },
  {
    name: "Nicholas Newark",
    role: "Director of Design",
    company: "Studio Ralla",
    date: "September 17",
    image:
      "https://randomuser.me/api/portraits/men/65.jpg", // Replace as needed
  },
  {
    name: "Kin Gyun",
    role: "Founder and CEO",
    company: "The Treasurebox Online",
    date: "September 18",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg", // Replace as needed
  },
];

export default function SpeakersSection() {
  return (
    <section className={styles.speakersSection}>
      <h2 className={styles.speakersHeadline}>Our 2025 Keynote Speakers</h2>
      <div className={styles.speakersGrid}>
        {speakers.map((speaker) => (
          <div key={speaker.name} className={styles.speakerCard}>
            {/* Swap out for your chosen 1:1 crop images */}
            <img
              src={speaker.image}
              alt={speaker.name}
              className={styles.speakerImage}
            />
            <div className={styles.speakerName}>{speaker.name}</div>
            <div className={styles.speakerRole}>{speaker.role}</div>
            <div className={styles.speakerCompany}>{speaker.company}</div>
            <div className={styles.speakerDate}>{speaker.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
