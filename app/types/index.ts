// types/index.ts
export interface Project {
  id: number;
  title: string;
  artist: string;
  duration: string;
  image: string;
  description: string;
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface CodeParticle {
  id: number;
  x: number;
  y: number;
  code: string;
  speed: number;
  opacity: number;
}

export interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}