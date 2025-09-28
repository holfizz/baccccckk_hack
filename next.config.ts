import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Конфигурация изображений
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'moscowchanges.ru',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Полностью отключаем все дебаг функции в development
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  reactStrictMode: false,
  
  // Отключаем все ошибки и предупреждения
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Отключаем webpack warnings
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.stats = 'none';
      config.infrastructureLogging = {
        level: 'none',
      };
      
      // Полностью отключаем все ошибки и предупреждения
      config.ignoreWarnings = [() => true];
      
      // Отключаем overlay с ошибками
      if (!isServer) {
        config.resolve.alias = {
          ...config.resolve.alias,
          'react-dev-utils/webpackHotDevClient': false,
        };
      }
    }
    return config;
  },
};

export default nextConfig;
