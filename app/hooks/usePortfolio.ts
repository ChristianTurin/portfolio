// hooks/usePortfolio.ts
import { useState, useEffect } from 'react';
import { MousePosition, CodeParticle } from '../types';
import { codeSnippets } from '../data/portfolio';

export const usePortfolio = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [codeParticles, setCodeParticles] = useState<CodeParticle[]>([]);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    // Marcar que estamos en el cliente
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Generar partículas de código solo en el cliente
    const generateCodeParticles = () => {
      const particles: CodeParticle[] = [];
      for (let i = 0; i < 25; i++) {
        particles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          speed: 0.2 + Math.random() * 0.5,
          opacity: 0.1 + Math.random() * 0.2
        });
      }
      setCodeParticles(particles);
    };

    // Animar partículas de código
    const animateParticles = () => {
      setCodeParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y - particle.speed,
        x: particle.x + Math.sin(particle.y * 0.01) * 0.5,
        // Reset particle cuando sale de pantalla
        ...(particle.y < -50 && {
          y: window.innerHeight + 50,
          x: Math.random() * window.innerWidth,
          code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        })
      })));
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Solo generar partículas si estamos en el cliente
    if (typeof window !== 'undefined') {
      generateCodeParticles();
      const particleInterval = setInterval(animateParticles, 50);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        clearInterval(particleInterval);
      };
    } else {
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handlePlayPause = (index: number): void => {
    setCurrentTrack(index);
    setIsPlaying(!isPlaying);
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return {
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
  };
};