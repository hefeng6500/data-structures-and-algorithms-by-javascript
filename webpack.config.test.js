const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const baseWebpackConfig = require("./webpack.config.js");

module.exports = merge(baseWebpackConfig, {
  externals: [nodeExternals()],
});
