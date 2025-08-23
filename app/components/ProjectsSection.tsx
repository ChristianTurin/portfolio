// components/ProjectsSection.tsx
"use client";

import React from 'react';
import { Play, Pause, Github, ExternalLink } from 'lucide-react';
import AnimatedDiv from './AnimatedDiv';
import { Project } from '../types';
import { projects } from '../data/portfolio';

interface ProjectsSectionProps {
  isPlaying: boolean;
  currentTrack: number;
  handlePlayPause: (index: number) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  isPlaying,
  currentTrack,
  handlePlayPause
}) => {
  return (
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
  );
};

export default ProjectsSection;