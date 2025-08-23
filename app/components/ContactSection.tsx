// components/ContactSection.tsx
"use client";

import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import AnimatedDiv from './AnimatedDiv';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedDiv direction="up" delay={2}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Conectemos</h2>
        </AnimatedDiv>
        
        <AnimatedDiv direction="up" delay={4}>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y colaborar juntos
          </p>
        </AnimatedDiv>
        
        <AnimatedDiv direction="up" delay={6}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:tu@email.com"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>Enviar Email</span>
            </a>
            <a
              href="https://linkedin.com/in/tu-perfil"
              className="flex items-center space-x-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default ContactSection;