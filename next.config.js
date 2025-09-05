/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    serverComponentsExternalPackages: ['nodemailer']
  }
}

module.exports = nextConfig