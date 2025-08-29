// data/portfolio.ts
import { Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Portafolio Web",
    artist: "Full Stack Development",
    duration: "React, Node.js, Next.js, Git, GitHub",
    image: "/images/projects/portfolio.png", // ← Cambio aquí
    description: "Portafolio personal profesional",
    github: "#",
    demo: "https://kaiserdevs.com/"
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
  { name: "React", level: 65 },
  { name: "JavaScript", level: 55 },
  { name: "TypeScript", level: 55 },
  { name: "Node.js", level: 40 },
  { name: "Python", level: 45 },
  { name: "Workbench Mysql", level: 70 },
  { name: "PHP", level: 70 },
  { name: "Java", level: 50 },
  { name: "Git", level: 75 },
  { name: "Flutter", level: 60 },
  { name: "Kotlin", level: 50 },
  { name: "Laravel", level: 30 },
  { name: "Electron", level: 65 },
  { name: "Wordpress", level: 60 },
  { name: "Mysql", level: 60 },
  { name: "Firebase", level: 60 },
];

export const codeSnippets = [
  'const', 'function', 'return', 'import', 'export', 'async', 'await',
  '() =>', '{}', '[]', 'useState', 'useEffect', 'React', 'TypeScript',
  'interface', 'type', 'string', 'number', 'boolean', 'void', 'null',
  'true', 'false', 'if', 'else', 'for', 'while', 'class', 'extends',
  'console.log', 'fetch', 'Promise', 'then', 'catch', 'try', 'finally'
];

export const navigationItems = ['Inicio', 'Proyectos', 'Habilidades', 'Contacto'];