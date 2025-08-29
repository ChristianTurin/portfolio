// components/Header.tsx
"use client";

import React from 'react';
import { Play, Github, Linkedin, Menu, X } from 'lucide-react';
import AnimatedDiv from './AnimatedDiv';
import { navigationItems } from '../data/portfolio';

interface HeaderProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  activeSection?: string;
}

const Header: React.FC<HeaderProps> = ({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  activeSection
}) => {
  const handleMobileNavClick = (section: string) => {
    scrollToSection(section.toLowerCase());
    setMobileMenuOpen(false);
  };

  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '+51947478972';
    const message = 'Contactame';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <AnimatedDiv direction="right" delay={1}>
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 sm:space-x-4 hover:opacity-80 transition-opacity duration-200"
            aria-label="Go to home section"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
              <Play className="w-4 h-4 text-black ml-1" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold">Christian Turin</h1>
          </button>
        </AnimatedDiv>
        
        {/* Desktop Navigation */}
        <AnimatedDiv direction="down" delay={2} className="hidden md:block">
          <nav className="flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className={`relative transition-colors duration-200 group ${
                  activeSection === item.toLowerCase() 
                    ? 'text-green-400' 
                    : 'hover:text-green-400'
                }`}
                aria-label={`Go to ${item} section`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 ${
                  activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </nav>
        </AnimatedDiv>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        {/* Desktop Social Links & CTA */}
        <AnimatedDiv direction="left" delay={3} className="hidden md:flex">
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/ChristianTurin" 
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub Profile"
              aria-label="Visit GitHub Profile"
            >
              <Github className="w-5 h-5 hover:text-green-400 cursor-pointer transition-all duration-200 hover:scale-110" />
            </a>
            <a 
              href="https://www.linkedin.com/in/christian-turin-49186b2b5/" 
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              aria-label="Visit LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 hover:text-green-400 cursor-pointer transition-all duration-200 hover:scale-110" />
            </a>
            <button 
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 ml-4"
              aria-label="Contact via WhatsApp"
            >
              Contactame
            </button>
          </div>
        </AnimatedDiv>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'
      } overflow-hidden`}>
        <nav className="px-4 py-4 space-y-4">
          {navigationItems.map((item) => (
            <button 
              key={item}
              onClick={() => handleMobileNavClick(item)} 
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                activeSection === item.toLowerCase()
                  ? 'text-green-400 bg-gray-800/50'
                  : 'hover:text-green-400 hover:bg-gray-800/50'
              }`}
              aria-label={`Go to ${item} section`}
            >
              {item}
            </button>
          ))}
          
          {/* Mobile Social Links */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-800 mt-4 pt-4">
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/ChristianTurin" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="Visit GitHub Profile"
              >
                <Github className="w-5 h-5 hover:text-green-400 cursor-pointer transition-all duration-200" />
              </a>
              <a 
                href="https://www.linkedin.com/in/christian-turin-49186b2b5/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="Visit LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 hover:text-green-400 cursor-pointer transition-all duration-200" />
              </a>
            </div>
            <button 
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-black px-3 py-1.5 rounded-lg font-medium transition-colors duration-200 text-sm"
              aria-label="Contact via WhatsApp"
            >
              Contactame
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;