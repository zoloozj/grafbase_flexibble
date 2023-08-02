/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'platform-lookaside.fbsbx.com', 'res.cloudinary.com']
    },
    experimental: {
        serverComponentsExternalPackages: ['cloudinary', 'graphql-request']
    }
}

module.exports = nextConfig
