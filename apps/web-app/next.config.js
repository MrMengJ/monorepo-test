/** @type {import('next').NextConfig} */

/* eslint-disable */
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const pluginAntdLess = withAntdLess({}); // 支持antd-less
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  experimental: {
    externalDir: true, // 允许从next.js项目之外引用ts/tsx，see https://github.com/vercel/next.js/pull/22867#issue-824441539
  },
};

module.exports = withPlugins([[pluginAntdLess]], {
  webpack(config) {
    return config;
  },
  ...nextConfig,
});
