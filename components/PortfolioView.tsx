"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FallingStars from "@/components/ui/FallingStars";
import SkyClouds from "@/components/ui/SkyClouds";

export default function PortfolioView() {
  const { content } = useLanguage();

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-clip bg-zinc-50 font-sans text-zinc-900 antialiased selection:bg-lime-400 selection:text-black transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Animated backgrounds: clouds in light mode, falling stars in dark mode */}
      <SkyClouds />
      <FallingStars />

      <Navbar
        brand={content.siteConfig.brand}
        links={content.siteConfig.navLinks}
        ctaButton={content.siteConfig.ctaButton}
      />
      <main className="relative z-10 flex-1">
        <Hero data={content.hero} />
        <About data={content.about} />
        <Skills
          badge={content.skills.badge}
          heading={content.skills.heading}
          description={content.skills.description}
          categories={content.skills.categories}
        />
        <Projects
          badge={content.projects.badge}
          heading={content.projects.heading}
          description={content.projects.description}
          exploreGithub={content.projects.exploreGithub}
          projects={content.projects.items}
        />
        <Experience
          badge={content.experience.badge}
          heading={content.experience.heading}
          description={content.experience.description}
          experiences={content.experience.items}
        />
        <Contact data={content.contact} />
      </main>
      <Footer
        brand={content.siteConfig.brand}
        links={content.siteConfig.navLinks}
        footerData={content.footer}
      />
    </div>
  );
}
