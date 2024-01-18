/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thecocktaildb.com",
        port: "",
        pathname: "/images/**",
      },
      //  alternative method
      //  {
      //    protocol: "https",
      //    hostname: "**",
      //    port: "",
      //  pathname: "/images/**",
      //  },
    ],
  },
};

module.exports = nextConfig;
