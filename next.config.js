/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
      domains: ['localhost:300'], // Add your domain or hostnames here
    },
  }