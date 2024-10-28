/** @type {import('next').NextConfig} */
const nextConfig = {
  //skipTrailingSlashRedirect: true,
  //trailingSlash: true,
  //output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        // pathname: "/images/",
      },
    ],
    //unoptimized: true,
  },
};

export default nextConfig;
