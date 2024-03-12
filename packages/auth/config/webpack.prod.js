const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common.js");
const jsonPackage = require("../package.json");
const { merge } = require("webpack-merge");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap.js",
      },
      shared: jsonPackage.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
