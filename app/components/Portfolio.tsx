// Portfolio.tsx - Componente Principal
"use client";

import React from 'react';

import BackgroundEffects from './BackgroundEffects';
import WhatsAppButton from './WhatsAppButton';
import Header from './Header';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { usePortfolio } from '../hooks/usePortfolio';

// Components


const Portfolio: React.FC = () => {
  const {
    isPlaying,
    currentTrack,
    mousePosition,
    isScrolled,
    mobileMenuOpen,
    codeParticles,
    isClient,
    setMobileMenuOpen,
    handlePlayPause,
    scrollToSection
  } = usePortfolio();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <BackgroundEffects 
        mousePosition={mousePosition}
        codeParticles={codeParticles}
        isClient={isClient}
      />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
      
      {/* Header */}
      <Header 
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* Projects Section */}
      <ProjectsSection 
        isPlaying={isPlaying}
        currentTrack={currentTrack}
        handlePlayPause={handlePlayPause}
      />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;