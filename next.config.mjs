/** @type {import('next').NextConfig} */
import Icons from "unplugin-icons/webpack";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.plugins.push(
      Icons({
        compiler: "jsx",
        jsx: "react",
      })
    );

    return config;
  },
};

export default nextConfig;
