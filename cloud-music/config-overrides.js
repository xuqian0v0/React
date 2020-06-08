const { 
    override,
    fixBabelImports
} = require('customize-cra');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css"
    }),

    (config) => {
        config.plugins.push(
            new BundleAnalyzerPlugin()
        )

        return config;
    }
)