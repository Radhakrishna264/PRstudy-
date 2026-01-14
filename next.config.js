---

# 3️⃣ `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
