/** @type {import('next').NextConfig} */

// dev와 production의 라우팅 주소 차이
// process.env.PATH =
//   process.env.NODE_ENV === "production"
//     ? "https://FriedBob.github.io/sanity-nextjs-blog"
//     : "";

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
