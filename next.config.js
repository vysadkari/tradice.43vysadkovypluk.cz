/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },

      "/historie": { page: "/historie" },
      "/historie/index": { page: "/historie" },

      "/zahranicni-operace": { page: "/zahranicni-operace" },
      "/zahranicni-operace/index": { page: "/zahranicni-operace" },

      "/velitele": { page: "/velitele" },
      "/velitele/index": { page: "/velitele" },

      "/uniforma": { page: "/uniforma" },
      "/uniforma/index": { page: "/uniforma" },

      "/charon": { page: "/charon" },
      "/charon/index": { page: "/charon" },
    };
  },
};

module.exports = nextConfig;
