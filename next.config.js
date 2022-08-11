/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://FriedBob.github.io/sanity-nextjs-blog"
      : "",
  reactStrictMode: false,
  swcMinify: true,
  env: {
    SANITY_PROJECT_ID: "fty5c0wl",
  },
};

module.exports = nextConfig;
