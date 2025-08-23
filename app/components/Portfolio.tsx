"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Play, Pause, MessageCircle, Menu, X, Download } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  artist: string;
  duration: string;
  image: string;
  description: string;
  github: string;
  demo: string;
}

interface Skill {
  name: string;
  level: number;
}

interface MousePosition {
  x: number;
  y: number;
}

interface CodeParticle {
  id: number;
  x: number;
  y: number;
  code: string;
  speed: number;
  opacity: number;
}

// Simples componentes de animación
const AnimatedDiv: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}> = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 100);
    
    return () => clearTimeout(timer);
  }, [delay]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(30px)';
        case 'down': return 'translateY(-30px)';
        case 'left': return 'translateX(30px)';
        case 'right': return 'translateX(-30px)';
        case 'fade': return 'translateY(0px)';
        default: return 'translateY(30px)';
      }
    }
    return 'translateY(0px)';
  };

  return (
    <div
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
      }}
    >
      {children}
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [codeParticles, setCodeParticles] = useState<CodeParticle[]>([]);
  const [isClient, setIsClient] = useState<boolean>(false);

  // Códigos para las partículas
  const codeSnippets = [
    'const', 'function', 'return', 'import', 'export', 'async', 'await',
    '() =>', '{}', '[]', 'useState', 'useEffect', 'React', 'TypeScript',
    'interface', 'type', 'string', 'number', 'boolean', 'void', 'null',
    'true', 'false', 'if', 'else', 'for', 'while', 'class', 'extends',
    'console.log', 'fetch', 'Promise', 'then', 'catch', 'try', 'finally'
  ];

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

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      artist: "Full Stack Development",
      duration: "React, Node.js, MongoDB",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop",
      description: "Plataforma completa de comercio electrónico con sistema de pagos",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      artist: "Frontend Development",
      duration: "Vue.js, Vuex, Firebase",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=300&fit=crop",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      artist: "API Integration",
      duration: "React, Chart.js, OpenWeather",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=300&h=300&fit=crop",
      description: "Dashboard del clima con visualización de datos y pronósticos",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      artist: "Data Visualization",
      duration: "D3.js, Python, Django",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop",
      description: "Herramienta de análisis y visualización de métricas sociales",
      github: "#",
      demo: "#"
    }
  ];

  const skills: Skill[] = [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "MongoDB", level: 70 }
  ];

  const handlePlayPause = (index: number): void => {
    setCurrentTrack(index);
    setIsPlaying(!isPlaying);
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/51947478972?text=Hola!%20Vi%20tu%20portfolio%20y%20me%20gustaría%20conversar"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      
      {/* Header */}
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
              {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
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
              {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
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

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 via-black to-black" />
        
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <AnimatedDiv direction="up" delay={4}>
            <div className="mb-6 sm:mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-1 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-green-400">CT</span>
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
                onClick={() => scrollToSection('projects')}
                className="bg-green-500 hover:bg-green-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 hover:shadow-2xl"
              >
                Ver Mi Trabajo
              </button>
              <a
                href="/cv.pdf" // Pon aquí la ruta real de tu CV
                download="Tu_Nombre_CV.pdf"
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

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedDiv direction="up" delay={2}>
            <div className="mb-8 sm:mb-12 text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Proyectos Destacados</h2>
              <p className="text-gray-400 text-base sm:text-lg">Una selección de mis trabajos más recientes</p>
            </div>
          </AnimatedDiv>
          
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {projects.map((project: Project, index: number) => (
              <AnimatedDiv key={project.id} direction="up" delay={4 + index}>
                <div className="group bg-gray-900/50 hover:bg-gray-800/50 rounded-lg p-4 sm:p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 border border-gray-800 hover:border-green-500/30 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <button
                        onClick={() => handlePlayPause(index)}
                        className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-green-400 hover:scale-125 transform rotate-0 hover:rotate-12"
                        aria-label={`${isPlaying && currentTrack === index ? 'Pause' : 'Play'} ${project.title}`}
                      >
                        {isPlaying && currentTrack === index ? 
                          <Pause className="w-3 h-3 sm:w-4 sm:h-4 text-black" /> : 
                          <Play className="w-3 h-3 sm:w-4 sm:h-4 text-black ml-0.5" />
                        }
                      </button>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold mb-1 group-hover:text-green-400 transition-colors duration-300 truncate">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mb-2">{project.artist}</p>
                      <p className="text-gray-500 text-xs mb-2 sm:mb-3">{project.duration}</p>
                      <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">{project.description}</p>
                      
                      <div className="flex items-center space-x-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <a
                          href={project.github}
                          className="flex items-center space-x-1 text-gray-400 hover:text-green-400 transition-colors text-xs sm:text-sm hover:scale-105 transform duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.demo}
                          className="flex items-center space-x-1 text-gray-400 hover:text-green-400 transition-colors text-xs sm:text-sm hover:scale-105 transform duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedDiv direction="up" delay={2}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center">Habilidades</h2>
          </AnimatedDiv>
          
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
            {skills.map((skill: Skill, index: number) => (
              <AnimatedDiv key={skill.name} direction="right" delay={4 + index}>
                <div className="space-y-3 group">
                  <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-medium group-hover:text-green-400 transition-colors duration-300">{skill.name}</span>
                    <span className="text-green-400 font-semibold text-sm sm:text-base">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-2000 ease-out transform origin-left hover:scale-x-105"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-gray-400">
          <AnimatedDiv direction="fade" delay={2}>
            <p className="text-sm sm:text-base">&copy; 2025 Tu Nombre. Todos los derechos reservados.</p>
          </AnimatedDiv>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;