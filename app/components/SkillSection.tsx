// components/SkillsSection.tsx
"use client";

import React from 'react';
import AnimatedDiv from './AnimatedDiv';
import { Skill } from '../types';
import { skills } from '../data/portfolio';

const SkillsSection: React.FC = () => {
  return (
    <section id="habilidades" className="py-12 sm:py-20 bg-gray-900/30">
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
  );
};

export default SkillsSection;