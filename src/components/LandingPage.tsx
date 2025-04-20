"use client";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Header from "./sections/Header";
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section id="inicio">
        <HeroSection />
      </section>
      <section id="proyectos">
        <ProjectsSection />
      </section>
      <section id="blog">
        <AboutSection />
      </section>
      <section id="contacto">
        <ContactSection />
      </section>
    </div>
  );
}
