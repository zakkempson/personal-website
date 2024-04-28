/** @type {import('next').NextConfig} */
const path = require("path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const nextConfig = {
  images: {
    domains: [],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // config.plugins.push(
    //   new CopyWebpackPlugin({
    //     patterns: [
    //       {
    //         from: path.resolve(
    //           __dirname,
    //           "node_modules/@mediapipe/tasks-vision/wasm"
    //         ),
    //         to: path.resolve(__dirname, "public/wasm"),
    //       },
    //     ],
    //   })
    // );

    return config;
  },
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
