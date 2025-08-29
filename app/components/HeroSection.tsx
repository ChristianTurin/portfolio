// components/HeroSection.tsx
"use client";

import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import Image from 'next/image';
import AnimatedDiv from './AnimatedDiv';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="inicio" className="pt-20 min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 via-black to-black" />

      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <AnimatedDiv direction="up" delay={4}>
          <div className="mb-6 sm:mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-1 hover:scale-105 transition-transform duration-300 shadow-lg shadow-green-500/25">
              <div className="w-full h-full rounded-full bg-black overflow-hidden flex items-center justify-center relative">
                {/* Foto de perfil */}
                <Image
                  src="/images/profile/christian-turin.png"
                  alt="Christian Turin - Full Stack Developer"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-full"
                  priority
                  onError={(e) => {
                    // Fallback si la imagen no carga
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback - se muestra si la imagen falla */}
                <span 
                  className="text-2xl sm:text-3xl font-bold text-green-400 absolute inset-0 flex items-center justify-center"
                  style={{ display: 'none' }}
                  onLoad={(e) => {
                    // Si la imagen de arriba falla, muestra esto
                    const img = e.currentTarget.previousElementSibling as HTMLImageElement;
                    if (img && img.style.display === 'none') {
                      e.currentTarget.style.display = 'flex';
                    }
                  }}
                >
                  CT
                </span>
              </div>
            </div>
          </div>
        </AnimatedDiv>
        
        <AnimatedDiv direction="up" delay={6}>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent animate-pulse leading-tight">
            Full Stack Developer
          </h1>
        </AnimatedDiv>
        
        <AnimatedDiv direction="up" delay={8}>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Creando experiencias digitales que conectan, inspiran y transforman ideas en realidad
          </p>
        </AnimatedDiv>
        
        <AnimatedDiv direction="up" delay={10}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="bg-green-500 hover:bg-green-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 hover:shadow-2xl"
            >
              Ver Mi Trabajo
            </button>
            <a
              href="/documents/Christian_Turin_CV.pdf"
              download="Christian_Turin_Full_Stack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>Descargar CV</span>
            </a>
          </div>
        </AnimatedDiv>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
      </div>
    </section>
  );
};

export default HeroSection;