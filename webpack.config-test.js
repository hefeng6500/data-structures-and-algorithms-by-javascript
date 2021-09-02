const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const baseWebpackConfig = require("./webpack.config.js");

module.exports = merge(baseWebpackConfig, {
  target: 'node',
  externals: [nodeExternals()],
  devtool: "inline-cheap-module-source-map"
});