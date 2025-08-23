// components/AnimatedDiv.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { AnimatedDivProps } from '../types';

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up' 
}) => {
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

export default AnimatedDiv;