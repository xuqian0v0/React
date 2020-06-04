/* config-overrides.js */
const {
  override,
  fixBabelImports,
  addLessLoader
} = require("customize-cra");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// override
module.exports = {
  webpack: override(
    // customize-cra plugins here
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    addLessLoader(),
    (config) => {
      config.plugins.push(
        new BundleAnalyzerPlugin()
      )
      return config;
    },
  ),

  jest: config => {
    return config;
  },

  devServer: configFunction => (proxy, allowedHost) => {
    const config = configFunction(proxy, allowedHost);
    return config;
  },

  paths: (paths, env) => {
    return paths;
  }
};