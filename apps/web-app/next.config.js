/** @type {import('next').NextConfig} */

/* eslint-disable */
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const pluginAntdLess = withAntdLess({}); // 支持antd-less
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
};

module.exports = withPlugins([[pluginAntdLess]], {
  webpack(config) {
    return config;
  },
  ...nextConfig,
});
