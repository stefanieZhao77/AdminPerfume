const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname);

// Ensure TypeScript files are resolved
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'ts',
  'tsx',
];

module.exports = config;
