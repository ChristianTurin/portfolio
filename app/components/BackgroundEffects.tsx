// components/BackgroundEffects.tsx
"use client";

import React from 'react';
import { MousePosition, CodeParticle } from '../types';

interface BackgroundEffectsProps {
  mousePosition: MousePosition;
  codeParticles: CodeParticle[];
  isClient: boolean;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({
  mousePosition,
  codeParticles,
  isClient
}) => {
  return (
    <>
      {/* Gradient Background */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none transition-all duration-500 ease-out"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 185, 84, 0.15), transparent 70%)`
        }}
      />
      
      {/* Code Particles Background */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {codeParticles.map((particle) => (
            <div
              key={particle.id}
              className="absolute text-green-400/20 font-mono text-xs select-none"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                opacity: particle.opacity,
                transform: `translateZ(0)`, // GPU acceleration
              }}
            >
              {particle.code}
            </div>
          ))}
        </div>
      )}
      
      {/* Floating particles */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BackgroundEffects;