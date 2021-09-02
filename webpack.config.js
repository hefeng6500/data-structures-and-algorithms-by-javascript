const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "algorithms.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@code": path.resolve(__dirname, "src/code"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
