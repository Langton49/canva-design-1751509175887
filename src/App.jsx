import React from "react";
import HeroSection from "./components/HeroSection";
import SpeakersSection from "./components/SpeakersSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: "#174932" }}>
      <HeroSection />
      <SpeakersSection />
      <ContactSection />
    </main>
  );
}
