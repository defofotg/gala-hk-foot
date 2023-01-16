const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

var path = require("path");
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  // your webpack config is here
  plugins: [new BundleAnalyzerPlugin()],
};

module.exports = {
  entry: {},
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
  plugins: [new CompressionPlugin()],
};
