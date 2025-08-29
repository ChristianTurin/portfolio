// components/WhatsAppButton.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Mostrar la burbuja después de 2 segundos
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
      {/* Burbuja de chat */}
      <div
        className={`bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-lg border border-gray-200 whitespace-nowrap relative transition-all duration-500 transform ${
          showBubble 
            ? 'opacity-100 translate-x-0 scale-100' 
            : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
        }`}
      >
        <p className="text-sm font-medium">¡Contáctame!</p>
        <p className="text-xs text-gray-600">Hablemos de tu proyecto</p>
        
        {/* Flecha que apunta al botón */}
        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
          <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-0 h-0 border-l-6 border-l-gray-200 border-t-3 border-t-transparent border-b-3 border-b-transparent"></div>
        </div>
      </div>

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/51947478972?text=Hola!%20Vi%20tu%20portfolio%20y%20me%20gustaría%20conversar"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 animate-bounce"
        style={{ animationDuration: '2s' }}
        onMouseEnter={() => setShowBubble(true)}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default WhatsAppButton;