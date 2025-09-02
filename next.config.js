// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración básica para cPanel
  poweredByHeader: false,
  generateEtags: false,
  
  // Si tienes problemas con imágenes
  images: {
    domains: ['localhost', 'kaiserdevs.com'],
  },
  
  // Para mejor compatibilidad
  experimental: {
    serverComponentsExternalPackages: ['nodemailer']
  }
}

module.exports = nextConfig