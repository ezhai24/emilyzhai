/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env ? process.env.ANALYZE === "true" : false,
});

const nextConfig = withBundleAnalyzer({});

module.exports = nextConfig;
