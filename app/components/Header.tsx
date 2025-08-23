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
}

const Header: React.FC<HeaderProps> = ({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection
}) => {
  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <AnimatedDiv direction="right" delay={1}>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
              <Play className="w-4 h-4 text-black ml-1" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold">Christian Turin</h1>
          </div>
        </AnimatedDiv>
        
        {/* Desktop Navigation */}
        <AnimatedDiv direction="down" delay={2} className="hidden md:block">
          <nav className="flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="relative hover:text-green-400 transition-colors duration-200 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
        </AnimatedDiv>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        {/* Desktop Social Links */}
        <AnimatedDiv direction="left" delay={3} className="hidden md:flex">
          <div className="flex items-center space-x-4">
            <Github className="w-5 h-5 hover:text-green-400 cursor-pointer transition-all duration-200 hover:scale-110" />
            <Linkedin className="w-5 h-5 hover:text-green-400 cursor-pointer transition-all duration-200 hover:scale-110" />
          </div>
        </AnimatedDiv>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <nav className="px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="block w-full text-left px-4 py-2 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
              >
                {item}
              </button>
            ))}
            <div className="flex items-center space-x-4 px-4 py-2">
              <Github className="w-5 h-5 hover:text-green-400 cursor-pointer transition-all duration-200" />
              <Linkedin className="w-5 h-5 hover:text-green-400 cursor-pointer transition-all duration-200" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;