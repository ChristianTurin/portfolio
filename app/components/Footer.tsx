// components/Footer.tsx
"use client";

import React from 'react';
import AnimatedDiv from './AnimatedDiv';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 sm:py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-gray-400">
        <AnimatedDiv direction="fade" delay={2}>
          <p className="text-sm sm:text-base">&copy; 2025 Christian Turin. Todos los derechos reservados.</p>
        </AnimatedDiv>
      </div>
    </footer>
  );
};

export default Footer;