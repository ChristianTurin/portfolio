// components/ContactSection.tsx
"use client";

import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle, Calendar, Clock, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser';
import AnimatedDiv from './AnimatedDiv';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const budgetOptions = [
    '< $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ];

  const timelineOptions = [
    'ASAP',
    '1-2 semanas',
    '1 mes',
    '2-3 meses',
    '3+ meses'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Enviando mensaje...' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        budget: formData.budget || 'No especificado',
        timeline: formData.timeline || 'No especificado',
        to_email: 'iiuknown56ii@gmail.com'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',     // Reemplaza con tu Service ID
        'YOUR_TEMPLATE_ID',    // Reemplaza con tu Template ID  
        templateParams,
        'YOUR_PUBLIC_KEY'      // Reemplaza con tu Public Key
      );

      setFormStatus({ 
        type: 'success', 
        message: '¡Mensaje enviado correctamente! Te responderé dentro de 24 horas.' 
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setFormStatus({ 
        type: 'error', 
        message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.' 
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'iiuknown56ii@gmail.com',
      href: 'mailto:iiuknown56ii@gmail.com',
      description: 'Respuesta en 24h'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/christian-turin',
      href: 'https://linkedin.com/in/christian-turin-49186b2b5',
      description: 'Conectemos profesionalmente'
    },
    {
      icon: Calendar,
      label: 'Disponibilidad',
      value: 'Lun - Vie, 9AM - 6PM',
      href: '#',
      description: 'Zona horaria: GMT-5'
    },
    {
      icon: Globe,
      label: 'Ubicación',
      value: 'Huancayo, Perú',
      href: '#',
      description: 'Trabajo remoto disponible'
    }
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo toma un proyecto?',
      answer: 'Depende de la complejidad, pero típicamente entre 2-8 semanas.'
    },
    {
      question: '¿Trabajas con clientes internacionales?',
      answer: 'Sí, trabajo con clientes de todo el mundo de forma remota.'
    },
    {
      question: '¿Ofreces mantenimiento post-proyecto?',
      answer: 'Sí, ofrezco planes de mantenimiento y soporte continuo.'
    }
  ];

  return (
    <section id="contacto" className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedDiv direction="up" delay={2}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Transformemos tu idea en realidad. Cuéntame sobre tu proyecto y creemos algo increíble juntos.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-green-400" />
                <span>Respuesta rápida</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span>Sin compromiso</span>
              </div>
            </div>
          </div>
        </AnimatedDiv>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <AnimatedDiv direction="up" delay={4} className="lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                Cuéntame sobre tu proyecto
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Tipo de proyecto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecciona un tipo de proyecto</option>
                    <option value="web-app">Aplicación Web</option>
                    <option value="website">Sitio Web Corporativo</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="mobile-app">App Móvil</option>
                    <option value="api-backend">API/Backend</option>
                    <option value="consultation">Consultoría</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Presupuesto aproximado
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Seleccionar presupuesto</option>
                      {budgetOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                      Timeline deseado
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Seleccionar timeline</option>
                      {timelineOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Cuéntame sobre tu proyecto, objetivos, funcionalidades necesarias, etc."
                  />
                </div>

                {/* Status Message */}
                {formStatus.type !== 'idle' && (
                  <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                    formStatus.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                      : formStatus.type === 'error'
                      ? 'bg-red-500/10 border border-red-500/20 text-red-400'
                      : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                  }`}>
                    {formStatus.type === 'success' && <CheckCircle className="w-5 h-5" />}
                    {formStatus.type === 'error' && <AlertCircle className="w-5 h-5" />}
                    {formStatus.type === 'loading' && (
                      <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                    )}
                    <span>{formStatus.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className="w-full bg-green-500 hover:bg-green-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:transform hover:scale-[1.02] disabled:hover:scale-100"
                >
                  {formStatus.type === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedDiv>

          {/* Contact Info & Additional */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <AnimatedDiv direction="up" delay={6}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                    >
                      <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-200">
                        <info.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{info.label}</h4>
                        <p className="text-gray-300 text-sm">{info.value}</p>
                        <p className="text-gray-500 text-xs">{info.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedDiv>

            {/* FAQ */}
            <AnimatedDiv direction="up" delay={8}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-6">Preguntas frecuentes</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-800 last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-medium text-white mb-2">{faq.question}</h4>
                      <p className="text-gray-300 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedDiv>

  
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;