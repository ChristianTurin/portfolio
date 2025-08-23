// data/portfolio.ts
import { Project, Skill } from '../types';

export const projects: Project[] = [
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

export const skills: Skill[] = [
  { name: "React", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "MongoDB", level: 70 }
];

export const codeSnippets = [
  'const', 'function', 'return', 'import', 'export', 'async', 'await',
  '() =>', '{}', '[]', 'useState', 'useEffect', 'React', 'TypeScript',
  'interface', 'type', 'string', 'number', 'boolean', 'void', 'null',
  'true', 'false', 'if', 'else', 'for', 'while', 'class', 'extends',
  'console.log', 'fetch', 'Promise', 'then', 'catch', 'try', 'finally'
];

export const navigationItems = ['Inicio', 'Proyectos', 'Habilidades', 'Contacto'];